import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_STARTED
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  success: false,
  token: "",
  hasError: false
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_STARTED:
      return { ...state, isLoading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        success: true
      };
    case REGISTER_FAILED:
      return { ...state, hasError: true, isLoading: false };
    default:
      return state;
  }
};
