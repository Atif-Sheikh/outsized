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
import { styles } from "@styles/adminComponents/components/ApplicationFormTemplateTable.styles";
import Checkbox from "@material-ui/core/Checkbox";

class ApplicationFormTable extends Component {
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
      checkbox
    } = classes;

    function createData(question, type) {
      return { question, type };
    }

    const rows = [
      createData("Full Name", "Short Answer"),
      createData("Email", "Short Answer"),
      createData("Phone Number", "Short Answer"),
      createData("Website", "Link"),
      createData("Resume", "Attachment"),
      createData("Cover Letter", "Long Answer"),
      createData("Will to relocate", "Yes/No")
    ];
    return (
      <Paper className={rootPaper}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableCell className={tableCellSN}>Question</TableCell>
              <TableCell align="left" className={tableCell}>
                Type
              </TableCell>
              <TableCell align="left" className={tableCell}>
                Required
              </TableCell>
              <TableCell align="left" className={tableCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="left" className={tableCellSN}>
                    {row.question}
                  </TableCell>
                  <TableCell align="left" className={tableCell}>
                    {row.type}
                  </TableCell>
                  <TableCell align="left" className={tableCellS}>
                    <Checkbox
                      checked={true}
                      className={checkbox}
                      // onChange={handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  </TableCell>
                  <TableCell align="left" className={tableCell}>
                    <button className={tableBtn}>
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

ApplicationFormTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ApplicationFormTable);
