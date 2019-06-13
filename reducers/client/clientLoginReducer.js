import {
  CLIENT_LOGIN_SUCCESS,
  CLIENT_LOGIN_FAILED,
  CLIENT_LOGIN_STARTED
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  hasError: false,
  message: "",
  access: false
};

export const clientLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_LOGIN_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case CLIENT_LOGIN_SUCCESS:
      return {
        ...state,
        message: "Login Success",
        token: action.payload.token,
        isLoading: false,
        access: true
      };
    case CLIENT_LOGIN_FAILED:
      return {
        ...state,
        hasError: true,
        message: action.payload,
        isLoading: false,
        access: false
      };
    default:
      return state;
  }
};
