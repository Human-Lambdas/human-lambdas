// declare webpack modules
declare module '*.png'
declare module '*.jpg'
declare module '*.gif'

declare const __PRODUCTION__: string
declare const __APP_URL__: string
declare const __APP_VERSION__: string

interface Window {
  __HL__: any
  FS: any
  analytics: any
}
