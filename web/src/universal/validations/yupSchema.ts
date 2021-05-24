import * as yup from 'yup'
import _ from 'lodash'
import {BLOCK_TYPE} from 'universal/utils/constants'
import {parseDateString} from 'client/utils/dateHelpers'

const {boolean, string, array, object, lazy, mixed, addMethod, date} = yup

// Uniqueness validation
addMethod(array, 'unique', function (message, path, identifier = null) {
  return this.test('unique', message, function (list) {
    const mapper = (x) => _.get(x, path)
    const set = [...new Set(list.map(mapper))]
    const isUnique = list.length === set.length
    if (isUnique) {
      return true
    }

    const idx = list.findIndex((l, i) => mapper(l) !== set[i])
    const id = identifier ? `[${idx}].${identifier}` : `[${idx}].${path}`

    return this.createError({path: id, message})
  })
})

// Login
export const loginSchema = object().shape({
  email: string().email('Email must be a valid email').required('Email is required'),
  password: string().required('Password is required')
})

// Invite SignUp
export const InviteSignUpSchema = object().shape({
  name: string().required('Name is required'),
  password: string()
    .min(8, 'Password must contain at least 8 characters')
    .required('Password is required')
})

// Public SignUp
export const PublicSignUpSchema = object().shape({
  email: string().required('Email is required'),
  name: string().required('Name is required'),
  password: string()
    .min(8, 'Password must contain at least 8 characters')
    .required('Password is required')
})

// Forgotten password schema
export const forgottenSchema = object().shape({
  email: string().required('Email is required')
})

// Reset password schema
export const resetSchema = object().shape({
  password: string()
    .required('Your new password is required')
    .min(8, 'Your new password must be at least 8 characters')
})

// Change Password
export const ChangePasswordSchema = object().shape({
  currentPassword: string().required('Your current password is required'),
  newPassword: string()
    .min(8, 'Password must contain at least 8 characters')
    .required('Your new password is required')
})

// Email list
export const emailListSchema = object().shape({
  emails: array()
    .transform(function (value, originalValue) {
      if (this.isType(value) && value !== null) {
        return value
      }
      return originalValue ? originalValue.split(/[\s,]+/) : []
    })
    .of(string().email(({value}) => `${value} is not a valid email`))
    .required()
})

// User
export const userSchema = object().shape({
  email: string().email('Please check your email and try again').required('Email is required'),
  name: string().min(2, 'This name is too short').required('Your fullname is required')
})

// Organization
export const organizationSchema = object().shape({
  name: string()
    .min(2, 'This organization name is too short')
    .max(200, 'This organization name is too long')
    .required('Organization name is required')
})

// CSV Download
export const csvDownloadSchema = object().shape({
  startDate: date()
    .nullable()
    .transform(parseDateString)
    .max(new Date(), "Start Date can't be in the future"),
  endDate: date()
    .nullable()
    .transform(parseDateString)
    .min(yup.ref('startDate'), "End date can't be before Start date")
    .max(new Date(), "End Date can't be in the future")
})

