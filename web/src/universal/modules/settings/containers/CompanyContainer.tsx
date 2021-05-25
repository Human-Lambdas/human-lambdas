import React, {useEffect, useState, useCallback} from 'react'
import Company from '../components/Company'
import useNetworker from 'client/hooks/useNetworker'
import {IUser} from 'universal/types/generic'
import isEmptyArray from 'universal/utils/isEmptyArray'

interface Props {
  user: IUser
}

const CompanyContainer = ({user}: Props) => {
  const networker = useNetworker()
  const [organization, setOrganization] = useState('')
  const [saved, setSaved] = useState('Save')
  const [isLoading, setIsLoading] = useState(false)
  const orgId = user.current_organization_id

  const getOrganization = useCallback(async () => {
    if (orgId) {
      const {data, errors}: any = await networker?.httpHandler(`/orgs/${orgId}`, {method: 'GET'})
      if (isEmptyArray(errors)) {
        setOrganization(data)
      } else {
        console.error('Error fetching organization', JSON.stringify(errors))
      }
    }
  }, [])

  useEffect(() => {
    getOrganization()
  }, [orgId])

  const handleSubmit = useCallback(
    async (values: any, actions: any) => {
      setIsLoading(true)
      const {errors, data}: any = await networker?.httpHandler(`/orgs/${orgId}`, {
        method: 'PATCH',
        data: values
      })
      if (!isEmptyArray(errors)) {
        console.error('Error updating organization name', JSON.stringify(errors))
      } else {
        setOrganization(data)
      }
      actions.setSubmitting(false)
      actions.resetForm()
      setTimeout(() => {
        setSaved('Saved!')
        setIsLoading(false)
      }, 1000)
    },
    [orgId]
  )

  return organization && organization.id ? (
    <Company
      isLoading={isLoading}
      organization={organization}
      orgId={orgId}
      handleSubmit={handleSubmit}
      saved={saved}
    />
  ) : null
}

export default CompanyContainer
