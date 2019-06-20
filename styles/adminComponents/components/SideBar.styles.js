export const styles = theme => ({
  mainContainer: {
    width: "20%",
    display: "flex",
    height: "600px"
    // [theme.breakpoints.up("sm")]: {
    //   width: "80%"
    // }
  },
  sideBarIcon: {
    width: "30%",
    borderRight: "2px solid #c5cfd8",
    paddingTop: "30px"
  },
  sideBarMenu: {
    width: "70%",
    borderRight: "2px solid #c5cfd8",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  profileIcon: {
    color: "#7b8895",
    fontSize: "40px",
    width: "100%",
    margin: "23px 0px",
    fontFamily: "Material Icons",
    fontWeight: "normal",
    fontStyle: "normal",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#7b8895",
    paddingRight: "20px",
    paddingTop: "40px",
    fontSize: "17px",
    width: "122px",
    fontWeight: "bold",
    fontFamily: "arial",
    marginBottom: "15px"
  },
  buttonActive: {
    width: "142px",
    height: "34px",
    borderRadius: "5px",
    marginTop: "2px",
    marginBottom: "2px",
    boxShadow: "none",
    color: "#716eed",
    border: "2px solid #c5cfd8",
    backgroundColor: "white",
    padding: "0px",
    fontWeight: "bold",
    fontSize: "11px",
    fontFamily: "arial"
  },
  button: {
    width: "142px",
    height: "34px",
    marginTop: "2px",
    marginBottom: "2px",
    borderRadius: "5px",
    boxShadow: "none",
    color: "#8f9aa5",
    backgroundColor: "white",
    padding: "0px",
    fontWeight: "bold",
    fontSize: "11px",
    fontFamily: "arial"
  }
});
