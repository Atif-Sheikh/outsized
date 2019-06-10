import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_STARTED
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  hasError: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload.token, isLoading: false };
    case LOGIN_FAILED:
      return { ...state, hasError: true, isLoading: false };
    default:
      return state;
  }
};
