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

import axios from "../../config/axios";

export const retrieveFreelancerProfile = () => dispatch => {
  dispatch(getFreelancerProfileStarted());
  let queryString = `
            query {
                freelancer(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"){
                  name,
                  id,
                  email,
                  mobile,
                  gender,
                  currentLocation,
                  linkedinUrl,
                  alternateEmails{
                    email,
                    verified
                  },
                  alternateMobiles{
                    mobile
                  },
                  professionalInfo{
                    industryType
                  },
                  portfolio{
                    
                    resumes{
                      name
                    },
                    caseStudies{
                      name
                    },
                    caseStudyLinks{
                      name
                    },
                    projects{
                      id
                    }
                  },
                  educations{
                    id,
                    degree,
                    passOutYear,
                    description,
                    location,
                    institute
                    
                  },
                  experiences{
                      id,
                      designation,
                      companyName,
                      currentlyWorking,
                      fromDate,
                      toDate,
                      description
                  }
                }
            }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getFreelancerProfileSuccess(res.data));
    })
    .catch(err => {
      dispatch(getFreelancerProfileFailed());
    });
};

export const clientAddEmailApi = email => dispatch => {
  dispatch(addEmailStarted());
  let queryString = `
        mutation {
            addEmail(email:"${email}",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"){
              freelancerProfile{
                id,
                name,
                alternateEmails{
                  email,
                  verified
                }
              }
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addEmailSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(addEmailFailed(error));
    });
};

export const clientAddNumberApi = number => dispatch => {
  dispatch(addNumberStarted());
  let queryString = `
        mutation {
            addMobile(mobile:"${number}",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"){
              freelancerProfile{
                id,
                name,
                alternateEmails{
                  email,
                  verified
                },
                alternateMobiles{
                  mobile
                }
              }
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addNumberSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(addNumberFailed(error));
    });
};

const addNumberSuccess = numberData => ({
  type: Add_NEW_MOBILE_SUCCESS,
  payload: {
    numberData
  }
});

const addNumberStarted = () => ({
  type: Add_NEW_MOBILE_STARTED
});

const addNumberFailed = error => ({
  type: Add_NEW_MOBILE_FAILED,
  payload: error
});
const addEmailSuccess = emailData => ({
  type: Add_NEW_EMAIL_SUCCESS,
  payload: {
    emailData
  }
});

const addEmailStarted = () => ({
  type: Add_NEW_EMAIL_STARTED
});

const addEmailFailed = error => ({
  type: Add_NEW_EMAIL_FAILED,
  payload: error
});

const getFreelancerProfileSuccess = freelancerProfile => ({
  type: RETRIEVE_FREELANCER_PROFILE_SUCCESS,
  payload: freelancerProfile
});
const getFreelancerProfileFailed = freelancerProfile => ({
  type: RETRIEVE_FREELANCER_PROFILE_FAILED,
  payload: []
});
const getFreelancerProfileStarted = () => ({
  type: RETRIEVE_FREELANCER_PROFILE_STARTED
});
