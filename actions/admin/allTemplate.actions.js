import {
  ADD_ALL_TEMPLATE_SUCCESS,
  ADD_ALL_TEMPLATE_FAILED,
  ADD_ALL_TEMPLATE_STARTED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const getAllTemplate = (
  token,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(getRetrevingStarted());
  let queryString = `
    query {
        templates( token:"${token}"){
            name,
            id,
            stages{
                id,
                name,
                category{
                    id,
                    name
                }
            }
        }
    }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getAllTemplateSuccess(res.data.templates));
    })
    .catch(err => {
      dispatch(getAllTemplateFailed());
    });
};

const getAllTemplateSuccess = AllTemplate => ({
  type: ADD_ALL_TEMPLATE_SUCCESS,
  payload: AllTemplate
});
const getAllTemplateFailed = AllTemplate => ({
  type: ADD_ALL_TEMPLATE_FAILED,
  payload: []
});
const getRetrevingStarted = () => ({
  type: ADD_ALL_TEMPLATE_STARTED
});
