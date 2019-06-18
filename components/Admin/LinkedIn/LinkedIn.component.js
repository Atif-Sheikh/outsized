import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      <Link href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81742vq7hot2j7&redirect_uri=http%3A%2F%2F13.232.136.59%3A3000%2Flinkedin-oauth&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social">
        <a>Login with LinkedIn</a>
      </Link>
    </Button>
  );
};
