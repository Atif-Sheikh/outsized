import {
  CLIENT_RESET_PASSWORD_SUCCESS,
  CLIENT_RESET_PASSWORD_FAILED,
  CLIENT_RESET_PASSWORD_STARTED
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  eamil: "",
  hasError: false,
  message: "",
  success: false,
  token: ""
};

export const clientResetPassword = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_RESET_PASSWORD_STARTED:
      return { ...state, isLoading: true, message: "", success: false };
    case CLIENT_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload,
        success: true,
        isLoading: false
      };
    case CLIENT_RESET_PASSWORD_FAILED:
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
