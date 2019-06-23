import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import BubbleChart from "@material-ui/icons/BubbleChart";
import FloatBtn from "./FloatBtn";
import "../style/style.css";
// import { func } from 'prop-types';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
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

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newPage: number
  ) => void;
}

export default function SimpleTable() {
  const [anchorEl, setAnchorEl] = React.useState(0);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Menu
        className="menu"
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Remove</MenuItem>
      </Menu>

      <Paper className="table-maindiv" style={{ boxShadow: "none" }}>
        <div className="detail-div">
          <div>
            <h1>Member(s)</h1>
          </div>
          <div>
            <FloatBtn />
          </div>
        </div>
        <Table className="table">
          <TableHead className="tablehead" style={{}}>
            <TableRow
              className="headrow"
              style={{ backgroundColor: "#f1f2f6" }}
            >
              <TableCell className="tablecell">Name</TableCell>
              <TableCell className="tablecell">Work Email</TableCell>
              <TableCell className="tablecell">Phone Number</TableCell>
              <TableCell className="tablecell">Designation</TableCell>
              <TableCell className="tablecell">Status</TableCell>
              <TableCell className="tablecell">Action</TableCell>
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
    </div>
  );
}
