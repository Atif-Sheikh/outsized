import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import BackIcon from '@material-ui/icons/ArrowBack';
import CheckCircle from '@material-ui/icons/CheckCircle'
import IconButton from '@material-ui/core/IconButton';
import { styles } from "@styles/clientComponents/VerifyEmail.styles.js";

class VerifyEmailAddress extends Component {
    state = {

    };

    render() {
        return (
            <div style={{ flex: 1 }}>
                <div style={styles.header} />
                <div>
                    <IconButton>
                        <BackIcon style={styles.backButton} />
                    </IconButton>
                </div>
                <div style={styles.upperContainer}>
                    <IconButton>
                        <CheckCircle style={styles.circleIcon} />
                    </IconButton>
                    <Typography style={styles.title}>
                        A verification link has been sent to your email address
                    </Typography>
                </div>
                <div style={styles.lowerContainer}>
                    <Typography style={styles.midSecTypo}>
                        Please click on the link that has just been sent to <span style={styles.underlineTypo}>{this.props.email || ''}</span> and verify your email account.
                    </Typography>
                </div>
                <div style={styles.lowerContainerTypo}>
                    <Typography style={styles.didntReceive}>
                        Didn't receive the link? <span style={styles.textStyle}>Resend verification link</span>
                    </Typography>
                    <Typography style={styles.continueProfile}>
                        Continue to profile
                    </Typography>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
      email: state.verifyEmail.email,
    };
};

export default withSnackbar(
    connect(
      mapStateToProps,
      null
    )  
    (withStyles(styles)(VerifyEmailAddress))
);