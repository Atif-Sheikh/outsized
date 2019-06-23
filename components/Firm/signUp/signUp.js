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
import { styles } from "@styles/firmComponents/SignUp.styles.js";
import InputArea from "@components/ReuseableComponents/InputArea";
import MenuListComposition from "@components/ReuseableComponents/NumberSelectoin";
import { storeUser, doCheckEmail } from "@actions/Firm";
import Router from "next/router";

import withSignup from "@components/Client/ClientBaseClassComponent";

class SignUpFormComponent extends Component {
  state = {
    email: "",
    password: "",
    emailValid: true,
    fname: "",
    name: "",
    nameValid: true,
    fnameValid: true,
    websiteLink: "",
    websiteLinkValid: true,
    message: "",
    search: "",
    code: "+91",
    number: "",
    numberValid: true,
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
  };
  checkEmailApi = async () => {
    const { email } = this.state;

    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (checkEmail.test(email)) {
      await this.props.doCheckEmail(email);
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
      fname,
      code,
      websiteLink,
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

    if (fname.length === 0) {
      await this.setState({
        fnameValid: false
      });
    }
    if (websiteLink.length === 0) {
      await this.setState({
        websiteLinkValid: false
      });
    }
    if (this.state.code === "code" || !this.state.number.length > 0) {
      this.setState({
        message: "Please select country code & enter phone number",
        allow: true,
        error: true
      });
    } else if (emailValid && name.trim() !== "" && number.trim() !== "") {
      this.props.storeUser(this.state, Router);
    } else {
      this.setState({
        allow: true
      });
    }
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      linkedInValid: true,
      nameValid: true,
      numberValid: true,
      emailValid: true
    });
  };

  render() {
    let {
      email,
      name,
      fname,
      fnameValid,
      nameValid,
      websiteLinkValid,
      websiteLink,
      emailValid,
      error,
      message,
      number,
      allow,
      search,
      code
    } = this.state;

    const { classes } = this.props;
    let condition =
      this.state.name.trim() === "" ||
      this.state.number.trim() === "" ||
      this.state.websiteLink.trim() === "" ||
      this.state.fname.trim() === "" ||
      this.state.email.trim() === ""
        ? false
        : this.state.allow
        ? this.state.allow
        : false;
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
          ) : (
            <Typography
              style={{ color: this.props.isValidEmail ? "green" : "red" }}
              className={classes.errorText}
            >
              {this.props.message}
            </Typography>
          )}
        </div>
        <div className={classes.FormContainer}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={event => this.formValidator(event)}
          >
            <InputArea
              styleprops={classes.textFieldPass}
              label="Firm Name"
              name="fname"
              value={fname}
              handleInputChange={event => this.handleInputChange(event)}
              validation={fnameValid}
              styleprops={classes.textFieldPass}
            />
            <InputArea
              styleprops={classes.textFieldPass}
              label="Your Name"
              name="name"
              value={name}
              handleInputChange={event => this.handleInputChange(event)}
              validation={nameValid}
              styleprops={classes.textFieldPass}
            />
            <InputArea
              styleprops={classes.textFieldPass}
              label="Company website link"
              value={websiteLink}
              name="websiteLink"
              handleInputChange={event => this.handleInputChange(event)}
              validation={websiteLinkValid}
              styleprops={classes.textFieldPass}
            />
            <InputArea
              styleprops={classes.textFieldPass}
              label="Work Email"
              name="email"
              value={email}
              EmailApi={true}
              checkEmailApi={this.checkEmailApi}
              handleInputChange={event => this.handleInputChange(event)}
              validation={emailValid}
              onFocus={() => this.setState({ emailValid: true })}
            />
            <MenuListComposition
              number={number}
              handleInputChange={event => this.handleInputChange(event)}
              code={code}
              counterCode={code => this.setState({ code: code })}
              search={search}
              searching={this.searching}
            />
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.SignUpBtn}
                disabled={!this.props.isValidEmail || !condition}
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
    token: state.firmSignUpReducer.token,
    isLoading: state.firmSignUpReducer.isLoading,
    isValidEmail: state.firmSignUpReducer.isValidEmail,
    message: state.firmSignUpReducer.message,
    error: state.firmSignUpReducer.error
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
)(withStyles(styles)(withSignup(SignUpFormComponent)));
