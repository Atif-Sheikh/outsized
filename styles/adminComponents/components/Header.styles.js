export const styles = theme => ({
  root: {
    width: "100%",
    padding: "0px",
    margin: "0px"
  },
  AppBars: {
    backgroundColor: "white !important",
    boxShadow: "none",
    borderBottom: "2px solid #c5cfd8"
  },
  grow: {
    flexGrow: 1
  },
  profileIcon: {
    color: "#7b8895",
    fontSize: "35px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuIcon: {
    color: "#717c88 !important",
    fontSize: "35px"
  },
  title: {
    display: "none",
    color: "#7b8895",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    paddingRight: "20px",
    fontSize: "17px",
    fontWeight: "bold",
    fontFamily: "arial"
  },
  profileName: {
    display: "none",
    color: "#7b8895",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    paddingRight: "20px",
    fontSize: "17px",
    fontWeight: "bold",
    fontFamily: "arial",
    display: "flex !important",
    alignItems: "center !important"
  },
  searchIconSign: {
    color: "#7b8895"
  },
  inputTypeSearch: {
    minWidth: "100% !important",
    width: "500px !important"
  },
  search: {
    position: "relative",
    border: "2px solid #c5cfd8",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    color: "#7b8895",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: "47px !important",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 6,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});
