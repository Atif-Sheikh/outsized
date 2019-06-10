import request from "./request";
import Router from "next/router";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export async function login(dispatch, credentials) {
  const { data } = await request({
    config: {
      url: `${publicRuntimeConfig.LOGIN_URL}api/v0/authenticate`,
      method: "post",
      data: credentials,
      withCredentials: true
    },
    source,
    skipLoginRetry: true
  });
  dispatch({
    type: "POPULATE_USER",
    payload: data.response
  });

  return data.response;
}

export async function changePassword() {
  const { data } = await request({
    config: {
      url: `${publicRuntimeConfig.LOGIN_URL}change_password`,
      method: "post",
      withCredentials: true,
      params: {
        redirect_to: `${publicRuntimeConfig.LOGIN_URL}api/v0/validate`
      },
      data: {
        user: {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_new_password: newPassword
        }
      }
    }
  });
  return data.response;
}

export async function authenticate(dispatch, userAuthGroup, req) {
  const state = dispatch((_, getState) => {
    return getState();
  });
  if (state.user) {
    return state.user;
  }
  const { data } = await request({
    config: {
      url: `${publicRuntimeConfig.LOGIN_URL}api/v0/authenticate-token`,
      method: "get",
      withCredentials: true
    },
    source: userAuthGroup,
    req
  });
  dispatch({
    type: "POPULATE_USER",
    payload: data.response
  });
  return data.response;
}

export async function logout(dispatch) {
  dispatch({
    type: "POPULATE_USER",
    payload: null
  });
  await request({
    skipLoginRetry: true,
    config: {
      url: `${publicRuntimeConfig.LOGIN_URL}api/v0/logout`,
      withCredentials: true,
      method: "post"
    }
  });
  if (Router.router) Router.router.push("/admin/login");
}
