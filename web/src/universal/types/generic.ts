export interface IBlockType {
  value?: string | number | undefined
  placeholder?: string | undefined
  read_only?: boolean
  is_required?: boolean
  has_label?: boolean
  use_placeholder?: boolean
  objects?: any
  image?: string
}

export interface IBlock {
  id: string
  _id: string
  name: string
  description: string
  placeholder: string
  type: string
  layout: object
  image?: {[key: string]: IBlockType}
  text?: {[key: string]: IBlockType}
  email?: {[key: string]: IBlockType}
  number?: {[key: string]: IBlockType}
  link?: {[key: string]: IBlockType}
  audio?: {[key: string]: IBlockType}
  video?: {[key: string]: IBlockType}
  binary?: {[key: string]: IBlockType}
  named_entity_recognition?: {[key: string]: IBlockType}
  bounding_boxes?: {[key: string]: IBlockType}
  embed?: {[key: string]: IBlockType}
  pdf?: {[key: string]: IBlockType}
  single_selection?: {[key: string]: IBlockType}
  multiple_selection?: {[key: string]: IBlockType}
  rich_text?: {[key: string]: IBlockType}
  date?: {[key: string]: IBlockType}
}

export interface IError {
  field?: string
  message: string
}

export interface IErrors {
  errors: IError[]
  status_code?: number
}

export interface BaseIUser {
  id: number
  name: string
  email: string
  current_organization_id?: string
}

export interface IUser extends BaseIUser {
  orgId: number
  isAdmin: boolean
  userId: number
}

export interface IUserReq extends BaseIUser {
  current_organization_id: number
  is_admin: boolean
}

export interface IQueue {
  id: number
  name: string
  n_tasks: number
  data: Array<IBlock>
}

export interface ITask {
  id: number
  type: string
  queue: string
  data: Array<IBlock>
  assigned_to: string | undefined
  status: string | undefined
  correct: boolean
}

export interface ITemplate {
  id: number
  data: any
  name: string
  summary: string
  thumbnail: string
}
