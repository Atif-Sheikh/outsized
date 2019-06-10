import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

import { styles } from "@styles/adminComponents/components/Header.styles";

class Header extends Component {
  render() {
    const { classes } = this.props;
    const {
      root,
      AppBars,
      menuButton,
      menuIcon,
      title,
      search,
      searchIcon,
      searchIconSign,
      inputTypeSearch,
      inputRoot,
      inputInput,
      grow,
      sectionMobile,
      sectionDesktop,
      profileName,
      profileIcon
    } = classes;
    return (
      <div className={root}>
        <AppBar position="static" className={AppBars}>
          <Toolbar>
            <IconButton
              className={menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon className={menuIcon} />
            </IconButton>
            <Typography className={title} variant="h6" color="inherit" noWrap>
              Outsized
            </Typography>
            <div className={search}>
              <div className={searchIcon}>
                <SearchIcon className={searchIconSign} />
              </div>
              <InputBase
                placeholder="Search"
                className={inputTypeSearch}
                classes={{
                  root: inputRoot,
                  input: inputInput
                }}
              />
            </div>
            <div className={grow} />
            <div className={sectionDesktop}>
              <Typography
                className={profileName}
                variant="h6"
                color="inherit"
                noWrap
              >
                Anannya
              </Typography>
              <AccountCircle className={profileIcon} />
            </div>
            <div className={sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
