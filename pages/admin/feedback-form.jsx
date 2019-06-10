import React, { Component } from "react";

import FeedbackForm from "@components/Admin/FeedbackForm/FeedbackForm.component";
import Header from "@components/Admin/Header/Header.component";
import SideBar from "@components/Admin/SideBar/SideBar.component";

class FeedbackFormPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar activeSideBar="FeedbackForms" />
          <FeedbackForm />
        </div>
      </div>
    );
  }
}

export default FeedbackFormPage;
