export const APP_TOKEN_KEY = 'HumanLambdas:token'
export const APP_REFRESH_TOKEN_KEY = 'HumanLambdas:refresh'
export const GOOGLE_AUTH_ID =
  '725636052597-sp46vdemr0u2s0hh698nqupjdvucoa3o.apps.googleusercontent.com'

export const API_VERSION = 'v1'

export const enum BoxShadow {
  MODAL = '0px 13px 20px rgba(0,0,0,.08),0px 3px 8px rgba(0,0,0,.08)',
  TOP_BAR = '0 1px 3px 0 rgba(21,27,38,.15)',
  MENU = 'rgba(15,15,15,0.05) 0px 0px 0px 1px, rgba(15,15,15,0.1) 0px 3px 6px, rgba(15,15,15,0.2) 0px 9px 24px'
}

export const enum Breakpoint {
  TOP_BAR = 1024
}

export const enum Duration {
  MENU_OPEN_MAX = 188
}

export const MAX_FILE_SIZE = 10737418240
export const SUPPORTED_FILES = 'text/csv'

export const enum OUTPUT_TYPES {
  BINARY = 'binary',
  TEXT = 'text',
  DATE = 'date',
  NUMBER = 'number',
  MULTIPLE_SELECTION = 'multiple_selection',
  SINGLE_SELECTION = 'single_selection'
}

export const enum OUTPUT_TYPES_BINARY {
  TRUE_ID = 'binary-true-id',
  FALSE_ID = 'binary-false-id'
}

export const enum INPUT_TYPES {
  TEXT = 'text',
  DATE = 'date',
  NUMBER = 'number',
  VIDEO = 'video',
  LIST = 'list',
  AUDIO = 'audio',
  IMAGE = 'image',
  SUBTYPE = 'subtype'
}

export const Chart = {
  PENDING: 'pending',
  TAT: 'tat',
  AHT: 'aht',
  COMPLETED: 'completed',
  ACCURACY: 'accuracy'
}

export const enum Range {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  DAILY = 'daily'
}

export const enum Radius {
  MENU = 4
}

export const enum Task {
  COLS = 24,
  HEIGHT = 6 // Input height
}

export const enum ZIndex {
  MODAL = 24,
  MENU = 24
}

export const enum Number {
  HEIGHT = 1
}

export const enum Date {
  HEIGHT = 1
}

export const enum Audio {
  HEIGHT = 1,
  MINWIDTH = 8
}

export const enum Video {
  HEIGHT = 5,
  MINWIDTH = 7,
  MINHEIGHT = 4
}
