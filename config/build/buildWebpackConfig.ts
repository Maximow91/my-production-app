import { type Configuration } from 'webpack'
import { type BuildOptions } from './types/types'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildLoaders } from './buildLoaders'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
