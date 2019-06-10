import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_STARTED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const callLoginApi = (
  email,
  password,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  dispatch(loginStarted());

  let queryString = `
      mutation {
          login(email:"${email}",password:"${password}"){
              token
          }
      }
  `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      localStorage.setItem('token', res.data.login.token)
      dispatch(loginSuccess(res.data.login.token));
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
      Router.push("/admin/hiring-process");
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
  type: LOGIN_SUCCESS,
  payload: {
    token
  }
});

const loginStarted = () => ({
  type: LOGIN_STARTED
});

const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: {
    error
  }
});
