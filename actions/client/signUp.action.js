import {
  DO_FREELANCER_SIGNUP_SUCCESS,
  DO_FREELANCER_SIGNUP_FAILED,
  DO_FREELANCER_SIGNUP_STARTED,
  ADDED_USER_DATA
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const clientSignUpApi = (
  userData,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  const { email, password, number, name } = userData;
  dispatch(signUpStarted());
  let queryString = `
    mutation {
      freelancerRegister(email:"${email}",name:"${name}", linkedinUrl:"www.google.com", mobile:"${number}", password:"${password}"){
        token
      }
    }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      localStorage.setItem("token", res.data.freelancerRegister.token);
      dispatch(signUpSuccess(res.data.freelancerRegister.token));
      const key = enqueueSnackbar(
        "You have successfully logged into your account",
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
      // Router.push("/");
    })
    .catch(err => {
      const error =
        err.response &&
        err.response &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(signUpFailed(error));
      const key = enqueueSnackbar(error, {
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

const signUpSuccess = token => ({
  type: DO_FREELANCER_SIGNUP_SUCCESS,
  payload: {
    token
  }
});

const signUpStarted = () => ({
  type: DO_FREELANCER_SIGNUP_STARTED
});

const signUpFailed = error => ({
  type: DO_FREELANCER_SIGNUP_FAILED,
  payload: error
});
export const storeUser = (userData, Router) => dispatch => {
  dispatch(addedUserData(userData));
  Router.push("/set-password");
};
const addedUserData = data => ({
  type: ADDED_USER_DATA,
  payload: data
});
