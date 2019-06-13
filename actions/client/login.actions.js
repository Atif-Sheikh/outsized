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
      localStorage.setItem("token", res.data.freelancerLogin.token);
      dispatch(loginSuccess(res.data.freelancerLogin.token));
      Router.push("/");
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
  payload: error
});
