import React, {ReactNode, Component} from 'react'
import Networker from '../Networker'

interface Props {
  children: ReactNode
}

export const NetworkerContext = React.createContext<Networker | undefined>(undefined)

export default class NetworkerProvider extends Component<Props> {
  networker?: Networker | undefined
  constructor(props) {
    super(props)
    this.networker = new Networker()
    this.networker.getAccessToken(window)
    this.networker.getRefreshToken(window)
  }
  render() {
    if (!this.networker) return null
    return (
      <NetworkerContext.Provider value={this.networker}>
        {this.props.children}
      </NetworkerContext.Provider>
    )
  }
}
