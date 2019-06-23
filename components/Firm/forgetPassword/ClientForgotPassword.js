import React, { Component } from "react";
import { withSnackbar } from "notistack";
import { IconButton, Typography, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { styles } from "@styles/firmComponents/ForgotPass.styles.js";
import Link from "next/link";

class ClientForgotPassword extends Component {
  render() {
    const { name } = this.props;
    return (
      <div style={styles.paperContainer}>
        <IconButton
          style={styles.closeIcon}
          aria-label="Close"
          onClick={() => {}}
        >
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
          <Link href="/firm/login">
            <Button
              variant="contained"
              color="primary"
              style={styles.loginBtn}
              onClick={() => {}}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withSnackbar(ClientForgotPassword);
