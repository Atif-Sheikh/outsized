export const styles = theme => ({
  mainContainer: {
    width: "80%"
  },
  componentContent: {
    padding: "0px 32px 0px 32px"
  },
  contentTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: "arial"
  },
  templateDiv: {
    display: "flex",
    // justifyContent:'center',
    alignItems: "center"
  },
  submitButton: {
    // marginLeft:'20px',
    width: "100%",
    height: "40px"
  },
  templateContainer: {
    display: "flex",
    // alignItems: "center",
    verticalAlign: "middle"
  },
  templateSubmitButton: {
    marginLeft: "20px",
    width: "180px",
    height: "43px",
    position: "relative",
    top: 10
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 5,
    outline: "none"
  },
  textFields: {
    width: "49%",
    marginLeft: "20px"
  },
  formControl: {
    margin: "20px 0px",
    minWidth: "49%"
  },
  inputLabel: {
    height: "49px",
    width: "100%",
    transform: "translate(14px, 16px) scale(1)",
    background: "transparent !important"
  },
  selectLabel: {
    backgroundColor: "#f7f9fa !important",
    height: "49px",
    width: "100%",
    minWidth: "90px",
    background: "transparent !important"
  },
  headerTitle: {
    padding: "40px 0px 20px 0px",
    fontWeight: "bold",
    fontSize: "17px",
    fontFamily: "arial"
  },
  textField: {
    width: "180px"
  },
  dense: {
    height: "30px !important",
    fontSize: 10
  },
  resize: {
    fontSize: 14,
    // height:'13px',
    transform: " translate(10px, 0px) scale(1)"
  },
  ComponentHeader: {
    paddingBottom: "25px",
    borderBottom: "2px solid #c5cfd8"
  },
  addStagesContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 0px"
  },
  addStagesTypography: {
    display: "flex",
    flexDirection: "column",
    flex: 3
  },
  AddStagesTitleHeader: {
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: "arial"
  },
  AddStagesTitleParagraph: {
    fontSize: "15px",
    fontFamily: "arial",
    color: "#7b8895"
  },
  addStagesButton: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    display: "flex",
    flex: 1
  },
  button: {
    background: "none",
    border: "none !important",
    outline: "none",
    boxShadow: "none",
    fontSize: "13px",
    fontWeight: "bold",
    fontFamily: "arial"
  },
  addIcon: {
    fontFamily: "Material Icons",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "17px" /* Preferred icon size */,
    display: "inline-block",
    lineHeight: 1,
    marginRight: "10px",
    borderRadius: "50%",
    background: "#666f77",
    padding: "1px",
    color: "white",
    textTransform: "none",
    letterSpacing: "norma",
    wordWrap: "normal",
    whiteSpace: "nowrap",
    direction: "ltr"
  },
  buttonProgress: {
    color: "green",
    position: "absolute",
    top: "40%",
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
