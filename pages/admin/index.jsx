import React, { Component } from "react";

import NavbarComponent from "@components/Admin/Navbar/Navbar.component";
import LandingComponent from "@components/Admin/Landing/Landing.component";

import { Button } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <LandingComponent />
      </div>
    );
  }
}

export default Home;
