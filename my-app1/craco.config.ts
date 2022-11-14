const cracoModuleFederation = require("craco-module-federation");
// const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
// const CracoLessPlugin = require('craco-less');

// const HtmlWebpackPlugin = require('html-webpack-plugin')


export default {
  plugins: [{
    plugin: cracoModuleFederation
  }],
  webpack: {
    plugins: {
      remove: ['ModuleScopePlugin']
    },
    configure: (webpackConfig: any, { env, paths }: any) => {
      //修改html模版
      webpackConfig.externals = {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        'react': 'window.mirrorLib.React',
        'react-dom': 'window.mirrorLib.ReactDOM',
        'react-router-dom': 'window.mirrorLib.ReactRouterDOM',
        'history': 'window.mirrorLib._history',
        'SDKhistory': 'window.mirrorLib.SDKhistory',
      }
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter((plugin: any) => {
        return plugin.constructor.name !== 'ModuleScopePlugin'
      })
      // return plugin.constructor.name !== 'ModuleScopePlugin'});
      // webpackConfig.plugins.push(new NodePolyfillPlugin())
      return webpackConfig;
    }

  },

};