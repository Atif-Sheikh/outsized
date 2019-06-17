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

//education

//add education
export const clientAddEducationApi = (
  degree,
  passOutYear,
  description,
  location,
  institute
) => dispatch => {
  dispatch(addEducationStarted());
  let queryString = `
        mutation {
            addEducation(
              degree: "${degree}",
              passOutYear: ${passOutYear},
              description: "${description}",
              location: "${location}",
              institute: "${institute}"
              token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"
            ){
              freelancerProfile{
                id,
                name,
                educations{
                  id,
                  degree,
                  passOutYear,
                  description,
                  location,
                  institute
                }
              }
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addEducationSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(addEducationFailed(error));
    });
};

const addEducationSuccess = addEducation => ({
  type: Add_EDUCATION_SUCCESS,
  payload: {
    addEducation
  }
});

const addEducationStarted = () => ({
  type: Add_EDUCATION_STARTED
});

const addEducationFailed = error => ({
  type: Add_EDUCATION_FAILED,
  payload: error
});

// edit education

export const clientEditEducationApi = (
  id,
  degree,
  passOutYear,
  description,
  location,
  institute
) => dispatch => {
  dispatch(editEducationStarted());
  let queryString = `
        mutation {
            editEducation(
              id: ${id},
              degree: "${degree}",
              passOutYear: ${passOutYear},
              description: "${description}",
              location: "${location}",
              institute: "${institute}"
              token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"
            ){
              freelancerProfile{
                id,
                name,
                educations{
                  id,
                  degree,
                  passOutYear,
                  description,
                  location,
                  institute
                }
              }
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(editEducationSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(editEducationFailed(error));
    });
};

const editEducationSuccess = editEducation => ({
  type: EDIT_EDUCATION_SUCCESS,
  payload: {
    editEducation
  }
});

const editEducationStarted = () => ({
  type: EDIT_EDUCATION_STARTED
});

const editEducationFailed = error => ({
  type: EDIT_EDUCATION_FAILED,
  payload: error
});

// delete education

export const clientDeleteEducationApi = id => dispatch => {
  dispatch(deleteEducationStarted());
  let queryString = `
        mutation {
            deleteEducation(
              id: ${id},
              token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"
            ){
              freelancerProfile{
                id,
                name,
                educations{
                  id,
                  degree,
                  passOutYear,
                  description,
                  location,
                  institute
                }
              }
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(deleteEducationSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(deleteEducationFailed(error));
    });
};

const deleteEducationSuccess = deleteEducation => ({
  type: DELETE_EDUCATION_SUCCESS,
  payload: {
    deleteEducation
  }
});

const deleteEducationStarted = () => ({
  type: DELETE_EDUCATION_STARTED
});

const deleteEducationFailed = error => ({
  type: DELETE_EDUCATION_FAILED,
  payload: error
});

//eperience
// add experience

export const clientAddExperienceApi = (
  designation,
  companyName,
  currentlyWorking,
  fromDate,
  toDate,
  description
) => dispatch => {
  dispatch(addExperienceStarted());
  let queryString = `
        mutation {
            addExperience(
              designation: "${designation}",
              companyName: "${companyName}",
              currentlyWorking: "${currentlyWorking}",
              fromDate: "${fromDate}",
              toDate: "${toDate}",
              description: "${description}",
              token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"){
              freelancerProfile{
                id,
                name,
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
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addExperienceSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(addExperienceFailed(error));
    });
};

const addExperienceSuccess = editEducation => ({
  type: Add_EXPERIENCE_SUCCESS,
  payload: {
    editEducation
  }
});

const addExperienceStarted = () => ({
  type: Add_EXPERIENCE_STARTED
});

const addExperienceFailed = error => ({
  type: Add_EXPERIENCE_FAILED,
  payload: error
});

// edit experience

export const clientEditExperienceApi = (
  id,
  designation,
  companyName,
  currentlyWorking,
  fromDate,
  toDate,
  description
) => dispatch => {
  dispatch(editExperienceStarted());
  let queryString = `
        mutation {
            editExperience(
              id: "${id}",
              designation: "${designation}",
              companyName: "${companyName}",
              currentlyWorking: "${currentlyWorking}",
              fromDate: "${fromDate}",
              toDate: "${toDate}",
              description: "${description}",
              token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"){
            ){
              freelancerProfile{
                id,
                name,
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
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(editExperienceSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(editExperienceFailed(error));
    });
};

const editExperienceSuccess = editExperience => ({
  type: EDIT_EXPERIENCE_SUCCESS,
  payload: {
    editExperience
  }
});

const editExperienceStarted = () => ({
  type: EDIT_EXPERIENCE_STARTED
});

const editExperienceFailed = error => ({
  type: EDIT_EXPERIENCE_FAILED,
  payload: error
});

// delete experience

export const clientDeleteExperienceApi = id => dispatch => {
  dispatch(deleteExperienceStarted());
  let queryString = `
        mutation {
            deleteEducation(
              id: "${id}",
              token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"){
            ){
              freelancerProfile{
                id,
                name,
                educations{
                  id,
                  degree,
                  passOutYear,
                  description,
                  location,
                  institute
                }
              }
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(deleteExperienceSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(deleteExperienceFailed(error));
    });
};

const deleteExperienceSuccess = deleteExperience => ({
  type: DELETE_EXPERIENCE_SUCCESS,
  payload: {
    deleteExperience
  }
});

const deleteExperienceStarted = () => ({
  type: DELETE_EXPERIENCE_STARTED
});

const deleteExperienceFailed = error => ({
  type: DELETE_EXPERIENCE_FAILED,
  payload: error
});

// edit profile

export const clientEditProfileApi = (
  gender,
  name,
  mobile,
  currentLocation,
  email
) => dispatch => {
  dispatch(editProfileStarted());
  let queryString = `
        mutation {
          editBasicProfile(
            gender: "${gender}",
            name: "${name}",
            mobile: "${mobile}",
            currentLocation: "${currentLocation}",
            email: "${email}",
            token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE"){
              freelancerProfile{
                id,
                name,
                email,
                gender,
                mobile,
                currentLocation,
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
      dispatch(editProfileSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(editProfileFailed(error));
    });
};

const editProfileSuccess = editExperience => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: {
    editExperience
  }
});

const editProfileStarted = () => ({
  type: EDIT_PROFILE_STARTED
});

const editProfileFailed = error => ({
  type: EDIT_PROFILE_FAILED,
  payload: error
});
