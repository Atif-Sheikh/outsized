import {
  FIRM_LOGIN_SUCCESS,
  FIRM_LOGIN_FAILED,
  FIRM_LOGIN_STARTED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const firmLoginApi = (
  email,
  password,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  dispatch(loginStarted());
  let queryString = `
          mutation {
              firmLogin(email:"${email}", password:"${password}"){
                token,
                emailVerified,
                role
            }
          }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      localStorage.setItem("token", res.data.firmLogin.token);
      dispatch(loginSuccess(res.data.firmLogin.token));
      Router.push("/basic-profile");
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(loginFailed(error));
    });
};

const loginSuccess = token => ({
  type: FIRM_LOGIN_SUCCESS,
  payload: {
    token
  }
});

const loginStarted = () => ({
  type: FIRM_LOGIN_STARTED
});

const loginFailed = error => ({
  type: FIRM_LOGIN_FAILED,
  payload: error
});
