import {useEffect} from 'react'
import * as Sentry from '@sentry/browser'
import { CaptureConsole } from '@sentry/integrations'
import useNetworker from 'hooks/useNetworker'
import useScript from 'hooks/useScript'
import SentryFullStory from '@sentry/fullstory'

const Analytics = () => {
  const dsn = process.env.SENTRY_DSN || ''
  const segmentKey = process.env.SEGMENT_KEY || ''
  const networker = useNetworker()
  const {accessObj} = networker as any
  const {href, pathname} = location
  const {user_id, email, name} = accessObj || {}

  if (!__PRODUCTION__) return null

  const [isLoaded] = useScript(
    `https://cdn.segment.com/analytics.js/v1/${segmentKey}/analytics.min.js`
  )

  const {analytics} = window

  // sentry
  if (dsn) {
    Sentry.init({
      dsn,
      release: __APP_VERSION__,
      integrations: [
        new SentryFullStory('human-lambdas'),
        new CaptureConsole({
          levels: ['error']
        })
      ]
    })
  } else {
    console.error('Missing Sentry DSN!')
  }

  // FullStory
  useEffect(() => {
    if (!user_id || !email || !analytics || window.FS === undefined) return
    window.FS.identify(user_id, {
      displayName: name,
      email
    })
  }, [networker, accessObj])

  // Segment
  useEffect(() => {
    if (!isLoaded || !analytics) return
    if (email && user_id) {
      analytics.identify(user_id, {
        fullName: name,
        email
      })
    }
  }, [isLoaded])

  useEffect(() => {
    if (!isLoaded || !analytics) return
    setTimeout(() => {
      const title = document.title || ''
      const [pageName] = title.split(' | ')
      analytics.page(pageName, {
        title,
        path: pathname,
        url: href
      })
    })
  }, [isLoaded, pathname])

  return null
}

export default Analytics
