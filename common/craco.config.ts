
// const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
// const CracoLessPlugin = require('craco-less');

// const HtmlWebpackPlugin = require('html-webpack-plugin')


export default {

  webpack: {
    plugins: {
      remove: ['ModuleScopePlugin']
    },
    configure: (webpackConfig: any, { env, paths }: any) => {
      webpackConfig.output.publicPath = ''
      return webpackConfig;
    }

  },

};