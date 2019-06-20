import {
  ADD_CASE_LINK_SUCCESS,
  ADD_CASE_LINK_FAILED,
  ADD_CASE_LINK_STARTED,
  DELETE_CASE_LINK_SUCCESS,
  DELETE_CASE_LINK_FAILED,
  DELETE_CASE_LINK_STARTED,
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
  ADD_EDIT_STARTED,
  ADD_RESUME,
  ADD_RESUME_SUCCESS,
  ADD_RESUME_FAILED,
  ADD_STUDY_DOC,
  ADD_STUDY_DOC_SUCCESS,
  ADD_STUDY_DOC_FAILED,
  DELETE_STUDY_DOC,
  DELETE_STUDY_DOC_SUCCESS,
  DELETE_STUDY_DOC_FAILED,
  ADD_PROJECT_DOCUMENTS,
  ADD_PROJECT_DOCUMENTS_SUCCESS,
  ADD_PROJECT_DOCUMENTS_FAILED
} from "../../utils/redux/types";

import axios from "../../config/axios";

export const addCaseStudyLink = (
  name,
  link,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(addCaseLinkStarted());
  let queryString = ` mutation{
        addCaseStudyLink(token:"${localStorage.getItem("token")}",
        name:"${name}",link:"${link}"){ 
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
        addCaseLinkSuccess(res.data.addCaseStudyLink.portfolio.caseStudyLinks)
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
      dispatch(addCaseLinkFailed(error));
    });
};

const addCaseLinkSuccess = token => ({
  type: ADD_CASE_LINK_SUCCESS,
  payload: token
});

const addCaseLinkStarted = () => ({
  type: ADD_CASE_LINK_STARTED
});

const addCaseLinkFailed = error => ({
  type: ADD_CASE_LINK_FAILED,
  payload: error
});

///////////////////////////Cse lnk////////////////////////////
export const deleteCaseStudyLink = (
  id,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(deleteCaseStudyLinkStarted());
  let queryString = ` mutation{
        deleteCaseStudyLink(token:"${localStorage.getItem("token")}",
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
        deleteCaseStudyLinkSuccess(
          res.data.deleteCaseStudyLink.portfolio.caseStudyLinks
        )
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
  payload: token
});

const deleteCaseStudyLinkStarted = () => ({
  type: DELETE_CASE_LINK_STARTED
});

const deleteCaseStudyLinkFailed = error => ({
  type: DELETE_CASE_LINK_FAILED,
  payload: error
});

///////////////////////////////Delet link////////////////////////////////////
export const deleteCaseStudy = (
  id,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(deleteCaseStudyStarted());
  let queryString = ` mutation{
        deleteCaseStudy(token:"${localStorage.getItem("token")}",
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
        deleteCaseStudySuccess(
          res.data.deleteCaseStudy.portfolio.caseStudyLinks
        )
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
      dispatch(deleteCaseStudyFailed(error));
    });
};

const deleteCaseStudySuccess = DATA => ({
  type: DELETE_STUDY_DOC_SUCCESS,
  payload: DATA
});

const deleteCaseStudyStarted = () => ({
  type: DELETE_STUDY_DOC
});

const deleteCaseStudyFailed = error => ({
  type: DELETE_STUDY_DOC_FAILED,
  payload: error
});

///////////////////////////////Delet link////////////////////////////////////
export const deleteResumes = (
  id,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(deleteResumesStarted());
  let queryString = `mutation{
            deleteResume(token:"${localStorage.getItem("token")}",
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
      dispatch(deleteResumesSuccess(res.data.deleteResume.portfolio.resumes));
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
  payload: token
});

const deleteResumesStarted = () => ({
  type: DELETE_RESUMS_STARTED
});

const deleteResumesFailed = error => ({
  type: DELETE_RESUMS_FAILED,
  payload: error
});

///////////////////////////////Delet link////////////////////////////////////
export const deleteProjectDocument = (
  id,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  dispatch(deleteProjectDocumentStarted());
  let queryString = `mutation{
            deleteProjectDocument(token:"${localStorage.getItem("token")}",
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
export const editProject = (
  data,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
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
        addProject(token:"${localStorage.getItem("token")}",
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
export const addProject = (
  data,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  const {
    name,
    client,
    startDate,
    endDate,
    projectType,
    ongoing,
    description
  } = data;
  dispatch(addProjectStarted());
  let queryString = `mutation{
    addProject(token:"${localStorage.getItem("token")}",
    name:"${name}",
    client:"${client}",
    startDate:"${startDate}",
    endDate:"${endDate}",
    projectType:"${projectType}",
    ongoing:${ongoing},
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

const addProjectSuccess = data => ({
  type: ADD_PROJECT_SUCCESS,
  payload: data
});

const addProjectStarted = () => ({
  type: ADD_PROJECT_STARTED
});

const addProjectFailed = error => ({
  type: ADD_PROJECT_FAILED,
  payload: error
});

//////////////////////////Project end///////////////////////////
export const addProjectResums = (
  data,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  const { name, file } = data;
  var form = new FormData();
  form.append(
    "query",
    `mutation{uploadResume(token:\"${localStorage.getItem(
      "token"
    )}"\,name:\"${name}\"){portfolio{resumes{id, name,link}}}}`
  );
  form.append("resume", file);

  var settings = {
    async: true,
    crossDomain: true,
    url: "http://ec2-13-232-186-28.ap-south-1.compute.amazonaws.com//graphql",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "postman-token": "f4c04718-f5f1-f1c6-1f25-d060059a87cf"
    },
    processData: false,
    contentType: false,
    mimeType: "multipart/form-data",
    data: form
  };

  axios(settings)
    .then(res => {
      dispatch(addResumeSucces(res.data.uploadResume.portfolio.resumes));
    })
    .catch(err => {
      const error =
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        err.response.data.errors[0]
          ? err.response.data.errors[0]
          : err.message;
      dispatch(addResumeFailed(error));
    });
};
// axios.post('http://httpbin.org/post', data);

const addResumeSucces = resum => ({
  type: ADD_RESUME_SUCCESS,
  payload: resum
});

const addResume = () => ({
  type: ADD_RESUME
});

const addResumeFailed = error => ({
  type: ADD_RESUME_FAILED,
  payload: error
});

export const addProjectDocuments = (
  data,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  const { name, id, file } = data;
  var form = new FormData();
  form.append(
    "query",
    `mutation{uploadProjectDocument(token:\"${localStorage.getItem(
      "token"
    )}"\,name:\"${name}\", projectId:${id}){portfolio{projects{id, name, documents{name, link}}}}}`
  );
  form.append("doc", file);
  var settings = {
    async: true,
    crossDomain: true,
    url: "http://ec2-13-232-186-28.ap-south-1.compute.amazonaws.com//graphql",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "postman-token": "de13d011-ec1c-c982-4e31-428a21c15ac0"
    },
    processData: false,
    contentType: false,
    mimeType: "multipart/form-data",
    data: form
  };

  axios(settings)
    .then(res => {
      dispatch(
        addProjectDocumentsSucces(res.data.uploadProjectDocument.portfolio)
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
      dispatch(addProjectDocumentsFailed(error));
    });
};
// axios.post('http://httpbin.org/post', data);

const addProjectDocumentsSucces = DATA => ({
  type: ADD_PROJECT_DOCUMENTS_SUCCESS,
  payload: DATA
});

const addProjectDocumentsStart = () => ({
  type: ADD_PROJECT_DOCUMENTS
});

const addProjectDocumentsFailed = error => ({
  type: ADD_PROJECT_DOCUMENTS_FAILED,
  payload: error
});

//////////////////////////Project end///////////////////////////
export const addCaseDoc = (
  data,
  enqueueSnackbar,
  closeSnackbar
) => dispatch => {
  const { name, file } = data;
  var form = new FormData();
  form.append(
    "query",
    `mutation{uploadCaseStudy(token:\"${localStorage.getItem(
      "token"
    )}"\,name:\"${name}\"){portfolio{caseStudies{id,name,link}}}}`
  );
  form.append("case_study", file);

  var settings = {
    async: true,
    crossDomain: true,
    url: "http://ec2-13-232-186-28.ap-south-1.compute.amazonaws.com//graphql",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "postman-token": "f4c04718-f5f1-f1c6-1f25-d060059a87cf"
    },
    processData: false,
    contentType: false,
    mimeType: "multipart/form-data",
    data: form
  };

  axios(settings)
    .then(res => {
      dispatch(
        addCaseDocSucces(res.data.uploadCaseStudy.portfolio.caseStudies)
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
      dispatch(addCaseDocFailed(error));
    });
};
// axios.post('http://httpbin.org/post', data);

const addCaseDocSucces = resum => ({
  type: ADD_STUDY_DOC_SUCCESS,
  payload: resum
});

const addCaseDocStart = () => ({
  type: ADD_STUDY_DOC
});

const addCaseDocFailed = error => ({
  type: ADD_STUDY_DOC_FAILED,
  payload: error
});
