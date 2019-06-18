import {
  GET_ALL_EMAIL_TEMPLATE_SUCCESS,
  GET_ALL_EMAIL_TEMPLATE_FAILED,
  GET_ALL_EMAIL_TEMPLATE_STARTED
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  hasError: false,
  allEmailsTemplate: []
};

export const allEmailsTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EMAIL_TEMPLATE_STARTED:
      return { ...state, isLoading: true };
    case GET_ALL_EMAIL_TEMPLATE_SUCCESS:
      return { ...state, allEmailsTemplate: action.payload, isLoading: false };
    case GET_ALL_EMAIL_TEMPLATE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        allEmailsTemplate: []
      };
    default:
      return state;
  }
};
