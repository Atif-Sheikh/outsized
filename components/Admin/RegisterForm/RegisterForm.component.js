import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Router from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";

import { callRegisterApi } from "@actions/admin/register.actions";

import { styles } from "@styles/adminComponents/components/ReigsterForm.styles";

class RegisterFormComponent extends Component {
  state = {
    email: "",
    emailValid: true,
    password: "",
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
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(this.state.email)) {
      await this.setState({
        emailValid: false
      });
    }
    let checkPassword = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&amp*-_])(?=.*[A-Z])(?!.*\s).*$/;
    if (!checkPassword.test(this.state.password)) {
      await this.setState({
        passwordValid: false
      });
    }
    if (this.state.emailValid && this.state.passwordValid) {
      this.props.callRegisterApi(
        this.state.email,
        this.state.password,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar,
        Router
      );
    }
  };

  removeValidation = key => {
    this.setState({ [key]: true });
  };

  render() {
    const { emailValid, email, password, passwordValid } = this.state;

    return (
      <Paper style={styles.RegisterContainer}>
        <Typography variant="h4" gutterBottom style={styles.grow}>
          Register
        </Typography>
        <div style={styles.FormContainer}>
          <form
            style={styles.container}
            noValidate
            autoComplete="off"
            onSubmit={event => this.formValidator(event)}
          >
            <TextField
              label="Email"
              name="email"
              required
              value={email}
              onChange={event => this.handleInputChange(event)}
              onFocus={() => this.removeValidation("emailValid")}
              style={styles.textField}
              helperText={emailValid ? "" : "*Enter A Valid Email"}
              InputLabelProps={{
                style: {
                  color: "#a2aab2",
                  fontSize: "14px"
                }
              }}
            />
            <TextField
              label="Password"
              name="password"
              required
              value={password}
              onChange={event => this.handleInputChange(event)}
              onFocus={() => this.removeValidation("passwordValid")}
              style={styles.textFieldPass}
              margin="normal"
              // variant="outlined"
              type="password"
              helperText={
                passwordValid
                  ? ""
                  : "*Password must be atleast 6 characters with words, numbers and special characters"
              }
            />
            <div style={styles.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={styles.margin}
              >
                Register
              </Button>
              {this.props.isLoading && (
                <CircularProgress size={28} style={styles.buttonProgress} />
              )}
            </div>
          </form>
          <div>
            <Button color="inherit" style={styles.suggestionLink}>
              <Link href="/login">
                <a style={styles.links}>Already have an account? Log In</a>
              </Link>
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.loginReducer.token,
    isLoading: state.registerReducer.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    callRegisterApi: (
      email,
      password,
      enqueueSnackbar,
      closeSnackbar,
      Router
    ) =>
      dispatch(
        callRegisterApi(email, password, enqueueSnackbar, closeSnackbar, Router)
      )
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterFormComponent)
);
