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
import { connect } from "react-redux";
import { retrieveFreelancerProfile, saveprofessionalInfoData } from "@actions/client";

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
    searchValid: true,

    fullTime: false,
    fixedProject: false,
    dayProject: false,
    hourlyContract: false,

    expectedAnnualSalary: 0,
    expectedDailyRate: 0,
    expectedHourlyRate: 0,
    expectedMonthlyRate: 0,
    minHours: 0
  };
  componentDidMount() {
    this.props.retrieveFreelancerProfile();
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.freelancerProfile && Object.keys(nextProps.freelancerProfile).length !== Object.keys(this.props.freelancerProfile).length){
      console.log(nextProps.freelancerProfile.freelancer, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      this.setAllFieldsData(nextProps.freelancerProfile.freelancer);
    }
  };

  saveProfessionalInfo = () => {
    const { 
      type,
      role,
      relocation,
      currency,

      fullTime,
      fixedProject,
      dayProject,
      hourlyContract,

      expectedAnnualSalary,
      expectedDailyRate,
      expectedHourlyRate,
      expectedMonthlyRate,
      minHours
     } = this.state;
     let obj = {
        currentEmploymentType: type,
        relocation: relocation,
        currentRole: role,
        currency: currency,

        enableFullTime: fullTime,
        expectedAnnualSalary: expectedAnnualSalary,
        enableFixedRateProjects: fixedProject,
        expectedMonthlyRate: expectedMonthlyRate,
        enableFullDayProjects: dayProject,
        expectedDailyRate: expectedDailyRate,
        enableHourlyProjects: hourlyContract,
        expectedHourlyRate: expectedHourlyRate,
        minHours: minHours,
        enqueueSnackbar: this.props.enqueueSnackbar
     };
     this.props.saveprofessionalInfoData(obj)
  };

  setAllFieldsData = ({ professionalInfo: { 
    currentEmploymentType,
    currentRole,
    relocation,
    currency,

    enableFixedRateProjects,
    enableFullDayProjects,
    enableFullTime,
    enableHourlyProjects,

    expectedAnnualSalary,
    expectedDailyRate,
    expectedHourlyRate,
    expectedMonthlyRate,
    minHours
   } }) => {
    this.setState({ type: currentEmploymentType, 
      role: currentRole, 
      relocation, currency,
    
      typeValue: [...this.state.typeValue, currentEmploymentType],
      roleValue: [ ...this.state.roleValue, currentRole ],
      relocationValue: [ ...this.state.relocationValue, relocation ],
      currencyValue: [ ...this.state.currencyValue, currency ],

      fullTime: enableFullTime,
      fixedProject: enableFixedRateProjects,
      dayProject: enableFullDayProjects,
      hourlyContract: enableHourlyProjects,
      
      expectedAnnualSalary,
      expectedDailyRate,
      expectedHourlyRate,
      expectedMonthlyRate,
      minHours
    });
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
    keyName,
    checked,
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
            checked={checked}
            color="default"
            name={keyName}
            onChange={(e) => this.setState({ [keyName]: e.target.checked })}
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
      searchValid,

      fullTime,
      fixedProject,
      dayProject,
      hourlyContract,

      expectedAnnualSalary,
      expectedDailyRate,
      expectedHourlyRate,
      expectedMonthlyRate,
      minHours
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
    console.log(this.state, "state")
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
          'fullTime',
          fullTime,
          false,
          "Full-time",
          "I am available for permanent roles",
          "Annual Salary",
          expectedAnnualSalary,
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
          'fixedProject',          
          fixedProject,
          false,
          "Fixed project rate",
          "I am available for fixed rate projects",
          "Monthly Rate",
          expectedMonthlyRate,
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
          'dayProject',
          dayProject,
          false,
          "One day projects",
          "I am available for full day projects",
          "Day Rate",
          expectedDailyRate,
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
          'hourlyContract',          
          hourlyContract,
          true,
          "Hourly contracts",
          "I am available for work on hourly basis",
          "Hourly Rate",
          expectedHourlyRate,
          minHours,
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
        <div className={classes.typosContainer}>
          <Typography className={classes.lastTypos}>
            What else would you like to tell us about yourself and what you’re looking for?
          </Typography>
          <Typography className={classes.lowerTypos}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget egestas pellentesque. Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
          </Typography>
        </div>
        <div style={{ display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.saveProfessionalInfo}
              className={classes.saveBtn}
            >
              Save
            </Button>
        </div>
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
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveFreelancerProfile: () => {
      dispatch(retrieveFreelancerProfile());
    },
    saveprofessionalInfoData: (...args) => {
      dispatch(saveprofessionalInfoData(...args))
    }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ProfileComponent))
);
