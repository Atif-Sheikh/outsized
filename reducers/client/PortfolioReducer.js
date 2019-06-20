import {
  CLIENT_RESET_PASSWORD_SUCCESS,
  CLIENT_RESET_PASSWORD_FAILED,
  CLIENT_RESET_PASSWORD_STARTED,
  ADD_RESUME_SUCCESS,
  ADD_RESUME,
  ADD_RESUME_FAILED,
  ADD_PROJECT_DOCUMENTS,
  ADD_PROJECT_DOCUMENTS_SUCCESS,
  ADD_PROJECT_DOCUMENTS_FAILED,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILED,
  ADD_PROJECT_STARTED,
  DELETE_RESUMS_SUCCESS,
  DELETE_RESUMS_FAILED,
  DELETE_RESUMS_STARTED,
  ADD_STUDY_DOC,
  ADD_STUDY_DOC_SUCCESS,
  ADD_STUDY_DOC_FAILED,
  DELETE_STUDY_DOC,
  DELETE_STUDY_DOC_SUCCESS,
  DELETE_STUDY_DOC_FAILED,
  ADD_CASE_LINK_SUCCESS,
  ADD_CASE_LINK_FAILED,
  ADD_CASE_LINK_STARTED,
  DELETE_CASE_LINK_SUCCESS,
  DELETE_CASE_LINK_FAILED,
  DELETE_CASE_LINK_STARTED
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  eamil: "",
  hasError: false,
  message: "",
  success: false,
  token: "",
  resumes: [],
  caseDoc: [],
  caseLink: [],
  resumeLoading: false,
  error: "",
  projectDoc: [],
  addDocLoading: false,
  allProject: []
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
    case DELETE_RESUMS_STARTED:
      return {
        ...state,
        resumeLoading: true
      };
    case DELETE_RESUMS_SUCCESS:
      return {
        ...state,
        resumes: action.payload,
        resumeLoading: false
      };
    case DELETE_RESUMS_FAILED:
      return {
        ...state,
        error: action.payload,
        resumeLoading: false
      };
    //
    case ADD_STUDY_DOC:
      return {
        ...state,
        resumeLoading: true
      };
    case ADD_STUDY_DOC_SUCCESS:
      return {
        ...state,
        caseDoc: action.payload,
        resumeLoading: false
      };
    case ADD_STUDY_DOC_FAILED:
      return {
        ...state,
        error: action.payload,
        resumeLoading: false
      };
    case DELETE_STUDY_DOC:
      return {
        ...state,
        resumeLoading: true
      };
    case DELETE_STUDY_DOC_SUCCESS:
      return {
        ...state,
        caseDoc: action.payload,
        resumeLoading: false
      };
    case DELETE_STUDY_DOC_FAILED:
      return {
        ...state,
        error: action.payload,
        resumeLoading: false
      };
    //
    case ADD_CASE_LINK_STARTED:
      return {
        ...state,
        resumeLoading: true
      };
    case ADD_CASE_LINK_SUCCESS:
      return {
        ...state,
        caseLink: action.payload,
        resumeLoading: false
      };
    case ADD_CASE_LINK_FAILED:
      return {
        ...state,
        error: action.payload,
        resumeLoading: false
      };
    case DELETE_CASE_LINK_STARTED:
      return {
        ...state,
        resumeLoading: true
      };
    case DELETE_CASE_LINK_SUCCESS:
      return {
        ...state,
        caseLink: action.payload,
        resumeLoading: false
      };
    case DELETE_CASE_LINK_FAILED:
      return {
        ...state,
        error: action.payload,
        resumeLoading: false
      };
    //
    case ADD_PROJECT_DOCUMENTS:
      return {
        ...state,
        addDocLoading: true
      };
    case ADD_PROJECT_DOCUMENTS_SUCCESS:
      return {
        ...state,
        projectDoc: action.payload,
        addDocLoading: false
      };
    case ADD_PROJECT_DOCUMENTS_FAILED:
      return {
        ...state,
        error: action.payload,
        addDocLoading: false
      };
    case ADD_PROJECT_STARTED:
      return {
        ...state,
        addProject: true
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        allProject: action.payload,
        addProject: false
      };
    case ADD_PROJECT_FAILED:
      return {
        ...state,
        error: action.payload,
        addProject: false
      };
    default:
      return state;
  }
};
