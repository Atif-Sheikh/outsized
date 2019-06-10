import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { withSnackbar } from "notistack";
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { styles } from "@styles/clientComponents/Login.styles.js";

class LoginFormComponent extends Component {
  state = {
    email: "",
    password: "",
    emailValid: true,
    passwordValid: true,
    error: ''
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formValidator = async event => {
    event.preventDefault();
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(this.state.email)) {
      await this.setState({
        emailValid: false
      });
    }
    if (this.state.password.length === 0) {
      await this.setState({
        passwordValid: false
      });
    }
    if (this.state.emailValid && this.state.passwordValid) {

    }
  };

  render() {
    let { email, password, emailValid, passwordValid, error } = this.state;
    return (

        <Dialog
            style={styles.rectangle}
            onClose={() => {}}
            open={true}
        >
            <IconButton style={styles.closeIcon} aria-label="Close" onClick={() => {}}>
                <CloseIcon style={styles.icon} />
            </IconButton>
            <div style={styles.FormContainer}>
            <Typography style={styles.headerText}>
                Welcome back to Outsized!
            </Typography>
            {
                error && error.length ? (
                    <Typography style={styles.errorText}>
                        Incorrect email or password
                    </Typography>
                ) : null
            }
          <form
            style={styles.container}
            noValidate
            autoComplete="off"
            onSubmit={event => this.formValidator(event)}
          >
            <TextField
              label="Email Address"
              name="email"
              value={email}
              onChange={event => this.handleInputChange(event)}
              onFocus={() => this.setState({ emailValid: true })}
              style={styles.textField}
              margin="normal"
              helperText={emailValid ? "" : "*Enter A Valid Email"}
              InputLabelProps={{
                style: {
                    width: '101px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: 'rgba(0, 0, 0, 0.87)',
                }
              }}
            />
            <TextField
              label="Password"
              name="password"
              value={password}
              onChange={event => this.handleInputChange(event)}
              style={styles.textFieldPass}
              margin="normal"
              type="password"
              helperText={passwordValid ? "" : "*Enter A Password"}
              onFocus={() => this.setState({ passwordValid: true })}
              InputLabelProps={{
                style: {
                    width: '101px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: 'rgba(0, 0, 0, 0.87)',
                }
              }}
            />
            <div style={styles.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={styles.loginBtn}
                onClick={() => this.setState({ error: "something went wrong" })}
              >
                Login
              </Button>
            </div>
            <div style={styles.divider}>
                <Divider light style={styles.dividerLine} />
                <Typography style={styles.orOperator}>
                    or
                </Typography>
                <Divider light style={styles.dividerLine} />
            </div>
            <div style={styles.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={styles.loginBtnLinkedIn}
              >
                Login with LinkedIn
              </Button>
            </div>
          </form>
            <div style={styles.modalFooter}>
                <Typography style={styles.forgotTypo}>
                    Forgot Password !
                </Typography>
                <Typography style={styles.signupTypo}>
                    <span style={styles.newHere}>New Here ?</span> Signup
                </Typography>
            </div>
          </div>
        </Dialog>
    );
  }
};

export default withSnackbar(LoginFormComponent);
