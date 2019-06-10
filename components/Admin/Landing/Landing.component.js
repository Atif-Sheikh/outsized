import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

import { styles } from "@styles/adminComponents/components/Landing.styles";

export default class LandingComponent extends Component {
  render() {
    return (
      <div style={styles.mainWrapper}>
        {/* <Paper elevation={1} style={styles.introBox}>
                    
                </Paper> */}
        <Typography variant="h1" style={styles.greeting}>
          Welcome To Outsized
        </Typography>
      </div>
    );
  }
}
