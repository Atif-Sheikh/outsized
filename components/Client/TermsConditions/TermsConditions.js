import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { styles } from "@styles/clientComponents/TermsConditions.styles.js";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

class TermsConditions extends Component {
  state = {
    error: false
  };

  render() {
    const { classes } = this.props;
    const { error } = this.state;
    return (
      <Dialog className={classes.paper} onClose={() => {}} open={true}>
        <div className={classes.headerContainer}>
          <Typography className={classes.headerTextChild}>
            Terms &amp; Conditions
          </Typography>
        </div>
        {error && (
          <div className={classes.errorContainer}>
            <Typography className={classes.error}>
              Please accpet the the Terms &amp; Conditions to proceed.
            </Typography>
          </div>
        )}
        <div className={classes.FormContainer}>
          <form className={classes.container} noValidate autoComplete="off">
            <Typography className={classes.midSecData}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consectetur condimentum nunc, vel ultrices ante elementum in.
              Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod
              purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed
              tempus quam eget egestas pellentesque. Praesent vehicula varius
              lectus, vel maximus turpis rhoncus a. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam consectetur condimentum nunc, vel
              ultrices ante elementum in. Aliquam bibendum egestas nunc. Morbi a
              urna arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a
              interdum tortor. Sed tempus quam eget egestas pellentesque.
              Praesent vehicula varius lectus, vel maximus turpis rhoncus a.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consectetur condimentum nunc, vel ultrices ante elementum in.
              Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod
              purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed
              tempus quam eget egestas pellentesque. Praesent vehicula varius
              lectus, vel maximus turpis rhoncus a.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              consectetur condimentum nunc, vel ultrices ante elementum in.
              Aliquam bibendum egestas nunc. Morbi a urna arcu. Nunc euismod
              purus ut elit luctus aliquet. Maecenas a interdum tortor. Sed
              tempus quam eget Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam consectetur condimentum nunc, vel ultrices
              ante elementum in. Aliquam bibendum egestas nunc. Morbi a urna
              arcu. Nunc euismod purus ut elit luctus aliquet. Maecenas a
              interdum tortor. Sed tempus quam eget
            </Typography>
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.agreeBtn}
              >
                Accept and Continue
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TermsConditions);
