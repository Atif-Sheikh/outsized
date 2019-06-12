import {
    SEND_EMAIL_VERIFICATION_SUCCESS,
    SEND_EMAIL_VERIFICATION_FAILED,
    SEND_EMAIL_VERIFICATION
  } from "../../utils/redux/types";
  
  import axios from "../../config/axios";
  
  export const clientVerifyEmail = (
    email,
    enqueueSnackbar,
    closeSnackbar,
    Router
  ) => dispatch => {
    dispatch(loginStarted());
    let queryString = `
        mutation {
            checkEmail(email:"${email}"){
                message
            }
        }
    `;
  
    axios
      .post("/graphql", queryString)
      .then(res => {
        dispatch(loginSuccess(email));
        const key = enqueueSnackbar("Verifcation Link Successfully send", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        });
        setTimeout(() => {
          closeSnackbar(key)
        }, 2000);
        Router.push("/verify-email");
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
          closeSnackbar(key)
        }, 2000);
      });
  };
  
  const loginSuccess = email => ({
    type: SEND_EMAIL_VERIFICATION_SUCCESS,
    payload: {
      email
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
  