const resolve = require('./webpackResolve')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const pluginDynamicImport = require('@babel/plugin-syntax-dynamic-import').default
const pluginInlineImport = require('babel-plugin-inline-import').default
const pluginEmotion = require('babel-plugin-emotion').default
const pluginRecharts = require('babel-plugin-recharts')
const pluginOptionalChaining = require('@babel/plugin-proposal-optional-chaining').default
const pluginObjectRestSpread = require('@babel/plugin-proposal-object-rest-spread')
const presetEnv = require('@babel/preset-env')
const presetReact = require('@babel/preset-react')
const webpack = require('webpack')

const PROJECT_ROOT = path.join(__dirname, '../')
const APP_URL = JSON.stringify(process.env.APP_URL)

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    babelrc: false,
    plugins: [
      pluginInlineImport,
      pluginOptionalChaining,
      pluginDynamicImport,
      pluginObjectRestSpread,
      [
        pluginEmotion,
        {
          sourceMap: false,
          cssPropOptimization: true,
          autoLabel: false
        }
      ],
      [pluginRecharts]
    ],
    presets: [
      [
        presetEnv,
        {
          targets: {
            browsers: ['> 1%', 'not ie 11']
          },
          corejs: 3,
          useBuiltIns: 'entry'
        }
      ],
      presetReact
    ]
  }
}

// plugins
const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Human-in-the-loop tasks | Lambdas',
    filename: 'index.html',
    template: path.join(PROJECT_ROOT, 'src', 'server', 'template.html')
  }),
  new webpack.DefinePlugin({
    __PRODUCTION__: false,
    __CLIENT__: true,
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    'process.env.NODE_ENV': JSON.stringify('false'),
    __APP_URL__: APP_URL,
    'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
    'process.env.SEGMENT_KEY': JSON.stringify(process.env.SEGMENT_KEY)
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
          from: 'static/favicon.ico', 
          to: 'favicon.ico'
      }
    ]
  })
]

module.exports = {
  stats: {
    assets: false
  },
  mode: 'development',
  entry: {
    app: [path.join(PROJECT_ROOT, 'src', 'client', 'client.tsx')]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: 3000
  },
  output: {
    path: path.join(PROJECT_ROOT, 'build'),
    filename: '[name]_[contenthash].js',
    chunkFilename: '[name]_[contenthash].js',
    publicPath: '/'
  },
  resolve,
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babelLoader
      },
      {
        test: /\.tsx?$/,
        include: [
          path.join(__dirname, '../src/client'),
          path.join(__dirname, '../src/universal')
        ],
        use: [
          babelLoader,
          {
            loader: '@sucrase/webpack-loader',
            options: {
              transforms: ['jsx', 'typescript']
            }
          }
        ]
      },
      {
        test: /\.worker\.(js|ts)$/,
        include: [
          path.join(__dirname, '../src/client'),
          path.join(__dirname, '../src/universal')
        ],
        use: [
          babelLoader,
          {
            loader: 'worker-loader'
          }
        ]
      },
      {
        test: /\.(eot|ttf|wav|mp3|woff|woff2|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096
            }
          }
        ]
      }
    ]
  }
}
