import path from 'path'
import { type Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnvs, type BuildPaths, type Mode } from './config/build/types/types'

export default (env: BuildEnvs) => {
    const mode: Mode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000
    const apiUrl = env.apiUrl || 'http://localhost:8000'

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const config: Configuration = buildWebpackConfig({ mode, paths, isDev, port, apiUrl, project: 'frontend' })
    return config
}
