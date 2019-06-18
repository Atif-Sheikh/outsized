import React, { Component } from "react";
import { withSnackbar } from "notistack";
import { Typography, Dialog, Button, TextField } from "@material-ui/core";
import { styles } from "./node_modules/@styles/clientComponents/clientNewPassword.styles.js.js";
import { connect } from "react-redux";
import InputArea from "../../ReuseableComponents/InputArea";
import Router from "next/router";
import { clientResetPasswordApi } from "./node_modules/@actions/client";

class ClientResetPass extends Component {
  state = {
    password: "",
    confirmPassword: "",
    passwordValid: true,
    match: true,
    error: ""
  };
  formValidator = async event => {
    event.preventDefault();
    const {
      password,
      confirmPassword,
      match,
      passwordValid,
      userData
    } = this.state;
    let checkPassword = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&amp*-_])(?=.*[A-Z])(?!.*\s).*$/;
    if (!checkPassword.test(password)) {
      await this.setState({
        passwordValid: false,
        error: "Please Enter Strong Password"
      });
    } else if (!checkPassword.test(confirmPassword)) {
      await this.setState({
        match: false,
        error: "confrim Password does not valid"
      });
    }
    if (checkPassword.test(confirmPassword) && checkPassword.test(password)) {
      await this.setState({
        passwordValid: true
      });
    }
    if (
      password.toLowerCase() !== confirmPassword.toLowerCase() &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      this.setState({ match: true, error: "Password does not match" });
    } else if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password.toLowerCase() === confirmPassword.toLowerCase()
    ) {
      const qs = Router.router.query;
      const code = qs.code;
      this.props.clientResetPassword(password, code, Router);
    }
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.message, sucsess: nextProps.sucsess });
  }
  handleInputChange = event => {
    console.log([event.target.name], event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      passwordValid: true,
      match: true
    });
  };
  render() {
    const {
      password,
      confirmPassword,
      passwordValid,
      match,
      error
    } = this.state;
    const { sucsess } = this.props;
    return (
      <div style={styles.paperContainer}>
        <Typography variant="h5" style={styles.typos}>
          Enter New Password
        </Typography>
        {error && error.length ? (
          <Typography style={{ color: sucsess ? "green" : "red" }}>
            {error}
          </Typography>
        ) : null}
        <Typography style={styles.lowerTypo}>
          Hint: the password should be atleast twelve characters long. To make{" "}
          <br />
          it stronger, use upper and lower case letters, numbers, and symbols{" "}
          <br />
          like ! " ? $ % ^ & ).
        </Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={event => this.formValidator(event)}
        >
          <InputArea
            styleprops={styles.textFieldPass}
            label="Password"
            name="password"
            type="password"
            handleInputChange={event => this.handleInputChange(event)}
            validation={passwordValid}
            value={password}
            helperText={
              passwordValid
                ? ""
                : "*Password must be atleast 6 characters with words, numbers and special characters"
            }
          />
          <InputArea
            styleprops={styles.textFieldPass}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleInputChange={event => this.handleInputChange(event)}
            validation={match}
            helperText={match ? "" : "password does not match"}
          />

          <div style={styles.btnContainer}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={styles.resetBtn}
              // onClick={this.formValidator}
            >
              Reset Passwordsss
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    token: state.clientResetPassword.token,
    isLoading: state.clientResetPassword.isLoading,
    error: state.clientResetPassword.message,
    sucsess: state.clientResetPassword.sucsess
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clientResetPassword: (password, code, go) =>
      dispatch(clientResetPasswordApi(password, code, go))
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClientResetPass)
);