// Queues
export const queueSchema = object().shape({
  name: string()
    .max(150, 'Queue name is too long')
    .min(1, 'Queue name is too short')
    .required('Queue name is required'),
  data: array()
    .of(
      lazy((obj) => {
        if (
          [BLOCK_TYPE.LINK, BLOCK_TYPE.VIDEO, BLOCK_TYPE.IMAGE, BLOCK_TYPE.AUDIO].includes(obj.type)
        ) {
          return object().shape({
            id: string().required('Field ID is required'),
            [obj.type]: object().shape({
              placeholder: mixed().when('use_placeholder', {
                is: true,
                then: string().url('A valid URL is required for this field').required(),
                otherwise: string().url('A valid URL is required for this field')
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.EMBED) {
          return object().shape({
            id: string().required('Field ID is required'),
            [obj.type]: object().shape({
              placeholder: mixed().when('use_placeholder', {
                is: true,
                then: string()
                  .matches(/\bhttps:\/\/\S*\b/)
                  .required(),
                otherwise: string().matches(/\bhttps:\/\/\S*\b/)
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.PDF) {
          return object().shape({
            id: string().required('Field ID is required'),
            [obj.type]: object().shape({
              placeholder: mixed().when('use_placeholder', {
                is: true,
                then: string()
                  .matches(/\bhttps:\/\/\S*\.pdf\b/)
                  .required(),
                otherwise: string().matches(/\bhttps:\/\/\S*\.pdf\b/)
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.EMAIL) {
          return object().shape({
            id: string().required('Field ID is required'),
            [obj.type]: object().shape({
              placeholder: mixed().when('use_placeholder', {
                is: true,
                then: string().email('A valid email is required for this field').required(),
                otherwise: string().email('A valid email is required for this field')
              })
            })
          })
        } else if (
          obj.type === BLOCK_TYPE.SINGLE_SELECTION ||
          obj.type === BLOCK_TYPE.MULTIPLE_SELECTION
        ) {
          return object().shape({
            id: string().required('Field ID is required'),
            name: string().required('Field ID is required'),
            [obj.type]: object().shape({
              options: array()
                .of(object().shape({}))
                .unique('Field ID has to be unique', 'id', `${obj.type}.options.id`)
            })
          })
        } else if (obj.type === BLOCK_TYPE.NAMED_ENTITY_RECOGNITION) {
          return object().shape({
            id: string().required('Field ID is required'),
            name: string().required('Field ID is required'),
            [obj.type]: object().shape({
              options: array()
                .of(
                  object().shape({
                    id: string().required('Field ID is required')
                  })
                )
                .unique('Field ID has to be unique', 'id', `${obj.type}.options.id`),
              placeholder: mixed().when('use_placeholder', {
                is: true,
                then: string().required('A value is required for this field'),
                otherwise: string('A value is required for this field')
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.FORM_SEQUENCE) {
          return object().shape({
            id: string().required('Field ID is required'),
            name: string().required('Field ID is required'),
            [obj.type]: object().shape({
              data: array()
                .of(
                  object().shape({
                    id: string().required('Field ID is required'),
                    single_selection: object().shape({
                      options: array().of(
                        object().shape({
                          id: string().required('Field ID is required')
                        })
                      )
                    }),
                    multiple_selection: object().shape({
                      options: array().of(
                        object().shape({
                          id: string().required('Field ID is required')
                        })
                      )
                    })
                  })
                )
                .min(1)
                .unique('Field ID has to be unique', 'id')
            })
          })
        } else if (
          obj.type === BLOCK_TYPE.NUMBER ||
          obj.type === BLOCK_TYPE.TEXT ||
          obj.type === BLOCK_TYPE.RICH_TEXT
        ) {
          return object().shape({
            [obj.type]: object().shape({
              placeholder: mixed().when('use_placeholder', {
                is: true,
                then: string().required('A value is required for this field'),
                otherwise: string('A value is required for this field')
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.DATE) {
          return object().shape({
            [obj.type]: object().shape({
              placeholder: mixed().when('use_placeholder', {
                is: true,
                then: date().transform(parseDateString).required('A Valid date is required'),
                otherwise: date().transform(parseDateString)
              })
            })
          })
        } else {
          return object().shape({
            id: string().required('Field ID is required'),
            name: string().required('Field ID is required')
          })
        }
      })
    )
    .min(1, 'There should be at least one block')
    .unique('Field ID has to be unique', 'id')
})

// Queue Settings
export const queueSettingsSchema = object().shape({
  task_description: string().nullable().required('Description is required'),
  guidelines_url: string().nullable().url('A valid URL is required for this field')
})

// Task Menu
const validateUrlFortaskMenuSchema = () =>
  lazy((obj) =>
    object(
      _.mapValues(obj, () => {
        return string().url('A valid URL is required for this field').min(1)
      })
    )
  )

export const taskMenuSchema = lazy((formValues) => {
  return object().shape({
    data: object().shape({
      [BLOCK_TYPE.EMAIL]: lazy((obj) =>
        object(
          _.mapValues(obj, () => {
            return string().email('A valid email is required for this field')
          })
        )
      ),
      [BLOCK_TYPE.LINK]: validateUrlFortaskMenuSchema(),
      [BLOCK_TYPE.VIDEO]: validateUrlFortaskMenuSchema(),
      [BLOCK_TYPE.IMAGE]: validateUrlFortaskMenuSchema(),
      [BLOCK_TYPE.AUDIO]: validateUrlFortaskMenuSchema(),
      [BLOCK_TYPE.EMBED]: lazy((obj) =>
        object(
          _.mapValues(obj, () => {
            return string().matches(/\bhttps:\/\/\S*\b/)
          })
        )
      ),
      [BLOCK_TYPE.PDF]: lazy((obj) =>
        object(
          _.mapValues(obj, () => {
            return string().matches(/\bhttps:\/\/\S*\.pdf\b/)
          })
        )
      ),
      [BLOCK_TYPE.DATE]: lazy((obj) =>
        object(
          _.mapValues(obj, (_key, id) => {
            if (formValues.required[BLOCK_TYPE.DATE]?.[id]) {
              return date().transform(parseDateString).required('A Valid date is required')
            }
          })
        )
      ),
      [BLOCK_TYPE.NAMED_ENTITY_RECOGNITION]: lazy((obj) => {
        return object(
          _.mapValues(obj, (key, id) => {
            if (formValues.required[BLOCK_TYPE.NAMED_ENTITY_RECOGNITION]?.[id]) {
              return string('A value is required').nullable()
            }
          })
        )
      }),
      [BLOCK_TYPE.BOUNDING_BOXES]: lazy((obj) => {
        return object(
          _.mapValues(obj, (key, id) => {
            if (formValues.required[BLOCK_TYPE.BOUNDING_BOXES]?.[id]) {
              return object().shape({
                image: string().url('A valid URL is required for this field')
              })
            } else {
              return object().shape({
                image: string().url('A valid URL is required for this field')
              })
            }
          })
        )
      })
    })
  })
})

// Tasks
export const taskSchema = object().shape({
  data: array()
    .of(
      lazy((obj) => {
        if (obj.type === BLOCK_TYPE.FORM_SEQUENCE) {
          return object().shape({
            [obj.type]: object().shape({
              data: array()
                .of(
                  lazy((nestedObj) => {
                    if (nestedObj.type === BLOCK_TYPE.EMAIL) {
                      return object().shape({
                        email: object().shape({
                          value: string()
                            .nullable()
                            .email('A valid email is required for this field')
                        })
                      })
                    } else if (nestedObj.type === BLOCK_TYPE.LINK) {
                      return object().shape({
                        link: object().shape({
                          value: string().nullable().url('A valid URL is required for this field')
                        })
                      })
                    } else {
                      return object().shape({
                        [nestedObj.type]: object().shape({
                          value: mixed().nullable()
                        })
                      })
                    }
                  })
                )
                .strict()
                .required()
            })
          })
        } else if (obj.type === BLOCK_TYPE.DATE) {
          return object().shape({
            [obj.type]: object().shape({
              value: mixed().when('is_required', {
                is: true,
                then: date().transform(parseDateString).required('A Valid date is required'),
                otherwise: date().transform(parseDateString)
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.EMAIL) {
          return object().shape({
            [obj.type]: object().shape({
              value: mixed().when('is_required', {
                is: true,
                then: string().email().required('A value is required for one or more blocks'),
                otherwise: string().nullable().email('A valid email is required for this field')
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.NAMED_ENTITY_RECOGNITION) {
          return object().shape({
            [obj.type]: object().shape({
              value: mixed().when('is_required', {
                is: true,
                then: string().required('A value is required for one or more blocks')
              }),
              entities: mixed().when('is_required', {
                is: true,
                then: array().test('Field is required', 'Field is required', (value) => {
                  return _.isArray(value) && value.length > 0
                })
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.BOUNDING_BOXES) {
          return object().shape({
            [obj.type]: object().shape({
              value: mixed().when('is_required', {
                is: true,
                then: object().shape({
                  objects: array().test('Field is required', 'Field is required', (value) => {
                    return _.isArray(value) && value.length > 0
                  })
                })
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.LINK) {
          return object().shape({
            [obj.type]: object().shape({
              value: mixed().when('is_required', {
                is: true,
                then: string()
                  .nullable()
                  .url()
                  .required('A value is required for one or more blocks'),
                otherwise: string().nullable().url('A valid URL is required for this field')
              })
            })
          })
        } else if (obj.type === BLOCK_TYPE.RICH_TEXT) {
          return object().shape({
            id: string().required('Field ID is required'),
            name: string().required('Field Name is required'),
            [obj.type]: object().shape({
              value: mixed().when('is_required', {
                is: true,
                then: string().required('A value is required for this field')
              })
            })
          })
        } else {
          return object().shape({
            [obj.type]: object().shape({
              is_required: boolean(),
              value: mixed().when('is_required', {
                is: true,
                then: mixed().nullable().required('A value is required for one or more blocks')
              })
            })
          })
        }
      })
    )
    .required('The `data` field is required on a task')
})
