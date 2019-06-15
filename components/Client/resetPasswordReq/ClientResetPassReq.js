import React, { Component } from "react";
import { withSnackbar } from "notistack";
import { Typography, Dialog, Button } from "@material-ui/core";
import { styles } from "@styles/clientComponents/clientResetPass.styles.js";

class ClientResetPassReq extends Component {
  render() {
    const { name } = this.props;
    return (
      <div style={styles.paperContainer}>
        <Typography style={styles.typos}>
          Some one has requested a password reset for the following account:
        </Typography>
        <Typography style={styles.typos}>
          Username: {name || "John@gmail.com"}
        </Typography>
        <Typography style={styles.typos}>
          If this was a mistake, Just ignore this email and nothing will happen.
        </Typography>
        <Typography style={styles.typos}>
          To reset your password, click the button below.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={styles.resetBtn}
          onClick={() => this.setState({ error: "something went wrong" })}
        >
          Reset Password
        </Button>
        <Typography style={styles.lowerTypo}>
          if you have any problem displaying button copy and paste <br />
          the following address into your browser
        </Typography>
      </div>
    );
  }
}

export default withSnackbar(ClientResetPassReq);
