import logging

from django.conf import settings
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Asm, Email, GroupId
from sendgrid.helpers.mail import Mail as SGMail
from sendgrid.helpers.mail import Personalization

logger = logging.getLogger(__name__)


def get_personalization(email, template_data):
    personalization = Personalization()
    personalization.add_to(email)
    personalization.dynamic_template_data = template_data
    return personalization


class SendGrid(SGMail):
    api_key = None
    client = None
    default_from = None

    def __init__(self, app=None, **opts):
        self.api_key = settings.SENDGRID_API_KEY
        self.default_from = ("noreply@humanlambdas.com", "Human Lambdas")
        self.client = SendGridAPIClient(self.api_key).client
        self.reset_data()

    def reset_data(self):
        super(SGMail, self).__init__()
        self.from_email = None
        self.subject = None
        self._personalizations = None
        self._contents = None
        self._attachments = None
        self._template_id = None
        self._sections = None
        self._headers = None
        self._categories = None
        self._custom_args = None
        self._send_at = None
        self._batch_id = None
        self._asm = None
        self._ip_pool_name = None
        self._mail_settings = None
        self._tracking_settings = None
        self._reply_to = None

    def send_email(
        self,
        to_email,
        template_id,
        template_data,
        group_id,
        from_email=None,
        *args,
        **kwargs,
    ):  # noqa
        if settings.DEBUG or not to_email:
            return logger.info(
                f"Will not send any email but here is the template data: {template_data}"
            )
        if not any([from_email, self.default_from]):
            raise ValueError("Missing from email and no default.")
        self.template_id = template_id
        self.from_email = self.default_from
        if type(to_email) is list:
            if isinstance(template_data, list):
                for email, itemplate in zip(
                    self._extract_emails(to_email), template_data
                ):
                    self.add_personalization(get_personalization(email, itemplate))
            else:
                for email in self._extract_emails(to_email):
                    self.add_personalization(get_personalization(email, template_data))
        elif type(to_email) is Email:
            self.add_personalization(get_personalization(to_email, template_data))
        elif type(to_email) is str:
            self.add_personalization(
                get_personalization(Email(to_email), template_data)
            )

        self.asm = Asm(GroupId(group_id))
        request_body = self.get()
        logger.info("Sending email with request body: %s", request_body)
        sent = self.client.mail.send.post(request_body=request_body)
        self.reset_data()
        return sent

    def _extract_emails(self, emails):
        if type(emails[0]) is Email:
            for email in emails:
                yield email
        elif type(emails[0]) is dict:
            for email in emails:
                yield Email(email["email"])
        else:
            for email in emails:
                yield Email(email)
