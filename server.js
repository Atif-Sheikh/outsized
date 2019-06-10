global.__SERVER__ = true;
global.__PROD__ = process.env.NODE_ENV === "production";

const bugsnag = require("@bugsnag/js");
const bugsnagPluginExpress = require("@bugsnag/plugin-express");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const loadEnv = require("dotenv").config;
const appVersion = require("./app_version");
const _nextServer = require("next-server");
const readFileSync = require("fs").readFileSync;
const createServer = require("https").createServer;
const path = require("path");
const fetch = require('node-fetch');
global.fetch = fetch

const nextServer = __PROD__ ? _nextServer : require("next");

const env = loadEnv();

let bugsnagMiddleware;
if (__PROD__ && env.parsed && env.parsed.BUGSNAG_API_SERVER) {
  const _bugsnagClient = bugsnag({
    apiKey: env.parsed.BUGSNAG_API_SERVER,
    releaseStage: env.parsed.BUGSNAG_ENV || "debug",
    notifyReleaseStages: ["production", "staging"],
    appVersion: appVersion.version()
  });
  _bugsnagClient.use(bugsnagPluginExpress);
  bugsnagMiddleware = _bugsnagClient.getPlugin("express");

  global.bugsnagClient = _bugsnagClient;
}

const server = express();
const next = nextServer({ dev: !__PROD__ });
const defaultRequestHandler = next.getRequestHandler();
const PORT = process.env.PORT || 443;

const URL_MAPPING = {}; /*{
  "/opt-out/:token": { url: "/optout", params: {} },
  "/opt-in/:token": { url: "/optout", params: { optAction: "in" } }
};*/

next.prepare().then(() => {
  // if (__PROD__) {
  //   server.use("/_next/static", compression());
  // }
  if (bugsnagMiddleware) {
    server.use(bugsnagMiddleware.requestHandler);
  }
  server.use(morgan("tiny"));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  Object.keys(URL_MAPPING).forEach(key => {
    server.get(key, (req, res) => {
      const actualPage = URL_MAPPING[key].url;
      const queryParams = Object.assign(
        {},
        URL_MAPPING[key].params,
        req.query,
        req.params
      );
      return next.render(req, res, actualPage, queryParams);
    });
  });

  server.get("*", (req, res) => defaultRequestHandler(req, res));
  if (bugsnagMiddleware) {
    server.use(bugsnagMiddleware.errorHandler);
  }
  if (process.env.SECURE && process.env.SECURE !== "false" && false) {
    /* this is for running https server
    const privateKey = readFileSync(path.resolve("server.key")).toString();
    const certificate = readFileSync(path.resolve("server.crt")).toString();
    const options = { key: privateKey, cert: certificate };
    const httpsServer = createServer(options, server);
    httpsServer.listen(PORT, () => {
      // tslint:disable-next-line no-console
      console.log("[info] Https Server started at port", PORT);
    });
    */
  } else {
    server.listen(PORT, () => {
      // tslint:disable-next-line no-console
      console.log("[info] Server started at port", PORT);
    });
  }
});
