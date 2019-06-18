import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import { styles } from "@styles/clientComponents/BasicProfile.styles.js";
import CustomHeader from "@components/ReuseableComponents/header";
import CustomTabs from "@components/ReuseableComponents/customTabs";
import Experience from "@components/Client/Experience/Experience";
import ExperienceComponent from "@components/Client/ExperienceComp/ExperienceComp.js";

class Home extends Component {
  state = {
    selectedTab: 3
  };

  setTab = tabNo => {
    this.setState({ selectedTab: tabNo });
  };

  render() {
    const { classes } = this.props;
    const { selectedTab } = this.state;
    let comps = [null, null, null, <Experience />, null];

    return (
      <div className={classes.paper}>
        <CustomHeader />
        <div className={classes.midContainer}>
          <CustomTabs setTab={this.setTab} selectedTab={selectedTab} />
          <div className={classes.mainContainer}>
            <ExperienceComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(withStyles(styles)(Home));
