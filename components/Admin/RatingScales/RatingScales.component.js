import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Router from "next/Router";
import { withSnackbar } from "notistack";
import ComponentHeader from "@components/ComponentHeader/ComponentHeader.component";
import { postScaleRating } from "../../../actions/admin/scaleRating.action.js";
import { styles } from "@styles/adminComponents/components/RatingScales.styles";

class RatingScales extends Component {
  state = {
    selectValue: "",
    selectValueNumber: "",
    ratingScales: "",
    order: "",
    validName: true,
    labelWidth: 0,
    customArray: ["", "", "", "", ""],
    customArrayObject: [{}, {}, {}, {}, {}],
    includeNutral: false,
    checkedB: false,
    ratingScalesArray: [
      {
        name: "Icons",
        value: "icons"
      },
      {
        name: "Numbers (Positive Only)",
        value: "numbers"
      },
      {
        name: "Custom",
        value: "custom"
      }
    ],
    orderArray: [
      {
        name: "Lowest to highest",
        value: "lth"
      },
      {
        name: "Hightes to Lowest",
        value: "htl"
      }
    ],
    duplicateIconRating: [],
    iconsShow: true,
    scaleValue: "icons",
    iconsRating: [
      {
        icon: "cancel",
        value: "Strong negative"
      },
      {
        icon: "thumb_down",
        value: "Negative"
      },
      {
        icon: "remove_circle",
        value: "Neutral"
      },
      {
        icon: "thumb_up",
        value: "Positive"
      },
      {
        icon: "stars",
        value: "Strong positive"
      }
    ],
    iconsReverseRating: [
      {
        icon: "stars",
        value: "Strong positive"
      },
      {
        icon: "thumb_up",
        value: "Positive"
      },
      {
        icon: "remove_circle",
        value: "Neutral"
      },
      {
        icon: "thumb_down",
        value: "Negative"
      },
      {
        icon: "cancel",
        value: "Strong negative"
      }
    ],
    numberRating: [
      {
        icon: "1",
        value: "Strong negative"
      },
      {
        icon: "2",
        value: "Negative"
      },
      {
        icon: "3",
        value: "Neutral"
      },
      {
        icon: "4",
        value: "Positive"
      },
      {
        icon: "5",
        value: "Strong positive"
      }
    ],

    numberReverseRating: [
      {
        icon: "5",
        value: "Strong positive"
      },
      {
        icon: "4",
        value: "Positive"
      },
      {
        icon: "3",
        value: "Neutral"
      },
      {
        icon: "2",
        value: "Negative"
      },
      {
        icon: "1",
        value: "Strong negative"
      }
    ],
    serverSendJSON: {}
  };

