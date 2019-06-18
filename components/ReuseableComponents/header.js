import React, { Component } from "react";
import { Typography, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "@styles/clientComponents/Header.styles.js";
import { withSnackbar } from "notistack";

class Header extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <div className={classes.leftArea}>
          <div className={classes.circle} />
          <Typography className={classes.title}>OUTSIZED</Typography>
        </div>
        <div className={classes.rightArea}>
          <Typography className={classes.userName}>Rohit Yadav</Typography>
          <Avatar
            title="Rohit Yadar"
            alt="Rohit Yadar"
            src="https://cdn3.iconfinder.com/data/icons/professions-1-4/132/32-512.png"
            className={classes.avatar}
          />
        </div>
      </div>
    );
  }
}

export default withSnackbar(withStyles(styles)(Header));
