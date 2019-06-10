export const styles = theme => ({
  mainContainer: {
    width: "80%",
    display: "flex",
    paddingTop: "32px",
    justifyContent: "center"
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
