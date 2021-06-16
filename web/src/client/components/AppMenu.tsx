import React from 'react'
import styled from '@emotion/styled'
import Menu from './Menu'
import {MenuProps} from 'client/hooks/useMenu'
import MenuItem from './MenuItem'
import {PALETTE} from 'universal/styles/palette'
import textOverflow from 'universal/styles/helpers/textOverflow'
import useRouter from 'client/hooks/useRouter'
import DocumentationSVG from 'client/components/Icons/DocumentationSVG'
import PlainButton from '../components/PlainButton'
import {Brand} from './Sidebar'
import Icon from 'universal/components/Icon'

interface Props {
  name: string
  email: string
  menuProps: MenuProps
}

const Container = styled.div({
  width: 220
})

const HeadBlock = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 15px',
  userSelect: 'none',
  cursor: 'default',
  borderBottom: `1px solid ${PALETTE.BORDER_GRAY}`
})

const ActionBlock = styled.div({
  borderBottom: `1px solid ${PALETTE.BORDER_GRAY}`,
  marginBottom: 5,
  padding: '10px 0',
  maxHeight: '60vh',
  overflow: 'auto'
})

const OrgContainer = styled(PlainButton)({
  alignItems: 'center',
  justifyContent: 'start',
  marginBottom: 10,
  margin: 0,
  width: '100%',
  cursor: 'pointer',
  color: PALETTE.TEXT_GRAY
})

const OrgName = styled.div(({active}) => ({
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
  padding: 0,
  ...textOverflow,
  color: active ? PALETTE.TEXT_MAIN : '#4d4d4d',
  ':hover': {
    color: PALETTE.TEXT_MAIN
  }
}))

const StyledName = styled.div({
  color: PALETTE.TEXT_MAIN,
  fontSize: 15,
  fontWeight: 500,
  marginBottom: 2,
  ...textOverflow
})

const StyledEmail = styled.div({
  fontSize: 13,
  color: PALETTE.TEXT_GRAY,
  fontWeight: 400,
  ...textOverflow
})

const Label = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '5px 10px',
  width: '100%'
})

const Text = styled.div({
  color: PALETTE.TEXT_MAIN,
  marginLeft: 15
})

const StyledIcon = styled(Icon)({
  margin: 0,
  padding: 0,
  color: PALETTE.TEXT_MAIN,
  fontSize: 16
})

const AppMenu = (props: Props) => {
  const {
    togglePortal,
    switchUserOrg,
    menuProps,
    name,
    email,
    organizations,
    current_organization_id,
    toggleModalPortal
  } = props
  const {history} = useRouter() as any
  return (
    <Container>
      <HeadBlock>
        <StyledName>{name}</StyledName>
        <StyledEmail>{email}</StyledEmail>
      </HeadBlock>
      <ActionBlock>
        {organizations.map(({name, id}) => (
          <OrgContainer key={id}>
            <Brand active={id === current_organization_id}>{name?.charAt(0)}</Brand>
            <OrgName
              onClick={() => {
                togglePortal()
                switchUserOrg(id)
              }}
              active={id === current_organization_id}
            >
              {name}
            </OrgName>
          </OrgContainer>
        ))}
      </ActionBlock>
      <ActionBlock>
        <Menu ariaLabel={'Documentation'} {...menuProps}>
          <MenuItem
            label={
              <Label>
                <StyledIcon>add</StyledIcon>
                <Text>Add organization</Text>
              </Label>
            }
            onClick={() => {
              toggleModalPortal()
            }}
          />
          <MenuItem
            label={
              <Label>
                <DocumentationSVG />
                <Text>Documentation</Text>
              </Label>
            }
            onClick={() => window.open('https://humanlambdas.gitbook.io/', '_blank')}
          />
        </Menu>
      </ActionBlock>
      <Menu ariaLabel={'User menu'} {...menuProps}>
        <MenuItem
          label={
            <Label>
              <StyledIcon>exit_to_app</StyledIcon>
              <Text>Sign out</Text>
            </Label>
          }
          onClick={() => history.push('/signout')}
        />
      </Menu>
    </Container>
  )
}

export default AppMenu
