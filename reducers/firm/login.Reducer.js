import {
  FIRM_LOGIN_SUCCESS,
  FIRM_LOGIN_FAILED,
  FIRM_LOGIN_STARTED
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  hasError: false,
  message: "",
  access: false
};

export const firmLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRM_LOGIN_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case FIRM_LOGIN_SUCCESS:
      return {
        ...state,
        message: "Login Success",
        token: action.payload.token,
        isLoading: false,
        access: true
      };
    case FIRM_LOGIN_FAILED:
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
