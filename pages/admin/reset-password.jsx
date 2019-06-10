import ResetPasswordComponent from "@components/Admin/ResetPassword/ResetPassword.component";
import NavbarComponent from "@components/Admin/Navbar/Navbar.component";
import { styles } from "@styles/adminComponents/pages/register.styles";

function ResetPassword() {
  return (
    <div>
      <NavbarComponent />
      <div style={styles.mainWrapper}>
        <ResetPasswordComponent />
      </div>
    </div>
  );
}

export default ResetPassword;
