import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import { styles } from "@styles/clientComponents/ProfessionInfo.styles.js";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import InputArea from "../../ReuseableComponents/InputArea";
import MenuListComposition from "../../ReuseableComponents/NumberSelectoin";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

class ProfileComponent extends Component {
  state = {
    type: "",
    role: "",
    relocation: "",
    currency: "",
    currencyValue: ["₹ (Indian Rupee)", "$ (Dollor)"],
    typeValue: ["Full time", "Part time"],
    roleValue: ["Employee Full time", "Employee Part time"],
    relocationValue: ["Open to relocation"],
    search: "",
    searchValid: true
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  chipContainer = (
    search,
    searchValid,
    textFieldPass,
    chipText,
    chipMain,
    chipsBox,
    chip
  ) => {
    return (
      <div className={chipMain}>
        <Typography className={chipText}>
          Sectors you have worked in?
        </Typography>
        <div className={chipsBox}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
            return (
              <Chip
                label="Finance"
                onClick={() => {}}
                onDelete={() => {}}
                className={chip}
              />
            );
          })}
        </div>
        <InputArea
          styleprops={textFieldPass}
          label="Search for sector"
          name="search"
          value={search}
          handleInputChange={event => this.handleChange(event)}
          validation={searchValid}
          styleprops={textFieldPass}
        />
      </div>
    );
  };
  contractInfo = (
    minHrs,
    time,
    description,
    extectedName,
    salary,
    hours,
    contractContaienr,
    checkBoxContainer,
    typeContainer,
    salaryContainer,
    timeText,
    descriptionText,
    ExpectedText,
    ratesText,
    paymentContent
  ) => {
    return (
      <div
        className={contractContaienr}
        style={{ paddingBottom: minHrs ? "10px" : "15px" }}
      >
        <div className={checkBoxContainer}>
          <Checkbox
            defaultChecked
            color="default"
            value="checkedG"
            inputProps={{
              "aria-label": "checkbox with default color"
            }}
          />
        </div>
        <div className={typeContainer}>
          <Typography className={timeText}>{time}</Typography>
          <Typography className={descriptionText}>{description}</Typography>
        </div>
        <div className={paymentContent}>
          <div className={salaryContainer}>
            <Typography className={ExpectedText}>
              Expected. {extectedName}
            </Typography>
            <Typography className={ratesText}>₹ {salary}</Typography>
          </div>
          {minHrs ? (
            <div className={salaryContainer}>
              <Typography className={ExpectedText}>Min. Hours</Typography>
              <Typography className={ratesText}>{hours} hours</Typography>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
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
  render() {
    const { classes } = this.props;
    const {
      type,
      role,
      relocation,
      typeValue,
      currencyValue,
      roleValue,
      relocationValue,
      search,
      searchValid
    } = this.state;
    const {
      roots,
      formControl,
      formControlText,
      formControlSelect,
      typo,
      contractContaienr,
      typeContainer,
      checkBoxContainer,
      salaryContainer,
      timeText,
      descriptionText,
      ExpectedText,
      ratesText,
      paymentContent,
      chipText,
      chipMain,
      chipsBox,
      chip,
      textFieldPass
    } = classes;
    return (
      <div className={classes.paper}>
        {this.dropDown(
          "Current employment type",
          typeValue,
          "type",
          roots,
          formControl,
          formControlText,
          formControlSelect
        )}
        {this.dropDown(
          "Current role",
          roleValue,
          "role",
          roots,
          formControl,
          formControlText,
          formControlSelect
        )}
        {this.dropDown(
          "Relocation",
          relocationValue,
          "relocation",
          roots,
          formControl,
          formControlText,
          formControlSelect
        )}
        <Typography className={typo}>About your commercials</Typography>
        {this.dropDown(
          "Select currency",
          currencyValue,
          "currency",
          roots,
          formControl,
          formControlText,
          formControlSelect
        )}
        {this.contractInfo(
          false,
          "Full-time",
          "I am available for permanent roles",
          "Annual Salary",
          "20,00,000",
          "",
          contractContaienr,
          checkBoxContainer,
          typeContainer,
          salaryContainer,
          timeText,
          descriptionText,
          ExpectedText,
          ratesText,
          paymentContent
        )}
        {this.contractInfo(
          false,
          "Fixed project rate",
          "I am available for fixed rate projects",
          "Monthly Rate",
          "2,00,000",
          "",
          contractContaienr,
          checkBoxContainer,
          typeContainer,
          salaryContainer,
          timeText,
          descriptionText,
          ExpectedText,
          ratesText,
          paymentContent
        )}
        {this.contractInfo(
          false,
          "One day projects",
          "I am available for full day projects",
          "Day Rate",
          "2,00,000",
          "",
          contractContaienr,
          checkBoxContainer,
          typeContainer,
          salaryContainer,
          timeText,
          descriptionText,
          ExpectedText,
          ratesText,
          paymentContent
        )}
        {this.contractInfo(
          true,
          "Hourly contracts",
          "I am available for work on hourly basis",
          "Hourly Rate",
          "2,00,000",
          "20",
          contractContaienr,
          checkBoxContainer,
          typeContainer,
          salaryContainer,
          timeText,
          descriptionText,
          ExpectedText,
          ratesText,
          paymentContent
        )}
        {this.chipContainer(
          search,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip
        )}
        {this.chipContainer(
          search,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip
        )}
        {this.chipContainer(
          search,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip
        )}
        {this.chipContainer(
          search,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip
        )}
      </div>
    );
  }
}

export default withSnackbar(withStyles(styles)(ProfileComponent));
