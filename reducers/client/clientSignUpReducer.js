import {
  DO_FREELANCER_SIGNUP_SUCCESS,
  DO_FREELANCER_SIGNUP_FAILED,
  DO_FREELANCER_SIGNUP_STARTED,
  VALID_EMAIL_CHECK_SUCCESS,
  VALID_EMAIL_CHECK_FAILED,
  VALID_EMAIL_CHECK_STARTED,
  ADDED_USER_DATA
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  hasError: false,
  message: "",
  userData: {},
  isValidEmail: false,
  error: false
};

export const clientSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
        error: false
      };
    case VALID_EMAIL_CHECK_STARTED:
      return {
        ...state,
        isLoading: true,
        message: "",
        isValidEmail: false,
        error: false
      };
    case VALID_EMAIL_CHECK_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isValidEmail: true
      };
    case VALID_EMAIL_CHECK_FAILED:
      return {
        ...state,
        error: true,
        hasError: true,
        message: action.payload,
        isLoading: false,
        isValidEmail: false
      };
    case DO_FREELANCER_SIGNUP_STARTED:
      return { ...state, isLoading: true, error: false };
    case DO_FREELANCER_SIGNUP_SUCCESS:
      return {
        ...state,
        error: false,
        token: action.payload.token,
        message: "Sign Up Success",
        isLoading: false
      };
    case DO_FREELANCER_SIGNUP_FAILED:
      return {
        ...state,
        error: true,
        message: action.payload,
        hasError: true,
        isLoading: false
      };
    default:
      return state;
  }
};
