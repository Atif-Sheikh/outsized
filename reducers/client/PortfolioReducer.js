import {
  CLIENT_RESET_PASSWORD_SUCCESS,
  CLIENT_RESET_PASSWORD_FAILED,
  CLIENT_RESET_PASSWORD_STARTED,
  ADD_RESUME_SUCCESS,
  ADD_RESUME,
  ADD_RESUME_FAILED
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  eamil: "",
  hasError: false,
  message: "",
  success: false,
  token: "",
  resumes: [],
  resumeLoading: false,
  error: ""
};

export const PortfolioReducer = (state = initialState, action) => {
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
    case ADD_RESUME:
      return {
        ...state,
        resumeLoading: true
      };
    case ADD_RESUME_SUCCESS:
      return {
        ...state,
        resumes: action.payload,
        resumeLoading: false
      };
    case ADD_RESUME_FAILED:
      return {
        ...state,
        error: action.payload,
        resumeLoading: false
      };

    default:
      return state;
  }
};
