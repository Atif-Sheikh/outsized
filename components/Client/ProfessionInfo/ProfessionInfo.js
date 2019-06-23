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
import {
  retrieveFreelancerProfile,
  saveprofessionalInfoData,
  clientProffesionalAttributes
} from "@actions/client";
import IntegrationAutosuggest from "../AutoSuggestion/AutoSuggestion";

class ProfileComponent extends Component {
  state = {
    type: "",
    role: "",
    relocation: "",
    currency: "",
    currencyValue: ["USD", "PKR", "INR"],
    typeValue: ["Full time", "Part time"],
    roleValue: ["Employee Full time", "Employee Part time"],
    relocationValue: ["Yes", "No"],
    searchClient: "",
    searchSector: "",
    searchSkill: "",
    searchValid: true,
    actionPerform: "",
    fullTime: false,
    fixedProject: false,
    dayProject: false,
    hourlyContract: false,
    sectors: [],
    clients: [],
    skills: [],
    expectedAnnualSalary: 0,
    expectedDailyRate: 0,
    expectedHourlyRate: 0,
    expectedMonthlyRate: 0,
    minHours: 0,
    profileAttributes: {},
    profileAttributesClients: [],
    profileAttributesSkills: [],
    profileAttributesSectors: [],
    detectSkill: false,
    detectSector: false,
    detectClient: false,
    description: ""
  };
  componentDidMount() {
    this.props.retrieveFreelancerProfile();
    this.props.clientProffesionalAttributes();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.actionPerform === "update") {
      if (
        nextProps &&
        nextProps.updateProfessional &&
        nextProps.updateProfessional.editExperience &&
        nextProps.updateProfessional.editExperience.addProfessionalInfo &&
        nextProps.updateProfessional.editExperience.addProfessionalInfo
          .freelancerProfile &&
        nextProps.updateProfessional.editExperience.addProfessionalInfo
          .freelancerProfile.professionalInfo &&
        Object.keys(
          nextProps.updateProfessional.editExperience.addProfessionalInfo
            .freelancerProfile
        ).length
      ) {
        this.setAllFieldsData(
          nextProps &&
            nextProps.updateProfessional &&
            nextProps.updateProfessional.editExperience &&
            nextProps.updateProfessional.editExperience.addProfessionalInfo &&
            nextProps.updateProfessional.editExperience.addProfessionalInfo
              .freelancerProfile.professionalInfo
        );
      }
    } else {
      if (
        nextProps.freelancerProfile &&
        Object.keys(nextProps.freelancerProfile).length
      ) {
        this.setAllFieldsData(
          nextProps.freelancerProfile.freelancer.professionalInfo
        );
      }
    }
    let profileAttributes =
      nextProps &&
      nextProps.profileAttributes &&
      nextProps.profileAttributes.editExperience &&
      nextProps.profileAttributes.editExperience.profileAttributes;
    this.setState({
      profileAttributesClients: profileAttributes && profileAttributes.clients,
      profileAttributesSectors: profileAttributes && profileAttributes.sectors,
      profileAttributesSkills: profileAttributes && profileAttributes.skills
    });
  }

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
      sectors,
      clients,
      skills,
      description,
      expectedAnnualSalary,
      expectedDailyRate,
      expectedHourlyRate,
      expectedMonthlyRate,
      minHours
    } = this.state;
    let clientId = clients.map(val => {
      return val.id;
    });

    let sectorId = sectors.map(val => {
      return val.id;
    });

    let skillId = skills.map(val => {
      return val.id;
    });

    let obj = {
      currentEmploymentType: type,
      relocation: relocation,
      currentRole: role,
      currency: currency,
      sectors: sectorId,
      clients: clientId,
      skills: skillId,
      description: description,
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
    this.props.saveprofessionalInfoData(obj);
    this.setState({ actionPerform: "update" });
  };

  setAllFieldsData = ({
    currentEmploymentType,
    currentRole,
    relocation,
    currency,
    clients,
    skills,
    sectors,
    enableFixedRateProjects,
    enableFullDayProjects,
    enableFullTime,
    enableHourlyProjects,
    description,
    expectedAnnualSalary,
    expectedDailyRate,
    expectedHourlyRate,
    expectedMonthlyRate,
    minHours
  }) => {
    this.setState({
      type: currentEmploymentType,
      role: currentRole,
      relocation,
      currency,
      clients: clients,
      skills: skills,
      sectors: sectors,
      typeValue: [...this.state.typeValue],
      roleValue: [...this.state.roleValue],
      relocationValue: [...this.state.relocationValue],
      currencyValue: [...this.state.currencyValue],
      description: description,
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
  handleAuto = (event, check) => {
    let { clients, sectors, skills } = this.state;
    if (check === "skills") {
      skills.push(event);
      this.setState({ skills, searchSkill: "" });
    } else if (check === "sectors") {
      sectors.push(event);
      this.setState({ sectors, searchSector: "" });
    } else if (check === "clients") {
      clients.push(event);
      this.setState({ clients, searchClient: "" });
    }
  };
  handelTemplate = (e, check) => {
    if (check === "skills") {
      var detect = !this.state.skills.find(
        a => a.name.toUpperCase() === e.toUpperCase()
      );
      this.setState({ searchSkill: e, detectSkill: detect });
    } else if (check === "sectors") {
      var detect = !this.state.sectors.find(
        a => a.name.toUpperCase() === e.toUpperCase()
      );
      this.setState({ searchSector: e, detectSector: detect });
    } else if (check === "clients") {
      var detect = !this.state.clients.find(
        a => a.name.toUpperCase() === e.toUpperCase()
      );
      this.setState({ searchClient: e, detectClient: detect });
    }
  };
  deleteChip = (val, array, check) => {
    let deleteArray = array.filter(value => {
      return value.id !== val.id;
    });
    if (check === "skills") {
      this.setState({
        skills: deleteArray
      });
    } else if (check === "sectors") {
      this.setState({
        sectors: deleteArray
      });
    } else if (check === "clients") {
      this.setState({
        clients: deleteArray
      });
    }
  };
  handleInputChange = event => {
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
    chip,
    searchPlaceHolder,
    objValue,
    array,
    profileArray,
    key
  ) => {
    return (
      <div className={chipMain}>
        <Typography className={chipText}>
          Sectors you have worked in?
        </Typography>
        <div className={chipsBox}>
          {array.map(val => {
            return (
              <Chip
                label={val.name}
                onClick={() => {}}
                onDelete={() => this.deleteChip(val, array, objValue)}
                className={chip}
              />
            );
          })}
        </div>
        {key === "searchClient"
          ? this.clientChipContainer(objValue, profileArray, key)
          : key === "searchSkill"
          ? this.skillChipContainer(objValue, profileArray, key)
          : this.sectorChipContainer(objValue, profileArray, key)}
      </div>
    );
  };
  sectorChipContainer = (objValue, profileArray, key) => {
    return (
      <IntegrationAutosuggest
        updateChanges={e => this.handelTemplate(e, objValue)}
        handleAuto={event => this.handleAuto(event, objValue)}
        labelArry={this.state.profileAttributesSectors}
        value={this.state.searchSector}
        name="searchSector"
      />
    );
  };
  skillChipContainer = (objValue, profileArray, key) => {
    return (
      <IntegrationAutosuggest
        updateChanges={e => this.handelTemplate(e, objValue)}
        handleAuto={event => this.handleAuto(event, objValue)}
        labelArry={this.state.profileAttributesSkills}
        value={this.state.searchSkill}
        name="searchSkill"
      />
    );
  };
  clientChipContainer = (objValue, profileArray, key) => {
    return (
      <IntegrationAutosuggest
        updateChanges={e => this.handelTemplate(e, objValue)}
        handleAuto={event => this.handleAuto(event, objValue)}
        labelArry={this.state.profileAttributesClients}
        value={this.state.searchClient}
        name="searchClient"
      />
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
    paymentContent,
    key,
    rateKey
  ) => {
    const { classes } = this.props;
    return (
      <div
        className={contractContaienr}
        style={{
          paddingBottom: minHrs ? "10px" : "15px",
          borderBottom: !minHrs ? "solid 1px rgba(0, 0, 0, 0.22)" : "none"
        }}
      >
        <div className={classes.checkContainer}>
          <div className={checkBoxContainer}>
            <Checkbox
              checked={checked}
              color="default"
              name={keyName}
              onChange={e => this.setState({ [keyName]: e.target.checked })}
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
        </div>
        <div className={paymentContent}>
          <div className={salaryContainer}>
            <Typography className={ExpectedText}>
              Expected. {extectedName}
            </Typography>
            <span className={classes.ratesTexts}>
              <InputArea
                styleprops={classes.ratesText}
                // label="LinkedIn profile Url"
                value={this.state[key]}
                name={key}
                handleInputChange={event => this.handleInputChange(event)}
                validation={true}
                styleprops={styles.ratesText}
              />
            </span>
          </div>
          {minHrs ? (
            <div className={salaryContainer}>
              <Typography className={ExpectedText}>Min. Hours</Typography>
              <span className={ratesText}>
                <InputArea
                  value={this.state[rateKey]}
                  name={rateKey}
                  handleInputChange={event => this.handleInputChange(event)}
                  validation={true}
                />
              </span>
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
      profileAttributesClients,
      profileAttributesSectors,
      profileAttributesSkills,
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
          "fullTime",
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
          paymentContent,
          "expectedAnnualSalary",
          ""
        )}
        {this.contractInfo(
          "fixedProject",
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
          paymentContent,
          "expectedMonthlyRate",
          ""
        )}
        {this.contractInfo(
          "dayProject",
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
          paymentContent,
          "expectedDailyRate",
          ""
        )}
        {this.contractInfo(
          "hourlyContract",
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
          paymentContent,
          "expectedHourlyRate",
          "minHours"
        )}
        {this.chipContainer(
          this.state.searchSector,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip,
          "sector",
          "sectors",
          this.state.sectors,
          this.state.profileAttributesSectors,
          "searchSector"
        )}
        {this.chipContainer(
          this.state.searchSkill,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip,
          "Skill",
          "skills",
          this.state.skills,
          this.state.profileAttributesSkills,
          "searchSkill"
        )}
        {this.chipContainer(
          this.state.searchClient,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip,
          "Client",
          "clients",
          this.state.clients,
          this.state.profileAttributesClients,
          "searchClient"
        )}
        <div className={classes.typosContainer}>
          <Typography className={classes.lastTypos}>
            What else would you like to tell us about yourself and what you’re
            looking for?
          </Typography>
          <InputArea
            styleprops={classes.ratesText}
            label="Description"
            value={this.state.description}
            name="description"
            handleInputChange={event => this.handleInputChange(event)}
            validation={true}
            styleprops={styles.ratesText}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
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
    updateProfessional: state.clientBasicProfileReducer.updateProfessional,
    profileAttributes: state.clientBasicProfileReducer.profileAttributes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveFreelancerProfile: () => {
      dispatch(retrieveFreelancerProfile());
    },
    saveprofessionalInfoData: (...args) => {
      dispatch(saveprofessionalInfoData(...args));
    },
    clientProffesionalAttributes: () => {
      dispatch(clientProffesionalAttributes());
    }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ProfileComponent))
);
