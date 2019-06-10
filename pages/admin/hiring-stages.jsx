import React, { Component } from "react";

import HiringStages from "@components/Admin/HiringStages/HiringStages.component";
import Header from "@components/Admin/Header/Header.component";
import SideBar from "@components/Admin/SideBar/SideBar.component";

class HiringStagesPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar activeSideBar="HiringStages" />
          <HiringStages />
        </div>
      </div>
    );
  }
}

export default HiringStagesPage;
