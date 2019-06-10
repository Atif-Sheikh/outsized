import { Component } from "react";

import RegisterFormComponent from "@components/Admin/RegisterForm/RegisterForm.component";
import NavbarComponent from "@components/Admin/Navbar/Navbar.component";
import { styles } from "@styles/adminComponents/pages/register.styles";

export default class Register extends Component {
 
  render() {
    return (
      <div>
        <NavbarComponent />
        <div style={styles.mainWrapper}>
            <RegisterFormComponent />
        </div>
      </div>
    );
  }
}
