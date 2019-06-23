import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import { styles } from "@styles/firmComponents/team.styles.js";
import Button from "@material-ui/core/Button";
import InputArea from "../../ReuseableComponents/InputArea";
import MenuListComposition from "../../ReuseableComponents/NumberSelectoin";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Back from "@material-ui/icons/ArrowBack";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Add from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import BubbleChart from "@material-ui/icons/BubbleChart";
import { connect } from "react-redux";

class TeamComponent extends Component {
  state = {
    open: false,
    name: "",
    nameValid: true,
    email: "",
    emailValid: true,
    number: "",
    code: "+91",
    numberValid: true,
    designation: "",
    designationValid: true,
    role: "",
    roleArray: ["Member", "Admin"],
    roleValid: true,
    search: ""
  };
  handleInputChange = async event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  searching = e => {
    this.setState({ search: e });
  };
  addMember = () => {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <Dialog
        open={open}
        onClose={() => this.setState({ open: false })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.modalContainer}
      >
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => this.setState({ open: false, showText: false })}
        >
          <CloseIcon className={classes.closee} />
        </IconButton>
        <DialogTitle
          className={classes.educationModalTitle}
          id="alert-dialog-title"
        >
          <Typography className={classes.headerText}>
            <IconButton
              className={classes.back}
              aria-label="Close"
              onClick={() => this.setState({ open: false })}
            >
              <Back className={classes.icon} />
            </IconButton>{" "}
            Add Team Member
          </Typography>
        </DialogTitle>
        <Typography className={classes.headerText}>
          <span
            className={classes.headerTextChild}
            style={{
              color: "green",
              paddingLeft: "20px",
              fontSize: "17px",
              fontWeight: "bold"
            }}
          >
            {this.state.showText ? this.props.message : ""}
          </span>
        </Typography>
        <DialogContent
          style={{ overflow: "hidden", minHeight: "100%" }}
          className={styles.modal}
        >
          <DialogContentText
            id="alert-dialog-description"
            className={classes.textModal}
          >
            <div className={classes.FormContainer}>
              <InputArea
                label="Name"
                name="name"
                value={this.state.name}
                validation={this.state.nameValid}
                styleprops={styles.textFieldPass}
                handleInputChange={event => this.handleInputChange(event)}
              />
              <InputArea
                label="Work Email"
                name="email"
                value={this.state.email}
                validation={this.state.emailValid}
                styleprops={styles.textFieldPass}
                handleInputChange={event => this.handleInputChange(event)}
              />
              <MenuListComposition
                number={this.state.number}
                handleInputChange={event => this.handleInputChange(event)}
                code={this.state.code}
                counterCode={code => this.setState({ code: code })}
                search={this.state.search}
                searching={this.searching}
              />
              <InputArea
                label="Designation"
                name="designation"
                validation={this.state.designationValid}
                value={this.state.designation}
                styleprops={styles.textFieldPass}
                handleInputChange={event => this.handleInputChange(event)}
              />
              <FormControl
                className={classes.formControl}
                style={{ width: "100%" }}
              >
                <InputLabel
                  className={classes.formControlText}
                  htmlFor="age-simple"
                >
                  Role
                </InputLabel>
                <Select
                  value={this.state.role}
                  onChange={event => this.handleInputChange(event)}
                  className={classes.formControlSelect}
                  inputProps={{
                    name: "role",
                    id: "age-simple"
                  }}
                  style={{ width: "100%" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {this.state.roleArray &&
                    this.state.roleArray.map(val => {
                      return <MenuItem value={val}>{val}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </div>
            <div className={classes.btnContainer}>
              <Button onClick={this.Education} className={classes.saveBtn}>
                {this.state.buttonText}
              </Button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };
  render() {
    const { classes } = this.props;
    const {} = classes;

    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }

    const rows = [
      createData(
        "Rohit Yadav",
        "rohityadav@gmail.com",
        98451145784,
        "Design Head",
        "Accepted"
      ),
      createData(
        "Rohit Yadav",
        "rohityadav@gmail.com",
        98451145784,
        "Design Head",
        "Invite Sent"
      ),
      createData(
        "Rohit Yadav",
        "rohityadav@gmail.com",
        98451145784,
        "Design Head",
        "Accepted"
      ),
      createData(
        "Rohit Yadav",
        "rohityadav@gmail.com",
        98451145784,
        "Design Head",
        "Accepted"
      ),
      createData(
        "Rohit Yadav",
        "rohityadav@gmail.com",
        98451145784,
        "Design Head",
        "Accepted"
      ),
      createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      createData("Eclair", 262, 16.0, 24, 6.0),
      createData("Cupcake", 305, 3.7, 67, 4.3),
      createData("Gingerbread", 356, 16.0, 49, 3.9)
    ];
    // const [anchorEl, setAnchorEl] = React.useState(0);

    function handleClick(event) {
      // setAnchorEl(event.currentTarget);
    }

    function handleClose() {
      // setAnchorEl(null);
    }

    return (
      <div className={classes.Mainc}>
        <Menu
          className={classes.menu}
          id="fade-menu"
          // anchorEl={anchorEl}
          keepMounted
          // open={true}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Remove</MenuItem>
        </Menu>

        <Paper className={classes.tableMaindiv} style={{ boxShadow: "none" }}>
          <div className={classes.detailDiv}>
            <div>
              <h1>Member(s)</h1>
            </div>
            <IconButton
              onClick={() => this.setState({ open: true, buttonText: "Save" })}
              className={classes.plusIconContainer}
            >
              <Add className={classes.addIcon} />
            </IconButton>
          </div>
          <Table className={classes.table}>
            <TableHead className={classes.tablehead}>
              <TableRow
                className={classes.headrow}
                style={{ backgroundColor: "#f1f2f6" }}
              >
                <TableCell className={classes.tablecell}>
                  <TableSortLabel
                    active={true}
                    // direction={true}
                    // onClick={createSortHandler(row.id)}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell className={classes.tablecell}>Work Email</TableCell>
                <TableCell className={classes.tablecell}>
                  Phone Number
                </TableCell>
                <TableCell className={classes.tablecell}>
                  <TableSortLabel
                    active={true}
                    // direction={true}
                    // onClick={createSortHandler(row.id)}
                  >
                    Designation
                  </TableSortLabel>
                </TableCell>
                <TableCell className={classes.tablecell}>
                  <TableSortLabel
                    active={true}
                    // direction={true}
                    // onClick={createSortHandler(row.id)}
                  >
                    Status
                  </TableSortLabel>
                </TableCell>
                <TableCell className={classes.tablecell} />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name} hover>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                  <TableCell
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <BubbleChart style={{ color: "gray" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter style={{ marginLeft: "100%" }}>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage="5"
                  page="1-5 of 13"
                  SelectProps={{
                    inputProps: { "aria-label": "Rows per page" },
                    native: true
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
        {this.addMember()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // isLoading: state.firmBasicProfileReducer.isLoading,
    // error: state.firmBasicProfileReducer.message,
    // access: state.firmBasicProfileReducer.access,
    // firmrProfile: state.firmBasicProfileReducer.firmrProfile,
    // message: state.firmBasicProfileReducer.message,
    // hasError: state.firmBasicProfileReducer.hasError,
    // updateProfessional: state.firmBasicProfileReducer.updateProfessional,
    // profileAttributes: state.clientBasicProfileReducer.profileAttributes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // retrieveFirmProfile: () => {
    //   dispatch(retrieveFirmProfile());
    // },
    // saveprofessionalInfoData: (...args) => {
    //   dispatch(saveprofessionalInfoData(...args));
    // },
    // clientProffesionalAttributes: () => {
    //   dispatch(clientProffesionalAttributes());
    // }
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(TeamComponent))
);
