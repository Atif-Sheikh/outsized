export const styles = theme => ({
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
  }
});
