import React from 'react'
import styled from '@emotion/styled'
import Menu from './Menu'
import {MenuProps} from 'hooks/useMenu'
import MenuItem from './MenuItem'
import {PALETTE} from 'styles/palette'
import textOverflow from '../styles/helpers/textOverflow'
import Icon from 'components/Icon'
import useRouter from 'hooks/useRouter'

interface Props {
  name: string
  email: string
  menuProps: MenuProps
}

const Container = styled.div({
  width: 180
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
  padding: '10px 0'
})

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

const IconLabel = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '5px 10px'
})

const StyledIcon = styled(Icon)({
  display: 'block',
  color: PALETTE.TEXT_GRAY,
  marginRight: 15,
  fontSize: 17
})

const AvatarMenu = (props: Props) => {
  const {menuProps, name, email} = props
  const {history} = useRouter() as any

  const Item = React.useCallback(({icon, label}) => {
    return (
      <IconLabel>
        <StyledIcon>{icon}</StyledIcon>
        <>{label}</>
      </IconLabel>
    )
  }, [])

  return (
    <Container>
      <HeadBlock>
        <StyledName>{name}</StyledName>
        <StyledEmail>{email}</StyledEmail>
      </HeadBlock>
      <ActionBlock>
        <Menu ariaLabel={'Documentation'} {...menuProps}>
          <MenuItem
            label={<Item icon='library_books' label={'Documentation'} />}
            onClick={() => window.open('https://humanlambdas.gitbook.io/', '_blank')}
          />
        </Menu>
      </ActionBlock>
      <Menu ariaLabel={'User menu'} {...menuProps}>
        <MenuItem
          label={<Item icon='exit_to_app' label={'Sign out'} />}
          onClick={() => history.push('/signout')}
        />
      </Menu>
    </Container>
  )
}

export default AvatarMenu
