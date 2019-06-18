import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import { styles } from "@styles/clientComponents/Basic.styles.js";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputArea from "../../ReuseableComponents/InputArea";
import MenuListComposition from "../../ReuseableComponents/NumberSelectoin";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Router from "next/router";

import {
  retrieveFreelancerProfile,
  clientAddNumberApi,
  clientAddEmailApi,
  clientEditProfileApi,
  clientVerifyEmail
} from "@actions/client";

class BasicComponent extends Component {
  state = {
    name: "",
    gender: "",
    number: "",
    addNewEmail: "",
    addNewEmailValid: true,
    addNewNumber: "",
    addNewNumberValid: true,
    addNewCode: "+91",
    newSearch: "",
    email: "",
    alternateEmail: "",
    alternateEmailsArray: [],
    alternateNumberArray: [],
    linkedlnUrl: "",
    location: "",
    nameValid: true,
    genderValid: true,
    numberValid: true,
    emailValid: true,
    alternateEmailValid: true,
    linkedlnUrlValid: true,
    locationValid: true,
    code: "+92",
    search: "",
    data: {},
    emailModal: false,
    numberModal: false,
    showText: false,
    phoneNumberError: false,
    submitText: "Submit"
  };
  componentDidMount() {
    this.props.retrieveFreelancerProfile();
  }
  componentWillReceiveProps(nextProps) {
    let basicData =
      nextProps &&
      nextProps.freelancerProfile &&
      nextProps.freelancerProfile.freelancer;
    let basicEmailData =
      nextProps &&
      nextProps.newEmailData &&
      nextProps.newEmailData.emailData &&
      nextProps.newEmailData.emailData.addEmail &&
      nextProps.newEmailData.emailData.addEmail.freelancerProfile &&
      nextProps.newEmailData.emailData.addEmail.freelancerProfile
        .alternateEmails
        ? nextProps.newEmailData.emailData.addEmail.freelancerProfile
            .alternateEmails
        : [];
    let basicNumberData =
      nextProps &&
      nextProps.newNumberData &&
      nextProps.newNumberData.numberData &&
      nextProps.newNumberData.numberData.addMobile &&
      nextProps.newNumberData.numberData.addMobile.freelancerProfile &&
      nextProps.newNumberData.numberData.addMobile.freelancerProfile
        .alternateMobiles
        ? nextProps.newNumberData.numberData.addMobile.freelancerProfile
            .alternateMobiles
        : [];

    console.log("basicData", basicData);
    // let { name, number, gender, email, linkedlnUrl, location} = this.state
    this.setState({
      name: basicData && basicData.name,
      number: basicData && basicData.mobile,
      code: basicData && basicData.mobile.slice(0, 3),
      email: basicData && basicData.email,
      linkedlnUrl: basicData && basicData.linkedinUrl,
      location:
        basicData && basicData.currentLocation
          ? basicData.currentLocation
          : "India",
      gender: basicData && basicData.gender ? basicData.gender : "Male",
      alternateEmailsArray: basicEmailData.length
        ? basicEmailData
        : basicData && basicData.alternateEmails,
      alternateNumberArray: basicNumberData.length
        ? basicNumberData
        : basicData && basicData.alternateMobiles
    });
  }
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      addNewEmailValid: true,
      addNewNumberValid: true,
      phoneNumberError: false,
      nameValid: true,
      genderValid: true,
      numberValid: true,
      locationValid: true,
      emailValid: true
    });
  };
  searching = e => {
    this.setState({ search: e });
  };

  newSearching = e => {
    this.setState({ newSearch: e });
  };
  addNewAlternateEmail = async () => {
    event.preventDefault();
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(this.state.addNewEmail)) {
      await this.setState({
        addNewEmailValid: false,
        error: "Please Enter valid Email",
        showText: true
      });
    }
    if (this.state.addNewEmailValid) {
      console.log("add new emeil", this.state.addNewEmail);
      if (this.state.submitText === "Submit") {
        this.props.clientAddEmailApi(this.state.addNewEmail);
        this.setState({
          addNewEmail: "",
          showText: true
        });
      } else {
        this.props.clientVerifyEmail(
          this.state.addNewEmail,
          this.props.enqueueSnackbar,
          this.props.closeSnackbar,
          Router
        );
        this.setState({
          addNewEmail: "",
          showText: true
        });
      }
    }
  };

  addNewAlternateNumber = async () => {
    event.preventDefault();
    let checkMobile = this.state.addNewNumber;
    if (!isNaN(checkMobile) && this.state.addNewNumber.length >= 10) {
      if (!this.state.addNewNumber.length > 10) {
        await this.setState({
          addNewNumberValid: false,
          error: "Please Enter valid Number",
          showText: true,
          phoneNumberError: true
        });
      }
      if (this.state.addNewNumberValid) {
        this.props.clientAddNumberApi(
          this.state.addNewCode + this.state.addNewNumber
        );
        console.log(
          "add new addNewNumberl",
          this.state.addNewCode + this.state.addNewNumber
        );
      }
      this.setState({ phoneNumberError: false, showText: true });
    } else {
      this.setState({ phoneNumberError: true, showText: true });
    }
  };

  editChagesInProfile = () => {
    let { name, gender, number, location, email } = this.state;
    if (!gender.length) {
      this.setState({
        genderValid: false
      });
    }
    if (!name.length) {
      this.setState({
        nameValid: false
      });
    }
    if (!number.length) {
      this.setState({
        numberValid: false
      });
    }

    if (!location.length) {
      this.setState({
        locationValid: false
      });
    }
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(email)) {
      this.setState({
        emailValid: false
      });
    }
    if (
      name.length &&
      gender.length &&
      number.length &&
      location.length &&
      email.length
    ) {
      console.log("email", email);
      this.props.clientEditProfileApi(gender, name, number, location, email);
    }
  };
  addAlternateEmailModal = () => {
    const { emailModal } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        open={emailModal}
        close={this.state.emailModal}
        className={classes.papers}
        style={{ minWidth: "630px !important", minHeight: "400px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.headerContainer}>
          <Typography className={classes.headerText}>
            <span className={classes.headerTextChild}>Add Email address</span>
          </Typography>
          <IconButton
            className={classes.closeIcon}
            aria-label="Close"
            onClick={() => {
              this.setState({
                emailModal: !this.state.emailModal,
                showText: false
              });
            }}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>

        <Typography className={classes.headerText}>
          <span
            className={classes.headerTextChild}
            style={{
              color: this.props.hasError ? "red" : "green",
              paddingLeft: "20px"
            }}
          >
            {this.state.showText ? this.props.error : ""}
          </span>
        </Typography>
        <div className={classes.FormContainers}>
          <form
            className={classes.containers}
            noValidate
            autoComplete="off"
            onSubmit={event => this.addNewAlternateEmail(event)}
          >
            <InputArea
              label="Email Address"
              name="addNewEmail"
              value={this.state.addNewEmail}
              handleInputChange={event => this.handleInputChange(event)}
              // onFocus={() => this.setState({ emailValid: true })}
              styleprops={styles.textFieldPass}
              validation={this.state.addNewEmailValid}
            />
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.AddEmailBtn}
              >
                {this.state.submitText}
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  };
  addAlternateNumberModal = () => {
    const { numberModal } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        open={numberModal}
        close={this.state.numberModal}
        className={classes.papers}
        style={{ minWidth: "630px !important", minHeight: "400px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.headerContainer}>
          <Typography className={classes.headerText}>
            <span className={classes.headerTextChild}>Add Number</span>
          </Typography>
          <IconButton
            className={classes.closeIcon}
            aria-label="Close"
            onClick={() => {
              this.setState({
                numberModal: !this.state.numberModal,
                showText: false
              });
            }}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>
        <Typography className={classes.headerText}>
          {this.state.phoneNumberError ? (
            <span
              className={classes.headerTextChild}
              style={{ color: "red", paddingLeft: "20px" }}
            >
              Please enter valid mobile number
            </span>
          ) : (
            <span
              className={classes.headerTextChild}
              style={{
                color: this.props.hasError ? "red" : "green",
                paddingLeft: "20px"
              }}
            >
              {this.state.showText ? this.props.error : ""}
            </span>
          )}
        </Typography>
        <div className={classes.FormContainers}>
          <form
            className={classes.containers}
            noValidate
            autoComplete="off"
            onSubmit={event => this.addNewAlternateNumber(event)}
          >
            <MenuListComposition
              number={this.state.addNewNumber}
              handleInputChange={event => this.handleInputChange(event)}
              code={this.state.addNewCode}
              numberName="addNewNumber"
              alternateNumber={false}
              counterCode={code => this.setState({ addNewCode: code })}
              search={this.state.newSearch}
              searching={this.newSearching}
            />
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.AddEmailBtn}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  };
  header = (avatar, container, loginBtnLinkedIn) => {
    return (
      <div className={container}>
        <Avatar
          title="Rohit Yadar"
          alt="Rohit Yadar"
          src="https://cdn3.iconfinder.com/data/icons/professions-1-4/132/32-512.png"
          className={avatar}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={loginBtnLinkedIn}
        >
          Connect your LinkedIn
        </Button>
      </div>
    );
  };
  formDesign = (
    name,
    gender,
    number,
    email,
    alternateEmail,
    linkedlnUrl,
    location,
    nameValid,
    genderValid,
    numberValid,
    emailValid,
    alternateEmailValid,
    linkedlnUrlValid,
    locationValid,
    formContainer,
    textFieldPass,
    textFieldPasss,
    modalFooter,
    signupTypo,
    newHere,
    loginBtn
  ) => {
    const { classes } = this.props;
    return (
      <div className={formContainer}>
        <InputArea
          styleprops={textFieldPass}
          label="Name"
          value={name}
          name="name"
          handleInputChange={event => this.handleInputChange(event)}
          validation={nameValid}
          styleprops={textFieldPass}
        />
        <InputArea
          styleprops={textFieldPass}
          label="Gender"
          value={gender}
          name="gender"
          handleInputChange={event => this.handleInputChange(event)}
          validation={genderValid}
          styleprops={textFieldPass}
        />
        <MenuListComposition
          number={number}
          handleInputChange={event => this.handleInputChange(event)}
          code={this.state.code}
          counterCode={code => this.setState({ code: code })}
          search={this.state.search}
          searching={this.searching}
        />
        <div className={modalFooter}>
          <Button
            className={signupTypo}
            onClick={() =>
              this.setState({ numberModal: true, submitText: "Submit" })
            }
          >
            <span className={newHere}>Add alternate number</span>
          </Button>
        </div>
        {this.state.alternateNumberArray
          ? this.state.alternateNumberArray.map(val => {
              return (
                <MenuListComposition
                  number={val.mobile}
                  handleInputChange={event => this.handleInputChange(event)}
                  code={val.mobile.slice(0, 3)}
                  alternateNumber={true}
                  // numberName=
                  counterCode={code => this.setState({ code: code })}
                  search={this.state.search}
                  searching={this.searching}
                />
              );
            })
          : ""}
        <InputArea
          styleprops={textFieldPasss}
          label="Email"
          value={email}
          name="email"
          handleInputChange={event => this.handleInputChange(event)}
          validation={emailValid}
          styleprops={textFieldPasss}
        />
        <div className={modalFooter}>
          <Button
            className={signupTypo}
            onClick={() =>
              this.setState({ emailModal: true, submitText: "Submit" })
            }
          >
            <span className={newHere}>Add alternate email</span>
          </Button>
        </div>
        {this.state.alternateEmailsArray
          ? this.state.alternateEmailsArray.map(val => {
              return (
                <div>
                  <InputArea
                    styleprops={textFieldPasss}
                    label="Alternate Email"
                    value={val.email}
                    name="alternateEmail"
                    handleInputChange={event => this.handleInputChange(event)}
                    validation={alternateEmailValid}
                    styleprops={textFieldPasss}
                    endAdornmentText={true}
                    verify={val.verified}
                    endrClass={classes.endrClass}
                    endrClassError={classes.endrClassError}
                  />
                  {val.verified ? (
                    ""
                  ) : (
                    <div className={modalFooter}>
                      <Typography className={signupTypo}>
                        Don't receive link?{" "}
                        <span
                          className={newHere}
                          onClick={() =>
                            this.setState({
                              emailModal: true,
                              addNewEmail: val.email,
                              submitText: "Send Verifcation Link"
                            })
                          }
                        >
                          Resend link
                        </span>
                      </Typography>
                    </div>
                  )}
                </div>
              );
            })
          : ""}
        <InputArea
          styleprops={textFieldPasss}
          label="Linkedln Url"
          value={linkedlnUrl}
          name="linkedlnUrl"
          handleInputChange={event => this.handleInputChange(event)}
          validation={linkedlnUrlValid}
          styleprops={textFieldPasss}
        />
        <InputArea
          styleprops={textFieldPass}
          label="Current Location"
          value={location}
          name="location"
          handleInputChange={event => this.handleInputChange(event)}
          styleprops={textFieldPass}
          validation={locationValid}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={loginBtn}
          onClick={this.editChagesInProfile}
        >
          Save
        </Button>
      </div>
    );
  };
  render() {
    const { classes } = this.props;
    const {
      name,
      gender,
      number,
      email,
      alternateEmail,
      linkedlnUrl,
      location,
      nameValid,
      genderValid,
      numberValid,
      emailValid,
      alternateEmailValid,
      linkedlnUrlValid,
      locationValid
    } = this.state;
    const {
      avatar,
      container,
      loginBtnLinkedIn,
      formContainer,
      textFieldPass,
      modalFooter,
      signupTypo,
      newHere,
      textFieldPasss,
      loginBtn
    } = classes;
    return (
      <div className={classes.paper}>
        {this.header(avatar, container, loginBtnLinkedIn)}
        {this.formDesign(
          name,
          gender,
          number,
          email,
          alternateEmail,
          linkedlnUrl,
          location,
          nameValid,
          genderValid,
          numberValid,
          emailValid,
          alternateEmailValid,
          linkedlnUrlValid,
          locationValid,
          formContainer,
          textFieldPass,
          textFieldPasss,
          modalFooter,
          signupTypo,
          newHere,
          loginBtn
        )}
        {this.addAlternateEmailModal()}
        {this.addAlternateNumberModal()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state.clientBasicProfileReducer);
  return {
    isLoading: state.clientBasicProfileReducer.isLoading,
    error: state.clientBasicProfileReducer.message,
    access: state.clientBasicProfileReducer.access,
    freelancerProfile: state.clientBasicProfileReducer.freelancerProfile,
    message: state.clientBasicProfileReducer.message,
    hasError: state.clientBasicProfileReducer.hasError,
    newEmailData: state.clientBasicProfileReducer.newEmailData,
    newNumberData: state.clientBasicProfileReducer.newNumberData,
    editProfile: state.clientBasicProfileReducer.editProfile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveFreelancerProfile: () => {
      dispatch(retrieveFreelancerProfile());
    },
    clientAddNumberApi: number => {
      dispatch(clientAddNumberApi(number));
    },
    clientAddEmailApi: email => {
      dispatch(clientAddEmailApi(email));
    },
    clientVerifyEmail: (email, enqueueSnackbar, closeSnackbar, Router) => {
      dispatch(
        clientVerifyEmail(email, enqueueSnackbar, closeSnackbar, Router)
      );
    },
    clientEditProfileApi: (gender, name, number, location, email) => {
      dispatch(clientEditProfileApi(gender, name, number, location, email));
    }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(BasicComponent))
);
