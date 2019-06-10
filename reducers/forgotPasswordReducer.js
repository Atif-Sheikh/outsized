import {
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_STARTED,
  EMAIL_DOES_NOT_EXIST
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  success: false,
  message: "",
  hasError: false
};

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_STARTED:
      return { ...state, isLoading: true };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        success: true,
        hasError: false
      };
    case FORGOT_PASSWORD_FAILED:
      return { ...state, hasError: true, isLoading: false, success: false };
    case EMAIL_DOES_NOT_EXIST:
      return { ...state, hasError: true, isLoading: false, success: false };
    default:
      return state;
  }
};
