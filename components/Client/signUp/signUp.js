import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { withSnackbar } from "notistack";
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { styles } from "@styles/clientComponents/SignUp.styles.js";
import InputArea from '../../ReuseableComponents/InputArea'
import MenuListComposition from "../../ReuseableComponents/NumberSelectoin";

class SignUpFormComponent extends Component {
  state = {
    email: "",
    password: "",
    emailValid: true,
    passwordValid: true,
    error: '',
    search:'',
    code:'+91'
  };

  handleInputChange = event => {
    console.log( [event.target.name],event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  searching=(e)=>{
    this.setState({search:e})
  }
  formValidator = async event => {
    event.preventDefault();
    const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!checkEmail.test(this.state.email)) {
      await this.setState({
        emailValid: false
      });
    }
    if (this.state.password.length === 0) {
      await this.setState({
        passwordValid: false
      });
    }
    if (this.state.emailValid && this.state.passwordValid) {

    }
  };

  render() {
    let { email, password, emailValid, passwordValid, error } = this.state;
    return (

        <Dialog
            style={styles.rectangle}
            onClose={() => {}}
            open={true}
        >
            <IconButton style={styles.closeIcon} aria-label="Close" onClick={() => {}}>
                <CloseIcon style={styles.icon} />
            </IconButton>
            {/* <Paper style={styles.inner}> */}
            <div style={styles.FormContainer}>
            <Typography style={styles.headerText}>
                Welcome back to Outsized
            </Typography>
            {
                error && error.length ? (
                    <Typography style={styles.errorText}>
                      rohit.yadav@gmail.com is already registered with outsized. Please use a different email address or<span style={styles.signupTypo}> login.</span>
                    </Typography>
                ) : null
            }
          <form
            style={styles.container}
            noValidate
            autoComplete="off"
            onSubmit={event => this.formValidator(event)}
            
          >
              <InputArea
              styleprops={styles.textFieldPass}
             label = "Name" 
             name  = "name"
             handleInputChange = {event => this.handleInputChange(event)}
              validation={true}
              />
            <MenuListComposition code={this.state.code} counterCode={(code)=>this.setState({code:code})} search={this.state.search} searching={this.searching} />
            <InputArea
            styleprops={styles.textFieldPass}
            label = "Email Address" 
            name  = "email"
            value  = {email} 
            handleInputChange = {event => this.handleInputChange(event)}
             validation={emailValid}
             onFocus={() => this.setState({ emailValid: true })}
             />
              <InputArea
              styleprops={styles.textFieldPass}
             label = "LinkedIn profile Url" 
             name  = "LinkedIn profile Url"
             handleInputChange = {event => this.handleInputChange(event)}
              validation={true}
              />
            <div style={styles.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={styles.SignUpBtn}
                onClick={() => this.setState({ error: "something went wrong" })}
              >
                Continue
              </Button>
            </div>
            <div style={styles.divider}>
                <Divider light style={styles.dividerLine} />
                <Typography style={styles.orOperator}>
                    or
                </Typography>
                <Divider light style={styles.dividerLine} />
            </div>
            <div style={styles.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={styles.SignUpBtnLinkedIn}
              >
                Signup with LinkedIn
              </Button>
            </div>
          </form>
            <div style={styles.modalFooter}>
                <Typography style={styles.signupTypo}>
                    <span style={styles.newHere}>Already a registered user?</span> login
                </Typography>
            </div>
          </div>
          {/* </Paper> */}
        </Dialog>
    );
  }
};

export default withSnackbar(SignUpFormComponent);
