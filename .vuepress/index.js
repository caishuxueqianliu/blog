const path = require('path')
module.exports = (opts, ctx) => ({
  enhanceAppFiles: path.resolve(__dirname, './enhanceApp.js')
})

