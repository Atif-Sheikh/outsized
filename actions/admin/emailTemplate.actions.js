import {
  ADD_EMAIL_TEMPLATE_SUCCESS,
  ADD_EMAIL_TEMPLATE_FAILED,
  ADD_EMAIL_TEMPLATE_STARTED,
  GET_RETREIVE_EMAIL_TEMPLATE_SUCCESS,
  GET_RETREIVE_EMAIL_TEMPLATE_FAILED,
  GET_RETREIVE_EMAIL_TEMPLATE_STARTED,
  CLEAR_MESSAGE
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const addEmailTemplateApi = (
  type,
  name,
  subject,
  description,
  body,
  enqueueSnackbar,
  closeSnackbar,
  id
) => dispatch => {
  dispatch(addEmailTemplateStarted());

  let queryString = `
            mutation {
                addEmailTemplate(name:"${name}", subject:"${subject}", description:"${description}", body:"${body}",
                 token:"${localStorage.getItem("token")}") {
                    message,
                }
            }
    `;
  let queryUpdateString = `
    mutation {
      updateEmailTemplate(
        id: ${id},name:"${name}", subject:"${subject}", description:"${description}", body:"${body}",
         token:"${localStorage.getItem("token")}") {
            message,
        }
    }
`;
  axios
    .post("/graphql", type === "AddNew" ? queryString : queryUpdateString)
    .then(res => {
      dispatch(
        addEmailTemplateSuccess(
          res.data[
            type === "AddNew" ? "addEmailTemplate" : "updateEmailTemplate"
          ]
        )
      );
      const key = enqueueSnackbar(
        res.data[type === "AddNew" ? "addEmailTemplate" : "updateEmailTemplate"]
          .message,
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        }
      );
      setTimeout(() => {
        dispatch(clearMessage());
        closeSnackbar(key);
      }, 2000);
    })
    .catch(err => {
      dispatch(addEmailTemplateFailed(err.message));
      const key = enqueueSnackbar(err.response.data.errors[0], {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        dispatch(clearMessage());
        closeSnackbar(key);
      }, 2000);
    });
};
export const getRetreiveEmailTemplate = id => dispatch => {
  dispatch(getRetreiveEmailTemplateStarted());
  let queryString = `
  query {
    emailTemplate(id:${id}, token:"${localStorage.getItem("token")}"){
      name,
      id,
      subject,
      body,
      description
    }
  }
  
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getRetreiveEmailTemplateSuccess(res.data.emailTemplate));
    })
    .catch(err => {
      dispatch(getRetreiveEmailTemplateFailed());
    });
};

const addEmailTemplateSuccess = addEmailTemplate => ({
  type: ADD_EMAIL_TEMPLATE_SUCCESS,
  payload: {
    addEmailTemplate
  }
});

const addEmailTemplateStarted = () => ({
  type: ADD_EMAIL_TEMPLATE_STARTED
});

const addEmailTemplateFailed = error => ({
  type: ADD_EMAIL_TEMPLATE_FAILED,
  payload: {
    error
  }
});

const getRetreiveEmailTemplateSuccess = getRetreiveEmailTemplate => ({
  type: GET_RETREIVE_EMAIL_TEMPLATE_SUCCESS,
  payload: getRetreiveEmailTemplate
});

const getRetreiveEmailTemplateStarted = () => ({
  type: GET_RETREIVE_EMAIL_TEMPLATE_STARTED
});

const getRetreiveEmailTemplateFailed = error => ({
  type: GET_RETREIVE_EMAIL_TEMPLATE_FAILED
});

const clearMessage = () => ({
  type: CLEAR_MESSAGE
});
