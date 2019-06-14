export const styles = theme => ({
  tabsContainer: {
    width: "20%",
    minWidth: "230px",
    height: "700px"
  },
  navList: {
    listStyle: "none",
    width: "100%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingTop: "12%"
  },
  listItems: {
    minWidth: "170px",
    cursor: "pointer"
  },
  listItemSelected: {
    minWidth: "170px",
    cursor: "pointer",
    borderBottom: "2px solid #5e35b1"
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
    color: "#6a6a6a"
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
    color: "#000000"
  }
});
