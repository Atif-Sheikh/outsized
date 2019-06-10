import {
  ADD_SACLE_RATING_SUCCESS,
  ADD_SACLE_RATING_FAILED,
  ADD_SACLE_RATING_STARTED,
  GET_ALL_SCALES_STARTED,
  GET_ALL_SCALES_FAILED,
  GET_ALL_SCALES_SUCCESS,
  ADD_SCALES_CRITERIA_SUCCESS,
  ADD_SCALES_CRITERIA_FAILED,
  ADD_SCALES_CRITERIA_STARTED,
  GET_ALL_SCALES_CRITERIA_SUCCESS,
  GET_ALL_SCALES_CRITERIA_FAILED,
  GET_ALL_SCALES_CRITERIA_STARTED,
  CLEAR_MESSAGE
} from "../utils/redux/types";

const initialState = {
  isLoading: false,
  message: "",
  hasError: false,
  clear: false,
  allScales: [],
  allScalesCriteria: []
};

export const scaleRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SACLE_RATING_STARTED:
      return { ...state, isLoading: true };
    case ADD_SACLE_RATING_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        clear: true
      };
    case ADD_SACLE_RATING_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        message: "",
        clear: false
      };
    case GET_ALL_SCALES_STARTED:
      return { ...state, isLoading: true };
    case GET_ALL_SCALES_SUCCESS:
      return {
        ...state,
        allScales: action.payload,
        isLoading: false,
        clear: true
      };
    case GET_ALL_SCALES_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        allScales: [],
        clear: false
      };
    case ADD_SCALES_CRITERIA_STARTED:
      return { ...state, isLoading: true };
    case ADD_SCALES_CRITERIA_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        clear: true
      };
    case ADD_SCALES_CRITERIA_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        message: [],
        clear: false
      };
    case GET_ALL_SCALES_CRITERIA_STARTED:
      return { ...state, isLoading: true };
    case GET_ALL_SCALES_CRITERIA_SUCCESS:
      return {
        ...state,
        allScalesCriteria: action.payload,
        isLoading: false,
        clear: true
      };
    case GET_ALL_SCALES_CRITERIA_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        allScalesCriteria: [],
        clear: false
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        message: "",
        clear: false
      };
    default:
      return state;
  }
};
