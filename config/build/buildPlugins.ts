import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'

export function buildPlugins (
    options: BuildOptions
): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev),
            __API__: JSON.stringify(options.apiUrl),
            __PROJECT__: JSON.stringify(options.project)
        }),
        new ReactRefreshWebpackPlugin(),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }),
        new CopyPlugin({
            patterns: [
                { from: options.paths.locales, to: options.paths.buildLocales }
            ]
        })
    ]
    if (options.isDev) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
    }
    // @ts-expect-error
    return plugins
}
