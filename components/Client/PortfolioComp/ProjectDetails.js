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
      url: ""
    };
  }
  addNewFiled = () => {
    console.log(this.state.add.length);
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
    const { classes, fileName } = this.props;
    const { projects, add, name, url } = this.state;
    console.log(this.props, "??>>>>>>>>>>>>>");
    return (
      <div className={classes.resumeSection}>
        <div className={classes.casePreview}>
          <Typography className={classes.resume}>Project</Typography>
          <div className={classes.iconCaseSection}>
            <IconButton
              className={classes.AddFiles}
              aria-label="Close"
              onClick={() => this.deleteCase(i)}
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
                    value={projectsData.staetDate}
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
                    value={projectsData.description}
                    validation={true}
                    disabled={true}
                  />
                </div>
              </div>
              <Typography variant="h6" className={classes.caseLinkSection}>
                Project Documents
              </Typography>
              <div className={classes.casePreview}>
                <div className={classes.caseLinkSection}>
                  <FilesContainer fileName="test hi " />
                </div>
              </div>
            </div>
          ))}

        <div className={classes.uploadBtnContainer}>
          <Button onClick={this.addNewFiled} className={classes.uploadFiles}>
            Upload Files
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectDetails);
