import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withSnackbar } from "notistack";
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "@styles/clientComponents/SetPassword.styles.js";
import InputArea from '../../ReuseableComponents/InputArea'

class SetPasswordFormComponent extends Component {
  state = {
    password: "",
    passwordValid: true,
    error: '',
  };

  handleInputChange = event => {
    // console.log( [event.target.name],event.target.value)
    // this.setState({
    //   [event.target.name]: event.target.value
    // });
  };
//   formValidator = async event => {
//     event.preventDefault();
//     const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//     if (!checkEmail.test(this.state.email)) {
//       await this.setState({
//         emailValid: false
//       });
//     }
//     if (this.state.password.length === 0) {
//       await this.setState({
//         passwordValid: false
//       });
//     }
//     if (this.state.emailValid && this.state.passwordValid) {

//     }
//   };

  render() {
    const { classes } = this.props
    return (
        <Dialog
            // style={styles.rectangle}
            className={classes.paper}
            onClose={() => {}}
            open={true}
        >
            <div className={classes.Header}></div>
            <div className={classes.headerContainer}>
                <Typography className={classes.headerText}>
                    <i class="material-icons">
                        keyboard_backspace
                    </i> 
                    <span className={classes.headerTextChild}>Set password</span>
                </Typography>
                <IconButton className={classes.closeIcon} aria-label="Close" onClick={() => {}}>
                    <CloseIcon className={classes.icon} />
                </IconButton>
            </div>
            <div className={classes.FormContainer}>
                <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                    // onSubmit={event => this.formValidator(event)}            
                >
                    <InputArea
                        styleprops={styles.textFieldPass}
                        label = "Password" 
                        name  = "Password"
                        type="password"
                        handleInputChange = {event => this.handleInputChange(event)}
                        validation={true}
                    />
                    <InputArea
                        styleprops={styles.textFieldPass}
                        label = "Confirm Password" 
                        name  = "cPassword"
                        type="password"
                        handleInputChange = {event => this.handleInputChange(event)}
                        validation={true}
                    />
                    <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.SignUpBtn}
                        // onClick={() => this.setState({ error: "something went wrong" })}
                    >
                        Signup
                    </Button>
                    </div>
                </form>
            </div>
        </Dialog>
    );
  }
};

export default withSnackbar(withStyles(styles)(SetPasswordFormComponent));
