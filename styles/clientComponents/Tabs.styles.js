export const styles = theme => ({
  tabsContainer: {
    width: "20%",
    minWidth: "230px",
    height: "700px",
    [theme.breakpoints.down("md")]: {
      width: "15%",
      minWidth: "160px",
      height: "700px"
    },
    [theme.breakpoints.down("sm")]: {
      height: " 80px",
      position: "absolute",
      zIndex: 10,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      margin: "-25px"
    }
  },
  navList: {
    listStyle: "none",
    width: "100%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingTop: "12%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "40px"
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
      width: "null",
      flexDirection: "row",
      paddingTop: "null"
    }
  },
  listItems: {
    minWidth: "170px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      minWidth: "130px"
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto"
    }
  },
  listItemSelected: {
    minWidth: "170px",
    cursor: "pointer",
    borderBottom: "2px solid #5e35b1",
    [theme.breakpoints.down("md")]: {
      minWidth: "130px"
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto"
    }
    // boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.5)',
  },
  typos: {
    minWidth: "70px",
    height: "21px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#6a6a6a",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "auto",
      minWidth: "auto",
      height: "auto"
    }
  },
  selectedTypo: {
    minWidth: "70px",
    height: "24px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "20px",
    fontWeight: "bold !important",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      minWidth: "auto",
      height: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "auto",
      height: "auto"
    }
  }
});
