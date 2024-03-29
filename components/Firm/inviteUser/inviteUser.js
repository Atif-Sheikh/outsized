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
import { styles } from "@styles/firmComponents/inviteUser.styles.js";
import InputArea from "../../ReuseableComponents/InputArea";
import { withStyles } from "@material-ui/core/styles";
import Back from "@material-ui/icons/ArrowBack";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "next/link";

// import { firmLoginApi } from "@actions/firm";

class InviteUserComponent extends Component {
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
      this.props.firmLoginApi(
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
            Welcome Rohit!
          </Typography>
          <Typography className={classes.headerTextDiv}>
            You have been invited by Rahul to Designfirm.
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
              label="Personal Email"
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
            <InputArea
              label="Confirm Password"
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
          </form>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  //   return {
  //     token: state.firmLoginReducer.token,
  //     isLoading: state.firmLoginReducer.isLoading,
  //     error: state.firmLoginReducer.message,
  //     access: state.firmLoginReducer.access
  //   };
};
const mapDispatchToProps = dispatch => {
  //   return {
  //     firmLoginApi: (email, password, enqueueSnackbar, closeSnackbar, Router) =>
  //       dispatch(
  //         firmLoginApi(email, password, enqueueSnackbar, closeSnackbar, Router)
  //       )
  //   };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(InviteUserComponent))
);
