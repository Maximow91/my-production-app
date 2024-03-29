import type webpack from "webpack";
import { type BuildOptions } from "./types/types";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    alias: {
      "@": options.paths.src,
    },
  };
}
