import {
  ADD_HIRING_TEMPLATE_SUCCESS,
  ADD_HIRING_TEMPLATE_FAILED,
  ADD_HIRING_TEMPLATE_STARTED,
  OPEN_HIRING_TEMPLATE_MODAL,
  CLOSE_HIRING_TEMPLATE_MODAL,
  ADD_RETRREIVE_TEMPLATE_SUCCESS,
  ADD_RETRREIVE_TEMPLATE_FAILED,
  ADD_RETRREIVE_TEMPLATE_STARTED
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  success: false,
  addTemplate: "",
  hasError: false,
  openModal: false,
  addTemplateId: "0",
  retrevieTemplates: []
};

export const hiringTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HIRING_TEMPLATE_STARTED:
      return { ...state, isLoading: true };
    case ADD_HIRING_TEMPLATE_SUCCESS:
      return {
        ...state,
        addTemplate: action.payload.addTemplate.message,
        addTemplateId: action.payload.addTemplate.templateId,
        isLoading: false,
        success: true,
        openModal: false
      };
    case ADD_HIRING_TEMPLATE_FAILED:
      return { ...state, hasError: true, isLoading: false };
    case OPEN_HIRING_TEMPLATE_MODAL:
      return { ...state, hasError: true, openModal: true };
    case CLOSE_HIRING_TEMPLATE_MODAL:
      return { ...state, hasError: true, openModal: false };
    case ADD_RETRREIVE_TEMPLATE_STARTED:
      return { ...state, isLoading: true };
    case ADD_RETRREIVE_TEMPLATE_SUCCESS:
      return {
        ...state,
        retrevieTemplates: action.payload,
        addTemplateId: action.payload.id,
        isLoading: false,
        success: true,
        openModal: false
      };
    case ADD_RETRREIVE_TEMPLATE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        retrevieTemplates: []
      };
    default:
      return state;
  }
};
