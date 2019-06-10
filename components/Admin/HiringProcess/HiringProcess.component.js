import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Table from "../Table/HiringProcessTemplateTable.component";

import ComponentHeader from "@components/Admin/ComponentHeader/ComponentHeader.component";

import { styles } from "@styles/adminComponents/components/HiringProcess.styles";

class HiringProcess extends Component {
  state = {
    selectValue: "",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { selectValue, labelWidth } = this.state;
    const {
      mainContainer,
      componentContent,
      contentTitle,
      formControl,
      inputLabel,
      selectLabel
    } = classes;
    return (
      <div className={mainContainer}>
        <ComponentHeader
          headerText="Hiring Process"
          addButton={true}
          bottomColor={true}
        />
        <div className={componentContent}>
          <Typography
            className={contentTitle}
            variant="h6"
            color="inherit"
            noWrap
          >
            Default Template for Profiles without Projects
          </Typography>
          <FormControl variant="outlined" className={formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              className={inputLabel}
              htmlFor="outlined-age-simple"
            >
              Tech Role
            </InputLabel>
            <Select
              value={selectValue}
              className={selectLabel}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="selectValue"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Tech Role">Tech Role</MenuItem>
              <MenuItem value="Tech Role">Tech Role</MenuItem>
              <MenuItem value="Tech Role">Tech Role</MenuItem>
            </Select>
          </FormControl>
          <Table />
        </div>
      </div>
    );
  }
}

HiringProcess.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HiringProcess);
