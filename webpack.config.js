const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');
const packageData = require('./package.json');

const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

const {ProgressPlugin, DefinePlugin} = webpack;

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

module.exports = () => {
  const isProductionEnv = process.env.NODE_ENV === 'production';

  let nodeConfig = {
    target: 'node',
    externals: [nodeExternals()],
    output: {
      filename: 'node.js',
      libraryTarget: 'commonjs2',
      libraryExport: 'default'
    }
  };

  let browserConfig = {
    target: 'web',
    output: {
      filename: 'browser.js',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      libraryExport: 'default',
      globalObject: 'this',
      library: 'StarkExAPI'
    },
    resolve: {
      fallback: {
        http: false,
        https: false
      }
    }
  };

  const commonConfig = {
    context: srcPath,
    entry: './index.ts',
    output: {
      path: distPath
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
          include: [srcPath],
          exclude: [/node_modules/]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    watchOptions: {
      aggregateTimeout: 600,
      ignored: /node_modules/
    },
    plugins: [
      new ProgressPlugin(),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: [distPath]
      }),
      new DefinePlugin({
        __VERSION__: JSON.stringify(packageData.version),
        __NAME__: JSON.stringify(packageData.name),
        __NODE_ENV__: JSON.stringify(process.env.NODE_ENV)
      })
    ]
  };

  nodeConfig = merge(nodeConfig, commonConfig);
  browserConfig = merge(browserConfig, commonConfig);

  if (isProductionEnv) {
    return [merge(nodeConfig, prodConfig), merge(browserConfig, prodConfig)];
  }
  return [merge(nodeConfig, devConfig), merge(browserConfig, devConfig)];
};
