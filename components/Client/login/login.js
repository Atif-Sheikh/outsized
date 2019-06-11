import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { withSnackbar } from "notistack";
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { styles } from "@styles/clientComponents/Login.styles.js";
import InputArea from '../../ReuseableComponents/InputArea'
import { withStyles } from '@material-ui/core/styles';
import Back from '@material-ui/icons/ArrowBack';

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
    const { classes } = this.props
    return (

        <Dialog
            className={classes.paper}
            onClose={() => {}}
            open={true}
        >
            <IconButton className={classes.closeIcon} aria-label="Close" onClick={() => {}}>
                <CloseIcon className={classes.icon} />
            </IconButton>
            <div className={classes.Header}></div>
            <div className={classes.FormContainerDup}>
              <Typography className={classes.headerText}>
                <IconButton className={classes.back} aria-label="Close" onClick={() => {}}>
                    <Back className={classes.icon} />
                </IconButton>    Welcome back to Outsized!
                </Typography>
                {
                    error && error.length ? (
                        <Typography className={classes.errorText}>
                            Incorrect email or password
                        </Typography>
                    ) : null
                }
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
                onClick={() => this.setState({ error: "something went wrong" })}
              >
                Login
              </Button>
            </div>
            <div className={classes.divider}>
                <Divider light className={classes.dividerLine} />
                <Typography className={classes.orOperator}>
                    or
                </Typography>
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
                <Typography className={classes.forgotTypo}>
                    Forgot Password !
                </Typography>
                <Typography className={classes.signupTypo}>
                    <span className={classes.newHere}>New Here ?</span> Signup
                </Typography>
            </div>
          </div>
        </Dialog>
    );
  }
};

export default withSnackbar(withStyles(styles)(LoginFormComponent));
