import {
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_STARTED,
  EMAIL_DOES_NOT_EXIST
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const callForgotPasswordApi = (
  email,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
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
      const key = enqueueSnackbar(res.data.forgotPassword.message, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    })
    .catch(err => {
      if (err.response.status === 400) {
        dispatch(emailDoesNotExists());
        const key = enqueueSnackbar(
          "This email does not exist in our records",
          {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            }
          }
        );
        setTimeout(() => {
          closeSnackbar(key);
        }, 2000);
      } else {
        dispatch(forgotPasswordFailed(err.message));
        const key = enqueueSnackbar(
          "Some error occured .. Please try again after some time",
          {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            }
          }
        );
        setTimeout(() => {
          closeSnackbar(key);
        }, 2000);
      }
    });
};

const forgotPasswordSuccess = message => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: {
    message
  }
});

const forgotPasswordStarted = () => ({
  type: FORGOT_PASSWORD_STARTED
});

const forgotPasswordFailed = error => ({
  type: FORGOT_PASSWORD_FAILED,
  payload: {
    error
  }
});

const emailDoesNotExists = () => ({
  type: EMAIL_DOES_NOT_EXIST
});
