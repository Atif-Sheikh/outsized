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

import axios from "../../config/axios";

export const retrieveFirmProfile = () => dispatch => {
  dispatch(getFirmProfileStarted());
  let token = localStorage.getItem("token");
  let queryString = `
            query {
              firm(token:"${token}"){
                name,
                link,
                linkedinUrl,
                owner{
                  email,
                  mobile,
                  alternateEmails{
                    
                    email,
                    verified
                  },
                  alternateMobiles{
                    
                    mobile
                  }
                },
                portfolio{
                  
                  companyDecks{
                    id,
                    name,
                    link
                  },
                  caseStudies{
                    id,
                    name,
                    link
                  },
                  caseStudyLinks{
                    id,
                    name,
                    link
                  },
                  projects{
                    id
                    documents{
                      id,
                      name,
                      link
                    }
                  }
                },
                professionalInfo{
                  currentLocation,
                  companyType,
                  enableFullTime,
                  expectedAnnualSalary,
                  enableFixedRateProjects,
                  expectedMonthlyRate,
                  enableFullDayProjects,
                  expectedDailyRate,
                  companySize,
                  currency,
                  yearFounded,
                  enableHourlyProjects,
                  expectedHourlyRate,
                  minHours,
                  sectors{
                    id,
                    name
                  },
                  goodSkills{
                    id,
                    name
                  },
                  greatSkills{
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
                }
              }
            }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getFirmProfileSuccess(res.data));
    })
    .catch(err => {
      dispatch(getFirmProfileFailed());
    });
};

export const clientAddEmailApi = email => dispatch => {
  dispatch(addEmailStarted());
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            addEmail(email:"${email}",token:"${token}"){
              firmProfile{
                name,
                link,
                linkedinUrl,
                owner{
                  email,
                  mobile,
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
              firmProfile{
                name,
                link,
                linkedinUrl,
                owner{
                  email,
                  mobile,
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

const getFirmProfileSuccess = firmProfile => ({
  type: FIRM_BASIC_SUCCESS,
  payload: firmProfile
});
const getFirmProfileFailed = firmProfile => ({
  type: FIRM_BASIC_FAILED,
  payload: []
});
const getFirmProfileStarted = () => ({
  type: FIRM_BASIC_STARTED
});

// edit profile

export const firmEditProfileApi = (
  name,
  website,
  linkedlnUrl,
  enqueueSnackbar,
  closeSnackbar,
  Router
) => dispatch => {
  dispatch(editProfileStarted());
  let token = localStorage.getItem("token");
  let queryString = `
        mutation {
            editFirmBasic(
              token:"${token}",
              name:"${name}", link:"${website}", linkedinUrl:"${linkedlnUrl}"){
                  firm{
                    name,
                    link,
                    linkedinUrl,
                    owner{
                      email,
                      mobile,
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

        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(editProfileSuccess(res.data));
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
      // Router.push("/firm/professional-profile");
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
  companyType,
  currentLocation,
  companySize,
  yearFounded,
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
  goodSkills,
  clients,
  sectors,
  greatSkills,
  geoExperiences,
  enqueueSnackbar
}) => dispatch => {
  dispatch(updateProfileStarted());
  let token = localStorage.getItem("token");
  let queryString = `
      mutation {
        addFirmProfessionalInfo(
          companyType: "${companyType}",
          currentLocation: "${currentLocation}",
          companySize: ${companySize},
          yearFounded: ${yearFounded},
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
          sectors: ${sectors},
          goodSkills: ${goodSkills},
          greatSkills: ${greatSkills},
          geoExperiences: [${geoExperiences}],
          clients: ${clients},
          token:"${token}"){
            firmProfile{
              name,
            link,
            linkedinUrl,
            owner{
              email,
              mobile,
              alternateEmails{
                
                email,
                verified
              },
              alternateMobiles{
                
                mobile
              }
            }
            professionalInfo{
              currentLocation,
              companyType,
              enableFullTime,
              expectedAnnualSalary,
              enableFixedRateProjects,
              expectedMonthlyRate,
              enableFullDayProjects,
              expectedDailyRate,
              companySize,
              yearFounded,
              enableHourlyProjects,
              expectedHourlyRate,
              minHours,
              sectors{
                id,
                name
              },
              goodSkills{
                id,
                name
              },
              greatSkills{
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
