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
  const { email, password, number, name, linkedinUrl } = userData;
  console.log("userData", userData);
  dispatch(signUpStarted());
  let queryString = `
    mutation {
      freelancerRegister(email:"${email}",name:"${name}", linkedinUrl:"${linkedinUrl}",, mobile:"${number}", password:"${password}"){
        token
      }
    }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      localStorage.setItem("token", res.data.freelancerRegister.token);
      dispatch(
        signUpSuccess({
          token: res.data.freelancerRegister.token,
          message: "You have successfully logged into your account"
        })
      );
      console.log("Router", Router);
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
    });
};

const signUpSuccess = (token, message) => ({
  type: DO_FREELANCER_SIGNUP_SUCCESS,
  payload: {
    token,
    message
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
