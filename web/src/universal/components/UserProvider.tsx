import React, {ReactElement} from 'react'
import {IUser} from '../types/generic'

interface IUserProvider {
  children: ReactElement<any>
  user: IUser
}

export const UserContext = React.createContext<IUser | undefined>(undefined)

export default function UserProvider(props: IUserProvider) {
  const {user, children} = props || {}

  if (!user) return
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
