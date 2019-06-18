import {
  SEND_EMAIL_VERIFICATION_SUCCESS,
  SEND_EMAIL_VERIFICATION_FAILED,
  SEND_EMAIL_VERIFICATION,
  CLEAR_TERMS_MODAL
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const clientVerifyEmailCode = (
  code,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(loginStarted());
  let queryString = `
        mutation {
            freelancerEmailVerification(code:"${code}"){
                message
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(loginSuccess({ res, valid: true }));
      const key = enqueueSnackbar(
        res.data.freelancerEmailVerification.message,
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        }
      );
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    })
    .catch(err => {
      // dispatch(loginFailed(err.message));
      const key = enqueueSnackbar("Invalid email", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    });
};

const loginSuccess = email => ({
  type: SEND_EMAIL_VERIFICATION_SUCCESS,
  payload: {
    email,
    showVerifyScreen: true
  }
});

const loginStarted = () => ({
  type: SEND_EMAIL_VERIFICATION
});

const loginFailed = error => ({
  type: SEND_EMAIL_VERIFICATION_FAILED,
  payload: {
    error
  }
});

export const clearTermsModalComp = () => ({
  type: CLEAR_TERMS_MODAL,
  payload: {
    showVerifyScreen: false
  }
});
