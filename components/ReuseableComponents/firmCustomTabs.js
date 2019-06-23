import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "@styles/clientComponents/Tabs.styles.js";
import Link from "next/link";
import Router from "next/router";

class Tabs extends Component {
  pathChange = pathName => {
    Router.push(pathName);
  };
  render() {
    const { classes, selectedTab, setTab } = this.props;

    return (
      <div className={classes.tabsContainer}>
        <ul className={classes.navList}>
          <li
            onClick={() => {
              setTab(0);
              this.pathChange("/firm/basic-profile");
            }}
            className={
              selectedTab === 0 ? classes.listItemSelected : classes.listItems
            }
          >
            <Typography
              className={
                selectedTab === 0 ? classes.selectedTypo : classes.typos
              }
            >
              Basic
            </Typography>
          </li>
          <li
            onClick={() => {
              setTab(1);
              this.pathChange("/firm/professional-profile");
            }}
            className={
              selectedTab === 1 ? classes.listItemSelected : classes.listItems
            }
          >
            <Typography
              className={
                selectedTab === 1 ? classes.selectedTypo : classes.typos
              }
            >
              Professional Info
            </Typography>
          </li>
          <li
            onClick={() => {
              setTab(2);
              this.pathChange("/firm/portfolio");
            }}
            className={
              selectedTab === 2 ? classes.listItemSelected : classes.listItems
            }
          >
            <Typography
              className={
                selectedTab === 2 ? classes.selectedTypo : classes.typos
              }
            >
              Portfolio
            </Typography>
          </li>
          <li
            onClick={() => {
              setTab(3);
              this.pathChange("/firm/team");
            }}
            className={
              selectedTab === 3 ? classes.listItemSelected : classes.listItems
            }
          >
            <Typography
              className={
                selectedTab === 3 ? classes.selectedTypo : classes.typos
              }
            >
              Team
            </Typography>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Tabs);
