from rest_framework.test import APITestCase

from external.task_formats import process_output_value


class TestTaskFormat(APITestCase):
    def test_process_data_value(self):
        data = [
            ({"value": "foo"}, "foo"),
            ({"value": ["foo", "bar"]}, ["foo", "bar"]),
            (
                {
                    "value": [
                        {"id": "foo", "value": "foo"},
                        {"id": "bar", "value": "bar"},
                    ]
                },
                ["foo", "bar"],
            ),
        ]
        for raw_data, expected in data:
            self.assertEqual(process_output_value(raw_data), expected)
