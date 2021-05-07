import { Config } from "remotion";

Config.Rendering.setImageFormat("jpeg");

Config.Bundling.overrideWebpackConfig((config) => {
  config.module?.rules
    ?.find(({ test }) => test.toString().includes(".css"))
    ?.use?.push("postcss-loader");
  return config;
});
