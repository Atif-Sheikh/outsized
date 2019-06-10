import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Router from "next/Router";

import { styles } from "@styles/adminComponents/components/SideBar.styles";

class SideBar extends Component {
  render() {
    const { classes } = this.props;
    const {
      mainContainer,
      sideBarIcon,
      profileIcon,
      sideBarMenu,
      title,
      buttonActive,
      button
    } = classes;
    return (
      <div className={mainContainer}>
        <div className={sideBarIcon}>
          <i className={profileIcon}>folder_open</i>
          <i className={profileIcon}>assignment</i>
          <i className={profileIcon}>calendar_today</i>
          <i className={profileIcon}>image_search</i>
          <i className={profileIcon}>email</i>
          <i className={profileIcon}>settings</i>
        </div>
        <div className={sideBarMenu}>
          <Typography className={title} variant="h6" color="inherit" noWrap>
            Process
          </Typography>

          {this.props.activeSideBar === "HiringProcess" ? (
            <Button
              variant="contained"
              onClick={() => Router.push("/admin/hiring-process")}
              className={
                this.props.activeSideBar === "HiringProcess"
                  ? buttonActive
                  : button
              }
            >
              Hiring Process
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => Router.push("/admin/hiring-stages")}
              className={
                this.props.activeSideBar === "HiringStages"
                  ? buttonActive
                  : button
              }
            >
              Hiring Stages
            </Button>
          )}
          <Button
            variant="contained"
            onClick={() => Router.push("/admin/hiring-process")}
            className={
              this.props.activeSideBar === "RejectionReason"
                ? buttonActive
                : button
            }
          >
            Rejection Reasons
          </Button>
          <Button
            variant="contained"
            onClick={() => Router.push("/admin/feedback-form")}
            className={
              this.props.activeSideBar === "FeedbackForms"
                ? buttonActive
                : button
            }
          >
            Feedback Forms
          </Button>
          <Button
            variant="contained"
            onClick={() => Router.push("/admin/all-emails")}
            className={
              this.props.activeSideBar === "EmailTemplates"
                ? buttonActive
                : button
            }
          >
            Email Templates
          </Button>
          <Button
            variant="contained"
            onClick={() => Router.push("/admin/application-form")}
            className={
              this.props.activeSideBar === "ApplicationForms"
                ? buttonActive
                : button
            }
          >
            Application Forms
          </Button>
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
