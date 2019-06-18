import React, { Component } from "react";
import { withSnackbar } from "notistack";
import { IconButton, Typography, Button, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { styles } from "@styles/components/clientForgotPassEmail.styles.js";

class ClientForgotPassword extends Component {
  state = {
    email: ""
  };

  render() {
    const { email } = this.state;
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
          <Typography style={styles.enterNewPass}>Forgot Password</Typography>
          <Typography style={styles.lowerTypo}>
            Please enter your username or email address. You will recieve a link
            to
            <br />
            create a new password via email.
          </Typography>
        </div>
        <TextField
          label="Email Address"
          name="email"
          value={email}
          onChange={event => this.setState({ email: event.target.value })}
          onFocus={() => this.setState({ emailValid: true })}
          style={styles.textFieldEmail}
          margin="normal"
          InputLabelProps={{
            style: {
              width: "101px",
              height: "24px",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "normal",
              fontStyle: "normal",
              fontStretch: "normal",
              lineHeight: 1.5,
              letterSpacing: "normal",
              color: "rgba(0, 0, 0, 0.87)"
            }
          }}
        />
        <div style={styles.btnContainer}>
          <Typography style={styles.backToLogin}>Back to Login</Typography>
          <Button
            variant="contained"
            color="primary"
            style={styles.sendBtn}
            onClick={() => {}}
          >
            Send Link
          </Button>
        </div>
      </div>
    );
  }
}

export default withSnackbar(ClientForgotPassword);
