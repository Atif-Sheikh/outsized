import {
  ADD_ALL_TEMPLATE_SUCCESS,
  ADD_ALL_TEMPLATE_FAILED,
  ADD_ALL_TEMPLATE_STARTED
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  hasError: false,
  allTemplate: []
};

export const allTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_TEMPLATE_STARTED:
      return { ...state, isLoading: true };
    case ADD_ALL_TEMPLATE_SUCCESS:
      return { ...state, allTemplate: action.payload, isLoading: false };
    case ADD_ALL_TEMPLATE_FAILED:
      return { ...state, hasError: true, isLoading: false, allTemplate: [] };
    default:
      return state;
  }
};
