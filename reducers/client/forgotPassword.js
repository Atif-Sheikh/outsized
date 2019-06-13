import {
  CLIENT_FORGOT_PASSWORD_SUCCESS,
  CLIENT_FORGOT_PASSWORD_FAILED,
  CLIENT_FORGOT_PASSWORD_STARTED,
  EMAIL_DOES_NOT_EXIST
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  eamil: "",
  hasError: false,
  message: "",
  success: false,
  token: ""
};

export const clientForgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_FORGOT_PASSWORD_STARTED:
      return { ...state, isLoading: true, message: "", success: false };
    case CLIENT_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload,
        success: true,
        isLoading: false
      };
    case CLIENT_FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        hasError: true,
        message: action.payload,
        isLoading: false,
        success: false
      };
    case EMAIL_DOES_NOT_EXIST:
      return {
        ...state,
        hasError: true,
        message: action.payload,
        isLoading: false,
        success: false
      };
    default:
      return state;
  }
};
