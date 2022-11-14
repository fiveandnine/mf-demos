const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3005,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      remotes: {
        common: 'common@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        ...deps,
        'react-dom': {
          import: 'react-dom', // the "react" package will be used a provided and fallback module
          shareKey: 'react-dom', // under this name the shared module will be placed in the share scope
          shareScope: 'legacy', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        // oldReact: {
        //   import: "react", // the "react" package will be used a provided and fallback module
        //   shareKey: "oldReact", // under this name the shared module will be placed in the share scope
        //   shareScope: "legacy", // share scope with this name will be used
        //   singleton: true, // only a single version of the shared module is allowed
        // }
      },
    })
  ],
};

