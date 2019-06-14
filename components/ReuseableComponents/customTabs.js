import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "@styles/clientComponents/Tabs.styles.js";

class Tabs extends Component {
    render() {
        const { classes, selectedTab, setTab } = this.props;

        return (
            <div className={classes.tabsContainer}>
                <ul className={classes.navList}>
                    <li onClick={() => setTab(0)} className={selectedTab === 0 ? classes.listItemSelected : classes.listItems}>
                        <Typography className={selectedTab === 0 ? classes.selectedTypo : classes.typos}>Basic</Typography>
                    </li>
                    <li onClick={() => setTab(1)} className={selectedTab === 1 ? classes.listItemSelected : classes.listItems}>
                        <Typography className={selectedTab === 1 ? classes.selectedTypo : classes.typos}>Professional Info</Typography>
                    </li>
                    <li onClick={() => setTab(2)} className={selectedTab === 2 ? classes.listItemSelected : classes.listItems}>
                        <Typography className={selectedTab === 2 ? classes.selectedTypo : classes.typos}>Portfolio</Typography>
                    </li>
                    <li onClick={() => setTab(3)} className={selectedTab === 3 ? classes.listItemSelected : classes.listItems}>
                        <Typography className={selectedTab === 3 ? classes.selectedTypo : classes.typos}>Experience</Typography>
                    </li>
                    <li onClick={() => setTab(4)} className={selectedTab === 4 ? classes.listItemSelected : classes.listItems}>
                        <Typography className={selectedTab === 4 ? classes.selectedTypo : classes.typos}>Education</Typography>
                    </li>
                </ul>
            </div>
        );
    };
};

export default (withStyles(styles)(Tabs));
