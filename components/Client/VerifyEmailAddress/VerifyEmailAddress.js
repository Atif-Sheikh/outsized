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
import { clientVerifyEmailCode } from "@actions/client";
import { Button } from "@material-ui/core";

class VerifyEmailAddress extends Component {
  state = {
    linkVerification: false,
    valided: false
  };
  componentDidMount(props) {
    const qs = Router.router.query;
    const code = qs.code;
    if (code) {
      this.setState({ linkVerification: true, valided: false });
      this.props.VerifyEmailCode(
        code,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar
      );
    }
  }
  componentWillReceiveProps(NewProps) {
    console.log(NewProps.email);
    if (NewProps.email.valid) {
      this.setState({ linkVerification: false, valided: true });
    }
  }
  render() {
    const { linkVerification, valided } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.header} />
        <div>
          <IconButton onClick={() => Router.push("/basic-profile")}>
            <BackIcon className={classes.backButton} />
          </IconButton>
        </div>
        <div className={classes.upperContainer}>
          <IconButton>
            <CheckCircle className={classes.circleIcon} />
          </IconButton>
          <Typography className={classes.title}>
            {linkVerification || valided
              ? "Thank you for be coming a part of OutSize"
              : " A verification link has been sent to your email address"}
          </Typography>
        </div>
        <div className={classes.lowerContainer}>
          <Typography className={classes.midSecTypo}>
            {/* Please click on the link that has just been sent to <span className={classes.underlineTypo}>{this.props.email || ''}</span> and verify your email account. */}
            {linkVerification
              ? "Please wait verfing your account..."
              : valided
              ? "Your Account has been verified"
              : " Please click on the link that has just been sent to rohit.yadav@gmail.com and verify your email account."}
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
          <Typography
            onClick={() => {
              valided ? Router.push("/basic-profile") : {};
            }}
            className={!valided ? classes.continueProfile : classes.anchorStyle}
          >
            {valided
              ? "Continue to profile"
              : !linkVerification
              ? "Continue to profile"
              : "Please wait..."}
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
const mapDispatchToProps = dispatch => {
  return {
    VerifyEmailCode: (code, show, hide) =>
      dispatch(clientVerifyEmailCode(code, show, hide))
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(VerifyEmailAddress))
);
