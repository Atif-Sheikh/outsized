export const styles = theme => ({
  paper: {
    borderRadius: "0px",
    "&>div:nth-of-type(3)>div:nth-of-type(1)": {
      margin: 0,
      width: "100vw",
      height: "100% !important",
      maxHeight: "100vh"
    },
    [theme.breakpoints.up("sm")]: {
      height: "270px",
      borderRadius: "15px !important",
      backgroundColor: "#fff",
      display: "flex",
      margin: "60px auto",
      display: "flex",
      justifyContent: "center",
      padding: "5px 0 5px 0"
    }
  },
  Header: {
    width: "100%",
    height: 40,
    backgroundColor: " #e2e2e2",
    marginBottom: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  rectangle: {
    maxWidth: "620px",
    height: "712px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    display: "flex",
    margin: "-30px auto",
    display: "flex",
    justifyContent: "center",
    minHeight: "90vh",
    border: "none",
    padding: "5px 0 5px 0",
    "&>div:nth-of-type(1)": {
      backgroundColor: "#000000c7 !important"
    }
  },
  inner: {
    maxWidth: "620px",
    height: "712px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    display: "flex"
  },
  mainWrapper: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 10px 0px 20px"
  },
  headerText: {
    width: "292px",
    display: "flex",
    alignItems: "center",
    height: "28px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "20px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#575553"
  },
  headerTextChild: {
    display: "inline-block",
    marginLeft: "15px"
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
  AddEmailBtn: {
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
    marginTop: "30px",
    textTransform: "capitalize",

    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.5px",
    color: "#ffffff",
    marginLeft: "0px",
    [theme.breakpoints.up("sm")]: {
      width: "182px",
      marginLeft: " 120px"
    }
  },

  FormContainer: {
    width: "85%",
    //   minHeight: "230px",S
    margin: "0 auto",
    paddingBottom: "35px"
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
  containers: {
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
    marginTop: "30px",
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
    marginTop: "15px",
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
    width: "85%",
    height: "20px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    // textAlign:'center !important',
    fontSize: "16px",
    margin: "0px auto",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 0.25,
    letterSpacing: "normal",
    color: "#e0383e",
    paddingTop: "4px"
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
    position: "relative",
    display: "flex",
    justifyContent: "flex-end"
  },
  buttonSuccess: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "green"
    }
  }
});
