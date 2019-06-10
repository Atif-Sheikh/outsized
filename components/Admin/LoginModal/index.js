import * as React from "react";
import { connect } from "react-redux";
import Mitt from "mitt";
import { css } from "@emotion/core";

const emitter = new Mitt();
export function loginThroughModal() {
  emitter.emit("login");
  return new Promise((resolve, reject) => {
    emitter.on("loggedIn", err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
const modalClassName = css`
  maxWidth: "400px",
  background: "white",
  margin: "40px auto",
  padding: "40px"
`;

const headingStyle = css`
  marginbottom: "50px";
`;

class LoginModal extends React.PureComponent {
  state = {
    showModal: false
  };

  componentDidMount() {
    emitter.on("login", this.show);
  }

  componentWillUnmount() {
    emitter.off("login", this.show);
  }

  show = () => {
    this.setState({
      showModal: true
    });
  };

  onLogin = () => {
    this.setState({
      showModal: false
    });
    emitter.emit("loggedIn");
  };

  render() {
    // convert this div to modal
    return (
      <div visible={this.state.showModal} modalClassName={modalClassName}>
        <div className={headingStyle}>
          You&rsquo;ve been logged out due to inactivity.
        </div>
        Your Login Form comes here, only user name and password
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: (state.user && state.user.email) || undefined
  };
};

export default connect(mapStateToProps)(LoginModal);
