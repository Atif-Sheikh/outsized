import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import withMaterial from "@utils/initMaterial";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import ModalSync from "../components/Modal/Modal";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modelData: {}
    };
  }
  openModal = modelData => {
    this.setState({ open: true, modelData: modelData });
  };
  closeModal = () => {
    this.setState({ open: false, modelData: {} });
  };
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <SnackbarProvider maxSnack={3}>
          <Provider store={reduxStore}>
            <ModalSync open={this.state.open} closeModal={this.closeModal} />
            <Component
              {...pageProps}
              openModal={this.openModal}
              closeModal={this.closeModal}
            />
          </Provider>
        </SnackbarProvider>
      </Container>
    );
  }
}

export default withReduxStore(withMaterial(MyApp));
