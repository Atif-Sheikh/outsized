import {
  ADD_EMAIL_TEMPLATE_SUCCESS,
  ADD_EMAIL_TEMPLATE_FAILED,
  ADD_EMAIL_TEMPLATE_STARTED,
  GET_RETREIVE_EMAIL_TEMPLATE_SUCCESS,
  GET_RETREIVE_EMAIL_TEMPLATE_FAILED,
  GET_RETREIVE_EMAIL_TEMPLATE_STARTED,
  CLEAR_MESSAGE
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  success: false,
  hasError: false,
  addEmailTemplate: "",
  openStageModal: false,
  getRetreiveEmail: {}
};

export const emailTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL_TEMPLATE_STARTED:
      return { ...state, isLoading: true };
    case ADD_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        addEmailTemplate: action.payload.addEmailTemplate.message,
        isLoading: false,
        success: true,
        openStageModal: false
      };
    case ADD_EMAIL_TEMPLATE_FAILED:
      return { ...state, hasError: true, isLoading: false };
    case GET_RETREIVE_EMAIL_TEMPLATE_STARTED:
      return { ...state, isLoading: true };
    case GET_RETREIVE_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        getRetreiveEmail: action.payload,
        isLoading: false,
        success: false,
        openStageModal: false
      };
    case GET_RETREIVE_EMAIL_TEMPLATE_FAILED:
      return {
        ...state,
        hasError: true,
        getRetreiveEmail: {},
        isLoading: false
      };
    case CLEAR_MESSAGE:
      return { ...state, hasError: true, isLoading: false, success: false };
    default:
      return state;
  }
};
