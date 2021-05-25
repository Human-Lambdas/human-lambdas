export interface IError {
  field?: string
  message: string
}

export interface IErrors {
  errors: IError[]
  status_code?: number
}

export interface IWebhook {
  target: string
}

export interface IQueueInput {
  id: string
  type: string
  value: string
  name: string
  layout?: object
}

export interface IQueue {
  id: string
  name: string
  description?: string
  n_tasks?: number
  inputs: Array<IQueueInput>
  outputs: Array<any> // todo
  webhook: IWebhook
}

export interface IUser {
  id: string
  name: string
  current_organization_id: number
  email: string
}
