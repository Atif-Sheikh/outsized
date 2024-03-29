import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Back from "@material-ui/icons/ArrowBack";
import { styles } from "@styles/clientComponents/SignUp_Password.styles.js";
import InputArea from "@components/ReuseableComponents/InputArea";
import MenuListComposition from "@components/ReuseableComponents/NumberSelectoin";
import { storeUser, doCheckEmail } from "@actions/client";
import Router from "next/router";

import withSignup from "@components/Client/ClientBaseClassComponent";

class SignUp_PasswordFormComponent extends Component {
  state = {
    email: "",
    emailValid: true,
    name: "",
    nameValid: true,
    LinkedInUrl: "",
    linkedInValid: true,
    message: "",
    search: "",
    code: "+91",
    number: "",
    numberValid: true,
    allow: false,
    error: true,
    password: "",
    confirmPassword: "",
    passwordValid: true,
    match: true
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
  handleInputChange = async event => {
    this.setState({
      [event.target.name]: event.target.value,
      linkedInValid: true,
      nameValid: true,
      numberValid: true,
      emailValid: true
    });
  };
  checkEmailApi = async () => {
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (checkEmail.test(this.state.email)) {
      await this.props.doCheckEmail(this.state.email);
      this.setState({ message: "", allow: true });
    } else if (event.target.name === "email" && event.target.value) {
      this.setState({
        message: "Worng email please enter a valid email",
        allow: false,
        error: true
      });
    }
  };

  searching = e => {
    this.setState({ search: e });
  };

  formValidator = async event => {
    event.preventDefault();
    const {
      email,
      number,
      name,
      code,
      password,
      confirmPassword,
      LinkedInUrl,
      emailValid
    } = this.state;
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(email)) {
      await this.setState({
        emailValid: false,
        error: true
      });
    }
    if (name.length === 0) {
      await this.setState({
        nameValid: false
      });
    }
    if (LinkedInUrl.length === 0) {
      await this.setState({
        linkedInValid: false
      });
    }
    if (code === "code" || !number.length > 0) {
      this.setState({
        message: "Please select country code & enter phone number",
        allow: true,
        error: true
      });
    }
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
      this.setState({ match: true, message: "Password does not match" });
    } else if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password.toLowerCase() === confirmPassword.toLowerCase() &&
      emailValid &&
      name.trim() !== "" &&
      number.trim() !== ""
    ) {
      this.props.storeUser(this.state, Router);
    } else {
      this.setState({
        allow: true
      });
    }
  };

  render() {
    let {
      email,
      name,
      nameValid,
      linkedInValid,
      LinkedInUrl,
      emailValid,
      error,
      message,
      number,
      allow,
      match,
      passwordValid
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
            Welcome back to Outsized
          </Typography>
          {message && message.length ? (
            <Typography
              style={{ color: !error ? "green" : "red" }}
              className={classes.errorText}
            >
              {message}
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
              styleprops={styles.textFieldPass}
              label="Name"
              name="name"
              value={name}
              handleInputChange={event => this.handleInputChange(event)}
              validation={nameValid}
              styleprops={styles.textFieldPass}
            />
            <MenuListComposition
              number={number}
              handleInputChange={event => this.handleInputChange(event)}
              code={this.state.code}
              counterCode={code => this.setState({ code: code })}
              search={this.state.search}
              searching={this.searching}
            />
            <InputArea
              styleprops={styles.textFieldPass}
              label="Email Address"
              name="email"
              value={email}
              EmailApi={true}
              checkEmailApi={this.checkEmailApi}
              handleInputChange={event => this.handleInputChange(event)}
              validation={emailValid}
              onFocus={() => this.setState({ emailValid: true })}
            />
            <InputArea
              styleprops={classes.textFieldPass}
              label="LinkedIn profile Url"
              value={LinkedInUrl}
              name="LinkedInUrl"
              handleInputChange={event => this.handleInputChange(event)}
              validation={linkedInValid}
              styleprops={styles.textFieldPass}
            />
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
                disabled={!allow}
              >
                Continue
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
                className={classes.SignUpBtnLinkedIn}
              >
                Signup with LinkedIn
              </Button>
            </div>
          </form>
          <div className={classes.modalFooter}>
            <Link href="/login">
              <Typography className={classes.signupTypo}>
                <span className={classes.newHere}>
                  Already a registered user?
                </span>{" "}
                <a>login</a>
              </Typography>
            </Link>
          </div>
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
    isValidEmail: state.clientSignUpReducer.isValidEmail,
    message: state.clientSignUpReducer.message,
    error: state.clientSignUpReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    storeUser: (data, Router) => dispatch(storeUser(data, Router)),
    doCheckEmail: email => dispatch(doCheckEmail(email))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withSignup(SignUp_PasswordFormComponent)));
