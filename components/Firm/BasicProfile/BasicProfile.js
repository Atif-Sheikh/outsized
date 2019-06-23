import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withSnackbar } from "notistack";
import { styles } from "@styles/firmComponents/BasicProfile.styles.js";
import CustomHeader from "@components/ReuseableComponents/header";
import CustomTabs from "@components/ReuseableComponents/firmCustomTabs";
import Experience from "@components/Client/Experience/Experience";
import BasicComponent from "@components/Firm/Basic/Basic.js";

class Home extends Component {
  state = {
    selectedTab: 0
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
            <BasicComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(withStyles(styles)(Home));
