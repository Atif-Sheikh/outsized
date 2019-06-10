import {
    GET_ALL_EMAIL_TEMPLATE_SUCCESS,
    GET_ALL_EMAIL_TEMPLATE_FAILED,
    GET_ALL_EMAIL_TEMPLATE_STARTED
  } from "../../utils/redux/types";
  
  import axios from "../../config/axios";
  
  export const getAllEmailTemplate = () => dispatch => {
    dispatch(getRetrevingStarted());
    let queryString = `
            query {
                emailTemplates(token:"${localStorage.getItem("token")}"){
                    name,
                    id,
                    description,
                    body,
                    subject
                }
            }
      `;
  
    axios
      .post("/graphql", queryString)
      .then(res => {
        dispatch(getAllEmailTemplateSuccess(res.data.emailTemplates));
      })
      .catch(err => {
        dispatch(getAllEmailTemplateFailed());
      });
  };
  
  const getAllEmailTemplateSuccess = AllEmailsTemplate => ({
    type: GET_ALL_EMAIL_TEMPLATE_SUCCESS,
    payload: AllEmailsTemplate
  });
  const getAllEmailTemplateFailed = AllEmailsTemplate => ({
    type: GET_ALL_EMAIL_TEMPLATE_FAILED,
    payload: []
  });
  const getRetrevingStarted = () => ({
    type: GET_ALL_EMAIL_TEMPLATE_STARTED
  });
  