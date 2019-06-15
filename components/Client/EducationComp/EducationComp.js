import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import StepButton from '@material-ui/core/StepButton';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Back from "@material-ui/icons/ArrowBack";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from "@material-ui/core/Dialog";
import InputArea from "../../ReuseableComponents/InputArea";
import Add from "@material-ui/icons/Add";
import { styles } from "@styles/clientComponents/Education.styles.js";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class Education extends Component {
    state = {
        open: false
    };

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
        const { open } = this.state;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.iconBtnDiv}>
                <IconButton onClick={() => this.setState({ open: true })} className={classes.plusIconContainer}>
                    <Add className={classes.addIcon} />
                </IconButton>
                </div>
                {this.renderTexts('B.E (Bachelors of Engineering)', 'MIT Pune', '2015 ', '', 'Pune, Maharashtra, India')}

                <Typography className={classes.dummyText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget egestas pellentesque. Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
                </Typography>

                {this.renderTexts('Senior Secondary', 'K.V AFS Begumpet', '2011', '', 'Begumpet, Andhra Pradesh, India')}


                <Dialog
                    open={open}
                    onClose={() => this.setState({ open: false })}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    style={{ minWidth: '600px' }}
                >
                    <IconButton
                        className={classes.closeIcon}
                        aria-label="Close"
                        onClick={() => this.setState({ open: false })}
                    >
                        <CloseIcon className={classes.closee} />
                    </IconButton>
                    <DialogTitle id="alert-dialog-title"><Typography className={classes.headerText}>
                        <IconButton
                            className={classes.back}
                            aria-label="Close"
                            onClick={() => this.setState({ open: false })}
                        >
                            <Back className={classes.icon} />
                        </IconButton>{" "}
                            Add Education
                        </Typography></DialogTitle>
                    <DialogContent className={classes.modal}>
                        <DialogContentText id="alert-dialog-description">

                            <div className={classes.FormContainer}>
                                <InputArea
                                    label="Degree"
                                    name="designation"
                                    validation={true}
                                    styleprops={styles.textFieldPass}
                                    handleInputChange={() => { }}
                                />
                                <InputArea
                                    label="Name of the Institute"
                                    name="componay"
                                    validation={true}
                                    styleprops={styles.textFieldPass}
                                    handleInputChange={() => { }}
                                />
                                <InputArea
                                    label="Location of the Institute"
                                    name="componay"
                                    validation={true}
                                    styleprops={styles.textFieldPass}
                                    handleInputChange={() => { }}
                                />
                                <InputArea
                                    label="Degree pass out year"
                                    name="componay"
                                    validation={true}
                                    styleprops={styles.textFieldPass}
                                    handleInputChange={() => { }}
                                />
                                <div>
                                    <div>
                                        <Typography className={classes.descr}>
                                            Description
                                    </Typography>
                                        <Typography className={classes.typos}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu.
                                    </Typography>
                                    </div>
                                </div>
                            </div>
                        </DialogContentText>
                        <div className={classes.btnContainer}>
                            <Button onClick={() => this.setState({ open: false })} className={classes.saveBtn}>
                                Save
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>


            </div>
        );
    };
};

export default (withStyles(styles)(Education));
