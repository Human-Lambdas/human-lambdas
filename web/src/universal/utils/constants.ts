export const enum BLOCK_TYPE {
  TEXT = 'text',
  EMAIL = 'email',
  NUMBER = 'number',
  LINK = 'link',
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  BINARY = 'binary',
  EMBED = 'embed',
  PDF = 'pdf',
  NAMED_ENTITY_RECOGNITION = 'named_entity_recognition',
  SINGLE_SELECTION = 'single_selection',
  MULTIPLE_SELECTION = 'multiple_selection',
  FORM_SEQUENCE = 'form_sequence',
  RICH_TEXT = 'rich_text',
  BOUNDING_BOXES = 'bounding_boxes',
  TEXT_SEQUENCE = 'text_sequence',
  DATE = 'date'
}

export const BLOCKS = [
  {
    title: 'Text',
    description: 'To display plain text data.',
    type: BLOCK_TYPE.TEXT,
    placeholder: 'A few words',
    icon: 'subject',
    iconColor: '#ff8282'
  },
  {
    title: 'Email',
    description: 'An email field with input validation.',
    type: BLOCK_TYPE.EMAIL,
    placeholder: 'alice@example.com',
    icon: 'alternate_email',
    iconColor: '#FFA6A0'
  },
  {
    title: 'Number',
    description: 'Displays numbers, such as integers and decimals.',
    type: BLOCK_TYPE.NUMBER,
    placeholder: '1923',
    icon: 'looks_5',
    iconColor: '#ffAf82'
  },
  {
    title: 'Date',
    description: 'A date, composed of day, month and year.',
    type: BLOCK_TYPE.DATE,
    placeholder: '2021-01-30',
    icon: 'today',
    iconColor: '#ffd482'
  },
  {
    title: 'Link',
    description: 'A URL field with input validation.',
    type: BLOCK_TYPE.LINK,
    placeholder: 'https://www.humanlambdas.com',
    icon: 'link',
    iconColor: '#C2E3F5'
  },
  {
    title: 'Image',
    description: 'Renders an image given a source URL.',
    type: BLOCK_TYPE.IMAGE,
    icon: 'image',
    iconColor: '#a9d6ae',
    placeholder: 'https://www.example.com/photo.png'
  },
  {
    title: 'PDF',
    description: 'Embeds a PDF given a valid URL.',
    hasLabel: false,
    type: BLOCK_TYPE.PDF,
    icon: 'picture_as_pdf',
    iconColor: '#BE9774',
    placeholder: 'https://example.com/example.pdf'
  },
  {
    title: 'Embed',
    description: 'Embeds a website given a valid URL.',
    hasLabel: false,
    type: BLOCK_TYPE.EMBED,
    icon: 'wysiwyg',
    iconColor: '#484849',
    placeholder: 'https://www.example.com'
  },
  {
    title: 'Video',
    description: 'Displays a video clip given a source URL.',
    type: BLOCK_TYPE.VIDEO,
    icon: 'videocam',
    iconColor: '#AFD8E1',
    placeholder: 'https://www.example.com/video.mp4'
  },
  {
    title: 'Audio',
    description: 'Plays an audio clip given a source URL.',
    type: BLOCK_TYPE.AUDIO,
    icon: 'graphic_eq',
    iconColor: '#829DFF',
    placeholder: 'https://www.example.com/audio.mp3'
  },
  {
    title: 'Rich Text',
    description: 'A rich text editor',
    type: BLOCK_TYPE.RICH_TEXT,
    placeholder: 'Tell a story',
    icon: 'text_format',
    iconColor: '#ff9882'
  },
  {
    title: 'Bounding Boxes',
    description: 'An image with bounding box masks.',
    hasLabel: false,
    type: BLOCK_TYPE.BOUNDING_BOXES,
    icon: 'crop_free',
    iconColor: '#7BECD1'
  },
  {
    title: 'Text Highlighting',
    description: 'For Named Entity Recognition annotations.',
    hasLabel: false,
    type: BLOCK_TYPE.NAMED_ENTITY_RECOGNITION,
    icon: 'format_shapes',
    iconColor: '#9ED3F0'
  },
  {
    title: 'Binary',
    description: 'A Yes/No selection.',
    hasLabel: false,
    type: BLOCK_TYPE.BINARY,
    icon: 'check_circle',
    iconColor: '#C590DE',
    placeholder: 'Is this a positive review?'
  },
  {
    title: 'Single Selection',
    description: 'Choose one option out of many.',
    hasLabel: false,
    type: BLOCK_TYPE.SINGLE_SELECTION,
    icon: 'radio_button_checked',
    iconColor: '#FF8282'
  },
  {
    title: 'Multiple Selection',
    description: 'Choose one or more options out of many.',
    hasLabel: false,
    type: BLOCK_TYPE.MULTIPLE_SELECTION,
    icon: 'check_box',
    iconColor: '#6648ee'
  },
  {
    title: 'Form Sequence',
    description: 'A sequence of questions. Supports logic jumps.',
    hasLabel: false,
    type: BLOCK_TYPE.FORM_SEQUENCE,
    icon: 'call_split',
    iconColor: 'rgba(102, 72, 238, 0.8)'
  },
  {
    title: 'Text Sequence',
    description: 'Displays and takes a list of text items.',
    type: BLOCK_TYPE.TEXT_SEQUENCE,
    placeholder: ['A sentence', 'Another sentence'],
    icon: 'list',
    iconColor: '#AEFBBF'
  }
]

export const enum TASK_STATUS {
  PENDING = 'pending',
  NEW = 'new',
  COMPLETED = 'completed',
  OPEN = 'open',
  IN_PROGRESS = 'in_progress'
}

export const enum QUEUE_STATUS {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  OPEN = 'open',
  NEW = 'new'
}

export const SAMPLE_VALUES = {
  text: 'This is some random text',
  image: 'https://example.com/random-picture.jpg',
  audio: 'https://example.com/random-song.mp3',
  video: 'https://example.com/random-video.mp4',
  email: 'alice@example.com',
  link: 'https://example.com',
  number: 42,
  date: '2021-01-30',
  embed: 'https://example.com',
  pdf: 'https://example.com/file.pdf',
  bounding_boxes: 'https://example.com/random-picture.jpg',
  named_entity_recognition: 'This is some random text',
  rich_text: 'Tell a story',
  binary: true,
  text_sequence: ['foo', 'bar']
}

export const FEATURE_TOGGLES = {
  UPLOAD_CSV_REGION_ORGS: [9, 44]
}

export const FILTER_BLOCK_TYPES = [BLOCK_TYPE.TEXT, BLOCK_TYPE.EMAIL, BLOCK_TYPE.NUMBER, BLOCK_TYPE.LINK]

export const STAFF_ORG_ID = 1000000000
