import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import PdfFile from "@material-ui/icons/PictureAsPdf";
import { styles } from "@styles/clientComponents/Portfolio.styles.js";
import InputArea from "../../ReuseableComponents/InputArea";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {
  addCaseStudyLink,
  retrieveFreelancerProfile,
  deleteCaseStudyLink
} from "@actions/client";
import { connect } from "react-redux";
class CaseLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addlink: false,
      saveFile: false,
      openDeleteModal: false,
      validName: true,
      validLinks: true,
      cases: [],
      add: [],
      name: "",
      url: "",
      id: ""
    };
  }

  componentDidMount() {
    this.props.retrieveFreelancerProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.caseLink.length) {
      this.setAllData(nextProps.caseLink, nextProps.CaseDoc);
    } else {
      this.setAllData(nextProps.updateProfessional.caseStudyLinks);
    }
  }
  setAllData = resumes => {
    this.setState({ cases: resumes || [] });
  };

  deleteModal = () => {
    const { openDeleteModal, id, deleeCall } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        className={classes.paper}
        open={openDeleteModal}
        onClose={() => this.setState({ openDeleteModal: false })}
        style={{ minWidth: "500px", minHeight: "250px", borderRadius: "5px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => this.setState({ openDeleteModal: false })}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
          <Typography className={classes.deleteTitle}>
            Are you sure you want to delete ?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div className={classes.deleteModal}>
            <div className={classes.deleteBtnsContainer}>
              <Button
                className={classes.yesOrNoBtn}
                onClick={() => this.setState({ openDeleteModal: false })}
              >
                No
              </Button>
              <Button
                className={classes.yesOrNoBtn}
                onClick={() => {
                  this.setState({ openDeleteModal: false }),
                    this.props.deleteCaseStudy(id);
                }}
                autoFocus
              >
                Yes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  addCaseLink = fileName => {
    const { addlink, file, name, url } = this.state;
    const { classes } = this.props;
    return (
      <Dialog
        className={classes.paper}
        open={addlink}
        onClose={() => {}}
        style={{ minWidth: "630px !important", minHeight: "400px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          className={classes.closeIcon + " " + classes.caseLinkIcon}
          aria-label="Close"
          onClick={() => this.setState({ addlink: false })}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <DialogTitle
          className={classes.headerTitle + " " + classes.caseLinkText}
          id="alert-dialog-title"
        >
          Case studies link(s)
        </DialogTitle>
        <DialogContent>
          <div className={classes.addCaseLink}>
            <InputArea
              name={"name"}
              label={"Name"}
              handleInputChange={this.handleInputChange}
              value={name}
              validation={this.state.validName}
              styleprops={classes.textField}
            />

            <InputArea
              name={"url"}
              label={"Url"}
              handleInputChange={this.handleInputChange}
              value={url}
              validation={this.state.validLinks}
              styleprops={classes.textField}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button className={classes.saveBtn} onClick={this.addLink}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  addLink = () => {
    if (!this.state.name.length) {
      this.setState({
        validName: false
      });
    }
    if (!this.state.url.length) {
      this.setState({
        validLinks: false
      });
    }
    if (this.state.url.length && this.state.name.length) {
      this.props.addCaseStudyLink(this.state.name, this.state.url);
      this.setState({ addlink: false });
    }
  };
  addNewFiled = () => {
    console.log(this.state.add.length);
    var data = [];
    if (!this.state.add.length) {
      // this.state.add.push({name:"sss",url:"sss"})
      this.setState({ add: [{ name: "sss", url: "sss" }] });
    }
  };
  addNewCase = () => {
    const { cases, add, name, url } = this.state;
    this.state.cases.push({ name: name, url: url });
    this.setState({ add: [], name: "", url: "" });
  };
  deleteCase = i => {
    delete this.state.cases[i];
    let done = this.state.cases.filter(data => data);
    this.setState({ cases: done, add: [] });
  };
  handleInputChange = async event => {
    this.setState({
      [event.target.name]: event.target.value,
      validLinks: true,
      validName: true
    });
  };
  render() {
    const { classes, fileName } = this.props;
    const { cases, add, name, url } = this.state;
    return (
      <div className={classes.resumeSection}>
        <Typography className={classes.resume}>
          Case Studies Links(s)
        </Typography>
        <div className={classes.casePreview}>
          <div className={classes.caseLinkSection}>
            <Typography>{"Name"}</Typography>
          </div>
          <div className={classes.caseLinkSection}>
            <Typography>{"Urls"}</Typography>
          </div>
          <div className={classes.iconCaseSection} />
        </div>
        {cases.length > 0 &&
          cases.map((casesData, i) => (
            <div className={classes.casePreview}>
              <div className={classes.caseLinkSection}>
                <Typography>{casesData.name}</Typography>
              </div>
              <div className={classes.caseLinkSection}>
                <Typography>{casesData.link}</Typography>
              </div>
              <div className={classes.iconCaseSection}>
                <IconButton
                  className={classes.closeIcon}
                  aria-label="Close"
                  onClick={() =>
                    this.setState({ openDeleteModal: true, id: casesData.id })
                  }
                >
                  <CloseIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
          ))}

        <div className={classes.uploadBtnContainer}>
          <Button
            onClick={() => this.setState({ addlink: true })}
            className={classes.uploadFiles}
          >
            Add Links
          </Button>
          {this.addCaseLink("kayla_life_case_study.pdf")}
          {this.deleteModal()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const data =
    state.clientBasicProfileReducer.freelancerProfile &&
    state.clientBasicProfileReducer.freelancerProfile.freelancer &&
    state.clientBasicProfileReducer.freelancerProfile.freelancer.portfolio;
  return {
    token: state.clientSignUpReducer.token,
    isLoading: state.clientSignUpReducer.isLoading,
    isValidEmail: state.clientSignUpReducer.isValidEmail,
    message: state.clientSignUpReducer.message,
    error: state.clientSignUpReducer.error,
    updateProfessional: data,
    caseLink: state.PortfolioReducer.caseLink,
    CaseDoc: state.PortfolioReducer.caseDoc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCaseStudy: data => dispatch(deleteCaseStudyLink(data)),
    addCaseStudyLink: (name, url) => dispatch(addCaseStudyLink(name, url)),
    retrieveFreelancerProfile: () => {
      dispatch(retrieveFreelancerProfile());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CaseLinks));
