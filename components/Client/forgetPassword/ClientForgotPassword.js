import React, { Component } from "react";
import { withSnackbar } from "notistack";
import { IconButton, Typography, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { styles } from "@styles/clientComponents/clientForgotPass.styles.js";

class ClientForgotPassword extends Component {
  
  render() {
    const { name } = this.props;
    return (
        <div
            style={styles.paperContainer}
        >
            <IconButton style={styles.closeIcon} aria-label="Close" onClick={() => {}}>
                <CloseIcon style={styles.icon} />
            </IconButton>
            <div style={styles.containerDiv}>
                <Typography style={styles.enterNewPass}>
                    Enter New Password
                </Typography>
                <Typography style={styles.lowerTypo}>
                    Your password has been reset.
                </Typography>
            </div>
            <div style={styles.btnContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    style={styles.loginBtn}
                    onClick={() => {}}
                >
                    Login
                </Button>
            </div>
        </div>
    );
  }
};

export default withSnackbar(ClientForgotPassword);
