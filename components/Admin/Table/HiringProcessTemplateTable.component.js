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
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { styles } from "@styles/adminComponents/components/HiringProcessTemplateTable.styles";
import { getAllTemplate } from "../../../actions/admin/allTemplate.actions";
import Router from "next/router";

class HiringProcessTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.allTemplate.length > 0) {
      nextProps.allTemplate.map(data => this.createRow(data));
    }
  }

  createRow = data => {
    var hiringStages = " ";
    if (data.stages && data.stages.length > 0) {
      hiringStages = Object.values(data.stages)
        .map(stages => stages.name)
        .join(" > ");
    }
    this.state.row.push({
      id: data.id,
      processName: data.name,
      hiringStages,
      activeJobs: 0
    });
  };
  componentDidMount = () => {
    this.props.addAllTemplateApi(localStorage.token);
  };

  render() {
    const { classes } = this.props;
    const { row } = this.state;
    const { rootPaper, table, tableCell, tableCellS, tableBtn, icon } = classes;
    return (
      <Paper className={rootPaper}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableCell className={tableCell}>Process Name</TableCell>
              <TableCell align="left" className={tableCell}>
                Hiring Stages
              </TableCell>
              <TableCell align="left" className={tableCell}>
                Active Jobs
              </TableCell>
              <TableCell align="left" className={tableCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {row &&
              row.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="left" className={tableCell}>
                    {row.processName}
                  </TableCell>
                  <TableCell align="left" className={tableCell}>
                    {row.hiringStages}
                  </TableCell>
                  <TableCell align="left" className={tableCellS}>
                    {row.activeJobs}
                  </TableCell>
                  <TableCell align="left" className={tableCell}>
                    <button className={tableBtn}>
                      <EditIcon
                        onClick={() =>
                          Router.push(`/admin/hiring-stages?id=${row.id}`)
                        }
                        className={icon}
                      />
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

HiringProcessTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    allTemplate: state.allTemplateReducer.allTemplate
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addAllTemplateApi: token => dispatch(getAllTemplate(token))
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(HiringProcessTable))
);

// export default withStyles(styles)(HiringProcessTable);
