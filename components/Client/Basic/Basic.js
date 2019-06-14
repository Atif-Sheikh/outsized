import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import { styles } from "@styles/clientComponents/Basic.styles.js";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import InputArea from "../../ReuseableComponents/InputArea";
import MenuListComposition from "../../ReuseableComponents/NumberSelectoin";
import Typography from "@material-ui/core/Typography";

class BasicComponent extends Component {
  state = {
    name: "",
    gender: "",
    number: "",
    email: "",
    alternateEmail: "",
    linkedlnUrl: "",
    location: "",
    nameValid: true,
    genderValid: true,
    numberValid: true,
    emailValid: true,
    alternateEmailValid: true,
    linkedlnUrlValid: true,
    locationValid: true,
    code: "+91",
    search: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  searching = e => {
    this.setState({ search: e });
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
    newHere
  ) => {
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
          <Typography className={signupTypo}>
            <span className={newHere}>Add alternate number</span>
          </Typography>
        </div>
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
          <Typography className={signupTypo}>
            <span className={newHere}>Add alternate email</span>
          </Typography>
        </div>
        <InputArea
          styleprops={textFieldPasss}
          label="Alternate Email"
          value={alternateEmail}
          name="alternateEmail"
          handleInputChange={event => this.handleInputChange(event)}
          validation={alternateEmailValid}
          styleprops={textFieldPasss}
        />
        <div className={modalFooter}>
          <Typography className={signupTypo}>
            Don't receive link? <span className={newHere}>Resend link</span>
          </Typography>
        </div>
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
      textFieldPasss
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
          newHere
        )}
      </div>
    );
  }
}

export default withSnackbar(withStyles(styles)(BasicComponent));
