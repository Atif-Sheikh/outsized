import {
  FIRM_SIGNUP_STARTED,
  FIRM_SIGNUP_SUCCESS,
  FIRM_SIGNUP_FAILED,
  ADDED_USER_DATA
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const firmSignUpApi = (
  userData,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  const { fname, websiteLink, name, email, number, password } = userData;
  dispatch(signUpStarted());
  let queryString = `
      mutation {
        firmRegister(firmName:"${fname}", firmLink:"${websiteLink}", adminName:"${name}", adminEmail:"${email}", adminMobile:"${number}", adminPassword:"${password}"){
            token
        }
      }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      localStorage.setItem("token", res.data.firmRegister.token);
      dispatch(
        signUpSuccess({
          token: res.data.firmRegister.token,
          message: "You have successfully logged into your account"
        })
      );
      setTimeout(() => {
        Router.push("/firm/verify-email");
      }, 2000);
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

const signUpSuccess = data => ({
  type: FIRM_SIGNUP_SUCCESS,
  payload: {
    token: data.token,
    message: data.message
  }
});

const signUpStarted = () => ({
  type: FIRM_SIGNUP_STARTED
});

const signUpFailed = error => ({
  type: FIRM_SIGNUP_FAILED,
  payload: error
});
export const storeUser = (userData, Router) => dispatch => {
  dispatch(addedUserData(userData));
  Router.push("/firm/set-password");
};
const addedUserData = data => ({
  type: ADDED_USER_DATA,
  payload: data
});
