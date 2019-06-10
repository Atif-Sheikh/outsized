import {
  ADD_RETRREIVE_TEMPLATE_SUCCESS,
  ADD_RETRREIVE_TEMPLATE_FAILED,
  ADD_RETRREIVE_TEMPLATE_STARTED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const getRetreiveTemplate = (
  id,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(getRetrevingStarted());
  let queryString = `
    query {
        template(id:${id},  token:"${localStorage.getItem("token")}"){
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
      dispatch(getRetreiveTemplateSuccess(res.data.template));
    })
    .catch(err => {
      dispatch(getRetreiveTemplateFailed());
    });
};

const getRetreiveTemplateSuccess = retreiveTemplate => ({
  type: ADD_RETRREIVE_TEMPLATE_SUCCESS,
  payload: retreiveTemplate
});
const getRetreiveTemplateFailed = retreiveTemplate => ({
  type: ADD_RETRREIVE_TEMPLATE_FAILED,
  payload: []
});
const getRetrevingStarted = () => ({
  type: ADD_RETRREIVE_TEMPLATE_STARTED
});
