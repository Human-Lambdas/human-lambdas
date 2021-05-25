import interVarWoff22 from './fonts/Inter.var.woff2'
import materialIconsRegularWoff2 from './fonts/MaterialIcons-Regular.woff2'

const lambdas = {
  fontFamily: 'Lambdas',
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'oblique 0deg 10deg',
  fontFeatureSettings: '"ss02" 1',
  src: `url('${interVarWoff22}') format('woff2')`
}

const materialIconsRegular = {
  fontFamily: 'Material Icons',
  fontStyle: 'normal',
  fontWeight: '400',
  fontDisplay: 'block',
  src: `local('Material Icons'), local('MaterialIcons-Regular'), url(${materialIconsRegularWoff2}) format('woff2')`
}

export default [lambdas, materialIconsRegular]
