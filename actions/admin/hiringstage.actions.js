import {
  ADD_HIRING_STAGE_SUCCESS,
  ADD_HIRING_STAGE_FAILED,
  ADD_HIRING_STAGE_STARTED,
  EDIT_HIRING_STAGE_SUCCESS,
  EDIT_HIRING_STAGE_FAILED,
  EDIT_HIRING_STAGE_STARTED,
  OPEN_HIRING_STAGE_MODAL,
  CLOSE_HIRING_STAGE_MODAL,
  GET_HIRING_STAGES_CATEGORIES_SUCCESS,
  GET_HIRING_STAGES_SUCCESS
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const getHiringStageCategories = (
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  let queryString = `
        query {
            categories(token:"${localStorage.getItem("token")}"){
                name,
                id
            }
        }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getHiringStagesCategoriesSuccess(res.data.categories));
    })
    .catch(err => {
      const key = enqueueSnackbar(
        "some issue happened .. Please try again later",
        {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        }
      );
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    });
};

const getHiringStagesCategoriesSuccess = categories => ({
  type: GET_HIRING_STAGES_CATEGORIES_SUCCESS,
  payload: {
    categories
  }
});

export const getHiringStages = (enqueueSnackbar, closeSnackbar) => dispatch => {
  let queryString = `
        query {
          stages(templateId: 1, token:"${localStorage.getItem("token")}"){
            name,
            id,
            category{
              name,
              id
            }
          }
        }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getHiringStagesSuccess(res.data.stages));
    })
    .catch(err => {
      const key = enqueueSnackbar(
        "some issue happened .. Please try again later",
        {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        }
      );
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    });
};

const getHiringStagesSuccess = stages => ({
  type: GET_HIRING_STAGES_SUCCESS,
  payload: {
    stages
  }
});

export const addHiringStageApi = (
  stage,
  templateId,
  categoryId,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(addHiringStageStarted());

  let queryString = `
            mutation {
                addStage(name:"${stage}", templateId:${templateId}, categoryId:${categoryId}, token:"${localStorage.getItem(
    "token"
  )}"){
                    message
                }
            }
        `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addHiringStageSuccess(res.data.addStage));
      const key = enqueueSnackbar("Stage successfully created", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    })
    .catch(err => {
      dispatch(addHiringStageFailed(err.message));
      const key = enqueueSnackbar("try with another Stage name", {
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

export const editStageApi = (
  stages,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(editStageStarted());
  var send = [];
  stages &&
    stages.map(a =>
      send.push(
        `/admin/{id:${a.id},name:"${a.name}",order:1,categoryId:${
          a.category.id
        }}`
      )
    );
  let queryString = `
  mutation {
    editStages(
    stages:[${send}],
    token:"${localStorage.getItem("token")}"
    ){
      message,
    }
  }
    `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(editStageSuccess(res.data.editStages));
      const key = enqueueSnackbar(res.data.editStages.message, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    })
    .catch(err => {
      dispatch(editStageFailed(err.reponse.data.errors[0]));

      const key = enqueueSnackbar(
        "some issue happened .. Please try again later",
        {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        }
      );
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    });
};

const addHiringStageSuccess = addStage => ({
  type: ADD_HIRING_STAGE_SUCCESS,
  payload: {
    addStage
  }
});

const addHiringStageStarted = () => ({
  type: ADD_HIRING_STAGE_STARTED
});

const addHiringStageFailed = error => ({
  type: ADD_HIRING_STAGE_FAILED,
  payload: {
    error
  }
});
const editStageStarted = () => ({
  type: EDIT_HIRING_STAGE_STARTED
});
const editStageSuccess = addStage => ({
  type: EDIT_HIRING_STAGE_SUCCESS,
  payload: addStage
});
const editStageFailed = error => ({
  type: EDIT_HIRING_STAGE_FAILED,
  payload: error
});
export const closeHiringStageModal = () => ({
  type: CLOSE_HIRING_STAGE_MODAL
});

export const openHiringStageModal = () => ({
  type: OPEN_HIRING_STAGE_MODAL
});
