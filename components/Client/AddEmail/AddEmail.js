import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { styles } from "@styles/clientComponents/AddEmail.styles.js";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InputArea from '../../ReuseableComponents/InputArea'
import Router from "next/Router";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";

import { clientVerifyEmail } from "@actions/client";

class AddEmail extends Component {
    state = {
        email: '',
        emailValid: true,
    };

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
          emailValid: true
        });
    };

    formValidator = async event => {
        event.preventDefault();
        const checkEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!checkEmail.test(this.state.email)) {
          await this.setState({
            emailValid: false
          });
        }
        if (this.state.emailValid) {
          this.props.verifyEmail(
            this.state.email,
            this.props.enqueueSnackbar,
            this.props.closeSnackbar,
            Router
          );
        }
    };

    render() {
        const { classes } = this.props;
        const { email, emailValid } = this.state;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.header} />
                <div className={classes.restContainer}>
                    <div className={classes.topSection}>
                        <Typography className={classes.title}>
                            Add email address 
                        </Typography>
                        <IconButton className={classes.closeIcon} aria-label="Close" onClick={() => {}}>
                            <CloseIcon className={classes.icon} />
                        </IconButton>
                    </div>
                    <div className={classes.midSection}>
                        <InputArea
                            label="Email"
                            name="email"
                            value={email}
                            handleInputChange={event => this.handleInputChange(event)}
                            onFocus={() => this.setState({ emailValid: true })}
                            styleprops={styles.textFieldPass}
                            validation={emailValid}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.acceptBtn}
                            onClick={this.formValidator}
                        >
                            Send Verification Link
                        </Button>
                    </div>
                    <div className={classes.lowerSection}>
                    </div>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
      verifyEmail: (email, password, enqueueSnackbar, closeSnackbar, Router) =>
        dispatch(
            clientVerifyEmail(email, password, enqueueSnackbar, closeSnackbar, Router)
        )
    };
};
  
export default withSnackbar(
    connect(
      null,
      mapDispatchToProps
    )  
    (withStyles(styles)(AddEmail))
);