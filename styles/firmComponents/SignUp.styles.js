export const styles = theme => ({
  paper: {
    borderRadius: "10px",
    "&>div:nth-of-type(3)>div:nth-of-type(1)": {
      margin: 0,
      height: "100% !important",
      maxHeight: "100vh",
      overflow: "auto",
      borderRadius: "0px"
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "620px",
      height: "98vh !important",
      // maxHeight: '98vh',
      borderRadius: "10px !important",
      backgroundColor: "#fff",
      display: "flex",
      margin: "10px auto",
      display: "flex",
      justifyContent: "center",
      minHeight: "90vh",
      border: "none",
      padding: "5px 0 5px 0",
      "&>div:nth-of-type(1)": {
        backgroundColor: "#000000c7 !important"
      }
    }
  },
  mainWrapper: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  headerText: {
    [theme.breakpoints.up("sm")]: {
      width: "85%",
      margin: "auto",
      height: "12px",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontSize: "24px",
      fontWeight: "550",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#575553"
    },
    marginTop: 25,
    width: "100%",
    height: "28px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.7",
    letterSpacing: "normal",
    color: "#575553",
    display: "flex",
    marginLeft: "12px",
    flexDirection: "row"
  },
  back: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  forgotTypo: {
    width: "130px",
    height: "20px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#2b35e0"
  },
  signupTypo: {
    cursor: "pointer",
    width: "100%",
    height: "20px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#2b35e0",
    textAlign: "center"
  },
  formWrapper: {
    textAlign: "center",
    marginBottom: "5px",
    width: "80%"
  },
  newHere: {
    color: "#000"
  },

  emailField: {
    width: "inherit",
    marginBottom: "15px"
  },
  fpLink: {
    margin: "10px"
  },
  SignUpContainer: {
    width: "80%",
    minHeight: "530px",
    margin: "auto",
    boxShadow: "none"
  },
  FormContainerDup: {
    width: "100%",
    // minHeight: "230px",
    margin: "0 auto",
    paddingBottom: "27px"
  },
  SignUpBtn: {
    width: "85vw",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundColor: "#5e35b1",
    borderImageSource:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))",
    borderImageSlice: 1,
    backgroundImage:
      "#5e35b1, linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))",
    marginTop: "20px",
    textTransform: "capitalize",
    [theme.breakpoints.up("sm")]: {
      width: "300px"
    },
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.5px",
    color: "#ffffff"
  },
  SignUpBtnLinkedIn: {
    width: "85vw",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundColor: "#0077b5",
    borderImageSource:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))",
    borderImageSlice: 1,
    backgroundImage:
      "#5e35b1, linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))",
    marginTop: "14px",
    textTransform: "capitalize",
    [theme.breakpoints.up("sm")]: {
      width: "300px"
    },
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.5px",
    color: "#ffffff"
  },
  FormContainer: {
    width: "85%",
    minHeight: "230px",
    margin: "0 auto",
    paddingBottom: "35px"
  },
  Header: {
    width: "100%",
    height: 40,
    backgroundColor: " #e2e2e2",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  closeIcon: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
      width: "50px",
      alignSelf: "flex-end"
    }
  },
  icon: {
    width: "24px",
    height: "24px",
    color: "#000"
  },
  grow: {
    fontWeight: "bold",
    fontSize: "35px",
    width: "50%",
    textAlign: "center",
    margin: "auto",
    padding: "20px",
    color: "#6161ffed"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 0
  },
  orOperator: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000000"
  },
  divider: {
    width: "90%",
    alignItems: "center",
    marginTop: "14px",
    display: "flex",
    justifyContent: "space-between"
  },
  dividerLine: {
    width: "40%",
    background: "#4c4444",
    height: "1.1px"
  },
  margin: {
    backgroundColor: "#6161ffed",
    marginTop: "20px",
    fontSize: "11px",
    fontFamily: "arial",
    fontWeight: "bold",
    padding: "11px 35px"
  },
  modalFooter: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px"
  },
  footerTypo: {
    maxWidth: "300px"
  },
  textField: {
    width: "100%"
  },
  textFieldPass: {
    width: "100%",
    marginTop: "10px !important",
    marginBottom: 0
  },
  links: {
    textDecoration: "none",
    color: "#6161ffed",
    fontWeight: "bold",
    fontSize: "12px",
    paddingTop: "10px",
    fontFamilt: "arial"
  },
  suggestionLink: {
    "&:active": {
      backgroundColor: "white"
    },
    "&:hover": {
      backgroundColor: "white"
    }
  },
  errorText: {
    width: "95%",
    height: "auto",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textAlign: "center !important",
    fontSize: "14px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    // lineHeight: 0.25,
    letterSpacing: "normal",
    color: "#e0383e",
    paddingTop: "14px",
    margin: "0px auto -30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
      width: "85%",
      height: "60px",
      paddingTop: "20px",
      margin: "0px auto -30px",
      textAlign: "left !important"
    }
  },
  successText: {
    color: "green",
    fontSize: "14px",
    paddingLeft: "9px",
    height: "10px",
    width: "100%"
  },
  buttonProgress: {
    color: "green",
    position: "absolute",
    top: "70%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  wrapper: {
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "green"
    }
  }
});
