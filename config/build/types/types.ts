export type Mode = "development" | "production";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildEnvs {
  mode: Mode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions {
  mode: Mode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: "storybook" | "frontend" | "jest";
}
