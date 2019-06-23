import React, { Component } from "react";

const withSignup = WrappedComponent => {
  class ClientBaseClassComponent extends Component {
    state = {
      message: "",
      allow: false,
      error: true
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.isValidEmail) {
        this.setState({
          message: nextProps.message,
          allow: nextProps.isValidEmail,
          error: nextProps.error
        });
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleInputChange={this.handleInputChange}
        />
      );
    }
  }
  return ClientBaseClassComponent;
};

export default withSignup;
