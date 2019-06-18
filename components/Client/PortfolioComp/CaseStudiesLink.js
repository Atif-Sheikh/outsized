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

class CaseLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadFile: false,
      saveFile: false,
      openDeleteModal: false,
      cases: [],
      add: [],
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
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { classes, fileName } = this.props;
    const { cases, add, name, url } = this.state;
    console.log(add);
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
                <Typography>{casesData.url}</Typography>
              </div>
              <div className={classes.iconCaseSection}>
                <IconButton
                  className={classes.closeIcon}
                  aria-label="Close"
                  onClick={() => this.deleteCase(i)}
                >
                  <CloseIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
          ))}

        {add.length > 0 &&
          add.map(cases => (
            <div className={classes.casePreview}>
              <div className={classes.caseLinkSection}>
                <InputArea
                  name={"name"}
                  label={"Name"}
                  handleInputChange={this.handleInputChange}
                  value={name}
                  styleprops={classes.textFieldPass}
                />
              </div>
              <div className={classes.caseLinkSection}>
                <InputArea
                  name={"url"}
                  label={"Url"}
                  handleInputChange={this.handleInputChange}
                  value={url}
                  styleprops={classes.textFieldPass}
                />
              </div>
              <div className={classes.iconCaseSection}>
                <IconButton
                  className={classes.closeIcon}
                  aria-label="Close"
                  onClick={() => this.setState({ add: [] })}
                >
                  <CloseIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  className={classes.closeIcon}
                  aria-label="Close"
                  onClick={this.addNewCase}
                >
                  <CheckIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
          ))}
        <div className={classes.uploadBtnContainer}>
          <Button onClick={this.addNewFiled} className={classes.uploadFiles}>
            Add Links
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CaseLinks);
