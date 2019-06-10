import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ComponentHeader from "@components/Admin/ComponentHeader/ComponentHeader.component";
import { styles } from "@styles/adminComponents/components/FeedbackForm.styles";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import Table from "../Table/FeedbackFormTemplateTable.component";
import Router from "next/Router";
import classNames from "classnames";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import {
  getAllScales,
  addScalesCriteria,
  getAllScalesCriteria
} from "../../../actions/admin/scaleRating.action.js";
let onlyNumbers = /^[0-9]+$/;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
class FeedbackForm extends Component {
  state = {
    duplicateIconRating: [],
    iconsRating: [
      {
        icon: "cancel",
        value: "Strong negative"
      },
      {
        icon: "thumb_down",
        value: "Negative"
      },
      {
        icon: "remove_circle",
        value: "Neutral"
      },
      {
        icon: "thumb_up",
        value: "Positive"
      },
      {
        icon: "stars",
        value: "Strong positive"
      }
    ],
    numberRating: [
      {
        icon: "1",
        value: "Strong negative"
      },
      {
        icon: "2",
        value: "Negative"
      },
      {
        icon: "3",
        value: "Neutral"
      },
      {
        icon: "4",
        value: "Positive"
      },
      {
        icon: "5",
        value: "Strong positive"
      }
    ],
    iconsShow: true,
    open: false,
    allScales: [],
    name: "",
    description: ""
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  componentDidMount() {
    const { getAllScales, enqueueSnackbar, closeSnackbar } = this.props;
    getAllScales(enqueueSnackbar, closeSnackbar);
    getAllScalesCriteria(enqueueSnackbar, closeSnackbar);
  }
  componentWillReceiveProps(nextProps) {
    const {
      clear,
      allScales,
      allScalesCriteria,
      getAllScalesCriteria,
      enqueueSnackbar,
      closeSnackbar
    } = nextProps;
    if (clear) {
      getAllScalesCriteria(enqueueSnackbar, closeSnackbar);
      getAllScales(enqueueSnackbar, closeSnackbar);
    }
    this.setState({
      allScales: allScales,
      allScalesCriteria: allScalesCriteria
    });
  }
  handleClose = () => {
    this.setState({ open: false, name: "", description: "" });
  };
  ratingScaleBoxes = (
    id,
    data,
    mainBox,
    colorBox,
    icons,
    contentTitleBox,
    contentTitle,
    textField
  ) => {
    return data.items.map((Value, i) => (
      <div className={mainBox}>
        {data.scaleType !== "custom" ? (
          <div className={colorBox}>
            {!onlyNumbers.test(Value.buttonText) ? (
              <i className={icons}>{Value.buttonText}</i>
            ) : (
              <Typography
                className={contentTitle}
                variant="h6"
                color="inherit"
                noWrap
              >
                {Value.buttonText}
              </Typography>
            )}
          </div>
        ) : (
          <TextField
            id="outlined-name"
            disabled
            // onChange={value => this.customChange(value, id)}
            value={Value.buttonText}
            margin="normal"
            inputProps={{
              maxLength: 20
            }}
            variant="outlined"
          />
        )}
        {data.scaleType !== "custom" ? (
          <Typography
            className={contentTitleBox}
            variant="h6"
            color="inherit"
            noWrap
          >
            {Value.labelText}
          </Typography>
        ) : (
          <TextField
            id="outlined-name"
            disabled
            value={Value.labelText}
            // onChange={(value) => this.customChange(value, id)}
            margin="normal"
            inputProps={{
              maxLength: 20
            }}
            variant="outlined"
          />
        )}
      </div>
    ));
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
  addScalesCriteria = () => {
    const { addScalesCriteria, enqueueSnackbar, closeSnackbar } = this.props;
    const { name, description } = this.state;
    if (name.trim() !== "" && description.trim() !== "") {
      addScalesCriteria(name, description, enqueueSnackbar, closeSnackbar);
      this.handleClose();
    } else {
      const key = enqueueSnackbar(
        name.trim() === "" ? "Please Enter Name" : "Please Enter Description",
        {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        }
      );
      setTimeout(() => {
        closeSnackbar(key);
      }, 2000);
    }
  };
  handelChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    const {
      mainContainer,
      contentTitle,
      container,
      mainBox,
      colorBox,
      icons,
      contentTitleBox,
      contentTitleBoxes,
      textField,
      boxes,
      editContainer,
      icon,
      tableContainer,
      paper,
      borderContainer,
      header,
      headers,
      button1,
      button2,
      btnContainer
    } = classes;
    let idScale = "";
    const { iconsRating, numberRating, allScales } = this.state;
    return (
      <div className={mainContainer}>
        <ComponentHeader
          headerText="Rating Scales"
          text="Add New Scales"
          addButton={false}
          addButtonFeedback={true}
          bottomColor={true}
          redirectFunction={() => Router.push("/admin/rating-scales")}
        />
        {allScales &&
          allScales.map((scales, id) => (
            <div className={container}>
              <div className={editContainer}>
                <Typography
                  className={contentTitle}
                  variant="h6"
                  color="inherit"
                  noWrap
                >
                  {scales.name}
                </Typography>
                <EditIcon className={icon} />
              </div>
              <div className={boxes}>
                {this.ratingScaleBoxes(
                  id,
                  scales,
                  mainBox,
                  colorBox,
                  icons,
                  contentTitleBox,
                  contentTitleBoxes,
                  textField
                )}
              </div>
            </div>
          ))}
        {/* <div className={container}>
          <div className={editContainer}>
            <Typography
              className={contentTitle}
              variant="h6"
              color="inherit"
              noWrap
            >
              Relevant Experience
            </Typography>
            <EditIcon className={icon} />
          </div>
          <div className={boxes}>
            {iconsRating.map((val, id) => {
              return this.ratingScaleBoxes(
                id,
                val.icon,
                val.value,
                mainBox,
                colorBox,
                icons,
                contentTitleBox,
                contentTitleBoxes,
                textField
              );
            })}
          </div>
        </div> */}
        <ComponentHeader
          headerText="Evaluation Criteria"
          text="Add New Criteria"
          addButton={false}
          addButtonFeedback={true}
          bottomColor={false}
          modalOpen={this.handleOpen}
        />
        <div className={tableContainer}>
          <Table />
        </div>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div style={getModalStyle()} className={paper}>
            <div className={borderContainer}>
              <Typography variant="h6" id="modal-title" className={header}>
                Add evaluation criterion
              </Typography>
              <Typography variant="h6" id="modal-title" className={headers}>
                Name (Required)
              </Typography>
              <TextField
                name="stage"
                id="outlined-dense"
                // label="Enter Stage Name"
                className={classNames(textField)}
                margin="dense"
                variant="outlined"
                onChange={e => this.handelChange(e, "name")}
                // value={stage}
                // InputProps={{
                //   classes: {
                //     input: resizes
                //   }
                // }}
              />
              <Typography variant="h6" id="modal-title" className={headers}>
                Description (Required)
              </Typography>
              <TextField
                name="stage"
                id="outlined-dense"
                // label="Enter Stage Name"
                className={classNames(textField)}
                onChange={e => this.handelChange(e, "description")}
                margin="dense"
                variant="outlined"
                // value={stage}
                // InputProps={{
                //   classes: {
                //     input: resizes
                //   }
                // }}
              />
              <div className={btnContainer}>
                <Button
                  variant="contained"
                  onClick={this.handleClose}
                  className={button1}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={this.addScalesCriteria}
                  color="primary"
                  className={button2}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

FeedbackForm.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    message: state.scaleRatingReducer.message,
    clear: state.scaleRatingReducer.isLoading,
    isLoading: state.scaleRatingReducer.isLoading,
    allScales: state.scaleRatingReducer.allScales,
    allScalesCriteria: state.scaleRatingReducer.allScalesCriteria
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllScales: (enqueueSnackbar, closeSnackbar) =>
      dispatch(getAllScales(enqueueSnackbar, closeSnackbar)),
    addScalesCriteria: (name, description, enqueueSnackbar, closeSnackbar) =>
      dispatch(
        addScalesCriteria(name, description, enqueueSnackbar, closeSnackbar)
      ),
    getAllScalesCriteria: (enqueueSnackbar, closeSnackbar) =>
      dispatch(getAllScalesCriteria(enqueueSnackbar, closeSnackbar))
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(FeedbackForm))
);
