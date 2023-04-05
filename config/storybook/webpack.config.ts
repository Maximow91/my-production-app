import { type BuildPaths } from '../build/types/types'
import { type WebpackConfiguration } from 'webpack-dev-server'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { type RuleSetRule } from 'webpack'

export default ({ config }: { config: WebpackConfiguration }) => {
    const paths: BuildPaths = {
        entry: '',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    // @ts-expect-error
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config?.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config.module?.rules?.push(buildCssLoaders(true))

    return config
}
