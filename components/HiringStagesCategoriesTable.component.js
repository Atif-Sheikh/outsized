import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";

import { styles } from "@styles/adminComponents/components/HiringStagesCategoriesTable.styles";
import {
  addStageCategory,
  getAllStageCategory,
  updateCategory
} from "../../actions/admin/stageCategoryActoin";

class HiringStagesCategoriesTable extends Component {
  state = {
    disabled: true,
    CategoryName: "",
    CategoryNameArr: [],
    addCategoray: "",
    selectedRow: {},
    updateCategoryNote: ""
  };
  editCategory = row => {
    this.setState({ selectedRow: row, updateCategoryNote: row.name });
  };
  addCategoray = (e, name) => {
    var value = e.target.value;
    this.setState({ [name]: value });
  };
  componentWillMount = () => {
    this.props.getAllStageCategory();
  };
  componentWillReceiveProps = nextProps => {
    this.setState({ CategoryNameArr: nextProps.allCategory });
  };
  hidSubmite = () => {
    const { addCategoray } = this.state;
    if (addCategoray.trim() !== "") {
      this.props.addStageCategory(addCategoray, this.props.enqueueSnackbar);
      this.setState({ addCategoray: "" });
      this.props.getAllStageCategory();
    }
  };
  handleChange = (event, row, id) => {
    this.setState({ updateCategoryNote: event.target.value });
  };
  updated = row => {
    const { updateCategoryNote } = this.state;
    this.props.updateCategory(
      row.id,
      updateCategoryNote,
      this.props.enqueueSnackbar
    );
    this.setState({ selectedRow: {}, updateCategoryNote: "" });
  };
  render() {
    const { classes } = this.props;
    const {
      CategoryNameArr,
      addCategoray,
      selectedRow,
      updateCategoryNote
    } = this.state;
    const {
      rootPaper,
      table,
      tableCell,
      button,
      tableBtn,
      icon,
      submitDiv,
      buttonProgress,
      wrapper
    } = classes;
    // console.log("---", this.props.isLoading);
    return (
      <Paper className={rootPaper}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableCell className={tableCell}>Add Stage Category</TableCell>
              <TableCell align="left" className={tableCell} />
            </TableRow>
            <TableRow>
              <TableCell align="left" className={tableCell}>
                <TextField
                  id="outlined-name"
                  label="Enter Category"
                  className={classes.textField}
                  // value={row.CategoryName[row.id].charAt(0).toUpperCase() + row.CategoryName[row.id].slice(1)}
                  value={addCategoray}
                  onChange={e => this.addCategoray(e, "addCategoray")}
                  margin="normal"
                  variant="outlined"
                />
              </TableCell>
              <TableCell align="left" className={tableCell}>
                <div className={submitDiv}>
                  <Button
                    variant="contained"
                    disabled={addCategoray.trim() === ""}
                    onClick={this.hidSubmite}
                    color="secondary"
                    className={button}
                  >
                    Submit
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell className={tableCell}>Category Name</TableCell>
              <TableCell align="left" className={tableCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {CategoryNameArr &&
              CategoryNameArr.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="left" className={tableCell}>
                    <TextField
                      id="outlined-name"
                      label="Category"
                      className={classes.textField}
                      value={
                        selectedRow.id === row.id
                          ? updateCategoryNote
                          : row.name
                      }
                      disabled={selectedRow && selectedRow.id !== row.id}
                      onChange={e => this.handleChange(e, row)}
                      margin="normal"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="left" className={tableCell}>
                    <div className={submitDiv}>
                      <button
                        className={tableBtn}
                        onClick={() => this.editCategory(row)}
                      >
                        <EditIcon className={icon} />
                      </button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.updated(row)}
                        disabled={selectedRow && selectedRow.id !== row.id}
                        className={button}
                      >
                        Submit
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

HiringStagesCategoriesTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    token: state.loginReducer.token,
    allCategory: state.StageCategory.allCategory,
    isLoading: state.StageCategory.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addStageCategory: (value, enqueueSnackbar) =>
      dispatch(addStageCategory(value, enqueueSnackbar)),
    updateCategory: (id, value, enqueueSnackbar) =>
      dispatch(updateCategory(id, value, enqueueSnackbar)),
    getAllStageCategory: () => dispatch(getAllStageCategory())
  };
};
const HiringStages = withStyles(styles)(HiringStagesCategoriesTable);

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HiringStages)
);
