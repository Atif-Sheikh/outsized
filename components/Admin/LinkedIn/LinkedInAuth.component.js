import React, { Component } from "react";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import Router from "next/router";
import { linkedInAuthAPI } from "@actions/admin/oauth.actions";

class LinkedInAuth extends Component {
  componentDidMount() {
    const qs = Router.router.query;
    const code = qs.code;
    const state = qs.state;
    console.log(code, "=====================");
    console.log(state, "=====================");
    this.props.linkedInAuthAPI(
      code,
      this.props.enqueueSnackbar,
      this.props.closeSnackbar
    );
  }

  render() {
    return <h1>Authenticating .. Please wait</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    linkedInAuthAPI: (code, enqueueSnackbar, closeSnackbar) =>
      dispatch(linkedInAuthAPI(code, enqueueSnackbar, closeSnackbar))
  };
};
export default withSnackbar(
  connect(
    null,
    mapDispatchToProps
  )(LinkedInAuth)
);
