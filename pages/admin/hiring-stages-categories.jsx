import React, { Component } from "react";

import HiringStagesCategories from "@components/Admin/HiringStagesCategories/HiringStagesCategories.component";
import Header from "@components/Admin/Header/Header.component";
import SideBar from "@components/Admin/SideBar/SideBar.component";

class HiringProcessPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar />
          <HiringStagesCategories />
        </div>
      </div>
    );
  }
}

export default HiringProcessPage;
