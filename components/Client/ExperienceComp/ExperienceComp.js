import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import StepButton from "@material-ui/core/StepButton";
import { styles } from "@styles/clientComponents/Experience.styles.js";
import MenuItem from "@material-ui/core/MenuItem";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withSnackbar } from "notistack";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import InputArea from "../../ReuseableComponents/InputArea";
import IconButton from "@material-ui/core/IconButton";
import Back from "@material-ui/icons/ArrowBack";
import Add from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  retrieveFreelancerProfile,
  clientAddExperienceApi,
  clientEditExperienceApi,
  clientDeleteExperienceApi
} from "@actions/client";
import { connect } from "react-redux";

class Experience extends Component {
  state = {
    fromMonth: "",
    fromYear: "",
    tillMonth: "",
    tillYear: "",
    open: false,
    designation: "",
    companyName: "",
    currentlyWorking: true,
    description: "",
    defaultChecked: true,
    fromDate: "",
    toDate: "",
    validDesignation: true,
    validCompanyName: true,
    validDescription: true,
    showText: false,
    buttonText: "Save",
    editId: 0,
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    years: [
      "1992",
      "1993",
      "1994",
      "1995",
      "1996",
      "1997",
      "1998",
      "1999",
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019"
    ],
    experienceData: []
  };

