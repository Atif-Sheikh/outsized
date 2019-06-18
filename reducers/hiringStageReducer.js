import {
  ADD_HIRING_STAGE_SUCCESS,
  ADD_HIRING_STAGE_FAILED,
  ADD_HIRING_STAGE_STARTED,
  OPEN_HIRING_STAGE_MODAL,
  CLOSE_HIRING_STAGE_MODAL,
  EDIT_HIRING_STAGE_SUCCESS,
  EDIT_HIRING_STAGE_FAILED,
  EDIT_HIRING_STAGE_STARTED,
  GET_HIRING_STAGES_CATEGORIES_SUCCESS,
  GET_HIRING_STAGES_SUCCESS
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  success: false,
  hasError: false,
  addStage: "",
  categories: [],
  stages: [],
  openStageModal: false,
  message: ""
};

export const hiringStageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HIRING_STAGES_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories
      };
    case GET_HIRING_STAGES_SUCCESS:
      return {
        ...state,
        stages: action.payload.stages
      };
    case ADD_HIRING_STAGE_STARTED:
      return { ...state, isLoading: true };
    case ADD_HIRING_STAGE_SUCCESS:
      return {
        ...state,
        addStage: action.payload.addStage.message,
        isLoading: false,
        success: true,
        openStageModal: false
      };
    case ADD_HIRING_STAGE_FAILED:
      return { ...state, hasError: true, isLoading: false };
    case EDIT_HIRING_STAGE_STARTED:
      return { ...state, isLoading: true };
    case EDIT_HIRING_STAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        success: true,
        openStageModal: false
      };
    case EDIT_HIRING_STAGE_FAILED:
      return {
        ...state,
        hasError: true,
        message: action.payload,
        isLoading: false
      };
    case OPEN_HIRING_STAGE_MODAL:
      return { ...state, hasError: true, openStageModal: true };
    case CLOSE_HIRING_STAGE_MODAL:
      return { ...state, hasError: true, openStageModal: false };
    default:
      return state;
  }
};
