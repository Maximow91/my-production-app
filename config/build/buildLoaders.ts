import type webpack from "webpack";
import { type BuildOptions } from "./types/types";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const cssLoader = buildCssLoaders(options.isDev);

  // const tsLoader = {
  //     test: /\.tsx?$/,
  //     use: 'ts-loader',
  //     exclude: /node_modules/
  // }

  return [
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    fileLoader,
    cssLoader,
  ];
}
