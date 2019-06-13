export const styles = theme => ({
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  header: {
    width: "100%",
    height: "70px",
    backgroundColor: "#e2e2e2",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flex: "1",
      minHeight: "40px",
      background: "#e2e2e2"
    }
  },
  temsConditions: {
    fontSize: "18px",
    fontWeight: "550",
    color: "#575553 !important"
  },
  restContainer: {
    display: "flex",
    flex: "14",
    flexDirection: "column",
    background: "white"
  },
  topSection: {
    display: "flex",
    width: "85%",
    flex: "0.8",
    margin: "0 auto",
    alignItems: "center"
  },
  termsConditions: {
    width: "177px",
    height: "24px",
    fontFamily: "Roboto Helvetica, Arial, sans-serif",
    fontSize: "20px",
    fontWeight: "600 !important",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#575553"
  },
  errorContainer: {
    height: "60px",
    opacity: 0.9,
    borderRadius: "5px",
    border: "solid 3px #e0383e",
    backgroundColor: "#e0383e",
    width: "85%",
    margin: "0 auto",
    textAlign: "center"
  },
  error: {
    width: "100%",
    height: "40px",
    opacity: 0.9,
    fontFamily: "Roboto Helvetica, Arial, sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.43,
    letterSpacing: "normal",
    textAlign: "center",
    color: "#ffffff"
  },
  midSection: {
    display: "flex",
    flex: "5",
    width: "85%",
    margin: "0 auto",
    overflow: "scroll",
    paddingTop: "10px"
  },
  midSecData: {
    width: "300px",
    fontFamily: "Roboto Helvetica, Arial, sans-serif",
    fontSize: "12px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.57,
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  lowerSection: {
    display: "flex",
    flex: "1",
    width: "85%",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center"
  },
  acceptBtn: {
    width: "100%",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    borderStyle: "solid",
    borderWidth: "1px",
    borderImageSource:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))",
    borderImageSlice: 1,
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
    textTransform: "capitalize",
    background: "#5e35b1"
  }
});
