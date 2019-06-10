import React, { Component } from "react";
import { withSnackbar } from "notistack";
import { Typography, Dialog, Button, TextField } from "@material-ui/core";
import { styles } from "@styles/clientComponents/clientNewPassword.styles.js";

class ClientResetPass extends Component {
  state = {
    password: '',
    confirmPassword: ''
  }
  render() {
    const { password, newPassword } = this.state;
    return (
        <div
            style={styles.paperContainer}
        >
            <Typography variant="h5" style={styles.typos}>
                Enter New Password
            </Typography>
            <Typography style={styles.lowerTypo}>
                Hint: the password should be atleast twelve characters long. To make <br />
                it stronger, use upper and lower case letters, numbers, and symbols <br />
                like ! " ? $ % ^ & ).
            </Typography>
            <TextField
              label="New Password"
              name="password"
              value={password}
              onChange={event => this.setState({ password: event.target.value })}
              style={styles.textFieldPass}
              margin="normal"
              type="password"
              InputLabelProps={{
                style: {
                    width: '101px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: 'rgba(0, 0, 0, 0.87)',
                }
              }}
            />
            <TextField
              label="Confirm Password"
              name="newPassword"
              value={newPassword}
              onChange={event => this.setState({ confirmPassword: event.target.value })}
              style={styles.textFieldPass}
              margin="normal"
              type="password"
              InputLabelProps={{
                style: {
                    width: '120px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: 'rgba(0, 0, 0, 0.87)',
                }
              }}
            />
            <div style={styles.btnContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={styles.resetBtn}
                    onClick={() => this.setState({ error: "something went wrong" })}
                >
                    Reset Password
                </Button>
            </div>
        </div>
    );
  }
};

export default withSnackbar(ClientResetPass);
