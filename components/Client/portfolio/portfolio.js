import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import { styles } from "@styles/clientComponents/BasicProfile.styles.js";
import CustomHeader from "@components/ReuseableComponents/header";
import CustomTabs from "@components/ReuseableComponents/customTabs";
import Experience from "@components/Client/Experience/Experience";
import PortfolioComp from "@components/Client/PortfolioComp/PortfolioComp.js";
import CaseLinks from "../PortfolioComp/CaseStudiesLink";
import ProjectDetails from "../PortfolioComp/ProjectDetails";
class Home extends Component {
  state = {
    selectedTab: 2
  };

  setTab = tabNo => {
    this.setState({ selectedTab: tabNo });
  };

  render() {
    const { classes } = this.props;
    const { selectedTab } = this.state;

    return (
      <div className={classes.paper}>
        <CustomHeader />
        <div className={classes.midContainer}>
          <CustomTabs setTab={this.setTab} selectedTab={selectedTab} />
          <div className={classes.mainContainer}>
            <PortfolioComp />
            <CaseLinks />
            <ProjectDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(withStyles(styles)(Home));
