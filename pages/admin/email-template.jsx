import React, { Component } from "react";

import EmailTemplate from "@components/Admin/EmailTemplate/EmailTemplate.component";
import Header from "@components/Admin/Header/Header.component";
import SideBar from "@components/Admin/SideBar/SideBar.component";

class EmailTemplatePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar activeSideBar="EmailTemplates" />
          <EmailTemplate />
        </div>
      </div>
    );
  }
}

export default EmailTemplatePage;
