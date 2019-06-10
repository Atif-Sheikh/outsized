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
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { styles } from "@styles/adminComponents/components/FeedbackTemplateTable.styles";
import { getAllScalesCriteria } from "../../../actions/admin/scaleRating.action.js";
class FeedbackTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allScalesCriteria: [],
      rows: []
    };
  }
  createData = (criteria, description) => {
    return { criteria, description };
  };
  componentDidMount() {
    const {
      clear,
      allScales,
      allScalesCriteria,
      getAllScalesCriteria,
      enqueueSnackbar,
      closeSnackbar
    } = this.props;
    if (allScalesCriteria.length > 0) {
      var data = allScalesCriteria.map(value =>
        this.createData(value.name, value.description)
      );
      this.setState({ rows: data });
    }
  }
  componentWillReceiveProps(nextProps) {
    const {
      clear,
      allScales,
      allScalesCriteria,
      getAllScalesCriteria,
      enqueueSnackbar,
      closeSnackbar
    } = nextProps;
    this.setState({ allScalesCriteria: allScalesCriteria });
    if (allScalesCriteria.length > 0) {
      var data = allScalesCriteria.map(value =>
        this.createData(value.name, value.description)
      );
      this.setState({ rows: data });
    }
  }
  render() {
    const { classes } = this.props;
    const { rows } = this.state;
    const { rootPaper, table, tableCell, tableCellS, tableBtn, icon } = classes;
    // function
    // const rows = [
    //     createData('Collaboration', 'Works Effectively with indiviuals and teams'),
    //     createData('Leadership', 'Initiates actions, gives direction, infulence others'),
    //     createData('Sector Expertise', 'Knows what he/she has done in detail and are exxperts at that'),
    // ];
    return (
      <Paper className={rootPaper}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableCell className={tableCell}>Criteria</TableCell>
              <TableCell align="left" className={tableCell}>
                Description
              </TableCell>
              <TableCell align="left" className={tableCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="left" className={tableCell}>
                    {row.criteria}
                  </TableCell>
                  <TableCell align="left" className={tableCell}>
                    {row.description}
                  </TableCell>
                  <TableCell align="left" className={tableCell}>
                    <button className={tableBtn}>
                      <EditIcon className={icon} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

FeedbackTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    message: state.scaleRatingReducer.message,
    clear: state.scaleRatingReducer.isLoading,
    isLoading: state.scaleRatingReducer.isLoading,
    allScales: state.scaleRatingReducer.allScales,
    allScalesCriteria: state.scaleRatingReducer.allScalesCriteria
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllScalesCriteria: (enqueueSnackbar, closeSnackbar) =>
      dispatch(getAllScalesCriteria(enqueueSnackbar, closeSnackbar))
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(FeedbackTable))
);
