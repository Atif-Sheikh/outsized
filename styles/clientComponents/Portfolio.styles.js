export const styles = theme => ({
  mainContainer: {
    width: "100%",
    minWidth: "230px",
    // height: "100%",
    paddingTop: 20,
    [theme.breakpoints.down("sm")]: {
      masrginTop: 75
    }
  },
  paper: {
    minwidth: "100%",
    position: "relative",
    zIndex: 333333423432432,
    // overflow:'hidden',
    "&>div:nth-of-type(3)>div:nth-of-type(1)": {
      overflowY: "auto",
      width: "600px",
      height: "642px"
    },
    [theme.breakpoints.up("sm")]: {
      minwidth: "1000px !important"
      // overflow:'hidden',
    }
  },
  resumeSection: {},
  resume: {
    minWidth: "88px",
    height: "24px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1",
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  filePreview: {
    minWidth: "100%",
    height: "80px",
    backgroundColor: "#f1f1f7",
    margin: "10px 0 10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  FormContainer: {
    width: "85%",
    minHeight: "230px",
    margin: "0 auto",
    paddingBottom: "10px"
  },
  dropDownContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
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
  FormContainerDup: {
    width: "100%",
    // minHeight: "230px",
    margin: "0 auto",
    paddingBottom: "35px"
  },
  content: {
    margin: "0px !important",
    width: "100%",
    // height: "100vh",
    padding: "0px",
    overflow: "hidden !important",
    [theme.breakpoints.up("sm")]: {
      width: "95%"
    }
  },
  textFieldPass: {
    width: "80%",
    // marginTop: "5px",
    marginBottom: 0
  },
  casePreview: {
    minWidth: "100%",
    height: "80px",
    backgroundColor: "#fff",
    margin: "10px 0 10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  messagePreview: {
    minWidth: "100%",
    height: "140px",
    backgroundColor: "#fff",
    margin: "10px 0 10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  nameSection: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  caseLinkSection: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: " 500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal"
  },
  nameSectionUploaded: {
    flex: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  headerTitle: {
    paddingLeft: "50px !important",
    paddingTop: "0 !important"
  },
  iconSection: {
    flex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  iconCaseSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  icon: {
    width: "24px",
    height: "24px",
    color: "#000"
  },
  modalTitle: {
    position: "relative",
    margin: "0px !important",
    padding: "0 20px",
    zIndex: 9999
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
  iconAdd: {
    color: "#fff"
  },
  projctPreview: {
    minHeight: "500px"
  },
  uploadFiles: {
    minWidth: "117px",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#5e35b1",
    textTransform: "capitalize",
    color: "#fff"
  },
  AddFiles: {
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#5e35b1",
    textTransform: "capitalize",
    color: "#fff"
  },
  back: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  filePreviewUpload: {
    maxWidth: "90%",
    height: "60px",
    backgroundColor: "#f1f1f7",
    margin: "10px 0 10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto"
  },
  modal: {
    // width: "100vw",
    // maxHeight: "100vh",
    borderRadius: "5px",
    position: "relative",
    zIndex: 3333333099999999,
    position: "relative",
    padding: "0px 3px 0px 20px",
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
      //   width: '600px',
      // height: '642px',
      //   overflow: "hidden"
    }
  },
  uploadFileModal: {
    minWidth: "500px",
    height: "150px",
    borderRadius: "5px",
    backgroundColor: "#ffffff"
  },
  saveBeforeModal: {
    width: "450px",
    height: "80px",
    borderRadius: "5px",
    backgroundColor: "#ffffff"
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  uploadBtnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    minHeight: "80px"
  },
  notInterested: {
    minWidth: "128px",
    height: "19px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#5e35b1",
    textTransform: "capitalize",
    marginRight: 20
  },
  btnBg: {
    width: "158px",
    height: "36px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "capitalize",
    marginRight: 20,
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#5e35b1",
    color: "#fff"
  },
  flexContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  check: {
    fontSize: "25.4px",
    color: "#53e07b"
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
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "24%",
    flex: 1,
    backgroundColor: "white"
  },
  formControlText: {},
  formControlSelect: {
    width: "200px !importance"
  },
  roots: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "20%"
    // flexWrap: "wrap"
  },
  textField: {
    maxWidth: "90%",
    marginLeft: "30px"
  },
  saveBtn: {
    minWidth: "66px",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#5e35b1",
    color: "#fff",
    textTransform: "capitalize"
  },
  saveBefore: {
    minWidth: "222px",
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
  deleteModal: {
    width: "500px",
    height: "80px",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: "20%"
  },
  dialogTitle: {
    paddingTop: "0 !important"
  },
  deleteTitle: {
    minWidth: "355px",
    paddingLeft: 20,
    height: "28px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#575553"
  },
  deleteBtnsContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "55%"
  },
  yesOrNoBtn: {
    width: "80px",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#5e35b1",
    color: "#fff",
    textTransform: "capitalize"
  }
});
