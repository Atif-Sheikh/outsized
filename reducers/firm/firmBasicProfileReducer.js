import {
  FIRM_BASIC_STARTED,
  FIRM_BASIC_SUCCESS,
  FIRM_BASIC_FAILED,
  EDIT_PROFILE_STARTED,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
  Add_NEW_EMAIL_STARTED,
  Add_NEW_EMAIL_SUCCESS,
  Add_NEW_EMAIL_FAILED,
  Add_NEW_MOBILE_STARTED,
  Add_NEW_MOBILE_SUCCESS,
  Add_NEW_MOBILE_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  PROFILE_ATTRIBUTES_SUCCESS,
  PROFILE_ATTRIBUTES_FAILED,
  PROFILE_ATTRIBUTES_STARTED
} from "../../utils/redux/types";

const initialState = {
  isLoading: false,
  token: "",
  firmrProfile: {},
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
  editProfile: {},
  updateProfessional: {},
  profileAttributes: {}
};

export const firmBasicProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRM_BASIC_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case FIRM_BASIC_SUCCESS:
      return {
        ...state,
        firmrProfile: action.payload,
        isLoading: false,
        access: true
      };
    case FIRM_BASIC_FAILED:
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
    case UPDATE_PROFILE:
      return { ...state, isLoading: true, message: "", access: false };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfessional: action.payload,
        message: "Edit Successfully",
        isLoading: false,
        access: true,
        hasError: false
      };
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        access: false,
        message: action.payload,
        message: "Please fill the form perfectly"
      };
    case PROFILE_ATTRIBUTES_STARTED:
      return { ...state, isLoading: true, message: "", access: false };
    case PROFILE_ATTRIBUTES_SUCCESS:
      return {
        ...state,
        profileAttributes: action.payload,
        message: "Edit Successfully",
        isLoading: false,
        access: true,
        hasError: false
      };
    case PROFILE_ATTRIBUTES_FAILED:
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
