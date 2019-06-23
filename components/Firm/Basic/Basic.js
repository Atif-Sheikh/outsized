import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import { styles } from "@styles/firmComponents/Basic.styles.js";
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
  retrieveFirmProfile,
  clientAddNumberApi,
  clientAddEmailApi,
  firmEditProfileApi,
  clientVerifyEmail
  // clearTermsModalComp
} from "@actions/firm";

class BasicComponent extends Component {
  state = {
    name: "",
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
    websiteUrl: "",
    nameValid: true,
    numberValid: true,
    emailValid: true,
    alternateEmailValid: true,
    websiteUrlValid: true,
    linkedlnUrlValid: true,
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
    this.props.retrieveFirmProfile();
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
        nextProps.editProfile.editExperience.editBasicProfile.firmrProfile;
      this.setState({
        name: editData && editData.name,
        linkedlnUrl: editData && editData.linkedinUrl,
        websiteUrl: editData && editData.link
      });
    } else {
      let basicData =
        nextProps && nextProps.firmrProfile && nextProps.firmrProfile.firm;
      let basicEmailData =
        nextProps &&
        nextProps.newEmailData &&
        nextProps.newEmailData.emailData &&
        nextProps.newEmailData.emailData.addEmail &&
        nextProps.newEmailData.emailData.addEmail.firmrProfile &&
        nextProps.newEmailData.emailData.addEmail.firmrProfile.owner &&
        nextProps.newEmailData.emailData.addEmail.firmrProfile.owner
          .alternateEmails
          ? nextProps.newEmailData.emailData.addEmail.firmrProfile.owner
              .alternateEmails
          : [];
      let basicNumberData =
        nextProps &&
        nextProps.newNumberData &&
        nextProps.newNumberData.numberData &&
        nextProps.newNumberData.numberData.addMobile &&
        nextProps.newNumberData.numberData.addMobile.firmrProfile &&
        nextProps.newNumberData.numberData.addMobile.firmrProfile.owner &&
        nextProps.newNumberData.numberData.addMobile.firmrProfile.owner
          .alternateMobiles
          ? nextProps.newNumberData.numberData.addMobile.firmrProfile.owner
              .alternateMobiles
          : [];
      console.log("basicData", basicData);
      this.setState({
        name: basicData && basicData.name,
        number: basicData && basicData.owner.mobile,
        code:
          basicData && basicData.mobile ? basicData.mobile.slice(0, 3) : "+91",
        email: basicData && basicData.owner.email,
        linkedlnUrl: basicData && basicData.linkedinUrl,
        websiteUrl: basicData && basicData.link,
        alternateEmailsArray: basicEmailData.length
          ? basicEmailData
          : basicData && basicData.owner.alternateEmails,
        alternateNumberArray: basicNumberData.length
          ? basicNumberData
          : basicData && basicData.owner.alternateMobiles
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
      nameValid: true,
      websiteUrlValid: true,
      linkedlnUrlValid: true,
      addNewEmailValid: true,
      addNewNumberValid: true
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
    let { name, websiteUrl, linkedlnUrl } = this.state;
    if (!websiteUrl.length) {
      this.setState({
        websiteUrlValid: false
      });
    }
    if (!name.length) {
      this.setState({
        nameValid: false
      });
    }

    if (!linkedlnUrl.length) {
      this.setState({
        linkedlnUrlValid: false
      });
    }

    if (name.length && websiteUrl.length && linkedlnUrl.length) {
      this.props.firmEditProfileApi(
        name,
        websiteUrl,
        linkedlnUrl,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar,
        Router
      );
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
        <Typography className={loginBtnLinkedIn}>Firm Logo</Typography>
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
    loginBtn,
    websiteUrl,
    websiteUrlValid
  ) => {
    const { classes } = this.props;
    return (
      <div className={formContainer}>
        <InputArea
          styleprops={textFieldPass}
          label="Firm Name"
          value={name}
          name="name"
          handleInputChange={event => this.handleInputChange(event)}
          validation={nameValid}
          styleprops={textFieldPass}
        />
        <InputArea
          styleprops={textFieldPasss}
          label="Website"
          value={websiteUrl}
          name="websiteUrl"
          handleInputChange={event => this.handleInputChange(event)}
          validation={websiteUrlValid}
          styleprops={textFieldPasss}
        />
        <InputArea
          styleprops={textFieldPasss}
          label="Firm Linkedln Url"
          value={linkedlnUrl}
          name="linkedlnUrl"
          handleInputChange={event => this.handleInputChange(event)}
          validation={linkedlnUrlValid}
          styleprops={textFieldPasss}
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
                  counterCode={code => this.setState({ code: code })}
                  search={this.state.search}
                  searching={this.searching}
                />
              );
            })
          : ""}
        <InputArea
          styleprops={textFieldPasss}
          label="Work Email Address"
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
      locationValid,
      websiteUrl,
      websiteUrlValid
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
          loginBtn,
          websiteUrl,
          websiteUrlValid
        )}
        {this.addAlternateEmailModal()}
        {this.addAlternateNumberModal()}
        {this.termsAndConditionsModal()}
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
    newEmailData: state.firmBasicProfileReducer.newEmailData,
    newNumberData: state.firmBasicProfileReducer.newNumberData,
    editProfile: state.firmBasicProfileReducer.editProfile,
    showVerifyScreen: state.verifyEmail.showVerifyScreen
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveFirmProfile: () => {
      dispatch(retrieveFirmProfile());
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
    firmEditProfileApi: (
      name,
      website,
      linkedlnUrl,
      enqueueSnackbar,
      closeSnackbar,
      Router
    ) => {
      dispatch(
        firmEditProfileApi(
          name,
          website,
          linkedlnUrl,
          enqueueSnackbar,
          closeSnackbar,
          Router
        )
      );
    }
    // clearTermsModal: () => {
    //   dispatch(clearTermsModalComp());
    // }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(BasicComponent))
);
