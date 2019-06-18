import request from "./request";
import { REGISTER_USER } from "../constants";

export const register = (email, password) => async dispatch => {
  const text = `mutation {
        register(email:"${email}",password:"${password}"){
            token
        }
    }`;

  const { data } = await request({
    config: {
      url: `/graphql`,
      method: "post",
      data: text
    }
  });
  console.log("here");
  return dispatch({
    type: REGISTER_USER,
    payload: data.response
  });
};
