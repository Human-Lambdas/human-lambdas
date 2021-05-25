const path = require('path')

const SRC_ROOT = path.join(__dirname, '../src')
const CLIENT_ROOT = path.join(SRC_ROOT, 'client')
const SERVER_ROOT = path.join(SRC_ROOT, 'server')

// todo remove CLIENT_ROOT and SERVER_ROOT
// once import paths have been updated.
module.exports = {
  modules: [SRC_ROOT, CLIENT_ROOT, SERVER_ROOT, 'node_modules'],
  extensions: ['.js', '.json', '.ts', '.tsx']
}
