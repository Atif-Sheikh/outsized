import {
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  hasError: false,
  allCategory: [],
  message: ""
};

export const StageCategory = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_SUCCESS:
      return { ...state, isLoading: true, message: action.message };
    case ADD_CATEGORY_FAILED:
      return { ...state, isLoading: false, message: action.message };
    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        allCategory: action.payload
      };
    case GET_ALL_CATEGORY_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        allCategory: action.payload
      };
    default:
      return state;
  }
};
