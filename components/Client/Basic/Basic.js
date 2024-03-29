import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import { styles } from "@styles/clientComponents/Basic.styles.js";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputArea from "../../ReuseableComponents/InputArea";
import MenuListComposition from "../../ReuseableComponents/NumberSelectoin";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Router from "next/router";
import Link from "next/link";

import {
  retrieveFreelancerProfile,
  clientAddNumberApi,
  clientAddEmailApi,
  clientEditProfileApi,
  clientVerifyEmail,
  clearTermsModalComp
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
    submitText: "Submit",
    showTermsModal: false,
    termsError: false,
    actionPerform: ""
  };
  componentDidMount() {
    this.props.retrieveFreelancerProfile();
    setTimeout(() => {
      let showTermsModal = localStorage.getItem("terms");
      let cont = /true/i.test(showTermsModal);
      this.setState({ showTermsModal: cont });
    }, 1000);
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.actionPerform === "edit") {
      let editData =
        nextProps &&
        nextProps.editProfile &&
        nextProps.editProfile.editExperience &&
        nextProps.editProfile.editExperience.editBasicProfile &&
        nextProps.editProfile.editExperience.editBasicProfile.freelancerProfile;
      this.setState({
        name: editData && editData.name,
        number: editData && editData.mobile,
        code: editData && editData.mobile ? editData.mobile.slice(0, 3) : "+91",
        email: editData && editData.email,
        location:
          editData && editData.currentLocation
            ? editData.currentLocation
            : "India",
        gender: editData && editData.gender ? editData.gender : "Male"
      });
    } else {
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

      this.setState({
        name: basicData && basicData.name,
        number: basicData && basicData.mobile,
        code:
          basicData && basicData.mobile ? basicData.mobile.slice(0, 3) : "+91",
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
    if (nextProps.showVerifyScreen) {
      setTimeout(() => {
        this.setState({ showTermsModal: true }, () => {
          this.props.clearTermsModal();
        });
      }, 1000);
    }
    setTimeout(() => {
      if (this.state.numberModal) {
        this.setState({
          numberModal: nextProps && !nextProps.access
        });
      }
      if (this.state.emailModal) {
        this.setState({
          emailModal: nextProps && !nextProps.access
        });
      }
    }, 1000);

    setTimeout(() => {
      this.setState({
        showText: false
      });
    }, 2000);
  }

  termsAndConditionsModal = () => {
    const { classes } = this.props;
    const { showTermsModal, termsError } = this.state;
    return (
      <Dialog
        className={classes.paperzzzz}
        onClose={() => {}}
        open={showTermsModal}
      >
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => this.setState({ termsError: true })}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <div className={classes.headerContainerss}>
          <Typography className={classes.headerTextChi}>
            <span>Terms &amp; Conditions</span>
            <CloseIcon
              className={classes.iconNext}
              onClick={() => this.setState({ termsError: true })}
            />
          </Typography>
        </div>
        {termsError && (
          <div className={classes.errorContainerss}>
            <Typography className={classes.errorsss}>
              Please accpet the the Terms &amp; Conditions to proceed.
            </Typography>
          </div>
        )}
        <div className={classes.FormContainerss}>
          <form className={classes.containerss} noValidate autoComplete="off">
            <Typography className={classes.midSecDatass}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consectetur condimentum nunc, vel ultrices ante elementum in.
              Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod
              purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed
              tempus quam eget egestas pellentesque. Praesent vehicula varius
              lectus, vel maximus turpis rhoncus a. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam consectetur condimentum nunc, vel
              ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a
              urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a
              interdum tortor. Sed tempus quam eget egestas pellentesque.
              Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consectetur condimentum nunc, vel ultrices ante elementum in.
              Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod
              purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed
              tempus quam eget egestas pellentesque. Praesent vehicula varius
              lectus, vel maximus turpis rhoncus a.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consectetur condimentum nunc, vel ultrices ante elementum in.
              Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod
              purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed
              tempus quam eget Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam consectetur condimentum nunc, vel ultrices
              ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna
              arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a
              interdum tortor. Sed tempus quam eget
            </Typography>
            <div className={classes.wrapperss}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.setState({ showTermsModal: false });
                  localStorage.setItem("terms", false);
                }}
                className={classes.agreeBtn}
              >
                Accept and Continue
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  };

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

    this.setState({
      actionPerform: ""
    });
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
        if (this.state.addNewNumber.slice(0, 1) === "+") {
          this.props.clientAddNumberApi(this.state.addNewNumber);
        } else {
          this.props.clientAddNumberApi(
            this.state.addNewCode + this.state.addNewNumber
          );
        }
      }
      this.setState({
        phoneNumberError: false,
        showText: true,
        actionPerform: ""
      });
    } else {
      this.setState({
        phoneNumberError: true,
        showText: true,
        actionPerform: ""
      });
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
    if (!number) {
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
      number &&
      location.length &&
      email.length
    ) {
      if (number && number.slice(0, 1) === "+") {
        this.props.clientEditProfileApi(
          gender,
          name,
          number,
          location,
          email,
          this.props.enqueueSnackbar,
          this.props.closeSnackbar,
          Router
        );
      } else {
        this.props.clientEditProfileApi(
          gender,
          name,
          this.state.code + number,
          location,
          email,
          this.props.enqueueSnackbar,
          this.props.closeSnackbar,
          Router
        );
      }
    }
    this.setState({
      actionPerform: "edit"
    });
  };
  addAlternateEmailModal = () => {
    const { emailModal } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        open={emailModal}
        close={this.state.emailModal}
        className={classes.papers}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.headerContainer}>
          <Typography className={classes.headerText}>
            <span className={classes.headerTextChild}>Add Email address</span>
          </Typography>
          <IconButton
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
              styleprops={classes.textFieldPass}
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
          onClick={() => localStorage.setItem("state", "freelancer")}
        >
          <Link href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81742vq7hot2j7&redirect_uri=http%3A%2F%2F13.232.136.59%3A3000%2Flinkedin-oauth&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social">
            <a style={{ color: "white", textDecoration: "none" }}>
              Connect your LinkedIn`
            </a>
          </Link>
        </Button>
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
            defaultValue={this.state.gender}
            value={this.state.gender}
            onChange={this.handleInputChange}
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
        {this.dropDown(
          "Gender",
          ["Male", "Female"],
          "gender",
          classes.roots,
          classes.formControl,
          classes.formControlText,
          classes.formControlSelect
        )}
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
        {this.termsAndConditionsModal()}
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
    newEmailData: state.clientBasicProfileReducer.newEmailData,
    newNumberData: state.clientBasicProfileReducer.newNumberData,
    editProfile: state.clientBasicProfileReducer.editProfile,
    showVerifyScreen: state.verifyEmail.showVerifyScreen
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
    clientEditProfileApi: (
      gender,
      name,
      number,
      location,
      email,
      enqueueSnackbar,
      closeSnackbar,
      Router
    ) => {
      dispatch(
        clientEditProfileApi(
          gender,
          name,
          number,
          location,
          email,
          enqueueSnackbar,
          closeSnackbar,
          Router
        )
      );
    },
    clearTermsModal: () => {
      dispatch(clearTermsModalComp());
    }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(BasicComponent))
);
