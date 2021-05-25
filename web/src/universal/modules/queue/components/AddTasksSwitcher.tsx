import React from 'react'
import styled from '@emotion/styled'
import PlainButton, {PlainButtonProps} from 'client/components/PlainButton'
import {PALETTE} from 'universal/styles/palette'

interface Props {
  setApiView: (state: string) => void
  apiView?: string
}

interface ButtonProps extends PlainButtonProps {
  active?: boolean
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  paddingLeft: 80,
  marginTop: 25,
  width: 250,
  borderRight: `1px solid ${PALETTE.BACKGROUND_GRAY_MID}`
})

const Section = styled.div({marginBottom: 32})

const MenuHeader = styled.div({
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  marginBottom: 8
})

const MenuItem = styled(PlainButton)<ButtonProps>(({active}) => ({
  width: 100,
  borderRadius: 0,
  color: active ? PALETTE.PRIMARY_MAIN : PALETTE.TEXT_GRAY,
  paddingLeft: 10,
  height: 24,
  justifyContent: 'left',
  fontSize: 14,
  marginTop: 10
}))

const AddTasksSwitcher = (props: Props) => {
  const {setApiView, apiView} = props
  return (
    <Container>
      <Section>
        <MenuHeader>Sources</MenuHeader>
        <MenuItem onClick={() => setApiView('sources/api')} active={apiView === 'sources/api'}>
          API
        </MenuItem>
        <MenuItem onClick={() => setApiView('sources/csv')} active={apiView === 'sources/csv'}>
          CSV
        </MenuItem>
        {!__OSS__ && <MenuItem onClick={() => setApiView('sources/zapier')} active={apiView === 'sources/zapier'}>
          Zapier
        </MenuItem>}
      </Section>
      <Section>
        <MenuHeader>Destinations</MenuHeader>
        <MenuItem
          onClick={() => setApiView('destinations/webhooks')}
          active={apiView === 'destinations/webhooks'}
        >
          Webhooks
        </MenuItem>
        <MenuItem
          onClick={() => setApiView('destinations/api')}
          active={apiView === 'destinations/api'}
        >
          API
        </MenuItem>
        <MenuItem
          onClick={() => setApiView('destinations/csv')}
          active={apiView === 'destinations/csv'}
        >
          CSV
        </MenuItem>
        {!__OSS__ && <MenuItem
          onClick={() => setApiView('destinations/zapier')}
          active={apiView === 'destinations/zapier'}
        >
          Zapier
        </MenuItem>}
      </Section>
    </Container>
  )
}

export default AddTasksSwitcher
