from rest_framework.test import APITestCase

from workflow_handler.utils import process_output_value


class TestUtils(APITestCase):
    def test_process_output_value(self):
        data = [
            ("foo", "foo"),
            (["foo", "bar"], ["foo", "bar"]),
            (
                [{"id": "foo", "value": "foo"}, {"id": "bar", "value": "bar"}],
                ["foo", "bar"],
            ),
        ]
        for raw_data, expected in data:
            self.assertEqual(process_output_value(raw_data), expected)
