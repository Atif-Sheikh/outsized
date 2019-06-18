import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Router from "next/router";
import { styles } from "@styles/clientComponents/Login.styles.js";
import InputArea from "../../ReuseableComponents/InputArea";
import { withStyles } from "@material-ui/core/styles";
import Back from "@material-ui/icons/ArrowBack";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "next/link";

import { clientLoginApi } from "@actions/client";

class LoginFormComponent extends Component {
  state = {
    email: "",
    password: "",
    emailValid: true,
    passwordValid: true,
    error: "",
    access: false
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      emailValid: true,
      passwordValid: true
    });
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.error, access: nextProps.access });
  }
  formValidator = async event => {
    event.preventDefault();
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(this.state.email)) {
      await this.setState({
        emailValid: false,
        error: "Please Enter valid Email"
      });
    }
    let checkPassword = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&amp*-_])(?=.*[A-Z])(?!.*\s).*$/;
    if (!checkPassword.test(this.state.password)) {
      await this.setState({
        passwordValid: false,
        error: "Please Enter valid Email and Password"
      });
    }
    if (this.state.emailValid && this.state.passwordValid) {
      this.props.clientLoginApi(
        this.state.email,
        this.state.password,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar,
        Router
      );
    }
  };

  render() {
    let {
      email,
      password,
      emailValid,
      passwordValid,
      error,
      access
    } = this.state;
    const { classes } = this.props;
    return (
      <Dialog className={classes.paper} onClose={() => {}} open={true}>
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => {}}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <div className={classes.Header} />
        <div className={classes.FormContainerDup}>
          <Typography className={classes.headerText}>
            <IconButton
              className={classes.back}
              aria-label="Close"
              onClick={() => {}}
            >
              <Back className={classes.icon} />
            </IconButton>{" "}
            Welcome back to Outsized!
          </Typography>
          {error && error.length ? (
            <Typography
              className={classes.errorText}
              style={{ color: access ? "green" : "red" }}
            >
              {error}
            </Typography>
          ) : null}
        </div>
        <div className={classes.FormContainer}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={event => this.formValidator(event)}
          >
            <InputArea
              label="Email Address"
              name="email"
              value={email}
              handleInputChange={event => this.handleInputChange(event)}
              onFocus={() => this.setState({ emailValid: true })}
              styleprops={styles.textFieldPass}
              validation={emailValid}
            />
            <InputArea
              label="Password"
              name="password"
              value={password}
              handleInputChange={event => this.handleInputChange(event)}
              margin="normal"
              type="password"
              styleprops={styles.textFieldPass}
              validation={passwordValid}
            />
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.loginBtn}
              >
                {this.props.isLoading ? (
                  <CircularProgress size={28} style={styles.buttonProgress} />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
            <div className={classes.divider}>
              <Divider light className={classes.dividerLine} />
              <Typography className={classes.orOperator}>or</Typography>
              <Divider light className={classes.dividerLine} />
            </div>
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.loginBtnLinkedIn}
              >
                Login with LinkedIn
              </Button>
            </div>
          </form>
          <div className={classes.modalFooter}>
            <Link href="/forgot-password">
              <Typography className={classes.forgotTypo}>
                <a>Forgot Password !</a>
              </Typography>
            </Link>
            <Link href="/signup">
              <Typography className={classes.signupTypo}>
                <span className={classes.newHere}>New Here ?</span>{" "}
                <a>Signup</a>
              </Typography>
            </Link>
          </div>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.clientLoginReducer.token,
    isLoading: state.clientLoginReducer.isLoading,
    error: state.clientLoginReducer.message,
    access: state.clientLoginReducer.access
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clientLoginApi: (email, password, enqueueSnackbar, closeSnackbar, Router) =>
      dispatch(
        clientLoginApi(email, password, enqueueSnackbar, closeSnackbar, Router)
      )
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(LoginFormComponent))
);
