// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript();

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
    
    return config
  }
})
