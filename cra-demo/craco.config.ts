// const cracoModuleFederation = require("craco-module-federation");
// const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
// const CracoLessPlugin = require('craco-less');

// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExternalTemplateRemotesPlugin = require('@xmly/external-template-remotes-plugin') 


export default {
  // plugins: [{
  //   plugin: cracoModuleFederation
  // }],
  webpack: {
    plugins: {
      remove: ['ModuleScopePlugin'],
      // add: [new ExternalTemplateRemotesPlugin()]
    },
    configure: (webpackConfig: any, { env, paths }: any) => {
      
      webpackConfig.output.publicPath = '/dist2'
      return webpackConfig;
    }

  },

};