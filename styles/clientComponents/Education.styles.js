export const styles = theme => ({
  mainContainer: {
    width: "100%",
    height: "100%",
    minWidth: "90vw",
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
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  closee: {
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
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#575553"
  },
  textModal: {
    maxHeight: "100%"
    // width:'500px !important'
  },
  modalContainer: {
    minwidth: "100%",
    margin: "0px !important",
    position: "relative",
    zIndex: 333333423432432,
    // overflow:'hidden',
    [theme.breakpoints.up("sm")]: {
      minwidth: "800px !important",
      maxHeight: "800px"
    }
  },
  modal: {
    width: "100vw",
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
  educationModalTitle: {
    position: "relative",
    margin: "0px !important",
    zIndex: 9999,
    height: "auto"
  },
  back: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  FormContainer: {
    width: "100%",
    minHeight: "230px",
    margin: "0 auto",
    paddingBottom: "5px"
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
    textTransform: "capitalize"
  },
  descr: {
    width: "81px",
    marginTop: 10,
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
  closeIcon: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      alignSelf: "flex-end"
    }
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
  icon: {
    width: "17px",
    height: "17px",
    color: "#383838",
    cursor: "pointer"
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
    marginBottom: 40,
    marginTop: "10px"
  },
  iconBtnDiv: {
    width: "100%",
    height: "30px",
    display: "flex",
    marginBottom: "40px",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});
