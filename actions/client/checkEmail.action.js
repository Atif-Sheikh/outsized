import {
  VALID_EMAIL_CHECK_SUCCESS,
  VALID_EMAIL_CHECK_FAILED,
  VALID_EMAIL_CHECK_STARTED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const doCheckEmail = email => dispatch => {
  dispatch(validEmailStarted());
  let queryString = `mutation {
      checkEmail(email:"${email}"){
        message
      }
    }`;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(validEmailSuccess(res.data.checkEmail.message));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(validEmailFailed(error));
    });
};

const validEmailSuccess = message => ({
  type: VALID_EMAIL_CHECK_SUCCESS,
  payload: message
});

const validEmailStarted = () => ({
  type: VALID_EMAIL_CHECK_STARTED
});

const validEmailFailed = error => ({
  type: VALID_EMAIL_CHECK_FAILED,
  payload: error
});
