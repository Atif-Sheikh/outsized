export const styles = theme => ({
  avatar: {
    margin: 10,
    width: "60px",
    height: "60px"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  newHere: {
    color: "#2b35e0"
  },
  modalFooter: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  signupTypo: {
    cursor: "pointer",
    width: "100%",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "12px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.25,
    letterSpacing: "normal",
    color: "#212121",
    textAlign: "right"
  },
  loginBtnLinkedIn: {
    width: "184px",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    backgroundColor: "#0077b5",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "10px",
    fontWeight: "550",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.5px",
    color: "#ffffff"
  },
  formContainer: {
    // marginTop:'0px'
  },
  textFieldPass: {
    width: "100%",
    marginTop: "10px !important",
    marginBottom: "0px !important"
  },

  textFieldPasss: {
    width: "100%",
    marginTop: "0px !important",
    marginBottom: "10px !important"
  },
  roots: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "400px",
    backgroundColor: "white"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "white"
  },
  formControlText: {},
  formControlSelect: {
    width: "200px !importance"
  },
  typo: {
    width: "174px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    marginTop: "30px",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "rgba(0, 0, 0, 0.87)"
  },
  contractContaienr: {
    width: "100%",
    borderBottom: "solid 1px rgba(0, 0, 0, 0.22);",
    padding: "15px 0px 15px",
    display: "flex"
  },
  checkBoxContainer: {},
  typeContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  salaryContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    paddingBottom: "10px",
    justifyContent: "space-between"
  },
  timeText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold"
  },
  descriptionText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "13px",
    color: "rgba(0, 0, 0, 1)"
  },
  ExpectedText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold",
    display: "flex",
    flex: 1,
    textAlign: "right !important"
  },
  paymentContent: {
    display: "flex",
    flex: 0.5,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  ratesText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "13px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold",
    display: "flex",
    width: "92px",
    borderBottom: "solid 2px rgba(0, 0, 0, 0.32);"
  },
  chipText: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    color: "rgba(0, 0, 0, 1)",
    opacity: 0.7
  },
  chipMain: {
    marginTop: "20px"
  },
  chipsBox: {
    width: "100%"
  },
  chip: {
    fontSize: "11px",
    fontWeight: "bold",
    margin: "3px 5px",
    fontSize: "0.78em",
    height: "25px"
  },
  textFieldPass: {
    width: "100%",
    marginTop: "-1px",
    marginBottom: 0
  },
  saveBtn: {
    minWidth: "50px",
    height: "36px",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundColor: "#5e35b1",
    borderImageSource:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))",
    borderImageSlice: 1,
    backgroundImage:
      "#5e35b1, linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06))",
    marginTop: "30px",
    textTransform: "capitalize",

    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.5px",
    color: "#ffffff",
    marginLeft: "0px",
    [theme.breakpoints.up("sm")]: {
      width: "182px",
      marginLeft: " 320px"
    }
  },
  typosContainer: {
    padding: '20px 0 5px 0'
  },
  lastTypos: {
    minWidth: '548px',
    height: '24px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  lowerTypos: {
    minHeight: '72px',
    paddingTop: '15px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  textField: {
    width: "180px"
  },
  dense: {
    height: "30px !important",
    fontSize: 10
  },
});
