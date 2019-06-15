import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import BackIcon from "@material-ui/icons/ArrowBack";
import CheckCircle from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import { styles } from "@styles/clientComponents/VerifyEmail.styles.js";
import Link from "next/link";
import Router from "next/Router";

class VerifyEmailAddress extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.header} />
        <div>
          <IconButton onClick={() => Router.push("/login")}>
            <BackIcon className={classes.backButton} />
          </IconButton>
        </div>
        <div className={classes.upperContainer}>
          <IconButton>
            <CheckCircle className={classes.circleIcon} />
          </IconButton>
          <Typography className={classes.title}>
            A verification link has been sent to your email address
          </Typography>
        </div>
        <div className={classes.lowerContainer}>
          <Typography className={classes.midSecTypo}>
            {/* Please click on the link that has just been sent to <span className={classes.underlineTypo}>{this.props.email || ''}</span> and verify your email account. */}
            Please click on the link that has just been sent to
            rohit.yadav@gmail.com and verify your email account.
          </Typography>
        </div>
        <div className={classes.lowerContainerTypo}>
          <Typography className={classes.didntReceive}>
            Didn't receive the link?{" "}
            <span className={classes.textStyle}>
              <Link href="/add-email">
                <a className={classes.anchorStyle}>Resend verification link</a>
              </Link>
            </span>
          </Typography>
          <Typography className={classes.continueProfile}>
            Continue to profile
          </Typography>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.verifyEmail.email
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    null
  )(withStyles(styles)(VerifyEmailAddress))
);
