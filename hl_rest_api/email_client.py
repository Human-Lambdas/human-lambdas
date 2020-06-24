from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail as SGMail
from sendgrid.helpers.mail import Email, Personalization
from django.conf import settings


class SendGrid(SGMail):
    api_key = None
    client = None
    default_from = None

    def __init__(self, app=None, **opts):
        self.init_app()
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

    def init_app(self):
        self.api_key = settings.SENDGRID_API_KEY
        self.default_from = ("noreply@humanlambdas.com", "Human Lambdas")
        self.client = SendGridAPIClient(self.api_key).client

    def send_email(self, to_email, subject, template_id, template_data, from_email=None, *args, **kwargs):  # noqa
        if settings.DEBUG:
            return "Debug mode does not send emails"
        if not any([from_email, self.default_from]):
            raise ValueError("Missing from email and no default.")
        self.template_id = template_id
        self.from_email = self.default_from
        self.subject = subject

        personalization = Personalization()

        if type(to_email) is list:
            for email in self._extract_emails(to_email):
                personalization.add_to(email)
        elif type(to_email) is Email:
            personalization.add_to(to_email)
        elif type(to_email) is str:
            personalization.add_to(Email(to_email))

        personalization.dynamic_template_data = template_data
        self.add_personalization(personalization)

        return self.client.mail.send.post(request_body=self.get())

    def _extract_emails(self, emails):
        if type(emails[0]) is Email:
            for email in emails:
                yield email
        elif type(emails[0]) is dict:
            for email in emails:
                yield Email(email['email'])
        else:
            for email in emails:
                yield Email(email)

