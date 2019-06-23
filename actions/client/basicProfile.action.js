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
  EDIT_PROFILE_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  PROFILE_ATTRIBUTES_SUCCESS,
  PROFILE_ATTRIBUTES_FAILED,
  PROFILE_ATTRIBUTES_STARTED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const retrieveFreelancerProfile = () => dispatch => {
  dispatch(getFreelancerProfileStarted());
  let token = localStorage.getItem("token");
  let queryString = `
            query {
              freelancer(token:"${token}"){
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
                  currentEmploymentType,
                  currentRole,
                  relocation,
                    currency,
                    enableFullTime,
                    expectedAnnualSalary,
                    enableFixedRateProjects,
                    expectedMonthlyRate,
                    enableFullDayProjects,
                    expectedDailyRate,
                    enableHourlyProjects,
                    expectedHourlyRate,
                    minHours,
                    description,
                    sectors{
                      id,
                      name
                    },
                    skills{
                      id,
                      name
                    },
                    clients{
                      id,
                      name
                    },
                    geoExperiences{
                      name
                    }
                },
                portfolio{
                  
                  resumes{
                    name
                    id
                    link
                  },
                  caseStudies{
                    name
                    id
                    link
                  },
                  caseStudyLinks{
                    name
                    id
                    link
                  },
                  projects{
                      id,
                      name,
                      client,
                      startDate,
                      endDate,
                      projectType,
                      ongoing,
                      description
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
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            addEmail(email:"${email}",token:"${token}"){
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
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            addMobile(mobile:"${number}",token:"${token}"){
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
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            addEducation(
              degree: "${degree}",
              passOutYear: ${passOutYear},
              description: "${description}",
              location: "${location}",
              institute: "${institute}"
              token:"${token}"
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
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            editEducation(
              id: ${id},
              degree: "${degree}",
              passOutYear: ${passOutYear},
              description: "${description}",
              location: "${location}",
              institute: "${institute}"
              token:"${token}"
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
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            deleteEducation(
              id: ${id},
              token:"${token}"
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
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            addExperience(
              designation: "${designation}",
              companyName: "${companyName}",
              currentlyWorking: ${currentlyWorking},
              fromDate: "${fromDate}",
              toDate: "${toDate}",
              description: "${description}",
              token:"${token}"){
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
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            editExperience(
              id: ${id},
              designation: "${designation}",
              companyName: "${companyName}",
              currentlyWorking: ${currentlyWorking},
              fromDate: "${fromDate}",
              toDate: "${toDate}",
              description: "${description}",
              token:"${token}"){
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
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            deleteExperience(
              id: ${id},
              token:"${token}"
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
  email,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  dispatch(editProfileStarted());
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            editBasicProfile(
              gender: "${gender}",
              name: "${name}",
              mobile: "${mobile}",
              currentLocation: "${currentLocation}",
              email: "${email}",
              token:"${token}"){
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
                },
                token
              }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(editProfileSuccess(res.data));
      localStorage.setItem("token", res.data.editBasicProfile.token);

      const key = enqueueSnackbar("Edit Successfully", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
      Router.push("/professional-profile");
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
      const key = enqueueSnackbar(error, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
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

export const saveprofessionalInfoData = ({
  currentEmploymentType,
  relocation,
  currentRole,
  currency,
  enableFullTime,
  expectedAnnualSalary,
  enableFixedRateProjects,
  expectedMonthlyRate,
  enableFullDayProjects,
  expectedDailyRate,
  enableHourlyProjects,
  expectedHourlyRate,
  minHours,
  description,
  clients,
  sectors,
  skills,
  enqueueSnackbar
}) => dispatch => {
  dispatch(updateProfileStarted());
  let token = localStorage.getItem("token");
  let queryString = `
      mutation {
        addProfessionalInfo(
        currentEmploymentType: "${currentEmploymentType}",
        relocation: "${relocation}",
        currentRole: "${currentRole}",
        currency: "${currency}",
        enableFullTime: ${enableFullTime},
        expectedAnnualSalary: ${expectedAnnualSalary},
        enableFixedRateProjects: ${enableFixedRateProjects},
        expectedMonthlyRate: ${expectedMonthlyRate},
        enableFullDayProjects: ${enableFullDayProjects},
        expectedDailyRate: ${expectedDailyRate},
        enableHourlyProjects: ${enableHourlyProjects},
        expectedHourlyRate: ${expectedHourlyRate},
        minHours: ${minHours},
        sectors: [${sectors}],
        skills: [${skills}],
        clients: [${clients}],
        description: "${description}",
        geoExperiences: ["Mumbai, India", "Kolkata, India"],
        token:"${localStorage.getItem("token")}"){
          freelancerProfile{
            professionalInfo{
            currentEmploymentType,
            currentRole,
            relocation,
              currency,
              enableFullTime,
              expectedAnnualSalary,
              enableFixedRateProjects,
              expectedMonthlyRate,
              enableFullDayProjects,
              expectedDailyRate,
              enableHourlyProjects,
              expectedHourlyRate,
              minHours,
              sectors{
                id,
                name
              },
              skills{
                id,
                name
              },
              clients{
                id,
                name
              },
              geoExperiences{
                name
              },
              description
            }
          }
        }
      }
  `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(updateProfileSuccess(res.data));
      enqueueSnackbar("Successfully updated profile", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(updateProfileFailed(error));
      enqueueSnackbar("Please Fill the form perfectly", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
    });
};

const updateProfileStarted = editExperience => ({
  type: UPDATE_PROFILE,
  payload: {
    editExperience
  }
});

const updateProfileSuccess = editExperience => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: {
    editExperience
  }
});

const updateProfileFailed = error => ({
  type: UPDATE_PROFILE_FAILED,
  payload: error
});

export const clientProffesionalAttributes = () => dispatch => {
  dispatch(profileAttributeStarted());
  let token = localStorage.getItem("token");
  let queryString = `
            query {
        profileAttributes(token:"${token}"){
          sectors{
            id,
            name
          },
          skills{
            id,
            name
          },
          clients{
            id,
            name
          }
        }
      }
  `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(profileAttributesSuccess(res.data));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(profileAttributesFailed(error));
    });
};

const profileAttributeStarted = editExperience => ({
  type: PROFILE_ATTRIBUTES_STARTED,
  payload: {
    editExperience
  }
});

const profileAttributesSuccess = editExperience => ({
  type: PROFILE_ATTRIBUTES_SUCCESS,
  payload: {
    editExperience
  }
});

const profileAttributesFailed = error => ({
  type: PROFILE_ATTRIBUTES_FAILED,
  payload: error
});
