import path from "path";
import { type Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import {
  type BuildEnvs,
  type BuildPaths,
  type Mode,
} from "./config/build/types/types";

export default (env: BuildEnvs) => {
  const mode: Mode = "development";
  const isDev = mode === "development";
  const port = 3004;
  const apiUrl = "http://localhost:8000";

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    locales: path.resolve(__dirname, "public", "locales"),
    buildLocales: path.resolve(__dirname, "build", "locales"),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project: "frontend",
  });
  return config;
};
