import {
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const addStageCategory = (value, enqueueSnackbar, closeSnackbar) => dispatch => {
  const queryString = `
    mutation {
        addCategory(name:"${value}", token:"${localStorage.getItem('token')}"){
            message
        }
    }
  `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addStagCategorySuccess(res.data.addCategory.message));
      const key = enqueueSnackbar(res.data.addCategory.message, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key)
      }, 2000);
    })
    .catch(err => {
      dispatch(addStageCategoryFailed(err.message));
      const key = enqueueSnackbar("Please check and try again", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key)
      }, 2000);
    });
};

export const getAllStageCategory = (enqueueSnackbar, closeSnackbar) => dispatch => {
  
  const queryString = `
    query {
        categories(token:"${localStorage.getItem('token')}"){
            name,
            id
        }
    }
  `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getAllStagCategorySuccess(res.data.categories));
      const key = enqueueSnackbar(res.data.addCategory.message, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key)
      }, 2000);
    })
    .catch(err => {
      dispatch(getAllStageCategoryFailed(err.message));
      const key = enqueueSnackbar("Please check and try again", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key)
      }, 2000);
    });
};

export const updateCategory = (id, value, enqueueSnackbar, closeSnackbar) => dispatch => {

  const queryString = `
    mutation {
        updateCategory(id:${Number(
          id
        )}, name:"${value}", token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hdjE1MTk3QGdtYWlsLmNvbSJ9.5aJfjAZlZVIRyiBbhMX5aYa9V13ZCyTNFPS2XUfpPzw"){
            message,
            categories{
                id,
                name
            }
        }
    }
  `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getAllStagCategorySuccess(res.data.updateCategory.categories));
      const key = enqueueSnackbar(res.data.updateCategory.message, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key)
      }, 2000);
    })
    .catch(err => {
      const key = enqueueSnackbar("Please check and try again", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key)
      }, 2000);
    });
};

const addStagCategorySuccess = message => ({
  type: ADD_CATEGORY_SUCCESS,
  message: message
});

const addStageCategoryFailed = message => ({
  type: ADD_CATEGORY_FAILED,
  message: message
});

const getAllStagCategorySuccess = data => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload: data
});

const getAllStageCategoryFailed = () => ({
  type: GET_ALL_CATEGORY_FAILED,
  payload: []
});
