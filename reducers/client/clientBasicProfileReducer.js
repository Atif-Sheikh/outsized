import {
    RETRIEVE_FREELANCER_PROFILE_STARTED,
    RETRIEVE_FREELANCER_PROFILE_SUCCESS,
    RETRIEVE_FREELANCER_PROFILE_FAILED,
    Add_NEW_EMAIL_STARTED,
    Add_NEW_EMAIL_SUCCESS,
    Add_NEW_EMAIL_FAILED,
    Add_NEW_MOBILE_STARTED,
    Add_NEW_MOBILE_SUCCESS,
    Add_NEW_MOBILE_FAILED
  } from "../../utils/redux/types";
  
  const initialState = {
    isLoading: false,
    token: "",
    freelancerProfile: {},
    hasError: false,
    access: false,
    newEmailData:{},
    newNumberData: {},
    message: ''
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
          access: false,
          
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
          hasError:false,
        };
      case Add_NEW_EMAIL_FAILED:
        return {
          ...state,
          hasError: true,
          isLoading: false,
          access: false,
          message: action.payload,
          message: "This email is already registered",
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
          hasError:false

        };
      case Add_NEW_MOBILE_FAILED:
        return {
          ...state,
          hasError: true,
          isLoading: false,
          access: false,
          message: action.payload,
          message: "This number is already registered",

        };
      default:
        return state;
    }
  };
  