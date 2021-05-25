import {STAFF_ORG_ID} from 'universal/utils/constants'

const isUserStaff = (organizations, current_organization_id) => {
  for (const org of organizations) {
    if (org.id === STAFF_ORG_ID && current_organization_id === STAFF_ORG_ID) return true
  }

  return false
}
export default isUserStaff
