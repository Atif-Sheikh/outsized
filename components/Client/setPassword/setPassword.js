import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "@styles/clientComponents/SetPassword.styles.js";
import InputArea from "../../ReuseableComponents/InputArea";
import { connect } from "react-redux";
import { clientSignUpApi } from "@actions/client";
import Router from "next/router";

class SetPasswordFormComponent extends Component {
  state = {
    password: "",
    confirmPassword: "",
    passwordValid: true,
    match: true,
    message: "",
    userData: {},
    error: false
  };

  handleInputChange = event => {
    console.log([event.target.name], event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      passwordValid: true,
      match: true
    });
  };
  componentDidMount(props) {
    if (this.props.userData) {
      this.setState({ userData: this.props.userData });
      console.log("setpassword", this.props.userData);
    }
  }
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
        passwordValid: false
      });
    } else if (!checkPassword.test(confirmPassword)) {
      await this.setState({
        match: false
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
      this.setState({
        match: true,
        message: "Password does not match",
        error: true
      });
    } else if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password.toLowerCase() === confirmPassword.toLowerCase()
    ) {
      this.setState({ match: true, message: "" });
      let user = {
        password: password,
        name: userData.name,
        number: [userData.code, userData.number].join(""),
        email: userData.email,
        linkedinUrl: userData.LinkedInUrl
      };
      this.props.clientSignUpApi(
        user,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar,
        Router
      );
    }
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ message: nextProps.message, error: nextProps.error });
  }
  render() {
    const { classes } = this.props;
    const {
      password,
      confirmPassword,
      match,
      passwordValid,
      message,
      error
    } = this.state;

    return (
      <Dialog
        // style={styles.rectangle}
        className={classes.paper}
        onClose={() => {}}
        open={true}
      >
        <div className={classes.Header} />
        <div className={classes.headerContainer}>
          <Typography className={classes.headerText}>
            <i
              class="material-icons"
              onClick={() => {
                Router.push("/signup");
              }}
            >
              keyboard_backspace
            </i>
            <span className={classes.headerTextChild}>Set password</span>
          </Typography>
          <IconButton
            className={classes.closeIcon}
            aria-label="Close"
            onClick={() => {}}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>
        {message && message.length ? (
          <Typography
            style={{ color: !error ? "green" : "red", paddingLeft: 20 }}
            className={classes.messageText}
          >
            {message}
            {/* rohit.yadav@gmail.com is already registered with outsized. Please use a different email address or<span className={classes.signupTypo}> login.</span> */}
          </Typography>
        ) : null}
        <div className={classes.FormContainer}>
          <form
            className={classes.container}
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
              handleInputChange={event => this.handleInputChange(event)}
              validation={match}
              helperText={match ? "" : "password does not match"}
            />
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.SignUpBtn}
                // onClick={() => this.setState({ error: "something went wrong" })}
              >
                Signup
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    token: state.clientSignUpReducer.token,
    isLoading: state.clientSignUpReducer.isLoading,
    userData: state.clientSignUpReducer.userData,
    message: state.clientSignUpReducer.message,
    error: state.clientSignUpReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clientSignUpApi: (data, snackShow, snackHide, goto) =>
      dispatch(clientSignUpApi(data, snackShow, snackHide, goto))
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(SetPasswordFormComponent))
);
