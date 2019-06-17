import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import { withSnackbar } from "notistack";
import StepButton from "@material-ui/core/StepButton";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Back from "@material-ui/icons/ArrowBack";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import InputArea from "../../ReuseableComponents/InputArea";
import Add from "@material-ui/icons/Add";
import { styles } from "@styles/clientComponents/Education.styles.js";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  retrieveFreelancerProfile,
  clientAddEducationApi,
  clientEditEducationApi,
  clientDeleteEducationApi
} from "@actions/client";
import { connect } from "react-redux";

class Education extends Component {
  state = {
    open: false,
    degree: "",
    description: "",
    institute: "",
    location: "",
    passOutYear: "",
    degreeValid: true,
    descriptionValid: true,
    instituteValid: true,
    locationValid: true,
    passOutYearValid: true,
    educationData: [],
    showText: false,
    addEducation: {},
    deleteEducation: {},
    actionPerform: "",
    buttonText: "save",
    editId: 0
  };

  componentDidMount() {
    this.props.retrieveFreelancerProfile();
  }
  componentWillReceiveProps(nextProps) {
    let basicData =
      nextProps &&
      nextProps.freelancerProfile &&
      nextProps.freelancerProfile.freelancer &&
      nextProps.freelancerProfile.freelancer.educations;
    let addEducation =
      nextProps &&
      nextProps.addEducation &&
      nextProps.addEducation.addEducation &&
      nextProps.addEducation.addEducation.addEducation &&
      nextProps.addEducation.addEducation.addEducation.freelancerProfile &&
      nextProps.addEducation.addEducation.addEducation.freelancerProfile &&
      nextProps.addEducation.addEducation.addEducation.freelancerProfile
        .educations
        ? nextProps.addEducation.addEducation.addEducation.freelancerProfile
            .educations
        : [];
    let deleteEducation =
      nextProps &&
      nextProps.deleteEducation &&
      nextProps.deleteEducation.deleteEducation &&
      nextProps.deleteEducation.deleteEducation.deleteEducation &&
      nextProps.deleteEducation.deleteEducation.deleteEducation
        .freelancerProfile &&
      nextProps.deleteEducation.deleteEducation.deleteEducation
        .freelancerProfile &&
      nextProps.deleteEducation.deleteEducation.deleteEducation
        .freelancerProfile.educations
        ? nextProps.deleteEducation.deleteEducation.deleteEducation
            .freelancerProfile.educations
        : [];
    let editEducationData =
      nextProps &&
      nextProps.editEducation &&
      nextProps.editEducation.editEducation &&
      nextProps.editEducation.editEducation.editEducation &&
      nextProps.editEducation.editEducation.editEducation.freelancerProfile &&
      nextProps.editEducation.editEducation.editEducation.freelancerProfile &&
      nextProps.editEducation.editEducation.editEducation.freelancerProfile
        .educations
        ? nextProps.editEducation.editEducation.editEducation.freelancerProfile
            .educations
        : [];
    if (this.state.actionPerform === "addEducation") {
      this.setState({
        educationData: addEducation.length
          ? addEducation
          : basicData
          ? basicData
          : []
      });
    } else if (this.state.actionPerform === "deleteEducation") {
      this.setState({
        educationData: deleteEducation.length
          ? deleteEducation
          : basicData
          ? basicData
          : []
      });
    } else if (this.state.actionPerform === "editEducation") {
      this.setState({
        educationData: editEducationData
          ? editEducationData
          : basicData
          ? basicData
          : []
      });
    } else {
      this.setState({
        educationData: basicData ? basicData : []
      });
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      degreeValid: true,
      descriptionValid: true,
      instituteValid: true,
      locationValid: true,
      passOutYearValid: true
    });
  };
  Education = () => {
    let { degree, description, institute, location, passOutYear } = this.state;
    if (!this.state.degree.length) {
      this.setState({ degreeValid: false });
    }
    if (!this.state.description.length) {
      this.setState({ descriptionValid: false });
    }
    if (!this.state.institute.length) {
      this.setState({ instituteValid: false });
    }
    if (!this.state.location.length) {
      this.setState({ locationValid: false });
    }
    if (!this.state.passOutYear) {
      this.setState({ passOutYearValid: false });
    }
    if (
      this.state.degree.length &&
      this.state.description.length &&
      this.state.institute.length &&
      this.state.location.length &&
      this.state.passOutYear
    ) {
      if (this.state.buttonText === "Save") {
        this.props.clientAddEducationApi(
          degree,
          Number(passOutYear),
          description,
          location,
          institute
        );
      } else {
        this.props.clientEditEducationApi(
          this.state.editId,
          degree,
          Number(passOutYear),
          description,
          location,
          institute
        );
      }
    }
    this.setState({ showText: true, actionPerform: "addEducation" });
  };
  deleteEducation = id => {
    this.props.clientDeleteEducationApi(id);
    this.setState({ showText: true, actionPerform: "deleteEducation" });
  };
  editEducation = val => {
    this.setState({
      open: true,
      degree: val.degree,
      description: val.description,
      institute: val.institute,
      location: val.location,
      passOutYear: val.passOutYear,
      buttonText: "Edit",
      editId: val.id,
      actionPerform: "editEducation"
    });
  };
  render() {
    const { classes } = this.props;
    const { open, educationData } = this.state;
    return (
      <div className={classes.mainContainer}>
        <div className={classes.iconBtnDiv}>
          <IconButton
            onClick={() => this.setState({ open: true, buttonText: "Save" })}
            className={classes.plusIconContainer}
          >
            <Add className={classes.addIcon} />
          </IconButton>
        </div>
        {educationData
          ? educationData.map((val, i) => {
              return (
                <div style={{ marginBottom: 20 }}>
                  <Typography className={classes.title}>
                    {val.degree}
                    <span className={classes.iconContainer}>
                      <EditIcon
                        className={classes.icon}
                        onClick={() => {
                          this.editEducation(val);
                        }}
                      />
                      <span className={classes.line} />
                      <DeleteIcon
                        className={classes.icon}
                        onClick={() => {
                          this.deleteEducation(val.id);
                        }}
                      />
                    </span>
                  </Typography>
                  <Typography className={classes.housingcom}>
                    {val.institute}
                  </Typography>
                  <Typography className={classes.timeDuration}>
                    {val.passOutYear}
                  </Typography>
                  <Typography className={classes.place}>
                    {val.location}
                  </Typography>
                  <Typography className={classes.dummyText}>
                    {val.description}
                  </Typography>
                </div>
              );
            })
          : ""}
        <Dialog
          open={open}
          onClose={() => this.setState({ open: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          style={{ minWidth: "600px" }}
        >
          <IconButton
            className={classes.closeIcon}
            aria-label="Close"
            onClick={() => this.setState({ open: false, showText: false })}
          >
            <CloseIcon className={classes.closee} />
          </IconButton>
          <DialogTitle
            className={classes.educationModalTitle}
            id="alert-dialog-title"
          >
            <Typography className={classes.headerText}>
              <IconButton
                className={classes.back}
                aria-label="Close"
                onClick={() => this.setState({ open: false })}
              >
                <Back className={classes.icon} />
              </IconButton>{" "}
              Add Education
            </Typography>
          </DialogTitle>
          <Typography className={classes.headerText}>
            <span
              className={classes.headerTextChild}
              style={{
                color: "green",
                paddingLeft: "20px",
                fontSize: "17px",
                fontWeight: "bold"
              }}
            >
              {this.state.showText ? this.props.message : ""}
            </span>
          </Typography>
          <DialogContent className={classes.modal}>
            <DialogContentText id="alert-dialog-description">
              <div className={classes.FormContainer}>
                <InputArea
                  label="Degree"
                  name="degree"
                  value={this.state.degree}
                  validation={this.state.degreeValid}
                  styleprops={styles.textFieldPass}
                  handleInputChange={event => this.handleInputChange(event)}
                />
                <InputArea
                  label="Name of the Institute"
                  name="institute"
                  value={this.state.institute}
                  validation={this.state.instituteValid}
                  styleprops={styles.textFieldPass}
                  handleInputChange={event => this.handleInputChange(event)}
                />
                <InputArea
                  label="Location of the Institute"
                  name="location"
                  validation={this.state.locationValid}
                  value={this.state.location}
                  styleprops={styles.textFieldPass}
                  handleInputChange={event => this.handleInputChange(event)}
                />
                <InputArea
                  label="Degree pass out year"
                  name="passOutYear"
                  validation={this.state.passOutYearValid}
                  value={this.state.passOutYear}
                  styleprops={styles.textFieldPass}
                  type="number"
                  handleInputChange={event => this.handleInputChange(event)}
                />
                <InputArea
                  label="Description  "
                  name="description"
                  validation={this.state.descriptionValid}
                  value={this.state.description}
                  styleprops={styles.textFieldPass}
                  handleInputChange={event => this.handleInputChange(event)}
                />
              </div>
              <div className={classes.btnContainer}>
                <Button
                  onClick={this.Education}
                  className={classes.saveBtn}
                >
                  Save
                </Button>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state.clientBasicProfileReducer);
  return {
    isLoading: state.clientBasicProfileReducer.isLoading,
    error: state.clientBasicProfileReducer.message,
    access: state.clientBasicProfileReducer.access,
    freelancerProfile: state.clientBasicProfileReducer.freelancerProfile,
    message: state.clientBasicProfileReducer.message,
    hasError: state.clientBasicProfileReducer.hasError,
    newEmailData: state.clientBasicProfileReducer.newEmailData,
    newNumberData: state.clientBasicProfileReducer.newNumberData,
    addEducation: state.clientBasicProfileReducer.addEducation,
    editEducation: state.clientBasicProfileReducer.editEducation,
    deleteEducation: state.clientBasicProfileReducer.deleteEducation
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveFreelancerProfile: () => {
      dispatch(retrieveFreelancerProfile());
    },
    clientDeleteEducationApi: id => {
      dispatch(clientDeleteEducationApi(id));
    },
    clientAddEducationApi: (
      degree,
      passOutYear,
      description,
      location,
      institute
    ) => {
      dispatch(
        clientAddEducationApi(
          degree,
          Number(passOutYear),
          description,
          location,
          institute
        )
      );
    },
    clientEditEducationApi: (
      id,
      degree,
      passOutYear,
      description,
      location,
      institute
    ) => {
      dispatch(
        clientEditEducationApi(
          id,
          degree,
          Number(passOutYear),
          description,
          location,
          institute
        )
      );
    }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Education))
);
