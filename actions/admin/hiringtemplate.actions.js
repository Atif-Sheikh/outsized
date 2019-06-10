import {
  ADD_HIRING_TEMPLATE_SUCCESS,
  ADD_HIRING_TEMPLATE_FAILED,
  ADD_HIRING_TEMPLATE_STARTED,
  CLOSE_HIRING_TEMPLATE_MODAL,
  OPEN_HIRING_TEMPLATE_MODAL
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const addHiringTemplateApi = (template, enqueueSnackbar) => dispatch => {
  dispatch(addHiringTemplateStarted());

  let queryString = `
      mutation {
        addTemplate(name:"${template}", token:"${localStorage.getItem(
    "token"
  )}"){
          message
          templateId
        }
      }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addHiringTemplateSuccess(res.data.addTemplate));
      console.log(res.data.addTemplate);
      enqueueSnackbar("Template successfully created", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
    })
    .catch(err => {
      dispatch(addHiringTemplateFailed(err.message));
      enqueueSnackbar("try with another template", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
    });
};

const addHiringTemplateSuccess = addTemplate => ({
  type: ADD_HIRING_TEMPLATE_SUCCESS,
  payload: {
    addTemplate
  }
});

const addHiringTemplateStarted = () => ({
  type: ADD_HIRING_TEMPLATE_STARTED
});

const addHiringTemplateFailed = error => ({
  type: ADD_HIRING_TEMPLATE_FAILED,
  payload: {
    error
  }
});

export const closeHiringTemplateModal = () => ({
  type: CLOSE_HIRING_TEMPLATE_MODAL
});

export const openHiringTemplateModal = () => ({
  type: OPEN_HIRING_TEMPLATE_MODAL
});
