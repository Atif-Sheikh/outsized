import React, { Component } from "react";

import ApplicationForm from "@components/Admin/ApplicationForm/ApplicationForm.component";
import Header from "@components/Admin/Header/Header.component";
import SideBar from "@components/Admin/SideBar/SideBar.component";

class ApplicationFormPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar activeSideBar="ApplicationForms" />
          <ApplicationForm />
        </div>
      </div>
    );
  }
}

export default ApplicationFormPage;
