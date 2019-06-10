import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";

import HiringStagesTemplateTable from "@components/Admin/Table/HiringStagesTemplateTable.component";
import {
  getHiringStageCategories,
  addHiringStageApi,
  closeHiringStageModal,
  openHiringStageModal,
  getHiringStages
} from "@actions/admin/hiringstage.actions";
import { addHiringTemplateApi } from "@actions/admin/hiringtemplate.actions";
import { getRetreiveTemplate } from "../../actions/admin/retreiveTemplate.actions";

import { styles } from "@styles/adminComponents/components/HiringStages.styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
var check = false;
class HiringStages extends Component {
  state = {
    stage: "",
    template: "",
    templateValid: true,
    stageValid: true,
    categoryId: "",
    labelWidth: 100
  };
  componentWillReceiveProps = nextProps => {
    const {
      retrevieTemplates,
      templateId,
      enqueueSnackbar,
      closeSnackbar
    } = nextProps;
    if (check) {
      this.props.getRetreiveTemplate(
        templateId,
        enqueueSnackbar,
        closeSnackbar
      );
      check = false;
    }
  };
  componentDidMount() {
    this.props.getHiringStageCategories(
      this.props.enqueueSnackbar,
      this.props.closeSnackbar
    );
    this.props.getHiringStages(
      this.props.enqueueSnackbar,
      this.props.closeSnackbar
    );
  }

  handleOpen = () => {
    this.props.openHiringStageModal();
  };

