import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Router from "next/router";

import {
  addHiringTemplateApi,
  closeHiringTemplateModal,
  openHiringTemplateModal
} from "@actions/admin/hiringtemplate.actions";

import { styles } from "@styles/adminComponents/components/ComponentHeader.styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class ComponentHeader extends Component {
  state = {
    template: "",
    templateValid: true
  };

  handleOpen = () => {
    Router.push("/amdin/hiring-stages");
    // this.props.openHiringTemplateModal();
  };

  handleClose = () => {
    this.props.closeHiringTemplateModal();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addHiringTemplate = () => {
    const { template } = this.state;
    if (!template.length) {
      this.setState({ templateValid: false });
    } else {
      this.props.addHiringTemplateApi(template, this.props.enqueueSnackbar);
    }
  };

  modal = (
    paper,
    contentTitle,
    templateDiv,
    textField,
    dense,
    resize,
    submitButton
  ) => {
    const { template, templateValid } = this.state;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.openModal}
        onClose={this.handleClose}
      >
        <div style={getModalStyle()} className={paper}>
          <Typography
            className={contentTitle}
            variant="h6"
            color="inherit"
            noWrap
          >
            Add a New Template
          </Typography>
          <div className={templateDiv}>
            <TextField
              name="template"
              id="outlined-dense"
              label="Enter Template Name"
              className={classNames(textField, dense)}
              margin="dense"
              variant="outlined"
              value={template}
              onChange={e => this.handleChange(e)}
              InputProps={{
                classes: {
                  input: resize
                }
              }}
              helperText={templateValid ? "" : "*Please enter a template name"}
            />
            <Button
              variant="contained"
              color="secondary"
              className={submitButton}
              onClick={this.addHiringTemplate}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    );
  };
  render() {
    const { classes } = this.props;
    const {
      componentHeader,
      title,
      button,
      addIcon,
      paper,
      textField,
      dense,
      resize,
      submitButton,
      contentTitle,
      templateDiv,
      addStagesButton,
      button1,
      addIcon1
    } = classes;
    return (
      <div
        className={componentHeader}
        style={{
          borderBottom: this.props.bottomColor ? "2px solid  #bec7ce" : "none"
        }}
      >
        <Typography
          className={title}
          variant="h6"
          color="inherit"
          noWrap
          style={{ marginLeft: this.props.marginLeft ? "0px" : "32px" }}
        >
          {this.props.headerText}
        </Typography>
        {this.props.addButton ? (
          <Button
            variant="contained"
            className={button}
            onClick={this.handleOpen}
          >
            <i className={addIcon}>add</i>
            Add New
          </Button>
        ) : (
          ""
        )}
        {this.props.addButtonFeedback ? (
          <div className={addStagesButton}>
            <Button
              variant="contained"
              className={button1}
              style={{ marginRight: this.props.marginLeft ? "40px" : "0px" }}
              onClick={
                this.props.emailTemplate
                  ? this.props.redirectFunction
                  : this.props.bottomColor
                  ? this.props.redirectFunction
                  : this.props.modalOpen
              }
            >
              <i className={addIcon1}>add</i>
              {this.props.text}
            </Button>
          </div>
        ) : (
          ""
        )}
        {this.modal(
          paper,
          contentTitle,
          templateDiv,
          textField,
          dense,
          resize,
          submitButton
        )}
      </div>
    );
  }
}

ComponentHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    openModal: state.hiringTemplateReducer.openModal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addHiringTemplateApi: (template, enqueueSnackbar) =>
      dispatch(addHiringTemplateApi(template, enqueueSnackbar)),
    closeHiringTemplateModal: () => dispatch(closeHiringTemplateModal()),
    openHiringTemplateModal: () => dispatch(openHiringTemplateModal())
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ComponentHeader))
);
