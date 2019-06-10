import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withSnackbar } from "notistack";

import { styles } from "@styles/adminComponents/components/HiringStagesTemplateTable.styles";
var trackingId;
class HiringStagesTemplateTable extends Component {
  state = {
    
  };
  componentWillReceiveProps(nextProps) {
    const categoriesObj = {};
    let categoriesArray = [];
    nextProps.stages.map(stage => {
      const category = stage.category.name;
      if (Object.keys(categoriesObj).includes(category)) {
        categoriesObj[category].push(stage);
      } else {
        categoriesObj[category] = [stage];
        categoriesArray = Object.entries(categoriesObj);
      }
    });
    this.setState({ newData: categoriesArray });
  }

  componentWillMount() {
    const categoriesObj = {};
    let categoriesArray = [];
    this.props.stages.map(stage => {
      const category = stage.category.name;
      if (Object.keys(categoriesObj).includes(category)) {
        categoriesObj[category].push(stage);
      } else {
        categoriesObj[category] = [stage];
        categoriesArray = Object.entries(categoriesObj);
      }
    });
    this.setState({ newData: categoriesArray });
  }
  dragStart(e) {}
  dragEnd(e) {
    var data = this.state.newData;
    var DraginObject = e.target.id.split("_");
    var DraginArrID = DraginObject[0];
    var DraginArrName = DraginObject[1];
    var DraginArrCatID = DraginObject[2];
    var DraginArrCatName = DraginObject[3];
    var replaceObject = trackingId.id.split("_");
    var replaceArrID = replaceObject[0];
    var replaceArrName = replaceObject[1];
    var replaceArrCatID = replaceObject[2];
    var replaceArrCatName = replaceObject[3];
    data[DraginArrID][1] = data[DraginArrID][1].filter(i => i);
    data[replaceArrID][1] = data[replaceArrID][1].filter(i => i);
    var findCurrent = data[DraginArrID][1].find(
      f => Number(f.id) == Number(DraginArrCatID)
    );
    var findReplace = data[replaceArrID][1].find(
      f => Number(f.id) == Number(replaceArrCatID)
    );
    var findCurrentIndex = data[DraginArrID][1].indexOf(findCurrent);
    var findReplaceIndex = data[replaceArrID][1].indexOf(findReplace);
    if (DraginArrID !== replaceArrID) {
      if (data[DraginArrID][1].length > 1) {
        findCurrent.category.name = findReplace.category.name;
        data[replaceArrID][1].push(findCurrent);
        delete data[DraginArrID][1][findCurrentIndex];
        this.setState({ newData: data });
      } else {
        const key = this.props.enqueueSnackbar("List can not be empty", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        });
        setTimeout(() => {
          this.props.closeSnackbar(key);
        }, 2000);
      }
    } else {
      data[DraginArrID][1][findCurrentIndex] = findReplace;
      data[replaceArrID][1][findReplaceIndex] = findCurrent;
      this.setState({ newData: data });
    }
    var reArange = []
    var sorted =data && data.map((arr)=>arr[1].map((arryObj)=>reArange.push(arryObj)))
    this.props.editStage(reArange)
  }
  dragOver(e) {
    if (e.target.id) {
      trackingId = e.target;
    }
  }
  render() {
    const { classes } = this.props;
    const {
      rootPaper,
      table,
      tableCellS,
      tableCellGreenLine,
      tableCellR,
      unfoldMore
    } = classes;
    return (
      <Paper className={rootPaper}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableCell className={tableCellS}>REPORTING CATEGORIES</TableCell>
              <TableCell className={tableCellGreenLine} />
              <TableCell align="left" className={tableCellR}>
                HIRING STAGES
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody onDragOver={this.dragOver.bind(this)}>
            {this.state.newData.map((row, ri) => (
              <TableRow key={ri}>
                <TableCell id={`${row[0]}`} align="left" className={tableCellS}>
                  {row[0]}
                </TableCell>
                <TableCell className={tableCellGreenLine} />
                {row[1].map((nestedRow, i) => {
                  return (
                    <TableCell
                      key={i}
                      id={`${ri}_${nestedRow.name}_${nestedRow.id}_${row[0]}`}
                      align="left"
                      draggable="true"
                      onDragEnd={this.dragEnd.bind(this)}
                      onDragStart={this.dragStart.bind(this)}
                      className={tableCellR}
                    >
                      <span>
                        <i className={unfoldMore}>unfold_more</i>{" "}
                        {nestedRow.name}
                      </span>
                      {/* <span>
                            <button className={tableBtn}>
                              <DeleteIcon className={icon} />
                            </button>
                            <button className={tableBtn}>
                              <EditIcon className={icon} />
                            </button>
                          </span> */}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

HiringStagesTemplateTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withSnackbar(withStyles(styles)(HiringStagesTemplateTable));
