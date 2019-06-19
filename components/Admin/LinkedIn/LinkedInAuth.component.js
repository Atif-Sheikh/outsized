import React, { Component } from "react";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Router from "next/router";
import { linkedInAuthAPI } from "@actions/admin/oauth.actions";

class LinkedInAuth extends Component {
  componentDidMount() {
    let state = localStorage.getItem("state");
    console.log(state, "state");
    const qs = Router.router.query;
    const code = qs.code;
    console.log(code, "=====================");
    console.log(state, "=====================");
    this.props.linkedInAuthAPI(
      code,
      state,
      this.props.enqueueSnackbar,
      this.props.closeSnackbar,
      Router
    );
  }

  render() {
    return <h1>Authenticating .. Please wait</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    linkedInAuthAPI: (code, state, enqueueSnackbar, closeSnackbar, Router) =>
      dispatch(
        linkedInAuthAPI(code, state, enqueueSnackbar, closeSnackbar, Router)
      )
  };
};
export default withSnackbar(
  connect(
    null,
    mapDispatchToProps
  )(LinkedInAuth)
);
