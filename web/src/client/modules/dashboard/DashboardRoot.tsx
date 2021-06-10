import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Dashboard from './containers/Dashboard'
import useNetworker from 'client/hooks/useNetworker'
import {addUser} from 'client/redux/currentUserReducer'
import isUserStaff from 'client/utils/isUserStaff'

interface Props {
  addUser: any
  history: any
}

const DashboardRoot = (props: Props) => {
  const {history} = props
  const networker = useNetworker()
  const {
    accessObj: {user_id: userId}
  } = networker || {accessObj: {}}
  const [user, setUser] = useState({})
  const {current_organization_id: currentOrgId} = user || {}
  const [organization, setOrg] = useState({})
  const [organizations, setOrgs] = useState([])

  async function fetchUserAndOrgInfo() {
    const resp = await networker.httpHandler(`/users/${userId}`, {method: 'GET'})
    let data, errors

    if (resp) {
      data = resp.data
      errors = resp.errors
    }
    const {current_organization_id} = data || {}
    if (currentOrgId === current_organization_id) return
    if (!errors) {
      if (current_organization_id) {
        const {data: org} = await networker.httpHandler(`/orgs/${data.current_organization_id}`, {
          method: 'GET'
        })
        const {data: orgs} = await networker.httpHandler(`/orgs`, {method: 'GET'})
        setUser(data)
        setOrg(org)
        setOrgs(orgs)
        const isStaff = isUserStaff(orgs, data.current_organization_id)
        props.addUser({...data, isStaff})
      } else {
        console.error('No organization ID!')
      }
    } else {
      errors.forEach((e) => console.error(e.message))
    }
  }

  useEffect(() => {
    fetchUserAndOrgInfo()
  }, [userId, user])

  const switchUserOrg = async (id) => {
    const {errors} = await networker.httpHandler(`/users/${user.id}`, {
      data: {
        current_organization_id: id
      },
      method: 'PATCH'
    })
    if (!errors) {
      history.push('/')
    } else {
      console.error('Error fetching organization information!', JSON.stringify(errors))
    }
  }

  const handleNewOrganization = async (orgName: string) => {
    if (!orgName) return
    const {
      data: {id: newOrgId}
    } = await networker.httpHandler(`/orgs/create`, {
      data: orgName,
      method: 'POST'
    })
    await networker.httpHandler(`/users/${user.id}`, {
      data: {
        current_organization_id: newOrgId
      },
      method: 'PATCH'
    })
    history.push('/')
  }

  if ((!user.id && !organization.name) || organizations.length === 0) return null

  return (
    <Dashboard
      {...props}
      user={user}
      orgName={organization.name}
      organizations={organizations}
      switchUserOrg={switchUserOrg}
      handleNewOrganization={handleNewOrganization}
    />
  )
}
const mapDispatchToProps = (dispatch) => ({
  addUser: (arg) => dispatch(addUser(arg))
})

export default connect(null, mapDispatchToProps)(DashboardRoot)
