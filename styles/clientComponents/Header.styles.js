export const styles = theme => ({
  header: {
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e2e2e2",
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      height: "50px"
    }
  },
  avatar: {
    margin: 10
  },
  circle: {
    borderRadius: "21px",
    width: "42px",
    height: "42px",
    border: "solid 1px #383838",
    backgroundColor: "#383838",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  leftArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "170px",
    paddingLeft: "20px"
  },
  title: {
    width: "84px",
    height: "20px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.11,
    letterSpacing: "normal",
    color: "#000000",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  rightArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "170px",
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  userName: {
    maxWidth: "120px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "20px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#000000"
  }
});
