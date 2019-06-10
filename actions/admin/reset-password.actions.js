import {
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_STARTED,
  LOGIN_SUCCESS
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const callResetPasswordApi = (
  mode,
  password,
  data,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  dispatch(resetPasswordStarted());

  let queryString;
  if (mode == "token") {
    queryString = `
              mutation {
                  resetPassword(token: "${localStorage.getItem(
                    "token"
                  )}", password:"${password}"){
                      message
                  }
              }
          `;
  } else {
    queryString = `
          mutation {
              resetPasswordWithCode(password:"${password}", code:"${data}"){
                  message
              }
          }
      `;
  }

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(resetPasswordSuccess(res));
      const key = enqueueSnackbar(
        res.data[mode == "token" ? "resetPassword" : "resetPasswordWithCode"]
          .message,
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
      dispatch(resetPasswordFailed(err.message));
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
    });
};

const resetPasswordSuccess = token => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: {
    token
  }
});

const resetPasswordStarted = () => ({
  type: RESET_PASSWORD_STARTED
});

const resetPasswordFailed = error => ({
  type: RESET_PASSWORD_FAILED,
  payload: {
    error
  }
});

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: {
    token
  }
});
