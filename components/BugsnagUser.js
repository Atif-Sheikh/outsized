import * as React from "react";
import { connect } from "react-redux";

var bugsnagClient;

class BugsnagUser extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (
      this.props.user &&
      (!prevProps.user || this.props.user.id !== prevProps.user.id)
    ) {
      this.setUser(this.props.user);
    }
  }

  componentDidMount() {
    this.setUser(this.props.user);
  }

  setUser(user) {
    if (user && typeof bugsnagClient !== "undefined") {
      bugsnagClient.user = user;
    }
  }

  render() {
    return false;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(BugsnagUser);
