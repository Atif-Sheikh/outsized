import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import PdfFile from "@material-ui/icons/PictureAsPdf";
import { styles } from "@styles/clientComponents/Portfolio.styles.js";
import InputArea from "../../ReuseableComponents/InputArea";
import FilesContainer from "./FileContainer";
import {
  retrieveFreelancerProfile,
  addProject,
  addProjectDocuments
  // clientAddExperienceApi,
  // clientEditExperienceApi,
  // clientDeleteExperienceApi
} from "@actions/client";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import Back from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
// import { styles } from "@styles/clientComponents/Experience.styles.js";
import MenuItem from "@material-ui/core/MenuItem";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withSnackbar } from "notistack";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadFile: false,
      saveFile: false,
      openDeleteModal: false,
      projects: [
        {
          name: "test",
          clientName: "name",
          staetDate: "2019-2-3",
          endDate: "S0S",
          type: "Design",
          description: "assadasdddd cfsdfasdfasdsd"
        }
      ],
      name: "",
      client: "",
      type: "",
      url: "",
      fromMonth: "",
      fromYear: "",
      tillMonth: "",
      tillYear: "",
      open: false,
      name: "",
      clientName: "",
      onGoing: true,
      description: "",
      defaultChecked: true,
      fromDate: "",
      toDate: "",
      validName: true,
      validclientName: true,
      validDescription: true,
      validType: true,
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
      getProJect: [],
      saveFile: false,
      openDeleteModal: false,
      file: {},
      fileUploaded: {},
      pdf: [],
      id: "",
      ProjectDoc: []
    };
  }
  setAllData = ({ resumes }) => {
    this.setState({ pdf: resumes || [] });
  };

  deleteModal = () => {
    const { openDeleteModal } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
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
              <Button className={classes.yesOrNoBtn}>No</Button>
              <Button className={classes.yesOrNoBtn} autoFocus>
                Yes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  saveSendDoc = id => {
    const { file, fileUploaded } = this.state;
    var data = { id: this.state.id, name: file.name, file: fileUploaded };
    this.props.addProjectDocuments(data);
    this.setState({ saveFile: false });
  };
  saveBeforeLeaving = () => {
    const { saveFile } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        open={saveFile}
        onClose={() => {}}
        style={{ minWidth: "500px", minHeight: "250px", borderRadius: "5px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => this.setState({ saveFile: false })}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <DialogTitle id="alert-dialog-title">
          <Typography className={classes.saveBefore}>
            Save before leaving?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div className={classes.saveBeforeModal}>
            <div className={classes.flexContainer}>
              <Button className={classes.notInterested}>
                No, not interested
              </Button>
              <Button
                className={classes.btnBg}
                onClick={() => this.saveSendDoc()}
                autoFocus
              >
                Yes, please save it
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  callModal = id => {
    this.setState({ id: id });
    var input = document.getElementById("file-upload");
    // var infoArea = document.getElementById( 'file-upload-filename' );
    input.addEventListener("change", this.showFileName);
  };
  showFileName = event => {
    // the change event gives us the input it occurred in
    var input = event.srcElement;
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    var imgdata = { name: file.name, data: reader, type: file.type };
    this.setState({ uploadFile: true, file: imgdata, fileUploaded: file });
  };
  nameChanger = e => {
    let { file } = this.state;
    var addFile = file;
    addFile.name = e.target.value;
    this.setState({ file: addFile });
  };
  uploadFileModal = fileName => {
    const { uploadFile, file } = this.state;
    const { classes } = this.props;
    return (
      <Dialog
        open={uploadFile}
        onClose={() => {}}
        style={{ minWidth: "630px !important", minHeight: "400px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => this.setState({ uploadFile: false })}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <DialogTitle className={classes.headerTitle} id="alert-dialog-title">
          Upload Files
        </DialogTitle>
        <DialogContent>
          <div className={classes.uploadFileModal}>
            <div className={classes.filePreviewUpload}>
              <div className={classes.nameSectionUploaded}>
                <CheckIcon className={classes.check} />
                <PdfFile />
                <Typography>{file.addEventListener}</Typography>
              </div>
              <div className={classes.iconSection}>
                <IconButton
                  className={classes.closeIcon}
                  aria-label="Close"
                  onClick={() => this.setState({ openDeleteModal: true })}
                >
                  <CloseIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
            <InputArea
              validation={true}
              styleprops={classes.textField}
              name={"name"}
              value={file.name}
              handleInputChange={this.nameChanger}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.saveBtn}
            onClick={() => this.setState({ uploadFile: false, saveFile: true })}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
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
      nextProps.freelancerProfile.freelancer.portfolio;
    // let deleteData =
    //   nextProps &&
    //   nextProps.deleteExperience &&
    //   nextProps.deleteExperience.deleteExperience &&
    //   nextProps.deleteExperience.deleteExperience.deleteExperience &&
    //   nextProps.deleteExperience.deleteExperience.deleteExperience
    //     .freelancerProfile &&
    //   nextProps.deleteExperience.deleteExperience.deleteExperience
    //     .freelancerProfile.portfolio;
    // console.log("deleteData", deleteData);

    if (
      basicData &&
      basicData.projects &&
      nextProps.allProject.length > basicData.projects.length
    ) {
      this.props.retrieveFreelancerProfile();
      this.setState({
        projects: basicData.allProject,
        open: false
      });
    } else {
      this.setState({
        projects: basicData && basicData.projects ? basicData.projects : [],
        open: false
      });
    }
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
      name,
      description,
      clientName,
      onGoing,
      fromYear,
      fromMonth,
      tillMonth,
      tillYear,
      type
    } = this.state;
    let startDate = fromMonth + " " + fromYear;
    let lastDate = tillMonth + " " + tillYear;
    let dateOne;
    let sDate;
    let dateTwo;
    let lDate;

    if (!name.length) {
      this.setState({
        validName: false
      });
    }
    if (!type.length) {
      this.setState({
        validType: false
      });
    }
    if (!description.length) {
      this.setState({
        validDescription: false
      });
    }
    if (!clientName.length) {
      this.setState({
        validclientName: false
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
      name.length &&
      description.length &&
      clientName.length &&
      startDate.length &&
      lastDate.length
    ) {
      if (this.state.buttonText === "Save") {
        const data = {
          name: name,
          client: clientName,
          startDate: sDate,
          endDate: lDate,
          projectType: type,
          ongoing: onGoing,
          description: description
        };
        this.props.addProject(data);
      } else {
        this.props.clientEditExperienceApi(
          this.state.editId,
          name,
          clientName,
          onGoing,
          sDate,
          lDate,
          description
        );
      }
    }
    this.setState({
      showText: true
    });
    console.log(sDate);
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
      name: val.name,
      clientName: val.clientName,
      onGoing: val.onGoing,
      description: val.description,
      fromMonth: fromMonth,
      fromYear: fromYear,
      tillMonth: tillMonth,
      tillYear: tillYear,
      buttonText: "Edit"
    });
  };
  addNewFiled = () => {
    var data = [];
    if (!this.state.add.length) {
      // this.state.add.push({name:"sss",url:"sss"})
      this.setState({ add: [{ name: "sss", url: "sss" }] });
    }
  };
  addNewCase = () => {
    const { projects, add, name, url } = this.state;
    this.state.projects.push({ name: name, url: url });
    this.setState({ add: [], name: "", url: "" });
  };
  deleteCase = i => {
    delete this.state.projects[i];
    let done = this.state.projects.filter(data => data);
    this.setState({ projects: done, add: [] });
  };
  handleInputChange = async event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { projects, add, name, url, ProjectDoc } = this.state;
    const { classes, fileName } = this.props;
    const { open, months, years } = this.state;
    const { roots, formControl, formControlText, formControlSelect } = classes;
    return (
      <div className={classes.resumeSection}>
        <div className={classes.casePreview}>
          <Typography className={classes.resume}>Project</Typography>
          <div className={classes.iconCaseSection}>
            <IconButton
              className={classes.AddFiles}
              aria-label="Close"
              onClick={() => this.setState({ open: true, buttonText: "Save" })}
            >
              <Add className={classes.iconAdd} />
            </IconButton>
          </div>
        </div>
        {projects.length > 0 &&
          projects.map((projectsData, i) => (
            <div className={classes.projctPreview}>
              <div className={classes.casePreview}>
                <div className={classes.caseLinkSection}>
                  <InputArea
                    label={"Peoject Name"}
                    value={projectsData.name}
                    validation={true}
                    disabled={true}
                  />
                </div>
                <div className={classes.caseLinkSection}>
                  <InputArea
                    label={"Client Name"}
                    value={projectsData.clientName}
                    validation={true}
                    disabled={true}
                  />
                </div>
              </div>
              <div className={classes.casePreview}>
                <div className={classes.caseLinkSection}>
                  <InputArea
                    label={"Peoject Start Date"}
                    value={projectsData.startDate}
                    validation={true}
                    disabled={true}
                  />
                </div>
                <div className={classes.caseLinkSection}>
                  <InputArea
                    label={"Peoject End Date"}
                    value={projectsData.endDate}
                    validation={true}
                    disabled={true}
                  />
                </div>
              </div>
              <div className={classes.casePreview}>
                <div className={classes.caseLinkSection}>
                  <InputArea
                    label={"Type of Project"}
                    value={projectsData.type}
                    validation={true}
                    disabled={true}
                  />
                </div>
              </div>
              <div className={classes.messagePreview}>
                <div className={classes.caseLinkSection}>
                  <InputArea
                    multiline={true}
                    rows={4}
                    label={
                      "What else would you like to tell us about yourself and what you’re looking for?"
                    }
                    value={projectsData.projectType}
                    validation={true}
                    disabled={true}
                  />
                </div>
              </div>
              <Typography variant="h6" className={classes.caseLinkSection}>
                Project Documents
              </Typography>
              {ProjectDoc.length > 0 && (
                <div className={classes.casePreview}>
                  {ProjectDoc.map(data => (
                    <div className={classes.caseLinkSection}>
                      <FilesContainer fileName={data} data={data} />
                    </div>
                  ))}
                </div>
              )}
              <div className={classes.uploadBtnContainer}>
                <Button
                  onClick={() => this.callModal(projectsData.id)}
                  className={classes.uploadFiles}
                >
                  <form>
                    <input
                      type="file"
                      id="file-upload"
                      style={{ Zindex: -1, position: "absolute", opacity: 0 }}
                      className={classes.uploadFiles}
                    />
                    <label for="file-upload">Upload file</label>
                  </form>
                </Button>
              </div>
            </div>
          ))}

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
              <Typography>Add Project Details</Typography>
            </Typography>
          </DialogTitle>
          <Typography className={classes.headerText}>
            <span
              className={classes.headerTextChild}
              style={{
                color: this.props.hasError ? "red" : "green",
                paddingLeft: "20px"
              }}
            >
              {this.state.showText ? this.props.message : ""}
            </span>
          </Typography>
          <DialogContent className={classes.modal}>
            <DialogContentText
              id="alert-dialog-description"
              className={classes.content}
            >
              <div className={classes.FormContainer}>
                <InputArea
                  label="Project Name"
                  name="name"
                  validation={this.state.validName}
                  value={this.state.name}
                  styleprops={styles.textFieldPass}
                  handleInputChange={event => this.handleChange(event)}
                />
                <InputArea
                  label="Client Name"
                  validation={this.state.validclientName}
                  value={this.state.clientName}
                  name="clientName"
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
                      defaultChecked={this.state.onGoing}
                      color="#000"
                      value={this.state.onGoing}
                      onChange={e =>
                        this.setState({ onGoing: e.target.checked })
                      }
                      inputProps={{
                        "aria-label": "checkbox with default color"
                      }}
                    />
                    <Typography className={classes.working}>Ongoing</Typography>
                  </div>
                  <div>
                    <InputArea
                      label="Type of Project"
                      name="type"
                      validation={this.state.validType}
                      value={this.state.type}
                      styleprops={styles.textFieldPass}
                      handleInputChange={event => this.handleChange(event)}
                    />
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
  console.log("state", state);
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
    deleteEducation: state.clientBasicProfileReducer.deleteEducation,
    allProject: state.PortfolioReducer.allProject
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveFreelancerProfile: () => {
      dispatch(retrieveFreelancerProfile());
    },
    addProject: data => {
      dispatch(addProject(data));
    },
    addProjectDocuments: data => dispatch(addProjectDocumentss(data)),
    clientDeleteExperienceApi: id => {
      dispatch(clientDeleteExperienceApi(id));
    }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ProjectDetails))
);
