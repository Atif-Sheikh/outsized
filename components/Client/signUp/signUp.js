import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { withSnackbar } from "notistack";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Back from '@material-ui/icons/ArrowBack';
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
    const {classes} = this.props
    return (

        <Dialog
            className={classes.paper}
            onClose={() => {}}
            open={true}
        >
            <IconButton className={classes.closeIcon} aria-label="Close" onClick={() => {}}>
                <CloseIcon className={classes.icon} />
            </IconButton>
            <div className={classes.Header}></div>
            {/* <Paper className={classes.inner}> */}
            <div className={classes.FormContainerDup}>
              <Typography className={classes.headerText}>
              <IconButton className={classes.back} aria-label="Close" onClick={() => {}}>
                  <Back className={classes.icon} />
              </IconButton> Welcome back to Outsized
              </Typography>
              {
                  error && error.length ? (
                      <Typography className={classes.errorText}>
                        rohit.yadav@gmail.com is already registered with outsized. Please use a different email address or<span className={classes.signupTypo}> login.</span>
                      </Typography>
                  ) : null
              }
            </div>
            <div className={classes.FormContainer}>
            <form
            className={classes.container}
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
              styleprops={classes.textFieldPass}
             label = "LinkedIn profile Url" 
             name  = "LinkedIn profile Url"
             handleInputChange = {event => this.handleInputChange(event)}
              validation={true}
              />
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.SignUpBtn}
                onClick={() => this.setState({ error: "something went wrong" })}
              >
                Continue
              </Button>
            </div>
            <div className={classes.divider}>
                <Divider light className={classes.dividerLine} />
                <Typography className={classes.orOperator}>
                    or
                </Typography>
                <Divider light className={classes.dividerLine} />
            </div>
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.SignUpBtnLinkedIn}
              >
                Signup with LinkedIn
              </Button>
            </div>
          </form>
            <div className={classes.modalFooter}>
                <Typography className={classes.signupTypo}>
                    <span className={classes.newHere}>Already a registered user?</span> login
                </Typography>
            </div>
          </div>
          {/* </Paper> */}
        </Dialog>
    );
  }
};

export default withSnackbar(withStyles(styles)(SignUpFormComponent));
