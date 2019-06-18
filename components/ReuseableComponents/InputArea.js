import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import { withSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { styles } from "@styles/clientComponents/Login.styles.js";

class InputArea extends Component {
  render() {
    const {
      label,
      name,
      value,
      // helperText = ,
      handleInputChange,
      type = "text",
      EmailApi,
      checkEmailApi,
      validation,
      styleprops,
      endAdornmentText,
      disabled = false,
      multiline = false,
      verify,
      endrClassError,
      endrClass,
      rows = 1
    } = this.props;
    return (
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={event => handleInputChange(event)}
        className={styleprops}
        margin="normal"
        onBlur={EmailApi ? checkEmailApi : () => {}}
        type={type}
        fullWidth
        multiline={multiline}
        rows={rows}
        disabled={disabled}
        helperText={validation ? "" : `*Enter A ${label}`}
        InputProps={{
          endAdornment: endAdornmentText ? (
            <InputAdornment position="end" className={endrClass}>
              {verify ? (
                <span className={endrClass}>Verified</span>
              ) : (
                <span className={endrClassError}>Not Verified</span>
              )}
            </InputAdornment>
          ) : (
            ""
          )
        }}
        InputLabelProps={{
          style: {
            height: "24px",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: "16px",
            color: "red",
            fontWeight: "600",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: 1.5,
            letterSpacing: "normal",
            color: "rgba(0, 0, 0, 0.87)"
          }
        }}
      />
    );
  }
}

export default withSnackbar(InputArea);
