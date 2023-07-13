import { type BuildPaths } from '../build/types/types'
import { type WebpackConfiguration } from 'webpack-dev-server'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { DefinePlugin, type RuleSetRule } from 'webpack'

export default ({ config }: { config: WebpackConfiguration }) => {
    const paths: BuildPaths = {
        entry: '',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    config.resolve!.modules!.unshift(paths.src)
    // @ts-expect-error
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if ((rule?.test as string)?.includes) {
            if ((rule.test as string).includes('svg')) {
                return { ...rule, exclude: /\.svg$/i }
            }
        }

        return rule
    })

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config.module?.rules?.push(buildCssLoaders(true))

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('')
    }))

    return config
}
