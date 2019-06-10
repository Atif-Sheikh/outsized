import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import HiringStagesCategoriesTable from "@components/Admin/Table/HiringStagesCategoriesTable.component";

import { styles } from "@styles/adminComponents/components/HiringStagesCategories.styles";

class HiringStagesCategories extends Component {
  render() {
    const { classes } = this.props;
    const {
      mainContainer,
    } = classes;
    return (
      <div className={mainContainer}>
          <HiringStagesCategoriesTable />
      </div>
    );
  }
}

HiringStagesCategories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HiringStagesCategories);
