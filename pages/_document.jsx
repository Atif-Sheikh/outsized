import React from "react";

import Document, {
  Head,
  Main,
  NextScript,
  DocumentProps as _DocumentProps
} from "next/document";
import getConfig from "next/config";
import { ServerStyleSheets } from "@material-ui/styles";
const { publicRuntimeConfig } = getConfig();

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = renderPage;
    renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      });

    renderPage();

    return {
      css: sheets.toString()
    };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    const { css } = this.props;
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <script src="https://momentjs.com/downloads/moment.js" />
          <style dangerouslySetInnerHTML={{ __html: css.replace(/\s/g, "") }} />
        </Head>
        <body style={{ margin: "0px" }}>
          <Main />
          <script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=default,Array.prototype.@@iterator,Array.prototype.find,Array.prototype.findIndex,Array.prototype.includes,IntersectionObserver,Intl.~locale.en,Object.entries,Object.values" />
          {publicRuntimeConfig.BUGSNAG_API_CLIENT && (
            <>
              <script src="//d2wy8f7a9ursnm.cloudfront.net/v6/bugsnag.min.js" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.bugsnagClient = bugsnag({
                    apiKey: '${publicRuntimeConfig.BUGSNAG_API_CLIENT}',
                    releaseStage: '${publicRuntimeConfig.BUGSNAG_ENV ||
                      "debug"}',
                    notifyReleaseStages: ['production', 'staging'],
                    appVersion: '${process.env.APP_VERSION}',
                    beforeSend: function (report) {
                      if (report.originalError && report.originalError.bugsnagIgnore) {
                        report.ignore();
                        return false;
                      }
                    }
                  })`
                }}
              />
            </>
          )}
          <NextScript />
        </body>
      </html>
    );
  }
}
