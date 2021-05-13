import factory


class BlockFactory(factory.Factory):
    class Meta:
        abstract = True

    _id = "6c9d6441-5be5-4a15-814c-1c9413e8dd22"
    id = "email_id"
    layout = factory.Dict(
        {
            "h": 2,
            "i": "6c9d6441-5be5-4a15-814c-1c9413e8dd22",
            "minH": 2,
            "minW": 4,
            "moved": False,
            "static": False,
            "w": 5,
            "x": 7,
            "y": 0,
        }
    )
    name = "Email Block Title"


class EmailBlockFactory(BlockFactory):
    email = factory.Dict(
        {
            "placeholder": "adf@asdf.co",
            "read_only": False,
            "use_placeholder": True,
        }
    )
    type = "email"


class EmailFormBlockFactory(BlockFactory):
    form_sequence = factory.Dict(
        {
            "data": factory.List(
                [
                    factory.Dict(
                        {
                            "email": factory.Dict({}),
                            "id": "email_id",
                            "name": "Email Question",
                            "type": "email",
                        }
                    )
                ]
            ),
            "history": [],
            "is_required": True,
        }
    )
    type = "form_sequence"


class DateBlockFactory(BlockFactory):
    date = factory.Dict({"value": None, "placeholder": None})
    type = "date"


def make_block(*args, FACTORY_CLASS=BlockFactory, **kwargs):
    return factory.build(dict, FACTORY_CLASS=FACTORY_CLASS, *args, **kwargs)
