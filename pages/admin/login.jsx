import LoginFormComponent from "@components/Admin/LoginForm/LoginForm.component";
import NavbarComponent from "@components/Admin/Navbar/Navbar.component";
import { styles } from "@styles/adminComponents/pages/login.styles";

function Login() {
  return (
    <div>
      <NavbarComponent />
      <div style={styles.mainWrapper}>
        <LoginFormComponent />
      </div>
    </div>
  );
}

export default Login;
