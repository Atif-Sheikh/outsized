import {
    CLIENT_LOGIN_SUCCESS,
    CLIENT_LOGIN_FAILED,
    CLIENT_LOGIN_STARTED
  } from "../../utils/redux/types";
  
  import axios from "../../config/axios";
  
  export const clientLoginApi = (
    email,
    password,
    enqueueSnackbar,
    closeSnackbar,
    Router
  ) => dispatch => {
    dispatch(loginStarted());
    let queryString = `
        mutation {
            freelancerLogin(email:"${email}", password:"${password}"){
                token
                emailVerified
            }
        }
    `;
  
    axios
      .post("/graphql", queryString)
      .then(res => {
        localStorage.setItem('token', res.data.freelancerLogin.token)
        dispatch(loginSuccess(res.data.freelancerLogin.token));
        const key = enqueueSnackbar("You have successfully logged into your account", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        });
        setTimeout(() => {
          closeSnackbar(key)
        }, 2000);
        Router.push("/");
      })
      .catch(err => {
        dispatch(loginFailed(err.message));
        const key = enqueueSnackbar("Please check your credentials and try again", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        });
        setTimeout(() => {
          closeSnackbar(key)
        }, 2000);
      });
  };
  
  const loginSuccess = token => ({
    type: CLIENT_LOGIN_SUCCESS,
    payload: {
      token
    }
  });
  
  const loginStarted = () => ({
    type: CLIENT_LOGIN_STARTED
  });
  
  const loginFailed = error => ({
    type: CLIENT_LOGIN_FAILED,
    payload: {
      error
    }
  });
  