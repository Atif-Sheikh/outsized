import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import { styles } from "@styles/firmComponents/ProfessionInfo.styles.js";
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
import { retrieveFirmProfile, saveprofessionalInfoData } from "@actions/firm";
import { clientProffesionalAttributes } from "@actions/client";
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
    companyType: "",
    companySize: "",
    yearFoundedIn: "",
    currentLocation: "",
    relocationValue: ["Yes", "No"],
    searchClient: "",
    searchSector: "",
    searchSkill: "",
    searchGoodSkill: "",
    searchGeo: "",
    searchValid: true,
    actionPerform: "",
    fullTime: false,
    fixedProject: false,
    dayProject: false,
    hourlyContract: false,
    sectors: [],
    clients: [],
    geo: [],
    skills: [],
    goodSkills: [],
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
    detectGoodSkill: false,
    detectGeo: false,
    description: ""
  };
  componentDidMount() {
    this.props.retrieveFirmProfile();
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
      console.log("mmmm", nextProps);
      if (
        nextProps &&
        nextProps.firmrProfile &&
        Object.keys(nextProps.firmrProfile).length
      ) {
        this.setAllFieldsData(nextProps.firmrProfile.firm.professionalInfo);
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
      companyType,
      companySize,
      yearFoundedIn,
      currentLocation,
      clients,
      goodSkills,
      skills,
      sectors,
      geo,
      currency,
      fixedProject,
      dayProject,
      fullTime,
      hourlyContract,
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

    let gSkillId = goodSkills.map(val => {
      return val.id;
    });

    let geoId = geo.map(val => {
      return val.name;
    });
    for (let i = 0; i < geoId.length; i++) {
      geoId[i] = '"' + geoId[i] + '"';
    }
    let obj = {
      companyType: companyType,
      companySize: companySize,
      yearFounded: yearFoundedIn,
      currentLocation: currentLocation,
      clients: clientId,
      goodSkills: gSkillId,
      greatSkills: skillId,
      sectors: sectorId,
      geoExperiences: geoId,
      currency: currency,
      enableFixedRateProjects: fixedProject,
      enableFullDayProjects: dayProject,
      enableFullTime: fullTime,
      enableHourlyProjects: hourlyContract,
      expectedAnnualSalary: expectedAnnualSalary,
      expectedDailyRate: expectedDailyRate,
      expectedHourlyRate: expectedHourlyRate,
      expectedMonthlyRate: expectedMonthlyRate,
      minHours: minHours,
      enqueueSnackbar: this.props.enqueueSnackbar
    };
    this.props.saveprofessionalInfoData(obj);
    this.setState({ actionPerform: "update" });
  };

  setAllFieldsData = ({
    companyType,
    companySize,
    yearFounded,
    currentLocation,
    clients,
    goodSkills,
    greatSkills,
    sectors,
    geoExperiences,
    currency,
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
      companyType: companyType,
      companySize: companySize,
      currentLocation: currentLocation,
      currency,
      clients,
      goodSkills: goodSkills,
      geo: geoExperiences,
      yearFoundedIn: yearFounded,
      skills: greatSkills,
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
    } else if (check === "goodSkills") {
      goodSkills.push(event);
      this.setState({ goodSkills, searchGoodSkill: "" });
    } else if (check === "geo") {
      geo.push(event);
      this.setState({ geo, searchGeo: "" });
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
    } else if (check === "goodSkills") {
      var detect = !this.state.goodSkills.find(
        a => a.name.toUpperCase() === e.toUpperCase()
      );
      this.setState({ searchGoodSkill: e, detectGoodSkill: detect });
    } else if (check === "geo") {
      var detect = !this.state.geo.find(
        a => a.name.toUpperCase() === e.toUpperCase()
      );
      this.setState({ searchGeo: e, detectGeo: detect });
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
    } else if (check === "goodSkills") {
      this.setState({
        goodSkills: deleteArray
      });
    } else if (check === "geo") {
      this.setState({
        geo: deleteArray
      });
    }
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  chipContainer = (
    question,
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
        <Typography className={chipText}>{question}</Typography>
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
          : key === "searchSector"
          ? this.sectorChipContainer(objValue, profileArray, key)
          : key === "searchGoodSkill"
          ? this.goodSkillChipContainer(objValue, profileArray, key)
          : this.geoChipContainer(objValue, profileArray, key)}
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
  goodSkillChipContainer = (objValue, profileArray, key) => {
    return (
      <IntegrationAutosuggest
        updateChanges={e => this.handelTemplate(e, objValue)}
        handleAuto={event => this.handleAuto(event, objValue)}
        labelArry={this.state.profileAttributesSkills}
        value={this.state.searchGoodSkill}
        name="searchGoodSkill"
      />
    );
  };
  geoChipContainer = (objValue, profileArray, key) => {
    return (
      <IntegrationAutosuggest
        updateChanges={e => this.handelTemplate(e, objValue)}
        handleAuto={event => this.handleAuto(event, objValue)}
        labelArry={this.state.profileAttributesSectors}
        value={this.state.searchGeo}
        name="searchGeo"
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
        <InputArea
          styleprops={classes.ratesText}
          label="Company Type"
          value={this.state.companyType}
          name="companyType"
          handleInputChange={event => this.handleInputChange(event)}
          validation={true}
          styleprops={styles.ratesText}
        />
        <div className={classes.divider}>
          <div className={classes.spaner}>
            <InputArea
              styleprops={classes.ratesTextd}
              label="Company Size"
              value={this.state.companySize}
              name="companySize"
              handleInputChange={event => this.handleInputChange(event)}
              validation={true}
              styleprops={styles.ratesTextd}
            />
          </div>
          <div className={classes.spaner}>
            <InputArea
              styleprops={classes.ratesTextd}
              label="Year Founded IN"
              value={this.state.yearFoundedIn}
              name="yearFoundedIn"
              handleInputChange={event => this.handleInputChange(event)}
              validation={true}
              styleprops={styles.ratesTextd}
            />
          </div>
        </div>
        <InputArea
          styleprops={classes.ratesText}
          label="Current Location"
          value={this.state.currentLocation}
          name="currentLocation"
          handleInputChange={event => this.handleInputChange(event)}
          validation={true}
          styleprops={styles.ratesText}
        />
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
          "Sectors you have worked in?",
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
          "Skills you are great at?",
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
          "Skills you are good at?",
          this.state.searchGoodSkill,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip,
          "GoodSkills",
          "goodSkills",
          this.state.goodSkills,
          this.state.profileAttributesSkills,
          "searchGoodSkill"
        )}
        {this.chipContainer(
          "Clients you have worked with till now?",
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
        {this.chipContainer(
          "Geographical Experience",
          this.state.searchGeo,
          searchValid,
          textFieldPass,
          chipText,
          chipMain,
          chipsBox,
          chip,
          "Geo",
          "geo",
          this.state.geo,
          this.state.profileAttributesClients,
          "searchGeo"
        )}
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
  console.log("state", state);
  return {
    isLoading: state.firmBasicProfileReducer.isLoading,
    error: state.firmBasicProfileReducer.message,
    access: state.firmBasicProfileReducer.access,
    firmrProfile: state.firmBasicProfileReducer.firmrProfile,
    message: state.firmBasicProfileReducer.message,
    hasError: state.firmBasicProfileReducer.hasError,
    updateProfessional: state.firmBasicProfileReducer.updateProfessional,
    profileAttributes: state.clientBasicProfileReducer.profileAttributes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveFirmProfile: () => {
      dispatch(retrieveFirmProfile());
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