  handleClose = () => {
    this.props.closeHiringStageModal();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addHiringTemplate = () => {
    const { template } = this.state;
    if (!template.length) {
      this.setState({ templateValid: false });
      check = false;
    } else {
      check = true;
      this.props.addHiringTemplateApi(
        template,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar
      );
    }
  };

  addHiringStage = () => {
    const { stage, category } = this.state;
    const { templateId } = this.props;
    if (!stage.length) {
      check = false;
      this.setState({ stageValid: false });
    } else {
      check = true;
      this.props.addHiringStageApi(
        stage,
        templateId,
        category,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar
      );
    }
  };

  modal = (
    paper,
    contentTitle,
    templateDiv,
    textFields,
    denses,
    resizes,
    submitButton,
    formControl,
    inputLabel,
    selectLabel,
    buttonProgress,
    wrapper
  ) => {
    const { stage, stageValid, category, labelWidth } = this.state;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.openStageModal}
        onClose={this.handleClose}
      >
        <div style={getModalStyle()} className={paper}>
          <Typography
            className={contentTitle}
            variant="h6"
            color="inherit"
            noWrap
          >
            Add a New Stage
          </Typography>
          <div className={templateDiv}>
            <FormControl variant="outlined" className={formControl}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                className={inputLabel}
                htmlFor="outlined-age-simple"
              >
                Category
              </InputLabel>
              <Select
                value={category}
                className={selectLabel}
                onChange={this.handleChange}
                input={
                  <OutlinedInput
                    labelWidth={labelWidth}
                    name="category"
                    id="outlined-age-simple"
                  />
                }
              >
                {this.props.categories.map((category, i) => {
                  return (
                    <MenuItem key={i} value={category.id}>
                      {category.name.toUpperCase()}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              name="stage"
              id="outlined-dense"
              label="Enter Stage Name"
              className={classNames(textFields, denses)}
              margin="dense"
              variant="outlined"
              value={stage}
              onChange={e => this.handleChange(e)}
              InputProps={{
                classes: {
                  input: resizes
                }
              }}
              helperText={stageValid ? "" : "*Please enter a stage name"}
            />
          </div>
          <div className={wrapper}>
            <Button
              variant="contained"
              color="secondary"
              className={submitButton}
              onClick={this.addHiringStage}
            >
              Submit
            </Button>
            {this.props.isLoading && (
              <CircularProgress size={28} className={buttonProgress} />
            )}
          </div>
        </div>
      </Modal>
    );
  };
  render() {
    const { classes, retrevieTemplates } = this.props;
    const { template, templateValid } = this.state;
    const {
      mainContainer,
      componentContent,
      contentTitle,
      headerTitle,
      dense,
      textField,
      resize,
      denses,
      textFields,
      resizes,
      ComponentHeader,
      addStagesContainer,
      addStagesTypography,
      addStagesButton,
      AddStagesTitleHeader,
      AddStagesTitleParagraph,
      button,
      addIcon,
      paper,
      templateDiv,
      submitButton,
      formControl,
      inputLabel,
      selectLabel,
      buttonProgress,
      wrapper,
      templateContainer,
      templateSubmitButton
    } = classes;
    return (
      <div className={mainContainer}>
        <div className={componentContent}>
          <div className={ComponentHeader}>
            <Typography
              className={headerTitle}
              variant="h6"
              color="inherit"
              noWrap
            >
              Create Template For Hiring Stages
            </Typography>
            <Typography
              className={contentTitle}
              variant="h6"
              color="inherit"
              noWrap
            >
              Template Name*
            </Typography>
            <div className={templateContainer}>
              <TextField
                name="template"
                value={template}
                onChange={e => this.setState({ template: e.target.value })}
                id="outlined-dense"
                label="Enter Template Name"
                className={classNames(textField, dense)}
                margin="dense"
                variant="outlined"
                InputProps={{
                  classes: {
                    input: resize
                  }
                }}
                helperText={
                  templateValid ? "" : "*Please enter a template name"
                }
              />
              <div className={wrapper}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={templateSubmitButton}
                  onClick={this.addHiringTemplate}
                >
                  Submit
                </Button>
                {this.props.isLoading && (
                  <CircularProgress size={28} className={buttonProgress} />
                )}
              </div>
            </div>
          </div>
          <div className={addStagesContainer}>
            <div className={addStagesTypography}>
              <Typography
                className={AddStagesTitleHeader}
                variant="h6"
                color="inherit"
                noWrap
              >
                Add or rearrange categories
              </Typography>
              <Typography
                className={AddStagesTitleParagraph}
                variant="h6"
                color="inherit"
                noWrap
              >
                Within each reporting categories, as many stages can be added
              </Typography>
            </div>
            <div className={addStagesButton}>
              <Button
                variant="contained"
                className={button}
                onClick={this.handleOpen}
              >
                <i className={addIcon}>add</i>
                Add Stages
              </Button>
            </div>
          </div>
          <HiringStagesTemplateTable
            stages={
              retrevieTemplates && retrevieTemplates.stages
                ? retrevieTemplates.stages
                : []
            }
          />
          {this.modal(
            paper,
            contentTitle,
            templateDiv,
            textFields,
            denses,
            resizes,
            submitButton,
            formControl,
            inputLabel,
            selectLabel,
            buttonProgress,
            wrapper
          )}
        </div>
      </div>
    );
  }
}

HiringStages.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    openStageModal: state.hiringStageReducer.openStageModal,
    categories: state.hiringStageReducer.categories,
    stages: state.hiringStageReducer.stages,
    isLoading: state.hiringStageReducer.isLoading,
    templateId: state.hiringTemplateReducer.addTemplateId,
    retrevieTemplates: state.hiringTemplateReducer.retrevieTemplates
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addHiringTemplateApi: (template, enqueueSnackbar, closeSnackbar) =>
      dispatch(addHiringTemplateApi(template, enqueueSnackbar, closeSnackbar)),
    addHiringStageApi: (
      stage,
      templateId,
      categoryId,
      enqueueSnackbar,
      closeSnackbar
    ) =>
      dispatch(
        addHiringStageApi(
          stage,
          templateId,
          categoryId,
          enqueueSnackbar,
          closeSnackbar
        )
      ),
    getHiringStageCategories: (enqueueSnackbar, closeSnackbar) =>
      dispatch(getHiringStageCategories(enqueueSnackbar, closeSnackbar)),
    getHiringStages: (enqueueSnackbar, closeSnackbar) =>
      dispatch(getHiringStages(enqueueSnackbar, closeSnackbar)),
    closeHiringStageModal: () => dispatch(closeHiringStageModal()),
    openHiringStageModal: () => dispatch(openHiringStageModal()),
    getRetreiveTemplate: (id, enqueueSnackbar, closeSnackbar) =>
      dispatch(getRetreiveTemplate(id, enqueueSnackbar, closeSnackbar))
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(HiringStages))
);
