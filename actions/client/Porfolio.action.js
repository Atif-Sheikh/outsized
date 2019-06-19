import {
  ADD_CASE_LINK_SUCCESS,
  ADD_CASE_LINK_FAILED,
  ADD_CASE_LINK_STARTED,
  DELETE_CASE_LINK_SUCCESS,
  DELETE_CASE_LINK_FAILED,
  DELETE_CASE_LINK_STARTED,
  DELETE_CASE_STUDY_SUCCESS,
  DELETE_CASE_STUDY_FAILED,
  DELETE_CASE_STUDY_STARTED,
  DELETE_RESUMS_SUCCESS,
  DELETE_RESUMS_FAILED,
  DELETE_RESUMS_STARTED,
  DELETE_PROJECT_DOCUMENT_SUCCESS,
  DELETE_PROJECT_DOCUMENT_FAILED,
  DELETE_PROJECT_DOCUMENT_STARTED,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILED,
  ADD_PROJECT_STARTED,
  ADD_EDIT_SUCCESS,
  ADD_EDIT_FAILED,
  ADD_EDIT_STARTED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const addCaseStudyLink = (
  name,
  link,
  enqueueSnackbar,
  closeSnackbar
) => {
  dispatch(addCaseLinkStarted());
  let queryString = ` mutation{
        addCaseStudyLink(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE",
        name:${name},link:${link}){ 
        portfolio{
            caseStudyLinks{
                id,
                name,
                link
                }
            }
        }
    } `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addCaseLinkSuccess(res.data.addCaseStudyLink.portfolio));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(addCaseLinkFailed(error));
    });
};

const addCaseLinkSuccess = token => ({
  type: ADD_CASE_LINK_SUCCESS,
  payload: {
    token
  }
});

const addCaseLinkStarted = () => ({
  type: ADD_CASE_LINK_STARTED
});

const addCaseLinkFailed = error => ({
  type: ADD_CASE_LINK_FAILED,
  payload: error
});

///////////////////////////Cse lnk////////////////////////////
export const deleteCaseStudyLink = (id, enqueueSnackbar, closeSnackbar) => {
  dispatch(deleteCaseStudyLinkStarted());
  let queryString = ` mutation{
        deleteCaseStudyLink(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE",
        id:${id}){ 
        portfolio{
            caseStudyLinks{
                id,
                name,
                link
                }
            }
        }
    } `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(
        deleteCaseStudyLinkSuccess(res.data.deleteCaseStudyLink.portfolio)
      );
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(deleteCaseStudyLinkFailed(error));
    });
};

const deleteCaseStudyLinkSuccess = token => ({
  type: DELETE_CASE_LINK_SUCCESS,
  payload: {
    token
  }
});

const deleteCaseStudyLinkStarted = () => ({
  type: DELETE_CASE_LINK_STARTED
});

const deleteCaseStudyLinkFailed = error => ({
  type: DELETE_CASE_LINK_FAILED,
  payload: error
});

///////////////////////////////Delet link////////////////////////////////////
export const deleteCaseStudy = (id, enqueueSnackbar, closeSnackbar) => {
  dispatch(deleteCaseStudyStarted());
  let queryString = ` mutation{
        deleteCaseStudy(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE",
        id:${id}){ 
        portfolio{
            caseStudyLinks{
                id,
                name,
                link
                }
            }
        }
    } `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(deleteCaseStudySuccess(res.data.deleteCaseStudy.portfolio));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(deleteCaseStudyFailed(error));
    });
};

const deleteCaseStudySuccess = token => ({
  type: DELETE_CASE_STUDY_SUCCESS,
  payload: {
    token
  }
});

const deleteCaseStudyStarted = () => ({
  type: DELETE_CASE_STUDY_STARTED
});

const deleteCaseStudyFailed = error => ({
  type: DELETE_CASE_STUDY_FAILED,
  payload: error
});

