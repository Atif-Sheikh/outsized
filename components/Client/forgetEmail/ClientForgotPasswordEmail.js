import React, { Component } from "react";
import { withSnackbar } from "notistack";
import { IconButton, Typography, Button, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { styles } from "@styles/clientComponents/clientForgotPassEmail.styles.js";
import { connect } from "react-redux";
import InputArea from "../../ReuseableComponents/InputArea";
import Router from "next/router";
import { callForgotPasswordApi } from "@actions/client";
import Link from "next/link";

class ClientForgotPassword extends Component {
  state = {
    email: "",
    emailValid: true,
    error: "",
    success: false
  };
  formValidator = async event => {
    event.preventDefault();
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(this.state.email)) {
      await this.setState({
        emailValid: false,
        error: "Please Enter valid Email"
      });
    }
    if (checkEmail.test(this.state.email)) {
      this.setState({
        emailValid: true,
        error: ""
      });
      this.props.callForgotPassword(this.state.email, Router);
    }
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.error, success: nextProps.success });
  }
  render() {
    const { email, emailValid, error, success } = this.state;
    return (
      <div style={styles.paperContainer}>
        <IconButton
          style={styles.closeIcon}
          aria-label="Close"
          onClick={() => {}}
        >
          <CloseIcon style={styles.icon} />
        </IconButton>
        <div style={styles.containerDiv}>
          <Typography style={styles.enterNewPass}>Forgot Password</Typography>
          {error && error.length ? (
            <Typography style={{ color: success ? "green" : "red" }}>
              {error}
            </Typography>
          ) : null}
          <Typography style={styles.lowerTypo}>
            Please enter your username or email address. You will recieve a link
            to
            <br />
            create a new password via email.
          </Typography>
        </div>
        <TextField
          label="Email Address"
          name="email"
          value={email}
          onChange={event => this.setState({ email: event.target.value })}
          style={styles.textFieldEmail}
          margin="normal"
          helperText={emailValid ? "" : `*Enter A  valid email`}
          InputLabelProps={{
            style: {
              width: "101px",
              height: "24px",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "normal",
              fontStyle: "normal",
              fontStretch: "normal",
              lineHeight: 1.5,
              letterSpacing: "normal",
              color: "rgba(0, 0, 0, 0.87)"
            }
          }}
        />
        <div style={styles.btnContainer}>
          <Link href="/login">
            <a style={styles.backToLogin}>Back to Login</a>
          </Link>
          <Button
            variant="contained"
            color="primary"
            style={styles.sendBtn}
            onClick={this.formValidator}
          >
            Send Link
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    token: state.clientForgotPassword.token,
    isLoading: state.clientForgotPassword.isLoading,
    error: state.clientForgotPassword.message,
    success: state.clientForgotPassword.success
  };
};
const mapDispatchToProps = dispatch => {
  return {
    callForgotPassword: (email, rotue) =>
      dispatch(callForgotPasswordApi(email, rotue))
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClientForgotPassword)
);
