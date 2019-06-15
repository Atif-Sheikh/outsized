export const styles = theme => ({
  paper: {
    borderRadius: "10px",
    width: "100%",
    "&>div:nth-of-type(3)>div:nth-of-type(1)": {
      margin: 0,
      height: "100% !important",
      maxHeight: "80vh",
      borderRadius: "0px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "570px",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      borderRadius: "5px",
      backgroundColor: "#fff"
      // margin: "30px auto",
      // padding: "5px 0 5px 0"
    }
  },
  header: {
    width: "120vw",
    height: "50px",
    backgroundColor: "#e2e2e2",
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    }
  },
  backButton: {
    color: "#000000",
    fontSize: "25.3px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "33.3px"
    }
  },
  circleIcon: {
    fontSize: "25.3px",
    color: "#4caf50",
    [theme.breakpoints.up("sm")]: {
      fontSize: "33.3px"
    }
  },
  upperContainer: {
    width: "110%",
    margin: "30px auto 0px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "80%",
      margin: "0 auto"
    }
  },
  title: {
    width: "75%",
    // height: '36px',
    fontFamily: "Roboto Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    // lineHeight: '3.5',
    letterSpacing: "normal",
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      width: "734px",
      height: "36px",
      fontFamily: "Roboto Helvetica, Arial, sans-serif",
      fontSize: "24px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.5",
      letterSpacing: "normal",
      color: "#000000"
    }
  },
  midSecTypo: {
    width: "90%",
    margin: "auto",
    textAlign: "center",
    height: "76px",
    fontFamily: "Roboto Helvetica, Arial, sans-serif",
    fontSize: "19px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      width: "1150px",
      height: "36px",
      textAlign: "left",
      fontFamily: "Roboto Helvetica, Arial, sans-serif",
      fontSize: "20px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.5",
      letterSpacing: "normal",
      color: "#000000"
    }
  },
  lowerContainer: {
    display: "flex",
    width: "110%",
    margin: "40px auto 0px 20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "78%",
      margin: "40px auto"
    }
  },
  underlineTypo: {
    textDecoration: "underline"
  },
  continueProfile: {
    width: "132px",
    height: "20px",
    opacity: 0.5,
    fontFamily: "Roboto Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#383838"
  },
  didntReceive: {
    minWidth: "100vw",
    height: "60px",
    fontFamily: "Roboto Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      minWidth: "328px",
      height: "20px",
      fontFamily: "Roboto Helvetica, Arial, sans-serif",
      fontSize: "16px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: 1.25,
      letterSpacing: "normal",
      color: "#000000"
    }
  },
  textStyle: {
    fontWeight: "500",
    color: "#2b35e0"
  },
  lowerContainerTypo: {
    display: "flex",
    flexDirection: "column",
    width: "78%",
    margin: "0 auto",
    marginTop: "30px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "78%",
      margin: "0 auto",
      marginTop: "30px"
    }
  },
  anchorStyle: {
    textDecoration: "none",
    color: "blue"
  }
});
