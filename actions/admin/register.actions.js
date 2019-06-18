import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_STARTED,
  LOGIN_SUCCESS
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const callRegisterApi = (
  email,
  password,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  dispatch(registerStarted());

  let queryString = `
        mutation {
            register(email:"${email}",password:"${password}"){
                token
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(registerSuccess());
      localStorage.setItem("token", res.data.register.token);
      dispatch(loginSuccess(res.data.register.token));
      const key = enqueueSnackbar("You have been successfully registered", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
      Router.push("/admin/hiring-process");
    })
    .catch(err => {
      dispatch(registerFailed(err.message));
      const key = enqueueSnackbar("Please check and try again", {
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

const registerSuccess = token => ({
  type: REGISTER_SUCCESS,
  payload: {
    token
  }
});

const registerStarted = () => ({
  type: REGISTER_STARTED
});

const registerFailed = error => ({
  type: REGISTER_FAILED,
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
