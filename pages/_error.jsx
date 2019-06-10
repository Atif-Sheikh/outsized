import React from "react";
import NextError from "next/error";
import logErrorToBugsnag from "@utils/logErrorToBugsnag";

export default class Error extends React.PureComponent {
  static skipLoginCheck = true;
  static fetchPropsForAll = true;
  static getInitialProps({ res, err }) {
    if (__PROD__ && err && !err.bugsnagIgnore) {
      logErrorToBugsnag(err);
    }
    const statusCode =
      (err &&
        ((err.config && err.response && err.response.status) ||
          err.statusCode)) ||
      (res && res.statusCode) ||
      500;
    return { statusCode };
  }

  render() {
    return <NextError statusCode={this.props.statusCode} />;
  }
}
