import {Configuration} from 'webpack';
import webpack from 'webpack';
import {BuildOptions} from './types/types';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {buildPlugins} from './buildPlugins';
import {buildResolvers} from './buildResolvers';
import {buildLoaders} from './buildLoaders';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const {mode, paths, isDev} = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
