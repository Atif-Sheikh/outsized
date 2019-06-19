import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_STARTED
} from "../../utils/redux/types";
import axios from "../../config/axios";

export const linkedInAuthAPI = (
  code,
  userType,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  dispatch(loginStarted());
  let queryString = `
        mutation {
            loginWithLinkedin(userType:"${userType}",code:"${code}"){
                token
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      localStorage.setItem("token", res.data.loginWithLinkedin.token);
      let state = localStorage.getItem("state");
      console.log("res", res);
      dispatch(loginSuccess(res.data.loginWithLinkedin));
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
      setTimeout(() => {
        if (state === "admin") {
          Router.push("/admin/hiring-process");
        } else {
          Router.push("/basic-profile");
        }
      }, 2000);
    })
    .catch(err => {
      dispatch(loginFailed(err.message));
      const key = enqueueSnackbar(
        "Please check your credentials and try again",
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

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: {
    token
  }
});

const loginStarted = () => ({
  type: LOGIN_STARTED
});

const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: {
    error
  }
});
