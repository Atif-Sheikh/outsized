import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { styles } from "@styles/clientComponents/AddEmail.styles.js";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputArea from "../../ReuseableComponents/InputArea";
import Router from "next/Router";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";

import { clientVerifyEmail } from "@actions/client";

class AddEmail extends Component {
  state = {
    email: "",
    emailValid: true
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      emailValid: true
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
    if (this.state.emailValid) {
      this.props.verifyEmail(
        this.state.email,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar,
        Router
      );
    }
  };

  render() {
    const { classes } = this.props;
    const { email, emailValid } = this.state;
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
              className={[classes.headerBack, " material-icons"].join()}
              onClick={() => {}}
            >
              keyboard_backspace
            </i>
            <span className={classes.headerTextChild}>Add Email</span>
          </Typography>
          <IconButton
            className={classes.closeIcon}
            aria-label="Close"
            onClick={() => {}}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
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
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.AddEmailBtn}
                // onClick={() => this.setState({ error: "something went wrong" })}
              >
                Send Verification Link
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verifyEmail: (email, password, enqueueSnackbar, closeSnackbar, Router) =>
      dispatch(
        clientVerifyEmail(
          email,
          password,
          enqueueSnackbar,
          closeSnackbar,
          Router
        )
      )
  };
};

export default withSnackbar(
  connect(
    null,
    mapDispatchToProps
  )(withStyles(styles)(AddEmail))
);
