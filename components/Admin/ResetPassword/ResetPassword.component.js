import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import queryString from "query-string";
import Router from "next/Router";
import CircularProgress from "@material-ui/core/CircularProgress";

import { callResetPasswordApi } from "@actions/admin";

import { styles } from "@styles/adminComponents/components/ResetPassword.styles";

class ResetPasswordComponent extends Component {
  state = {
    password: "",
    repassword: "",
    match: true,
    passwordValid: true
  };

  componentDidMount() {
    if (this.props.token) {
      Router.push("/");
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formValidator = async event => {
    event.preventDefault();
    let checkPassword = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&amp*-_])(?=.*[A-Z])(?!.*\s).*$/;
    if (!checkPassword.test(this.state.password)) {
      await this.setState({
        passwordValid: false
      });
    }
    if (this.state.password !== this.state.repassword) {
      await this.setState({ match: false });
    }
    if (this.state.passwordValid && this.state.match) {
      const qs = Router.router.query;
      const code = qs.code;
      if (code) {
        this.props.callResetPasswordApi(
          "code",
          this.state.password,
          code,
          this.props.enqueueSnackbar,
          this.props.closeSnackbar,
          Router
        );
      } else {
        this.props.callResetPasswordApi(
          "token",
          this.state.password,
          code,
          this.props.enqueueSnackbar,
          this.props.closeSnackbar,
          Router
        );
      }
    }
  };

  render() {
    const { match, password, repassword, passwordValid } = this.state;

    return (
      <Paper style={styles.ResetPasswordContainer}>
        <Typography variant="h4" gutterBottom style={styles.grow}>
          Reset Your Password
        </Typography>
        <div style={styles.FormContainer}>
          <form
            style={styles.container}
            noValidate
            onSubmit={event => this.formValidator(event)}
            autoComplete="off"
          >
            <TextField
              label="Password"
              name="password"
              value={password}
              required
              onChange={event => this.handleInputChange(event)}
              onFocus={() =>
                this.setState({ passwordValid: true, match: true })
              }
              style={styles.textFieldPassword}
              margin="normal"
              type="password"
              helperText={
                passwordValid
                  ? ""
                  : "*Password must be atleast 6 characters with words, numbers and special characters"
              }
              InputLabelProps={{
                style: {
                  color: "#a2aab2",
                  fontSize: "14px"
                }
              }}
            />
            <TextField
              label="Confirm Password"
              name="repassword"
              value={repassword}
              required
              onChange={event => this.handleInputChange(event)}
              onFocus={() =>
                this.setState({ passwordValid: true, match: true })
              }
              style={styles.textFieldPassword}
              margin="normal"
              helperText={
                match
                  ? passwordValid
                    ? ""
                    : "Retype the password"
                  : "Passwords Must Match."
              }
              type="password"
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
                size="large"
                color="primary"
                style={styles.margin}
                onClick={this.formValidator}
              >
                Reset
              </Button>
              {this.props.isLoading && (
                <CircularProgress size={28} style={styles.buttonProgress} />
              )}
            </div>
          </form>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.loginReducer.token,
    isLoading: state.resetPasswordReducer.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    callResetPasswordApi: (
      data,
      password,
      code,
      enqueueSnackbar,
      closeSnackbar,
      Router
    ) =>
      dispatch(
        callResetPasswordApi(
          data,
          password,
          code,
          enqueueSnackbar,
          closeSnackbar,
          Router
        )
      )
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPasswordComponent)
);
