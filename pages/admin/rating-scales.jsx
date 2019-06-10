import React, { Component } from "react";

import RatingScalesComponent from "@components/Admin/RatingScales/RatingScales.component";
import Header from "@components/Admin/Header/Header.component";
import SideBar from "@components/Admin/SideBar/SideBar.component";

class RatingScales extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar activeSideBar="FeedbackForms" />
          <RatingScalesComponent />
        </div>
      </div>
    );
  }
}

export default RatingScales;
