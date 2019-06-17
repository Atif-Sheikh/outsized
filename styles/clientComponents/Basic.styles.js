export const styles = theme => ({
  avatar: {
    margin: 10,
    width: "60px",
    height: "60px"
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
    }
  },
  papers: {
    borderRadius: "0px",
    "&>div:nth-of-type(3)>div:nth-of-type(1)": {
      margin: 0,
      height: "70% !important",
      maxHeight: "70vh",
      width:"640px"
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "720px",
      height: "170px",
      borderRadius: "15px !important",
      display: "flex",
      margin: "60px auto",
      display: "flex",
      justifyContent: "center",
      padding: "5px 0 5px 0"
    }
  },
  wrapper: {
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  newHere: {
    color: "#2b35e0"
  },
  modalFooter: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  },
  containers: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 0
  },
  signupTypo: {
    cursor: "pointer",
    width: "20%",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "11px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 0.55,
    letterSpacing: "normal",
    color: "#212121",
    textAlign: "right"
  },
  loginBtnLinkedIn: {
    width: "184px",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#0077b5",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "10px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.5px",
    color: "#ffffff"
  },
  loginBtn: {
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
    [theme.breakpoints.up("sm")]: {
      width: "500px",
      margin:'30px auto',
      display:'block'
    },
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.5px",
    color: "#ffffff"
  },
  formContainer: {
    // marginTop:'0px'
  },
  FormContainers: {
    width: "85%",
    //   minHeight: "230px",S
    margin: "0 auto",
    paddingBottom: "35px"
  },
  textFieldPass: {
    width: "100%",
    marginTop: "10px !important",
    marginBottom: "0px !important"
  },

  textFieldPasss: {
    width: "100%",
    marginTop: "10px !important",
    marginBottom: "10px !important"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 10px 0px 20px"
  },headerText: {
    width: "592px",
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
});
