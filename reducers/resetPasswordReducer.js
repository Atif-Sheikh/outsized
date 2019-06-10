import {
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_STARTED
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  hasError: false
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_STARTED:
      return { ...state, isLoading: true };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, token: action.payload.token, isLoading: false };
    case RESET_PASSWORD_FAILED:
      return { ...state, hasError: true, isLoading: false };
    default:
      return state;
  }
};
