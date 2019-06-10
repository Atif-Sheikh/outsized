export const styles = theme => ({
  componentHeader: {
    width: "100%",
    height: "57px",
    borderBottom: "2px solid #c5cfd8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 5,
    outline: "none"
  },
  textField: {
    width: "49%"
  },
  templateDiv: {
    display: "flex",
    // justifyContent:'center',
    alignItems: "center"
  },

  addStagesButton: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    display: "flex",
    flex: 1
  },
  button1: {
    background: "none",
    border: "none !important",
    outline: "none",
    boxShadow: "none",
    fontSize: "13px",
    fontWeight: "bold",
    fontFamily: "arial"
  },
  addIcon1: {
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
  submitButton: {
    marginLeft: "20px",
    width: "49%",
    height: "45px"
  },
  contentTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: "arial"
  },
  title: {
    color: "#7b8895",
    paddingRight: "20px",
    fontSize: "17px",
    fontWeight: "bold",
    fontFamily: "arial",
    marginLeft: "32px"
  },
  button: {
    width: "142px",
    height: "34px",
    borderRadius: "81px",
    marginRight: "32px",
    boxShadow: "none",
    border: "2px solid #615eec",
    backgroundColor: "#c6c4f6",
    padding: "0px",
    fontWeight: "bold",
    fontSize: "12px"
  },
  addIcon: {
    fontFamily: "Material Icons",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "20px",
    display: "inline-block",
    marginRight: "10px",
    lineHeight: 1,
    textTransform: "none",
    letterSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "nowrap",
    direction: "ltr"
  }
});
