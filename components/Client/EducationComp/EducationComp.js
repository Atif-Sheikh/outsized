import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import StepButton from '@material-ui/core/StepButton';
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import { styles } from "@styles/clientComponents/Education.styles.js";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class Education extends Component {

    renderTexts = (title, link, duration, duration2, place) => {
        const { classes } = this.props;
        return <div style={{ marginBottom: 20 }}>
            <Typography className={classes.title}>
                {title}
                <span className={classes.iconContainer}>
                    <EditIcon className={classes.icon} />
                    <span className={classes.line} />
                    <DeleteIcon className={classes.icon} />
                </span>
            </Typography>
            <Typography className={classes.housingcom}>
                {link}
            </Typography>
            <Typography className={classes.timeDuration}>
                {duration}
                {
                    duration2.length ? (
                        <span className={classes.oval} />
                    )
                    :
                    null
                }
                {duration2}
            </Typography>
            <Typography className={classes.place}>
                {place}
            </Typography>
        </div>
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.iconBtnDiv}>
                <IconButton className={classes.plusIconContainer}>
                    <Add className={classes.addIcon} />
                </IconButton>
                </div>
                {this.renderTexts('B.E (Bachelors of Engineering)', 'MIT Pune', '2015 ', '', 'Pune, Maharashtra, India')}

                <Typography className={classes.dummyText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget egestas pellentesque. Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
                </Typography>

                {this.renderTexts('Senior Secondary', 'K.V AFS Begumpet', '2011', '', 'Begumpet, Andhra Pradesh, India')}

            </div>
        );
    };
};

export default (withStyles(styles)(Education));
