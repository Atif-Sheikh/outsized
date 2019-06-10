const path = require("path");
const pick = require("lodash/object").pick;
const fp = require("lodash/fp");
const appVersion = require("./app_version").version();
const isGitDirty = require("is-git-dirty")();
const dotenv = require("dotenv").config();

const enhance = fp
  .compose
  // require("@zeit/next-bundle-analyzer"),
  // require("@zeit/next-source-maps")({ devtool: "hidden-source-map" }),
  // require("next-images")
  ();

const publicKeys = [
  "BUGSNAG_API_CLIENT",
  "BUGSNAG_ENV",
  "CLIENT_DOMAIN",
  "GAID",
  "LOGIN_URL",
  "SELF_URL"
];

module.exports = enhance({
  publicRuntimeConfig: pick(dotenv.parsed, ...publicKeys),
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "hidden-source-map", // Only for production,
  analyzeBrowser: process.env.NODE_ENV === "production",
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: "static",
      reportFilename: `../static/webpack-bundles/${appVersion}.html`,
      openAnalyzer: !process.env.CI
    }
  },
  ...(!isGitDirty &&
    process.env.NODE_ENV === "production" && {
      generateBuildId: () => appVersion
    }),
  webpack(config, { isServer, dev }) {
    Object.assign(config.resolve.alias || {}, {
      "@actions": path.resolve(__dirname, "actions"),
      "@assets": path.resolve(__dirname, "assets"),
      "@components": path.resolve(__dirname, "components"),
      "@constants": path.resolve(__dirname, "constants"),
      "@controllers": path.resolve(__dirname, "controllers"),
      "@reducers": path.resolve(__dirname, "reducers"),
      "@reducers": path.resolve(__dirname, "reducers"),
      "@selectors": path.resolve(__dirname, "selectors"),
      "@styles": path.resolve(__dirname, "styles"),
      "@typings": path.resolve(__dirname, "typings"),
      "@utils": path.resolve(__dirname, "utils"),
      "@lib": path.resolve(__dirname, "lib")
    });

    const webpack = require("webpack");
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.APP_VERSION": JSON.stringify(appVersion),
        __PROD__: process.env.NODE_ENV === "production",
        __SERVER__: isServer
      })
    );

    if (isServer) {
      config.devtool = "source-map";
    }

    const BUGSNAG_API = isServer
      ? dotenv.parsed.BUGSNAG_API_SERVER
      : dotenv.parsed.BUGSNAG_API_CLIENT;
    if (
      !dev &&
      BUGSNAG_API &&
      (dotenv.parsed.BUGSNAG_ENV === "production" ||
        dotenv.parsed.BUGSNAG_ENV === "staging")
    ) {
      const {
        BugsnagBuildReporterPlugin,
        BugsnagSourceMapUploaderPlugin
      } = require("webpack-bugsnag-plugins");
      config.plugins.push(
        new BugsnagBuildReporterPlugin({
          apiKey: BUGSNAG_API,
          appVersion: appVersion,
          releaseStage: dotenv.parsed.BUGSNAG_ENV
        })
      );

      config.plugins.push(
        new BugsnagSourceMapUploaderPlugin({
          apiKey: BUGSNAG_API,
          appVersion: appVersion,
          overwrite: true,
          releaseStage: dotenv.parsed.BUGSNAG_ENV,
          publicPath: isServer
            ? ".next/server/"
            : `${dotenv.parsed.SELF_URL}_next/`
        })
      );
    }

    return config;
  }
});
