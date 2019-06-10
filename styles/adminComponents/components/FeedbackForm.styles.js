export const styles = theme => ({
  mainContainer: {
    width: "80%",
    margin: "20px"
  },
  contentTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: "arial",
    paddingLeft: "30px"
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    height: theme.spacing.unit * 49,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 1,
    outline: "none"
  },
  button1: {
    margin: "0px 10px",
    border: "none",
    boxShadow: "none",
    fontWeight: "bold"
  },
  button2: {
    margin: "0px 10px",
    border: "none",
    boxShadow: "none",
    fontWeight: "bold"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px"
  },
  header: {
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "0px"
  },
  headers: {
    fontWeight: "bold",
    paddingTop: "0px",
    fontSize: "13px",
    marginTop: "20px"
  },
  borderContainer: {
    width: "100%",
    height: "100%",
    border: "1px solid gray",
    padding: "40px 20px"
  },
  container: {
    marginTop: "20px",
    borderBottom: "2px solid #bec7ce"
  },
  colorBox: {
    width: "120px",
    height: "75px",
    backgroundColor: "#dfe7ed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #788896"
  },
  mainBox: {
    margin: "0px 8px"
  },
  tableContainer: {
    padding: "10px 30px"
  },
  icons: {
    fontFamily: "Material Icons",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "36px",
    display: "inline-block",
    lineHeight: 1,
    textTransform: "none",
    letterSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "nowrap",
    direction: "ltr",
    color: "#788896"
  },
  contentTitleBox: {
    color: "#777677",
    fontSize: "12px",
    fontWeight: "bold",
    fontFamily: "arial",
    textAlign: "center"
  },
  contentTitleBoxes: {
    color: "#777677",
    fontSize: "22px",
    fontWeight: "bold",
    fontFamily: "arial",
    textAlign: "center"
  },

  textField: {
    display: "flex",
    flex: 6
  },

  boxes: {
    padding: "30px",
    display: "flex",
    justifyContent: "center"
  },
  editContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "20px"
  },
  icon: {
    color: "#1bae9f"
  }
});
