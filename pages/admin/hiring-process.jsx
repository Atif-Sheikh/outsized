import React, { Component } from "react";

import HiringProcess from "@components/Admin/HiringProcess/HiringProcess.component";
import Header from "@components/Admin/Header/Header.component";
import SideBar from "@components/Admin/SideBar/SideBar.component";

class HiringProcessPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar activeSideBar="HiringProcess" />
          <HiringProcess />
        </div>
      </div>
    );
  }
}

export default HiringProcessPage;
