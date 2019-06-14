import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "@styles/clientComponents/Experience.styles.js";

class Experience extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainContainer}>
                Experience
            </div>
        );
    };
};

export default (withStyles(styles)(Experience));
