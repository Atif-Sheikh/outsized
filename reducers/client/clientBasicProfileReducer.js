import {
  RETRIEVE_FREELANCER_PROFILE_STARTED,
  RETRIEVE_FREELANCER_PROFILE_SUCCESS,
  RETRIEVE_FREELANCER_PROFILE_FAILED,
  Add_NEW_EMAIL_STARTED,
  Add_NEW_EMAIL_SUCCESS,
  Add_NEW_EMAIL_FAILED,
  Add_NEW_MOBILE_STARTED,
  Add_NEW_MOBILE_SUCCESS,
  Add_NEW_MOBILE_FAILED,
  Add_EDUCATION_STARTED,
  Add_EDUCATION_SUCCESS,
  Add_EDUCATION_FAILED,
  Add_EXPERIENCE_STARTED,
  Add_EXPERIENCE_SUCCESS,
  Add_EXPERIENCE_FAILED,
  EDIT_EDUCATION_STARTED,
  EDIT_EDUCATION_SUCCESS,
  EDIT_EDUCATION_FAILED,
  EDIT_EXPERIENCE_STARTED,
  EDIT_EXPERIENCE_SUCCESS,
  EDIT_EXPERIENCE_FAILED,
  DELETE_EDUCATION_STARTED,
  DELETE_EDUCATION_SUCCESS,
  DELETE_EDUCATION_FAILED,
  DELETE_EXPERIENCE_STARTED,
  DELETE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_FAILED,
  EDIT_PROFILE_STARTED,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  freelancerProfile: {},
  hasError: false,
  access: false,
  newEmailData: {},
  newNumberData: {},
  message: "",
  addEducation: {},
  editEducation: {},
  deleteEducation: {},
  addExperience: {},
  editExperience: {},
  deleteExperience: {},
  editProfile: {}
};

export const clientBasicProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_FREELANCER_PROFILE_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case RETRIEVE_FREELANCER_PROFILE_SUCCESS:
      return {
        ...state,
        freelancerProfile: action.payload,
        isLoading: false,
        access: true
      };
    case RETRIEVE_FREELANCER_PROFILE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false
      };
    case Add_NEW_EMAIL_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case Add_NEW_EMAIL_SUCCESS:
      return {
        ...state,
        newEmailData: action.payload,
        isLoading: false,
        access: true,
        message: "Successfully Added",
        hasError: false
      };
    case Add_NEW_EMAIL_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "This email is already registered"
      };
    case Add_NEW_MOBILE_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case Add_NEW_MOBILE_SUCCESS:
      return {
        ...state,
        newNumberData: action.payload,
        message: "Successfully Added",
        isLoading: false,
        access: true,
        hasError: false
      };
    case Add_NEW_MOBILE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "This number is already registered"
      };

    // education
    case Add_EDUCATION_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case Add_EDUCATION_SUCCESS:
      return {
        ...state,
        addEducation: action.payload,
        message: "Successfully Added",
        isLoading: false,
        access: true,
        hasError: false
      };
    case Add_EDUCATION_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "Please fill the form perfectly"
      };
    case EDIT_EDUCATION_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case EDIT_EDUCATION_SUCCESS:
      return {
        ...state,
        editEducation: action.payload,
        message: "Edit Successfully",
        isLoading: false,
        access: true,
        hasError: false
      };
    case EDIT_EDUCATION_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "Please fill the form perfectly"
      };
    case DELETE_EDUCATION_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case DELETE_EDUCATION_SUCCESS:
      return {
        ...state,
        deleteEducation: action.payload,
        message: "Successfully Added",
        isLoading: false,
        access: true,
        hasError: false
      };
    case DELETE_EDUCATION_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "This number is already registered"
      };
    //experience
    case Add_EXPERIENCE_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case Add_EXPERIENCE_SUCCESS:
      return {
        ...state,
        addExperience: action.payload,
        message: "Successfully Added",
        isLoading: false,
        access: true,
        hasError: false
      };
    case Add_EXPERIENCE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "This number is already registered"
      };
    case EDIT_EXPERIENCE_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case EDIT_EXPERIENCE_SUCCESS:
      return {
        ...state,
        editExperience: action.payload,
        message: "Successfully Added",
        isLoading: false,
        access: true,
        hasError: false
      };
    case EDIT_EXPERIENCE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "This number is already registered"
      };
    case DELETE_EXPERIENCE_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        deleteExperience: action.payload,
        message: "Successfully Added",
        isLoading: false,
        access: true,
        hasError: false
      };
    case DELETE_EXPERIENCE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "This number is already registered"
      };

    case EDIT_PROFILE_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: action.payload,
        message: "Edit Successfully",
        isLoading: false,
        access: true,
        hasError: false
      };
    case EDIT_PROFILE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "Please fill the form perfectly"
      };
    default:
      return state;
  }
};
