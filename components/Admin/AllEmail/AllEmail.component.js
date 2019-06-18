import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "@styles/adminComponents/components/AllEmail.styles";
import Table from "../Table/AllEmailTemplateTable.component";
import ComponentHeader from "@components/Admin/ComponentHeader/ComponentHeader.component";
import Router from "next/router";

class AllEmail extends Component {
  render() {
    const { classes } = this.props;
    const { mainContainer } = classes;
    return (
      <div className={mainContainer}>
        <ComponentHeader
          headerText="Email Template"
          text="Add Template"
          marginLeft={true}
          addButton={false}
          addButtonFeedback={true}
          emailTemplate={true}
          redirectFunction={() => {
            Router.push("/admin/email-template");
          }}
          bottomColor={false}
        />
        <Table />
      </div>
    );
  }
}

AllEmail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllEmail);
