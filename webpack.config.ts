import path from 'path';
import {Configuration} from 'webpack';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildEnvs, BuildPaths, Mode} from './config/build/types/types';

export default (env: BuildEnvs) => {
  const mode: Mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: Configuration = buildWebpackConfig({mode, paths, isDev, port});
  return config;
};
