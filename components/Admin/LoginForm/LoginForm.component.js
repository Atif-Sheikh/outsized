import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import Router from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";

import { callLoginApi } from "@actions/admin";

import { styles } from "@styles/adminComponents/components/Login.styles";

class LoginFormComponent extends Component {
  state = {
    email: "",
    password: "",
    emailValid: true,
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
    if (this.state.password.length === 0) {
      await this.setState({
        passwordValid: false
      });
    }
    if (this.state.emailValid && this.state.passwordValid) {
      this.props.callLoginApi(
        this.state.email,
        this.state.password,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar,
        Router
      );
    }
  };

  render() {
    let { email, password, emailValid, passwordValid } = this.state;
    console.log("----", this.props.isLoading);
    return (
      <Paper style={styles.LoginContainer}>
        <Typography variant="h4" gutterBottom style={styles.grow}>
          Login
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
              onFocus={() => this.setState({ emailValid: true })}
              style={styles.textField}
              margin="normal"
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
              style={styles.textFieldPass}
              margin="normal"
              type="password"
              helperText={passwordValid ? "" : "*Enter A Password"}
              onFocus={() => this.setState({ passwordValid: true })}
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
                Login
              </Button>
              {this.props.isLoading && (
                <CircularProgress size={28} style={styles.buttonProgress} />
              )}
            </div>
            <div style={styles.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={styles.margin}
                onClick={() => {
                  localStorage.setItem("state", "admin");
                }}
              >
                <Link href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81742vq7hot2j7&redirect_uri=http%3A%2F%2F13.232.136.59%3A3000%2Flinkedin-oauth&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social">
                  <a style={{ color: "white", textDecoration: "none" }}>
                    Login with LinkedIn
                  </a>
                </Link>
              </Button>
              {this.props.isLoading && (
                <CircularProgress size={28} style={styles.buttonProgress} />
              )}
            </div>
          </form>
          <div>
            <Button color="inherit" style={styles.suggestionLink}>
              <Link href="/admin/forgot-password">
                <a style={styles.links}>Forgot Password ?</a>
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
    isLoading: state.loginReducer.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    callLoginApi: (email, password, enqueueSnackbar, closeSnackbar, Router) =>
      dispatch(
        callLoginApi(email, password, enqueueSnackbar, closeSnackbar, Router)
      )
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginFormComponent)
);
