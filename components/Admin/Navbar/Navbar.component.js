import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { styles } from "@styles/adminComponents/components/Navbar.styles";
import { connect } from "react-redux";

class NavbarComponent extends Component {
  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static" style={styles.NavBar}>
          <Toolbar>
            <Link href="/">
              <Typography variant="h6" color="inherit" style={styles.grow}>
                <a>Outsized</a>
              </Typography>
            </Link>
            <div color="inherit">
              {!this.props.token ? (
                <Fragment>
                  <Button color="inherit">
                    <Link href="/register">
                      <a
                        style={styles.links}
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontWeight: "bold"
                        }}
                      >
                        Register
                      </a>
                    </Link>
                  </Button>
                  <Button color="inherit">
                    <Link href="/login">
                      <a style={styles.links}>Login</a>
                    </Link>
                  </Button>
                </Fragment>
              ) : null}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.loginReducer.token
  };
};

export default connect(mapStateToProps)(NavbarComponent);
