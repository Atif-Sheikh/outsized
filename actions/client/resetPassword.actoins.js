import {
  CLIENT_RESET_PASSWORD_SUCCESS,
  CLIENT_RESET_PASSWORD_FAILED,
  CLIENT_RESET_PASSWORD_STARTED,
  LOGIN_SUCCESS
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const clientResetPasswordApi = (password, code, goto) => dispatch => {
  dispatch(resetPasswordStarted());

  let queryString = `
            mutation {
                resetPasswordWithCode(password:"${password}", code:"${code}"){
                    message
                }
            }
        `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(resetPasswordSuccess(res.data.resetPasswordWithCode.message));
      goto.push("/forgot");
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(resetPasswordFailed(error));
    });
};

const resetPasswordSuccess = message => ({
  type: CLIENT_RESET_PASSWORD_SUCCESS,
  payload: message
});

const resetPasswordStarted = () => ({
  type: CLIENT_RESET_PASSWORD_STARTED
});

const resetPasswordFailed = error => ({
  type: CLIENT_RESET_PASSWORD_FAILED,
  payload: error
});

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: {
    token
  }
});
