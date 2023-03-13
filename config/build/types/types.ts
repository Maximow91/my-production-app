export type Mode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface BuildEnvs {
  mode: Mode;
  port: number;
}

export interface BuildOptions {
  mode: Mode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
