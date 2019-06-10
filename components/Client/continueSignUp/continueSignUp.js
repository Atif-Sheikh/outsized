import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withSnackbar } from "notistack";
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { styles } from "@styles/clientComponents/completeSignUp.styles.js";
import InputArea from '../../ReuseableComponents/InputArea'
import MenuListComposition from "../../ReuseableComponents/NumberSelectoin";

class ContinueSignUpComponent extends Component {
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
            <div style={styles.headerContainer}>
                <Typography style={styles.headerText}>
                    <i class="material-icons">
                        keyboard_backspace
                    </i> 
                    <span style={styles.headerTextChild}>Hey Rohit,</span>
                </Typography>
                <IconButton style={styles.closeIcon} aria-label="Close" onClick={() => {}}>
                    <CloseIcon style={styles.icon} />
                </IconButton>
            </div>
            <div style={styles.paraText}>Last step, please provide the following details to continue.</div>
            <div style={styles.FormContainer}>
                <form
                    style={styles.container}
                    noValidate
                    autoComplete="off"
                    onSubmit={event => this.formValidator(event)}            
                >
                   <MenuListComposition code={this.state.code} counterCode={(code)=>this.setState({code:code})} search={this.state.search} searching={this.searching} />                    
                    <InputArea
                        styleprops={styles.textFieldPass}
                        label = "Email address" 
                        name  = "email"
                        type="email"
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
                       Continue Signup
                    </Button>
                    </div>
                </form>
            </div>
        </Dialog>
    );
  }
};

export default withSnackbar(ContinueSignUpComponent);
