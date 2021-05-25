import React, {useEffect} from 'react'
import qs from 'qs'
import styled from '@emotion/styled'
import Instructions from './Instructions'
import StyledContainer from './StyledContainer'
import {PALETTE} from 'universal/styles/palette'

const DESTINATION_TEMPLATES = '415035,415168,415208,415264,415267,415303,415278'
const SOURCE_TEMPLATES = '414927,414980,415030,415042,415192,415250,415293,415278'

const StyledZapierContainer = styled.div`
  .zapier-templates-widget > .zap-widget > .zap-row > .zap-inner-container {
    & > .zap-description {
      margin-bottom: 25px;
      line-height: 1.4;
      color: ${PALETTE.TEXT_DARK_GRAY};
      font-size: 15px;
      text-align: left;
      padding-top: 10px;
    }
    & > .zap-cta > .zap-button-outline {
      color: ${PALETTE.PRIMARY_MAIN};
      border: 1px solid ${PALETTE.PRIMARY_MAIN};
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px;
      outline: 0;
      transition: all 0.25s ease-in-out;
      padding: 0 10px;
      &:focus,
      &:hover,
      &:active {
        background: ${PALETTE.BACKGROUND_HOVER_LIGHT};
        border: 1px solid ${PALETTE.PRIMARY_MAIN_DARK};
        color: ${PALETTE.PRIMARY_MAIN_DARK};
      }
    }
  }
`

interface Props {
  type: 'source' | 'destination'
}

const ZapierContainer = (props: Props) => {
  const {type} = props
  const containerRef = React.useRef(null)
  const instruction =
    type === 'source'
      ? 'Connect 2,000+ apps into your queue to automatically create new tasks with our Zapier integration.'
      : 'Connect your queue into 2,000+ apps to automatically send completed tasks to your favorite apps with our Zapier integration.'

  const templates = {
    source: SOURCE_TEMPLATES,
    destination: DESTINATION_TEMPLATES
  }

  useEffect(() => {
    const script = document.createElement('script')
    const params = {
      html_id: 'zapier_embeddable',
      inheritFont: true,
      buttonType: 'outline',
      guided_zaps: templates[type]
    }
    script.src = `https://zapier.com/apps/embed/widget.js?${qs.stringify(params)}`
    containerRef && containerRef.current.appendChild(script)
  }, [type])

  return (
    <StyledContainer>
      <Instructions>
        {instruction}
        <p>
          <a
            href='https://zapier.com/apps/human-lambdas/integrations'
            target='_blank'
            rel='noreferrer'
          >
            Zapier
          </a>{' '}
          lets you connect Human Lambdas to 2,000+ other web services. Automated connections called
          Zaps, set up in minutes with no coding, can automate your day-to-day tasks and build
          queues between apps that otherwise wouldn't be possible.
        </p>
      </Instructions>
      <StyledZapierContainer id='zapier_embeddable' ref={containerRef} />
    </StyledContainer>
  )
}

export default ZapierContainer
