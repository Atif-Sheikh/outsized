export const styles = theme => ({
  avatar: {
    margin: 10,
    width: "60px",
    height: "60px"
  },
  plusIconContainer: {
    width: "50px",
    height: "50px",
    boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12)",
    borderStyle: "solid",
    borderWidth: "0.5px",
    borderImageSource:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06) 20%, rgba(255, 255, 255, 0))",
    borderImageSlice: "1",
    marginRight: "10px",
    marginTop: "10px",
    backgroundColor: "#5e35b1"
  },
  modalContainer: {
    minwidth: "100%",
    maxHeight: "100%",
    margin: "0px !important",
    position: "relative",
    zIndex: 333333423432432,
    borderRadius: "10px",
    "&>div:nth-of-type(3)>div:nth-of-type(1)": {
      height: "570px",
      display: "flex",
      borderCadius: "10px",
      justifyContent: "center",
      backgroundColor: "#fff",
      overflow: "hidden"
    },
    // overflow:'hidden',
    [theme.breakpoints.down("sm")]: {
      "&>div:nth-of-type(3)>div:nth-of-type(1)": {
        height: "100%",
        borderRadius: "0px",
        minWidth: "100%",
        minHeight: "660px",
        top: "35px"
      }
    }
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "400px",
    backgroundColor: "white"
  },
  formControlText: {},
  formControlSelect: {
    width: "200px !importance",
    position: "relative",
    zIndex: 999
  },
  addIcon: {
    width: "20.5px",
    height: "20.5px",
    color: "#ffffff"
  },
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
      // height: "570px",
      display: "flex",
      flex: 1,
      paddingBottom: "50px",
      flexDirection: "column",
      borderRadius: "5px",
      backgroundColor: "#fff"
      // margin: "30px auto",
      // padding: "5px 0 5px 0"
    }
  },
  midContainer: {
    width: "100%",
    height: "100%",
    display: "flex"
  },
  mainContainer: {
    width: "100%",
    margin: "30px 200px 0px 50px"
  },
  Mainc: {
    width: "100%"
  },
  menu: {
    marginTop: "40px !important"
  },
  tableMaindiv: {
    width: "100%",
    overflowX: "auto"
  },
  detailDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "30px"
  },
  table: {
    minWidth: "650px",
    backgroundColor: "white"
  },
  tablehead: {
    backgroundColor: "white",
    borderBottom: "3px solid #a189d1"
  },
  headrow: {
    fontSize: "14px !important"
  },
  tablecell: {
    fontSize: "14px !important",
    backgroundColor: "white"
  },
  divider: {
    display: "flex",
    justifyContent: "space-between"
  },
  spaner: {
    width: "45%"
  },
  closeIcon: {
    left: "84%",
    width: "10%",
    top: "14%",
    zIndex: "10000",
    marginTop: "-55px",
    [theme.breakpoints.up("sm")]: {
      left: "0",
      marginTop: "0",
      display: "flex",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      alignSelf: "flex-end"
    }
  },
  back: {
    display: "none"
  },
  icon: {
    width: "17px",
    height: "17px",
    color: "#383838",
    cursor: "pointer"
  },
  educationModalTitle: {
    top: "10%",
    position: "relative",
    margin: "0px !important",
    zIndex: 9999,
    height: "auto"
  },
  headerText: {
    width: "85%",
    margin: "auto",
    height: "28px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#575553"
  },
  closee: {
    width: "24px",
    height: "24px",
    color: "#000"
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
    justifyContent: "space-between"
  },
  signupTypo: {
    cursor: "pointer",
    width: "100%",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "12px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
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
  formContainer: {
    // marginTop:'0px'
  },
  textFieldPass: {
    width: "100%",
    marginTop: "10px !important",
    marginBottom: "0px !important"
  },

  textFieldPasss: {
    width: "100%",
    marginTop: "0px !important",
    marginBottom: "10px !important"
  },
  roots: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "400px",
    backgroundColor: "white"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "white"
  },
  formControlText: {},
  formControlSelect: {
    width: "200px !importance",
    position: "relative",
    zIndex: 999
  },
  typo: {
    width: "174px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    marginTop: "30px",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  checkContainer: {
    display: "flex",
    flex: 1,
    margin: "10px 0px",
    [theme.breakpoints.up("sm")]: {
      margin: "0px"
    }
  },
  contractContaienr: {
    width: "100%",
    borderBottom: "solid 1px rgba(0, 0, 0, 0.22);",
    padding: "10px 0px 10px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center"
    }
  },
  checkBoxContainer: {},
  typeContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  salaryContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // paddingBottom: "10px",
    justifyContent: "flex-start",
    padding: "0px 40px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0px"
    }
  },
  timeText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold"
  },
  descriptionText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "13px",
    color: "rgba(0, 0, 0, 1)"
  },
  ExpectedText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold",
    display: "flex",
    flex: 1,
    paddingBottom: "10px",
    textAlign: "right !important",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "0px"
    }
  },
  paymentContent: {
    display: "flex",
    flex: 0.5,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  ratesText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "13px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold",
    display: "flex",
    width: "95px"
    // borderBottom: "solid 2px rgba(0, 0, 0, 0.32);"
  },
  ratesTextd: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "13px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold",
    display: "flex",
    width: "95px"
    // borderBottom: "solid 2px rgba(0, 0, 0, 0.32);"
  },
  ratesTexts: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "13px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold",
    display: "flex",
    width: "95px"
    // borderBottom: "solid 2px rgba(0, 0, 0, 0.32);"
  },
  chipText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 1)",
    opacity: 0.7
  },
  chipMain: {
    marginTop: "20px"
  },
  chipsBox: {
    width: "100%"
  },
  chip: {
    fontSize: "11px",
    fontWeight: "bold",
    margin: "3px 5px",
    fontSize: "0.78em",
    height: "25px"
  },
  textFieldPass: {
    width: "100%",
    marginTop: "-1px",
    marginBottom: 0
  },
  saveBtn: {
    minWidth: "50px",
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
      marginLeft: " 320px"
    }
  },
  typosContainer: {
    padding: "20px 0 5px 0"
  },
  lastTypos: {
    minWidth: "50%",
    // height: '24px',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  lowerTypos: {
    minHeight: "72px",
    paddingTop: "15px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  textField: {
    width: "180px"
  },
  dense: {
    height: "30px !important",
    fontSize: 10
  },
  modal: {
    width: "100vw",
    maxWidth: "70vw",
    minHeight: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    borderRadius: "5px",
    position: "relative",
    zIndex: 3333333099999999,
    position: "relative",
    margin: "0px !important",
    "&>div:nth-of-type(3)>div:nth-of-type(1)": {
      margin: 0,
      borderRadius: "0px",
      width: "100vw",
      // minHeight: "573px",
      borderRadius: "5px",
      backgroundColor: "#ffffff"
    },
    [theme.breakpoints.up("sm")]: {
      width: "600px",
      height: "1000px",
      overflow: "hidden",
      maxHeight: "1000px"
    }
  },
  textModal: {
    maxHeight: "100%"
    // width:'500px !important'
  },
  FormContainer: {
    width: "100%",
    margin: "0 0 30px 0",
    padding: "0 30px",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 15px"
    }
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  saveBtn: {
    width: "66px",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#5e35b1",
    color: "#fff",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 10px"
    }
  }
});
