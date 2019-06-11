import {
    CLIENT_LOGIN_SUCCESS,
    CLIENT_LOGIN_FAILED,
    CLIENT_LOGIN_STARTED
  } from "../../utils/redux/types";
  
  const initialState = {
    isLoading: false,
    token: "",
    hasError: false
  };
  
  export const clientLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLIENT_LOGIN_STARTED:
        return { ...state, isLoading: true };
      case CLIENT_LOGIN_SUCCESS:
        return { ...state, token: action.payload.token, isLoading: false };
      case CLIENT_LOGIN_FAILED:
        return { ...state, hasError: true, isLoading: false };
      default:
        return state;
    }
  };
  