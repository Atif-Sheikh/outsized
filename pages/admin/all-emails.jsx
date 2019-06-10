import React, { Component } from "react";

import AllEmail from "@components/Admin/AllEmail/AllEmail.component";
import Header from "@components/Admin/Header/Header.component";
import SideBar from "@components/Admin/SideBar/SideBar.component";

class AllEmailPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar activeSideBar="EmailTemplates" />
          <AllEmail />
        </div>
      </div>
    );
  }
}

export default AllEmailPage;
