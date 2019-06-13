import {
  CLIENT_FORGOT_PASSWORD_SUCCESS,
  CLIENT_FORGOT_PASSWORD_FAILED,
  CLIENT_FORGOT_PASSWORD_STARTED,
  EMAIL_DOES_NOT_EXIST
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const callForgotPasswordApi = email => dispatch => {
  dispatch(forgotPasswordStarted());

  let queryString = `
        mutation {
            forgotPassword(email:"${email}"){
                message
            }
        }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(forgotPasswordSuccess(res.data.forgotPassword.message));
    })
    .catch(err => {
      if (err.response.status === 400) {
        const key = "This email does not exist in our records";
        dispatch(emailDoesNotExists(key));
      } else {
        const error =
          err.response &&
          err.response.data &&
          err.response.data.errors &&
          err.response.data.errors[0]
            ? err.response.data.errors[0]
            : err.message;
        dispatch(forgotPasswordFailed(error));
      }
    });
};

const forgotPasswordSuccess = message => ({
  type: CLIENT_FORGOT_PASSWORD_SUCCESS,
  payload: message
});

const forgotPasswordStarted = () => ({
  type: CLIENT_FORGOT_PASSWORD_STARTED
});

const forgotPasswordFailed = error => ({
  type: CLIENT_FORGOT_PASSWORD_FAILED,
  payload: error
});

const emailDoesNotExists = error => ({
  type: EMAIL_DOES_NOT_EXIST,
  payload: error
});
