var merge = require('webpack-merge')
var prodEnv = require('.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