  componentDidMount() {
    let { duplicateIconRating, iconsRating } = this.state;
    duplicateIconRating = iconsRating;
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
      duplicateIconRating
    });
  }
  componentWillReceiveProps = nextProps => {
    const {
      scaleValue,
      selectValue,
      iconsRating,
      iconsReverseRating,
      numberRating,
      numberReverseRating
    } = this.state;
    if (nextProps.clear) {
      this.setState({ name: "", serverSendJSON: {} }),
        [...Array(5)].map((a, i) => {
          delete iconsRating[i]["guideline"],
            delete iconsReverseRating[i]["guideline"],
            delete numberRating[i]["guideline"],
            delete numberReverseRating[i]["guideline"];
        });
    }
  };
  handleChange = (event, id, name) => {
    const {
      scaleValue,
      selectValue,
      iconsRating,
      iconsReverseRating,
      numberRating,
      numberReverseRating,
      selectValueNumber,
      customArrayObject
    } = this.state;
    // console.log( event,id)
    if (scaleValue.trim() !== "") {
      if (
        scaleValue === "icons" &&
        (selectValue === "icons" ||
          selectValue === "lth" ||
          selectValue === "htl" ||
          selectValue === "")
      ) {
        let ratingArray =
          selectValue == "" || selectValue === "lth"
            ? iconsRating
            : iconsReverseRating;
        ratingArray[id]["guideline"] = event.target.value;
        this.setState({ serverSendJSON: ratingArray });
      }
      if (
        scaleValue === "numbers" &&
        (selectValue === "numbers" ||
          selectValue === "lth" ||
          selectValue === "htl")
      ) {
        let ratingArray =
          selectValue == "" || selectValue === "lth"
            ? numberRating
            : numberReverseRating;
        ratingArray[id]["guideline"] = event.target.value;
        this.setState({ serverSendJSON: ratingArray });
      } else if (
        scaleValue === "numbers" ||
        (scaleValue === "icons" && selectValue === "custom")
      ) {
        let ratingArray =
          selectValue == "" || selectValue === "lth"
            ? customArrayObject
            : customArrayObject.reverse();
        ratingArray[id]["guideline"] = event.target.value;
        this.setState({ serverSendJSON: ratingArray });
      }
    }
  };
  // handleChange = ( event , contentTitles,
  //   id,
  //   iconName,
  //   colorBoxes,
  //   icon,
  //   textField,
  //   contentTitle)=> {
  //     console.log( contentTitles,
  //       id,
  //       iconName,
  //       colorBoxes,
  //       icon,
  //       textField,
  //       contentTitle)
  //   // this.setState({ [event.target.name]: event.target.value });
  // };

  handleChangeCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  selectValue = (event, number) => {
    let {
      duplicateIconRating,
      numberRating,
      iconsRating,
      iconsShow,
      scaleValue,
      numberReverseRating,
      iconsReverseRating
    } = this.state;
    let value = event;
    if (value === "icons") {
      duplicateIconRating = this.state.order === 'htl'?iconsReverseRating :iconsRating;
      scaleValue = "icons";
      iconsShow = true;
    } else if (value === "numbers") {
      duplicateIconRating = this.state.order === 'htl'? numberReverseRating:numberRating;
      scaleValue = "numbers";
      iconsShow = false;
    } 
    else if (value === "lth") {
      if (scaleValue === "icons") {
        duplicateIconRating = iconsRating;
      } else if (scaleValue === "numbers") {
        duplicateIconRating = numberRating;
      }
    } else if (value === "htl") {
      if (scaleValue === "icons") {
        duplicateIconRating = iconsReverseRating;
      } else if (scaleValue === "numbers") {
        duplicateIconRating = numberReverseRating;
      }
    }
    // this.showNeutral(duplicateIconRating)
    this.setState( {
      customArray: ["", "", "", "", ""],
      customArrayObject: [{}, {}, {}, {}, {}],
      actualCustomArray: [],
      ratingScalesArray: [
        {
          name: "Icons",
          value: "icons"
        },
        {
          name: "Numbers (Positive Only)",
          value: "numbers"
        },
        {
          name: "Custom",
          value: "custom"
        }
      ],
      orderArray: [
        {
          name: "Lowest to highest",
          value: "lth"
        },
        {
          name: "Hightes to Lowest",
          value: "htl"
        }
      ],
      duplicateIconRating: [],
      iconsRating: [
        {
          icon: "cancel",
          value: "Strong negative"
        },
        {
          icon: "thumb_down",
          value: "Negative"
        },
        {
          icon: "remove_circle",
          value: "Neutral"
        },
        {
          icon: "thumb_up",
          value: "Positive"
        },
        {
          icon: "stars",
          value: "Strong positive"
        }
      ],
      iconsReverseRating: [
        {
          icon: "stars",
          value: "Strong positive"
        },
        {
          icon: "thumb_up",
          value: "Positive"
        },
        {
          icon: "remove_circle",
          value: "Neutral"
        },
        {
          icon: "thumb_down",
          value: "Negative"
        },
        {
          icon: "cancel",
          value: "Strong negative"
        }
      ],
      numberRating: [
        {
          icon: "1",
          value: "Strong negative"
        },
        {
          icon: "2",
          value: "Negative"
        },
        {
          icon: "3",
          value: "Neutral"
        },
        {
          icon: "4",
          value: "Positive"
        },
        {
          icon: "5",
          value: "Strong positive"
        }
      ],
  
      numberReverseRating: [
        {
          icon: "5",
          value: "Strong positive"
        },
        {
          icon: "4",
          value: "Positive"
        },
        {
          icon: "3",
          value: "Neutral"
        },
        {
          icon: "2",
          value: "Negative"
        },
        {
          icon: "1",
          value: "Strong negative"
        }
      ],
      serverSendJSON: {}
    })
    if (number === 1) {
      this.setState({
        duplicateIconRating,
        iconsShow,
        scaleValue,
        ratingScales: event,
        selectValue: event
      });
    } else {
      this.setState({
        duplicateIconRating,
        iconsShow,
        scaleValue,
        order: event,
        selectValue: event
      });
    }
    document.getElementById("outlined-name,guideline0").value = ''
    document.getElementById("outlined-name,guideline1").value = ''
    document.getElementById("outlined-name,guideline3").value = ''
    document.getElementById("outlined-name,guideline4").value = ''
    if(document.getElementById("outlined-name,guideline2")){
    document.getElementById("outlined-name,guideline2").value = ''}
  };

  customChange = (value, id, type) => {
    let { customArray, customArrayObject } = this.state;
    var compalied = customArrayObject;
    compalied[id][type] = value.target.value;
    console.log(compalied);
    customArray[id] = value.target.value;
    this.setState({ customArray ,serverSendJSON:compalied});
  };
  customChangeTitle = (value, id, type) => {
    let { customArray, customArrayObject } = this.state;
    var compalied = customArrayObject;
    compalied[id][type] = value.target.value;
    console.log(compalied);
    this.setState({
      actualCustomArray: compalied,
      serverSendJSON:compalied
    });
  };

  leftContainerUI = (
    showCheckBox,
    checkValue,
    textOne,
    textTwo,
    array,
    contentTitle,
    formControl,
    inputLabel,
    selectLabel,
    labelWidth,
    selectValue,
    checkboxDiv,
    checked,
    checkBox,
    textField,
    showTextField,
    number
  ) => {
    return (
      <div>
        <div>
          <Typography
            className={contentTitle}
            variant="h6"
            color="inherit"
            noWrap
          >
            {textOne}
          </Typography>
        </div>
        {showTextField ? (
          <TextField
            id="outlined-name"
            label="Enter name of Rating Scales"
            className={textField}
            onChange={e =>
              this.setState({ name: e.target.value, validName: true })
            }
            margin="normal"
            variant="outlined"
            value={this.state.name}
            helperText={this.state.validName ? "" : "Please Enter valid email"}
          />
        ) : (
          ""
        )}
        <FormControl variant="outlined" className={formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            className={inputLabel}
            htmlFor="outlined-age-simple"
          >
            Select
          </InputLabel>
          <Select
            value={number === 1 ? this.state.ratingScales : this.state.order}
            className={selectLabel}
            onChange={e => this.selectValue(e.target.value, number)}
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                name="selectValue"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {array.map(val => {
              return <MenuItem value={val.value}>{val.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        {showCheckBox ? (
          <div className={checkboxDiv}>
            <Checkbox
              checked={checked}
              className={checkBox}
              onChange={this.handleChangeCheckbox(checkValue)}
              value={checkValue}
              color="primary"
            />
            <Typography
              className={contentTitle}
              variant="h6"
              color="inherit"
              noWrap
            >
              {textTwo}
            </Typography>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  ratingScaleBoxes = (
    id,
    icon,
    value,
    mainBox,
    colorBox,
    icons,
    contentTitleBox,
    contentTitle,
    textField
  ) => {
    let { iconsShow, selectValue } = this.state;
    return (
      <div className={mainBox}>
        {this.state.ratingScales !== "custom" ? (
          <div className={colorBox}>
            {iconsShow ? (
              <i className={icons}>{icon}</i>
            ) : (
              <Typography
                className={contentTitle}
                variant="h6"
                color="inherit"
                noWrap
              >
                {icon}
              </Typography>
            )}
          </div>
        ) : (
          <TextField
            id="outlined-name"
            onChange={value => this.customChange(value, id, "buttonText")}
            margin="normal"
            inputProps={{
              maxLength: 20
            }}
            variant="outlined"
          />
        )}
        {this.state.ratingScales !== "custom" ? (
          <Typography
            className={contentTitleBox}
            variant="h6"
            color="inherit"
            noWrap
          >
            {value}
          </Typography>
        ) : (
          <TextField
            id="outlined-name"
            onChange={value => this.customChangeTitle(value, id, "labelText")}
            margin="normal"
            inputProps={{
              maxLength: 20
            }}
            variant="outlined"
          />
        )}
      </div>
    );
  };

  guidelinessScale = (
    contentTitles,
    id,
    iconName,
    colorBoxes,
    icon,
    textField,
    contentTitle
  ) => {
    let { iconsShow, selectValue, customArray } = this.state;
    return (
      <div className={colorBoxes}>
        {this.state.ratingScales !== "custom" ? (
          iconsShow ? (
            <i className={icon}>{iconName}</i>
          ) : (
            <Typography
              className={contentTitle}
              variant="h6"
              color="inherit"
              noWrap
            >
              {iconName}
            </Typography>
          )
        ) : (
          <Typography
            className={contentTitles}
            variant="h6"
            color="inherit"
            noWrap
          >
            {customArray[id]}
          </Typography>
        )}
        <TextField
          id={["outlined-name","guideline"+id]}
          // label="Name"
          className={textField}
          onChange={e => this.handleChange(e, id)}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  };
  handelSubmitRating = () => {
    const {
      serverSendJSON,
      name,
      scaleValue,
      includeNutral,
      selectValue,
      customArray,
      customArrayObject,
      validName,
      ratingScales,
      actualCustomArray
    } = this.state;
    const { postScaleRating, enqueueSnackbar, closeSnackbar } = this.props;
    var customArrayCurrent = 0;
    var addFiled = "";
    var submitValid = false;

    serverSendJSON.length &&
      serverSendJSON.map((a, i) => {
        if(selectValue !== "custom"){
        if (
          !(a.icon && a.icon.length) ||
          !(a.value && a.value.length) ||
          !(a.guideline && a.guideline.length)
        ) {
          if (!includeNutral && i == 2) {
            addFiled = ""
          } else {
            addFiled = "Please check some filed is missing";
          }
        }}
        else  {
          if (
            !(a.buttonText && a.buttonText.length) ||
            !(a.labelText && a.labelText.length) ||
            !(a.guideline && a.guideline.length)
          ) {
            if (!includeNutral && i == 2) {
            } else {
              addFiled = "Please check some filed is missing";
            }
          }
        }
        if (customArrayObject.length === i + 1 && addFiled.length > 1) {
          const key = enqueueSnackbar(addFiled, {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            }
          });
          setTimeout(() => {
            addFiled = "";
            closeSnackbar(key);
          }, 2000);
        } else if (addFiled.trim() === "") {
          submitValid = true;
        }
      });
    if (name && name.length > 0 && submitValid) {
   
          var data = {
            name: name,
            scaleType: ratingScales,
            includeNuetral: includeNutral,
            orderIncreasing:
              selectValue.trim() === "" || selectValue === "lth" ? true : false
          };
          var item = [];
          if (ratingScales === "icons" || ratingScales === "numbers") {
            serverSendJSON.length > 0 &&
              serverSendJSON.map((info, index) => {
                item.push({
                  rank: index + 1,
                  buttonText: info.icon,
                  labelText: info.value,
                  guideline: info.guideline ? info.guideline : ""
                });
              });
          } else if(ratingScales === "custom") {
            serverSendJSON.length > 0 &&
              serverSendJSON.map((info, index) => {
                item.push({
                  rank: index + 1,
                  buttonText:  actualCustomArray[index] && actualCustomArray[index].buttonText
                    ? actualCustomArray[index].buttonText
                    : " ",
                  labelText:  actualCustomArray[index] && actualCustomArray[index].labelText
                    ? actualCustomArray[index].labelText
                    : " ",
                  guideline: info.guideline ? info.guideline : ""
                });
              });
          }
          data[`items`] = item;
          // console.log( event,id)
          console.log(data);
          if (data.items.length > 0) {
            postScaleRating(data, enqueueSnackbar, closeSnackbar);
            setTimeout(() => {
              Router.push("/admin/feedback-form");
            }, 2000);
          } else {
            const key = enqueueSnackbar("Please Check All filed", {
              variant: "error",
              anchorOrigin: {
                vertical: "top",
                horizontal: "right"
              }
            });
            setTimeout(() => {
              closeSnackbar(key);
            }, 2000);
          }
        } else {
          const key = enqueueSnackbar("Please Check All filed", {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            }
          });
          setTimeout(() => {
            closeSnackbar(key);
          }, 2000);
        }
      
  };

  render() {
    const { classes } = this.props;
    const {
      selectValue,
      labelWidth,
      orderArray,
      checked,
      ratingScalesArray,
      duplicateIconRating,
      includeNutral,
      iconsRating,
      numberRating
    } = this.state;
    const {
      mainContainer,
      container,
      leftContainer,
      rightContainer,
      contentTitle,
      formControl,
      inputLabel,
      selectLabel,
      checkboxDiv,
      checkBox,
      contentRightTitle,
      boxes,
      colorBox,
      contentTitleBox,
      mainBox,
      icons,
      guidelinessDiv,
      colorBoxes,
      textField,
      icon,
      contentTitleBoxes,
      guideNumber,
      contentTitles,
      templateSubmitButton
    } = classes;
    return (
      <div className={mainContainer}>
        <ComponentHeader headerText="Rating Scales" addButton={false} />
        <div className={container}>
          <div className={leftContainer}>
            {this.leftContainerUI(
              true,
              "includeNutral",
              "Rating Scales",
              "Include Neutral Rating",
              ratingScalesArray,
              contentTitle,
              formControl,
              inputLabel,
              selectLabel,
              labelWidth,
              selectValue,
              checkboxDiv,
              checked,
              checkBox,
              textField,
              true,
              1
            )}
            {this.leftContainerUI(
              false,
              "checkedB",
              "Order",
              "Require Vote when submiting feedback",
              orderArray,
              contentTitle,
              formControl,
              inputLabel,
              selectLabel,
              labelWidth,
              selectValue,
              checkboxDiv,
              checked,
              checkBox,
              textField,
              false,
              2
            )}

            <Button
              variant="contained"
              color="secondary"
              className={templateSubmitButton}
              onClick={this.handelSubmitRating}
            >
              Submit
            </Button>
          </div>
          <div className={rightContainer}>
            <div>
              <Typography
                className={contentRightTitle}
                variant="h6"
                color="inherit"
                noWrap
              >
                Rating Scales
              </Typography>
            </div>
            <div className={boxes}>
              {duplicateIconRating.map((val, id) => {
                if (id !== 2 || includeNutral) {
                  return this.ratingScaleBoxes(
                    id,
                    val.icon,
                    val.value,
                    mainBox,
                    colorBox,
                    icons,
                    contentTitleBox,
                    contentTitleBoxes,
                    textField
                  );
                }
              })}
            </div>
            <div>
              <Typography
                className={contentRightTitle}
                variant="h6"
                color="inherit"
                noWrap
              >
                Guideliness
              </Typography>
            </div>
            <div className={guidelinessDiv}>
              {duplicateIconRating.map((val, id) => {
                if (id !== 2 || includeNutral) {
                  return this.guidelinessScale(
                    contentTitles,
                    id,
                    val.icon,
                    colorBoxes,
                    icon,
                    textField,
                    guideNumber
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RatingScales.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    message: state.scaleRatingReducer.message,
    clear: state.scaleRatingReducer.isLoading,
    isLoading: state.scaleRatingReducer.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postScaleRating: (data, enqueueSnackbar, closeSnackbar) =>
      dispatch(postScaleRating(data, enqueueSnackbar, closeSnackbar))
  };
};
export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(RatingScales))
);
