export const styles = theme => ({
  mainContainer: {
    width: "100%",
    minWidth: "90vw",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      minWidth: "100%"
    }
  },
  title: {
    maxWidth: "350px",
    height: "20px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.11,
    letterSpacing: "normal",
    color: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:hover>:nth-child(1)": {
      visibility: "visible"
    }
  },
  modalContainer: {
    minwidth: "100%",
    position: "relative",
    zIndex: 333333423432432,
    // overflow:'hidden',
    [theme.breakpoints.up("sm")]: {
      minwidth: "1000px !important"
      // overflow:'hidden',
    }
  },
  iconBtnDiv: {
    width: "100%",
    height: "30px",
    display: "flex",
    marginBottom: "40px",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  iconContainer: {
    minWidth: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    visibility: "visible",
    [theme.breakpoints.up("sm")]: {
      visibility: "hidden"
    }
  },
  line: {
    width: "1px",
    height: "20px",
    border: "solid 1px #383838"
  },
  addIcon: {
    width: "20.5px",
    height: "20.5px",
    color: "#ffffff"
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
    backgroundColor: "#5e35b1"
  },
  housingcom: {
    minWidth: "107px",
    height: "30px",
    lineHeight: "30px",
    opacity: 0.8,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "normal",
    color: "#000000",
    marginTop: 5
  },
  timeDuration: {
    minWidth: "136px",
    height: "20px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#858583",
    marginTop: 5,
    display: "flex",
    alignItems: "center"
  },
  oval: {
    width: "4px",
    height: "4px",
    backgroundColor: "#858583",
    margin: "0 15px 0 15px"
  },
  place: {
    minWidth: "101px",
    height: "20px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#858583",
    marginTop: 5
  },
  dummyText: {
    maxWidth: "840px",
    minHeight: "80px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#3d3d3d",
    marginTop: "10px"
  },
  modalTitle: {
    position: "relative",
    margin: "0px !important",

    zIndex: 9999
  },
  content: {
    margin: "0px !important",
    width: "100%",
    height: "100vh",
    padding: "0px",
    overflow: "hidden !important",
    [theme.breakpoints.up("sm")]: {
      width: "75%"
    }
  },
  modal: {
    width: "100vw",
    maxHeight: "100vh",
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
      width: "800px",
      height: "auto",
      overflow: "hidden"
    }
  },
  saveBtn: {
    width: "66px",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#5e35b1",
    color: "#fff",
    textTransform: "capitalize"
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
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  icon: {
    width: "24px",
    height: "24px",
    color: "#000"
  },
  headerText: {
    width: "85%",
    margin: "auto",
    height: "28px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#575553"
  },
  back: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  FormContainer: {
    width: "85%",
    minHeight: "230px",
    margin: "0 auto",
    paddingBottom: "35px"
  },
  FormContainerDup: {
    width: "100%",
    // minHeight: "230px",
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
  textFieldPass: {
    width: "100%",
    marginTop: "30px"
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
  checkBoxContainer: {},
  roots: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "20%"
    // flexWrap: "wrap"
  },
  dropDownContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "24%",
    flex: 1,
    backgroundColor: "white"
  },
  working: {
    width: "195px",
    height: "19px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "white"
  },
  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  descr: {
    width: "81px",
    height: "24px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  typos: {
    width: "500px",
    height: "72px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  formControlText: {},
  formControlSelect: {
    width: "200px !importance"
  },
  smallIcon: {
    width: "17px",
    height: "17px",
    color: "#383838",
    cursor: "pointer"
  }
});
