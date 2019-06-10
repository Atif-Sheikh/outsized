import {
  ADD_SACLE_RATING_SUCCESS,
  ADD_SACLE_RATING_FAILED,
  ADD_SACLE_RATING_STARTED,
  GET_ALL_SCALES_STARTED,
  GET_ALL_SCALES_FAILED,
  GET_ALL_SCALES_SUCCESS,
  ADD_SCALES_CRITERIA_SUCCESS,
  ADD_SCALES_CRITERIA_FAILED,
  ADD_SCALES_CRITERIA_STARTED,
  GET_ALL_SCALES_CRITERIA_SUCCESS,
  GET_ALL_SCALES_CRITERIA_FAILED,
  GET_ALL_SCALES_CRITERIA_STARTED,
  CLEAR_MESSAGE
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const postScaleRating = (
  data,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(postScaleRatingStarted());
  var firstData = data.items[0];
  var secondData = data.items[1];
  var thirdData = data.items[2];
  var fourthtData = data.items[3];
  var fifthData = data.items[4];
  let queryStrIngincludeNuetral = `
    mutation {
        addScale(
            name:"${data.name}",
            scaleType:"${data.scaleType}" ,
            includeNuetral:${data.includeNuetral},
            orderIncreasing:${data.orderIncreasing},
            items:[
                {rank:1,
                  buttonText:"${firstData.buttonText}",
                  labelText:"${firstData.labelText}",
                  guideline:"${firstData.guideline}",},
                {rank:2,
                    buttonText:"${secondData.buttonText}",
                   labelText:"${secondData.labelText}",
                   guideline:"${secondData.guideline}",},
                  {rank:3,
                    buttonText:"${thirdData.buttonText}",
                   labelText:"${thirdData.labelText}",
                   guideline:"${thirdData.guideline}",},
                {rank:4,
                  buttonText:"${fourthtData.buttonText}",
                  labelText:"${fourthtData.labelText}",
                  guideline:"${fourthtData.guideline}",},
                {rank:5,
                  buttonText:"${fifthData.buttonText}",
                  labelText:"${fifthData.labelText}",
                  guideline:"${fifthData.guideline}",},
            ]
            token:"${localStorage.getItem("token")}"
        ){
            message,
        }
    }
      `;
  let queryStrIngNonNuetral = `
      mutation {
          addScale(
              name:"${data.name}",
              scaleType:"${data.scaleType}" ,
              includeNuetral:${data.includeNuetral},
              orderIncreasing:${data.orderIncreasing},
              items:[
                  {rank:1,
                    buttonText:"${firstData.buttonText}",
                    labelText:"${firstData.labelText}",
                    guideline:"${firstData.guideline}",},
                  {rank:2,
                    buttonText:"${secondData.buttonText}",
                   labelText:"${secondData.labelText}",
                   guideline:"${secondData.guideline}",},
                  {rank:4,
                    buttonText:"${fourthtData.buttonText}",
                    labelText:"${fourthtData.labelText}",
                    guideline:"${fourthtData.guideline}",},
                  {rank:5,
                    buttonText:"${fifthData.buttonText}",
                    labelText:"${fifthData.labelText}",
                    guideline:"${fifthData.guideline}",},
              ]
              token:"${localStorage.getItem("token")}"
          ){
              message,
          }
      }
        `;
  axios
    .post(
      "/graphql",
      data.includeNuetral ? queryStrIngincludeNuetral : queryStrIngNonNuetral
    )
    .then(res => {
      dispatch(postScaleRatingSuccess(res.data.addScale.message));
      const key = enqueueSnackbar(res.data.addScale.message, {
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
      dispatch(postScaleRatingFailed());
      console.log(err);
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
        dispatch(clearMessage());
        closeSnackbar(key);
      }, 2000);
    });
};

export const getAllScales = (enqueueSnackbar, closeSnackbar) => dispatch => {
  dispatch(getAllScalesStarted());
  let queryString = `
    query {
        scales(token:"${localStorage.getItem("token")}"){
          name,
          id,
          scaleType,
          includeNuetral,
          orderIncreasing,
          items{
            id,
            rank,
            buttonText,
            labelText,
            guideline
          }
        }
      }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getAllScalesSuccess(res.data.scales));
    })
    .catch(err => {
      dispatch(getAllScalesFailed());
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
export const addScalesCriteria = (
  name,
  description,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(addScalesCriteriaStarted());
  let queryString = `
    mutation {
      addScaleCriteria(
      name:"${name}",
      description:"${description}",
      token:"${localStorage.getItem("token")}"){
        message,
      }
    }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addScalesCriteriaSuccess(res.data.addScaleCriteria.message));

      const key = enqueueSnackbar(res.data.addScaleCriteria.message, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      });
      dispatch(getAllScalesCriteria(enqueueSnackbar, closeSnackbar));
      setTimeout(() => {
        dispatch(clearMessage());
        closeSnackbar(key);
      }, 2000);
    })
    .catch(err => {
      dispatch(addScalesCriteriaFailed());
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

export const getAllScalesCriteria = (
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(getAllScalesCriteriaStarted());
  let queryString = `
    query {
      scaleCriterias(token:"${localStorage.getItem("token")}"){
        name,
        id,
        description
      }
    }
      `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(getAllScalesCriteriaSuccess(res.data.scaleCriterias));
    })
    .catch(err => {
      dispatch(getAllScalesCriteriaFailed());
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

const postScaleRatingSuccess = message => ({
  type: ADD_SACLE_RATING_SUCCESS,
  payload: message
});
const postScaleRatingFailed = message => ({
  type: ADD_SACLE_RATING_FAILED,
  payload: []
});
const postScaleRatingStarted = () => ({
  type: ADD_SACLE_RATING_STARTED
});
const getAllScalesSuccess = message => ({
  type: GET_ALL_SCALES_SUCCESS,
  payload: message
});
const getAllScalesFailed = message => ({
  type: GET_ALL_SCALES_FAILED,
  payload: []
});
const getAllScalesStarted = () => ({
  type: GET_ALL_SCALES_STARTED
});
const addScalesCriteriaSuccess = message => ({
  type: ADD_SCALES_CRITERIA_SUCCESS,
  payload: message
});
const addScalesCriteriaFailed = message => ({
  type: ADD_SCALES_CRITERIA_FAILED,
  payload: []
});
const addScalesCriteriaStarted = () => ({
  type: ADD_SCALES_CRITERIA_STARTED
});
const getAllScalesCriteriaSuccess = data => ({
  type: GET_ALL_SCALES_CRITERIA_SUCCESS,
  payload: data
});
const getAllScalesCriteriaFailed = message => ({
  type: GET_ALL_SCALES_CRITERIA_FAILED,
  payload: []
});
const getAllScalesCriteriaStarted = () => ({
  type: GET_ALL_SCALES_CRITERIA_STARTED
});
const clearMessage = () => ({
  type: CLEAR_MESSAGE
});
