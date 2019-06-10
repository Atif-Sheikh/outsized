export const styles = theme => ({
  rootPaper: {
    boxShadow: "none",
    width: "50%"
  },
  tableCell: {
    borderBottom: "2px solid #c5cfd8 !important",
    padding: "0px",
    fontWeight: "bold",
    color: "#5e6770",
    fontSize: "14px"
  },
  tableCellS: {
    borderBottom: "2px solid #c5cfd8 !important",
    padding: "0px 25px",
    fontWeight: "bold",
    color: "#5e6770",
    fontSize: "14px"
  },
  icon: {
    margin: "3px",
    fontSize: 25,
    color: "#54ada2"
  },
  tableBtn: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer"
  },
  button: {
    marginLeft: "20px"
  },
  submitDiv: {
    display: "flex",
    justifyContent: "flex-end"
  },
  buttonProgress: {
    color: "green",
    position: "absolute",
    top: "70%",
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