  componentDidMount() {
    this.props.retrieveFreelancerProfile();
    this.setYears();
  }
  componentWillReceiveProps(nextProps) {
    let basicData =
      nextProps &&
      nextProps.freelancerProfile &&
      nextProps.freelancerProfile.freelancer &&
      nextProps.freelancerProfile.freelancer.experiences;
    let deleteData =
      nextProps &&
      nextProps.deleteExperience &&
      nextProps.deleteExperience.deleteExperience &&
      nextProps.deleteExperience.deleteExperience.deleteExperience &&
      nextProps.deleteExperience.deleteExperience.deleteExperience
        .freelancerProfile &&
      nextProps.deleteExperience.deleteExperience.deleteExperience
        .freelancerProfile.experiences
        ? nextProps.deleteExperience.deleteExperience.deleteExperience
            .freelancerProfile.experiences
        : [];
    this.setState({
      experienceData: deleteData.length
        ? deleteData
        : basicData
        ? basicData
        : []
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  dropDown = (
    value,
    dropDownValue,
    name,
    roots,
    formControl,
    formControlText,
    formControlSelect
  ) => {
    return (
      <form className={roots} autoComplete="off">
        <FormControl className={formControl}>
          <InputLabel className={formControlText} htmlFor="age-simple">
            {value}
          </InputLabel>
          <Select
            value={this.state[name]}
            onChange={this.handleChange}
            className={formControlSelect}
            inputProps={{
              name: name,
              id: "age-simple"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dropDownValue &&
              dropDownValue.map(val => {
                return <MenuItem value={val}>{val}</MenuItem>;
              })}
          </Select>
        </FormControl>
      </form>
    );
  };
  addWordExperience = () => {
    let {
      designation,
      description,
      companyName,
      currentlyWorking,
      fromYear,
      fromMonth,
      tillMonth,
      tillYear
    } = this.state;
    let startDate = fromMonth + " " + fromYear;
    let lastDate = tillMonth + " " + tillYear;
    let dateOne;
    let sDate;
    let dateTwo;
    let lDate;

    if (!designation.length) {
      this.setState({
        validDesignation: false
      });
    }
    if (!description.length) {
      this.setState({
        validDescription: false
      });
    }
    if (!companyName.length) {
      this.setState({
        validCompanyName: false
      });
    }
    if (fromMonth && fromYear) {
      dateOne = new Date(startDate);
      sDate = dateOne.toISOString().slice(0, 10);
    }

    if (tillMonth && tillYear) {
      dateTwo = new Date(lastDate);
      lDate = dateTwo.toISOString().slice(0, 10);
    }
    if (
      designation.length &&
      description.length &&
      companyName.length &&
      startDate.length &&
      lastDate.length
    ) {
      if (this.state.buttonText === "Save") {
        this.props.clientAddExperienceApi(
          designation,
          companyName,
          currentlyWorking,
          sDate,
          lDate,
          description
        );
      } else {
        this.props.clientEditExperienceApi(
          this.state.editId,
          designation,
          companyName,
          currentlyWorking,
          sDate,
          lDate,
          description
        );
      }
    }
    this.setState({
      showText: true
    });
  };
  setYears = () => {
    let currentYear = new Date().getFullYear();
    let arr = [];
    for (let i = 1990; i <= currentYear; i++) {
      arr.push(i.toString());
    }
    this.setState({ years: arr });
  };
  deleteWordExperience = id => {
    this.props.clientDeleteExperienceApi(id);
  };
  editExperience = (val, date, todate) => {
    let fromMonth = date.slice(0, 3);
    let fromYear = date.slice(4, 8);
    let tillMonth = todate.slice(0, 3);
    let tillYear = todate.slice(4, 8);
    this.setState({
      open: true,
      editId: val.id,
      designation: val.designation,
      companyName: val.companyName,
      currentlyWorking: val.currentlyWorking,
      description: val.description,
      fromMonth: fromMonth,
      fromYear: fromYear,
      tillMonth: tillMonth,
      tillYear: tillYear,
      buttonText: "Edit"
    });
  };
  render() {
    const { classes } = this.props;
    const {
      open,
      months,
      years,
      fromMonth,
      fromYear,
      tillMonth,
      tillYear,
      defaultChecked
    } = this.state;
    const { roots, formControl, formControlText, formControlSelect } = classes;
    return (
      <div className={classes.mainContainer}>
        <div className={classes.iconBtnDiv}>
          <IconButton
            className={classes.plusIconContainer}
            onClick={() => this.setState({ open: true, buttonText: "Save" })}
          >
            <Add className={classes.addIcon} />
          </IconButton>
        </div>
        {this.state.experienceData
          ? this.state.experienceData.map((val, i) => {
              let sDate = new Date(val.fromDate);
              let date = sDate.toUTCString().slice(8, 16);
              let eDate = new Date(val.toDate);
              let todate = eDate.toUTCString().slice(8, 16);
              return (
                <div style={{ marginBottom: 40 }} key={i}>
                  <Typography className={classes.title}>
                    {val.designation}
                    <span className={classes.iconContainer}>
                      <EditIcon
                        className={classes.smallIcon}
                        onClick={() => this.editExperience(val, date, todate)}
                      />
                      <span className={classes.line} />
                      <DeleteIcon
                        className={classes.smallIcon}
                        onClick={() => this.deleteWordExperience(val.id)}
                      />
                    </span>
                  </Typography>
                  <Typography className={classes.housingcom}>
                    {val.companyName}
                  </Typography>
                  <Typography className={classes.timeDuration}>
                    {date} - {val.currentlyWorking ? "Present" : todate}
                    <span className={classes.oval} />
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
          className={classes.paper}
        >
          <IconButton
            className={classes.closeIcon}
            aria-label="Close"
            onClick={() => this.setState({ open: false, showText: false })}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
          <DialogTitle id="alert-dialog-title" className={classes.modalTitle}>
            <Typography className={classes.headerText}>
              <IconButton
                className={classes.back}
                aria-label="Close"
                onClick={() => this.setState({ open: false })}
              >
                <Back className={classes.icon} />
              </IconButton>{" "}
              <Typography className={classes.heading}>
                Add Work Experience
              </Typography>
            </Typography>
          </DialogTitle>
          <DialogContent className={classes.modal}>
            <DialogContentText
              id="alert-dialog-description"
              className={classes.content}
            >
              <div className={classes.FormContainer}>
                <InputArea
                  label="Designation"
                  name="designation"
                  validation={this.state.validDesignation}
                  value={this.state.designation}
                  styleprops={styles.textFieldPass}
                  handleInputChange={event => this.handleChange(event)}
                />
                <InputArea
                  label="Company Name"
                  validation={this.state.validCompanyName}
                  value={this.state.companyName}
                  name="companyName"
                  handleInputChange={event => this.handleChange(event)}
                  styleprops={styles.textFieldPass}
                />

                <div className={classes.dropDownContainer}>
                  {this.dropDown(
                    "From Date",
                    months,
                    "fromMonth",
                    roots,
                    formControl,
                    formControlText,
                    formControlSelect
                  )}

                  {this.dropDown(
                    "",
                    years,
                    "fromYear",
                    roots,
                    formControl,
                    formControlText,
                    formControlSelect
                  )}

                  {this.dropDown(
                    "Till Date",
                    months,
                    "tillMonth",
                    roots,
                    formControl,
                    formControlText,
                    formControlSelect
                  )}

                  {this.dropDown(
                    "",
                    years,
                    "tillYear",
                    roots,
                    formControl,
                    formControlText,
                    formControlSelect
                  )}
                </div>
                <div>
                  <div className={classes.checkBoxContainer}>
                    <Checkbox
                      defaultChecked={this.state.currentlyWorking}
                      color="#000"
                      value={this.state.currentlyWorking}
                      onChange={e =>
                        this.setState({ currentlyWorking: e.target.checked })
                      }
                      inputProps={{
                        "aria-label": "checkbox with default color"
                      }}
                    />
                    <Typography className={classes.working}>
                      I am currently working here
                    </Typography>
                  </div>
                  <div>
                    <InputArea
                      label="Description  "
                      name="description"
                      validation={this.state.validDescription}
                      value={this.state.description}
                      styleprops={styles.textFieldPass}
                      handleInputChange={event => this.handleChange(event)}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.btnContainer}>
                <Button
                  onClick={this.addWordExperience}
                  className={classes.saveBtn}
                >
                  {this.state.buttonText}
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
    clientAddExperienceApi: (
      designation,
      companyName,
      currentlyWorking,
      startDate,
      lastDate,
      description
    ) => {
      dispatch(
        clientAddExperienceApi(
          designation,
          companyName,
          currentlyWorking,
          startDate,
          lastDate,
          description
        )
      );
    },
    clientEditExperienceApi: (
      id,
      designation,
      companyName,
      currentlyWorking,
      startDate,
      lastDate,
      description
    ) => {
      dispatch(
        clientEditExperienceApi(
          id,
          designation,
          companyName,
          currentlyWorking,
          startDate,
          lastDate,
          description
        )
      );
    },
    clientDeleteExperienceApi: id => {
      dispatch(clientDeleteExperienceApi(id));
    }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Experience))
);
