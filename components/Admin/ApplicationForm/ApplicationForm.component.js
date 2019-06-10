import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { styles } from "@styles/adminComponents/components/ApplicationForm.styles";
import Table from "../Table/ApplicationFormTemplateTable.component";

class ApplicationForm extends Component {
  inputField = (
    fieldContainer,
    contentTitleInput,
    textField,
    typo,
    placeholderText,
    width,
    textArea
  ) => {
    return (
      <div className={fieldContainer}>
        <Typography
          className={contentTitleInput}
          variant="h6"
          color="inherit"
          noWrap
        >
          {typo}
        </Typography>
        <TextField
          className={textField}
          style={{ width: width }}
          // margin="dense"
          variant="outlined"
          placeholder={placeholderText}
          // placeholder="MultiLine with rows: 2 asdasdand rowsMax: 4"
          multiline={true}
          rows={!textArea ? 1 : 8}
          // rowsMax={1}
        />
      </div>
    );
  };
  render() {
    const { classes } = this.props;
    const {
      mainContainer,
      inputContainer,
      fieldContainer,
      contentTitleInput,
      textField,
      button
    } = classes;
    return (
      <div className={mainContainer}>
        <div className={inputContainer}>
          {this.inputField(
            fieldContainer,
            contentTitleInput,
            textField,
            "Applications Forms Name",
            "Freelancer",
            "200px",
            false
          )}
        </div>
        <Table />
        <div>
          <button className={button}>ADD QUESTION</button>
        </div>
      </div>
    );
  }
}

ApplicationForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ApplicationForm);
