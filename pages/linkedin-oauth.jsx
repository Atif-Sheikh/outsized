import LinkedInAuthComponent from "@components/Admin/LinkedIn/LinkedInAuth.component";
import { styles } from "@styles/adminComponents/pages/login.styles";
import queryString from "query-string";

class LinkedInAuth extends React.Component {
  static async getInitialProps({ req }) {
    const code = req.query.code;
    return { code };

    //     const url = decodeURIComponent(window.location.search);
    //     const qs = queryString.parse(url);
    //     const code = qs.code;
  }

  render() {
    const { code } = this.props;
    return (
      <div>
        <div style={styles.mainWrapper}>
          <LinkedInAuthComponent code={code} />
        </div>
      </div>
    );
  }
}

export default LinkedInAuth;
