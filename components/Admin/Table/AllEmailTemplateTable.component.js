import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { styles } from "@styles/adminComponents/components/AllEmailTemplateTable.styles";
import Checkbox from "@material-ui/core/Checkbox";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import { getAllEmailTemplate } from "../../../actions/admin/allEmailsTemplate.action.js";
import Router from "next/router";
class AllEmailTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }
  componentDidMount() {
    this.props.getAllEmails();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ rows: nextProps.allEmails });
  }
  render() {
    const { classes } = this.props;
    const {
      rootPaper,
      table,
      tableCell,
      tableCellS,
      tableBtn,
      icon,
      tableCellSN,
      tableCellss,
      checkbox
    } = classes;
    const { rows } = this.state;
    // function createData(templateName, description) {
    //   return { templateName, description };
    // }

    // const rows = [
    //   createData("Sourching", "Welcome mailer for outreach"),
    //   createData("Rejection", "Not accepted for project"),
    //   createData("Followup", "Subsequent Followup"),
    //   createData("Offer freelancer", "On successfull offer in a project")
    // ];
    return (
      <Paper className={rootPaper}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableCell className={tableCellSN}>Template Name</TableCell>
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
                  <TableCell align="left" className={tableCellSN}>
                    {row.name}
                  </TableCell>
                  <TableCell align="left" className={tableCell}>
                    {row.description}
                  </TableCell>
                  <TableCell align="left" className={tableCellss}>
                    <button
                      onClick={() =>
                        Router.push(`/admin/email-template?email_id=${row.id}`)
                      }
                      className={tableBtn}
                    >
                      <EditIcon className={icon} />
                    </button>
                    <button className={tableBtn}>
                      <DeleteIcon className={icon} />
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

AllEmailTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.emailTemplateReducer.isLoading,
    allEmails: state.allEmailsTemplateReducer.allEmailsTemplate
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllEmails: () => dispatch(getAllEmailTemplate())
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(AllEmailTable))
);
// export default withStyles(styles)(AllEmailTable);
