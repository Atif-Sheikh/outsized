import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withSnackbar } from "notistack";
import CloseIcon from '@material-ui/icons/Close';
import BackIcon from '@material-ui/icons/ArrowBack';
import CheckCircle from '@material-ui/icons/CheckCircle'
import IconButton from '@material-ui/core/IconButton';
import { styles } from "@styles/clientComponents/VerifyEmail.styles.js";
import { withStyles } from '@material-ui/core/styles';

class VerifyEmailAddress extends Component {
    state = {

    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.header} />
                <div className={classes.btnContainer}>
                    <IconButton>
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
                        Please click on the link that has just been sent to <span className={classes.underlineTypo}>{'rohit.yadav@gmail.com'}</span> and verify your email account.
                    </Typography>
                </div>
                <div className={classes.lowerContainerTypo}>
                    <Typography className={classes.didntReceive}>
                        Didn't receive the link? <span className={classes.textStyle}>Resend verification link</span>
                    </Typography>
                    <Typography className={classes.continueProfile}>
                        Continue to profile
                    </Typography>
                </div>
            </div>
        );
    };
};

export default withStyles(styles)(VerifyEmailAddress);
