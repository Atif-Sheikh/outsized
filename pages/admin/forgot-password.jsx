import ForgotPasswordComponent from "@components/Admin/ForgotPassword/ForgotPassword.component";
import NavbarComponent from "@components/Admin/Navbar/Navbar.component";
import { styles } from "@styles/adminComponents/pages/forgotPassword.styles";

function ForgotPassword() {
  return (
    <div>
      <NavbarComponent isLogin={false} />
      <div style={styles.mainWrapper}>
        <ForgotPasswordComponent />
      </div>
    </div>
  );
}

export default ForgotPassword;
