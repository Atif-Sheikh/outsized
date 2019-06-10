import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import withMaterial from "@utils/initMaterial";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <SnackbarProvider maxSnack={3}>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </SnackbarProvider>
      </Container>
    );
  }
}

export default withReduxStore(withMaterial(MyApp));
