import {
    SEND_EMAIL_VERIFICATION_SUCCESS,
    SEND_EMAIL_VERIFICATION_FAILED,
    SEND_EMAIL_VERIFICATION
  } from "../../utils/redux/types";
  
  const initialState = {
    isLoading: false,
    eamil: "",
    hasError: false
  };
  
  export const verifyEmail = (state = initialState, action) => {
    switch (action.type) {
      case SEND_EMAIL_VERIFICATION:
        return { ...state, isLoading: true };
      case SEND_EMAIL_VERIFICATION_SUCCESS:
        return { ...state, email: action.payload.email, isLoading: false };
      case SEND_EMAIL_VERIFICATION_FAILED:
        return { ...state, hasError: true, isLoading: false };
      default:
        return state;
    }
};
  