///////////////////////////////Delet link////////////////////////////////////
export const deleteResumes = (id, enqueueSnackbar, closeSnackbar) => {
  dispatch(deleteResumesStarted());
  let queryString = `mutation{
            deleteResumes(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE",
            id:${id}){
            portfolio{
                resumes{
                    id,
                    name,
                    link
                    }
                }
            }
        } `;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(deleteResumesSuccess(res.data.deleteResumes.portfolio));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(deleteResumesFailed(error));
    });
};

const deleteResumesSuccess = token => ({
  type: DELETE_RESUMS_SUCCESS,
  payload: {
    token
  }
});

const deleteResumesStarted = () => ({
  type: DELETE_RESUMS_STARTED
});

const deleteResumesFailed = error => ({
  type: DELETE_RESUMS_FAILED,
  payload: error
});

///////////////////////////////Delet link////////////////////////////////////
export const deleteProjectDocument = (id, enqueueSnackbar, closeSnackbar) => {
  dispatch(deleteProjectDocumentStarted());
  let queryString = `mutation{
            deleteProjectDocument(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE",
            id:${id}){
            portfolio{
                projects{
                    id,
                    name,
                    documents{
                        id,
                        name,
                        link
                        
                    }
                    }
                }
            }
        }`;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(
        deleteProjectDocumentSuccess(res.data.deleteProjectDocument.portfolio)
      );
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(deleteProjectDocumentFailed(error));
    });
};

const deleteProjectDocumentSuccess = token => ({
  type: DELETE_PROJECT_DOCUMENT_SUCCESS,
  payload: {
    token
  }
});

const deleteProjectDocumentStarted = () => ({
  type: DELETE_PROJECT_DOCUMENT_STARTED
});

const deleteProjectDocumentFailed = error => ({
  type: DELETE_PROJECT_DOCUMENT_FAILED,
  payload: error
});

///////////////////////////////Delet link////////////////////////////////////
export const editProject = (data, enqueueSnackbar, closeSnackbar) => {
  const {
    id,
    name,
    client,
    startDate,
    endDate,
    projectType,
    ongoing,
    description
  } = data;
  dispatch(editProjectStarted());
  let queryString = `mutation{
        addProject(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE",
        id:${id},
        name:"${name}",
        client:"${client}",
        startDate:"${endDate}",
        endDate:"${projectType}",
        projectType:"${ongoing}",
        ongoing:false,
        description:"${description}",
        ){
        portfolio{
            projects{
                id,
                name,
                client,
                startDate,
                endDate,
                projectType,
                ongoing,
                description,
                documents{
                    id,
                    name,
                    link
                }
                
             }
        }
    }`;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(editProjectSuccess(res.data.addProject.portfolio));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(editProjectFailed(error));
    });
};

const editProjectSuccess = token => ({
  type: ADD_EDIT_SUCCESS,
  payload: {
    token
  }
});

const editProjectStarted = () => ({
  type: ADD_EDIT_STARTED
});

const editProjectFailed = error => ({
  type: ADD_EDIT_FAILED,
  payload: error
});

//////////////////////////Project end///////////////////////////
export const addProject = (data, enqueueSnackbar, closeSnackbar) => {
  const {
    name,
    client,
    startDate,
    endDate,
    projectType,
    ongoing,
    description
  } = data;
  let queryString = `mutation{
    addProject(token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYW5hMTUxOTcyQGdtYWlsLmNvbSJ9.PF6CDduuV9BX4cW5I40NwGWT0a0R6y0-pRMPrwsknPE",
    name:"${name}",
    client:"${client}",
    startDate:"${endDate}",
    endDate:"${projectType}",
    projectType:"${ongoing}",
    ongoing:false,
    description:"${description}",
    ){
    portfolio{
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
        }
    }
}`;

  axios
    .post("/graphql", queryString)
    .then(res => {
      dispatch(addProjectSuccess(res.data.addProject.portfolio));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(addProjectFailed(error));
    });
};

const addProjectSuccess = token => ({
  type: ADD_PROJECT_SUCCESS,
  payload: {
    token
  }
});

const addProjectStarted = () => ({
  type: ADD_PROJECT_STARTED
});

const addProjectFailed = error => ({
  type: ADD_PROJECT_FAILED,
  payload: error
});

//////////////////////////Project end///////////////////////////
