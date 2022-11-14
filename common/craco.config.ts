const cracoModuleFederation = require("craco-module-federation");
const webpack = require('webpack')
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
      // webpackConfig.plugins = [
      //   ...webpackConfig.plugins,
      //   new webpack.container.ModuleFederationPlugin(
      //     require('./modulefederation.config')
      //   ),
      // ];
      //修改html模版
      // webpackConfig.externals = {
      //   // 'react': 'React',
      //   // 'react-dom': 'ReactDOM',
      //   'react': 'window.mirrorLibs.React',
      //   'react-dom': 'window.mirrorLibs.ReactDOM',
      //   'react-router-dom': 'window.mirrorLibs.ReactRouterDOM',
      //   'history': 'window.mirrorLibs._history',
      //   'SDKhistory': 'window.mirrorLibs.SDKhistory',
      // }
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter((plugin: any) => {
        return plugin.constructor.name !== 'ModuleScopePlugin'
      })
      // return plugin.constructor.name !== 'ModuleScopePlugin'});
      // webpackConfig.plugins.push(new NodePolyfillPlugin())
      return webpackConfig;
    }

  },

};