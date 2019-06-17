import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import StepButton from '@material-ui/core/StepButton';
import { styles } from "@styles/clientComponents/Experience.styles.js";
import MenuItem from "@material-ui/core/MenuItem";
import EditIcon from '@material-ui/icons/Edit';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import InputArea from "../../ReuseableComponents/InputArea";
import IconButton from "@material-ui/core/IconButton";
import Back from "@material-ui/icons/ArrowBack";
import Add from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from '@material-ui/icons/Delete';

class Experience extends Component {
    state = {
        fromMonth: '',
        fromYear: '',
        tillMonth: '',
        tillYear: '',
        open: false,
        defaultChecked: true,
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        years: ["1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
    };

    renderTexts = (title, link, duration, duration2, place) => {
        const { classes } = this.props;
        return <div style={{ marginBottom: 40 }}>
            <Typography className={classes.title}>
                {title}
                <span className={classes.iconContainer}>
                    <EditIcon className={classes.smallIcon} />
                    <span className={classes.line} />
                    <DeleteIcon className={classes.smallIcon} />
                </span>
            </Typography>
            <Typography className={classes.housingcom}>
                {link}
            </Typography>
            <Typography className={classes.timeDuration}>
                {duration}
                <span className={classes.oval} />
                {duration2}
            </Typography>
            <Typography className={classes.place}>
                {place}
            </Typography>
        </div>
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    dropDown = (
        value,
        dropDownValue,
        name,
        roots,
        formControl,
        formControlText,
        formControlSelect
    ) => {
        return (
            <form className={roots} autoComplete="off">
                <FormControl className={formControl}>
                    <InputLabel className={formControlText} htmlFor="age-simple">
                        {value}
                    </InputLabel>
                    <Select
                        value={this.state[name]}
                        onChange={this.handleChange}
                        className={formControlSelect}
                        inputProps={{
                            name: name,
                            id: "age-simple"
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropDownValue &&
                            dropDownValue.map(val => {
                                return <MenuItem value={val}>{val}</MenuItem>;
                            })}
                    </Select>
                </FormControl>
            </form>
        );
    };

    setYears = () => {
        let currentYear = new Date().getFullYear();
        let arr = [];
        for (let i = 1990; i <= currentYear; i++) {
            arr.push(i.toString());
        }
        this.setState({ years: arr });
    };

    componentDidMount() {
        this.setYears();
    };

    render() {
        const { classes } = this.props;
        const { open, months, years, fromMonth, fromYear, tillMonth, tillYear, defaultChecked } = this.state;
        const { roots,
            formControl,
            formControlText,
            formControlSelect } = classes;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.iconBtnDiv}>
                    <IconButton className={classes.plusIconContainer} onClick={() => this.setState({ open: true })}>
                        <Add className={classes.addIcon} />
                    </IconButton>
                </div>
                {this.renderTexts('VP Product Development', 'Housing.com', 'Oct 2017 - Present', '1 year 9 months', 'Mumbai, India')}

                {this.renderTexts('Software Developer', 'Browerstack.com', 'Sept 2016 - Sept 2017', '1 year', 'Mumbai, India')}

                {this.renderTexts('Intern', 'Weizmann Institute if Science', 'July 2015 - Sept 2015 ', '3 months', 'Seoul, Korea')}

                <Typography className={classes.dummyText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur condimentum nunc, vel ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed tempus quam eget egestas pellentesque. Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
                </Typography>


                <Dialog
                    open={open}
                    onClose={() => this.setState({ open: false })}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    style={{ maxWidth: '650px !important' }}
                >
                    <IconButton
                        className={classes.closeIcon}
                        aria-label="Close"
                        onClick={() => this.setState({ open: false })}
                    >
                        <CloseIcon className={classes.icon} />
                    </IconButton>
                    <DialogTitle id="alert-dialog-title"><Typography className={classes.headerText}>
                        <IconButton
                            className={classes.back}
                            aria-label="Close"
                            onClick={() => this.setState({ open: false })}
                        >
                            <Back className={classes.icon} />
                        </IconButton>{" "}
                            <Typography className={classes.experienceTitle}>
                                Add Work Experience
                            </Typography>
                        </Typography></DialogTitle>
                    <DialogContent className={classes.expModal}>
                        <DialogContentText id="alert-dialog-description">

                            <div className={classes.FormContainer}>
                                <InputArea
                                    label="Designation"
                                    name="designation"
                                    validation={true}
                                    styleprops={styles.textFieldPass}
                                    handleInputChange={() => { }}
                                />
                                <InputArea
                                    label="Company Name"
                                    name="componay"
                                    validation={true}
                                    styleprops={styles.textFieldPass}
                                    handleInputChange={() => { }}
                                />

                                <div className={classes.dropDownContainer}>
                                    {this.dropDown(
                                        'From Date',
                                        months,
                                        "fromMonth",
                                        roots,
                                        formControl,
                                        formControlText,
                                        formControlSelect
                                    )}

                                    {this.dropDown(
                                        '',
                                        years,
                                        "fromYear",
                                        roots,
                                        formControl,
                                        formControlText,
                                        formControlSelect
                                    )}


                                    {this.dropDown(
                                        'Till Date',
                                        months,
                                        "tillMonth",
                                        roots,
                                        formControl,
                                        formControlText,
                                        formControlSelect
                                    )}

                                    {this.dropDown(
                                        '',
                                        years,
                                        "tillYear",
                                        roots,
                                        formControl,
                                        formControlText,
                                        formControlSelect
                                    )}
                                </div>
                                <div>
                                    <div className={classes.checkBoxContainer}>
                                        <Checkbox
                                            defaultChecked
                                            color="#000"
                                            value="checkedG"
                                            inputProps={{
                                                "aria-label": "checkbox with default color"
                                            }}
                                        />
                                        <Typography className={classes.working}>I am currently working here</Typography>
                                    </div>
                                    <div>
                                        <Typography className={classes.experienceDescr}>
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
                            <Button className={classes.saveBtn}>
                                Save
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        );
    };
};

export default (withStyles(styles)(Experience));
