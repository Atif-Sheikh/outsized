import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Back from "@material-ui/icons/ArrowBack";
import { styles } from "@styles/clientComponents/SignUp.styles.js";
import InputArea from "../../ReuseableComponents/InputArea";
import MenuListComposition from "../../ReuseableComponents/NumberSelectoin";
import { storeUser, doCheckEmail } from "@actions/client";
import Router from "next/Router";

class SignUpFormComponent extends Component {
  state = {
    email: "",
    password: "",
    emailValid: true,
    message: "",
    search: "",
    code: "code",
    number: "",
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
  handleInputChange = async event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "email") {
      const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      if (checkEmail.test(event.target.value)) {
        await this.props.doCheckEmail(event.target.value);
        this.setState({ message: "", allow: true });
      } else if (event.target.name === "email" && event.target.value) {
        this.setState({
          message: "Worng email please enter a valid email",
          allow: false,
          error: true
        });
      }
    }
  };
  searching = e => {
    this.setState({ search: e });
  };
  formValidator = async event => {
    event.preventDefault();
    const { email, number, name, code } = this.state;
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(this.state.email)) {
      await this.setState({
        emailValid: false,
        error: true
      });
    }
    if (this.state.password.length === 0) {
      await this.setState({
        passwordValid: false,
        error: true
      });
    }
    if (this.state.code === "code" || !this.state.number.length > 0) {
      this.setState({
        message: "Please select country code & enter phone number",
        allow: true,
        error: true
      });
    } else if (
      this.state.emailValid &&
      this.state.name.trim() !== "" &&
      this.state.number.trim() !== ""
    ) {
      this.props.storeUser(this.state, Router);
    }
  };

  render() {
    let {
      email,
      password,
      emailValid,
      error,
      message,
      number,
      allow
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
        {/* <Paper className={classes.inner}> */}
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
              {/* rohit.yadav@gmail.com is already registered with outsized. Please use a different email address or<span className={classes.signupTypo}> login.</span> */}
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
              handleInputChange={event => this.handleInputChange(event)}
              validation={true}
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
              handleInputChange={event => this.handleInputChange(event)}
              validation={emailValid}
              onFocus={() => this.setState({ emailValid: true })}
            />
            <InputArea
              styleprops={classes.textFieldPass}
              label="LinkedIn profile Url"
              name="LinkedInprofileUrl"
              handleInputChange={event => this.handleInputChange(event)}
              validation={true}
            />
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.SignUpBtn}
                disabled={!allow}
                // onClick={() => this.setState({ message: "something went wrong" })}
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
            <Typography className={classes.signupTypo}>
              <span className={classes.newHere}>
                Already a registered user?
              </span>{" "}
              login
            </Typography>
          </div>
        </div>
        {/* </Paper> */}
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
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

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(SignUpFormComponent))
);
