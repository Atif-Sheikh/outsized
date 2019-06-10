import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { callForgotPasswordApi } from "@actions/admin";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";

import { styles } from "@styles/adminComponents/components/ForgotPassword.styles";

class ForgotPasswordComponent extends Component {
  state = {
    email: "",
    emailValid: true
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  emailValidator = event => {
    event.preventDefault();
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(this.state.email)) {
      this.setState({
        emailValid: false
      });
    } else {
      this.props.callForgotPasswordApi(
        this.state.email,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar
      );
    }
  };

  render() {
    const { emailValid, email } = this.state;

    return (
      <Paper style={styles.ForgotPasswordContainer}>
        <div>
          <Typography variant="h4" gutterBottom style={styles.grow}>
            Reset Your Password
          </Typography>
          <div style={styles.FormContainer}>
            <form
              style={styles.container}
              noValidate
              onSubmit={event => this.emailValidator(event)}
              autoComplete="off"
            >
              <TextField
                label="Email"
                value={email}
                onChange={event => this.handleEmailChange(event)}
                onFocus={() => this.setState({ emailValid: true })}
                style={styles.textField}
                margin="normal"
                helperText={emailValid ? "" : "Enter A Valid Email"}
                InputLabelProps={{
                  style: {
                    color: "#a2aab2",
                    fontSize: "14px"
                  }
                }}
              />
              <div style={styles.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={styles.margin}
                >
                  Reset
                </Button>
                {this.props.isLoading && (
                  <CircularProgress size={28} style={styles.buttonProgress} />
                )}
              </div>
            </form>
          </div>
        </div>
        }
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    hasError: state.forgotPasswordReducer.hasError,
    isLoading: state.forgotPasswordReducer.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    callForgotPasswordApi: (email, password, enqueueSnackbar, closeSnackbar) =>
      dispatch(
        callForgotPasswordApi(email, password, enqueueSnackbar, closeSnackbar)
      )
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPasswordComponent)
);
