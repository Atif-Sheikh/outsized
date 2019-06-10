import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import { withSnackbar } from "notistack";
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { styles } from "@styles/clientComponents/Login.styles.js";

class InputArea extends Component {


  render() {
    const { label,name ,value , handleInputChange,type = 'text',validation = true,styleprops} = this.props;
    return (
            <TextField
              label={label}
              name={name}
              value={value}
              onChange={event => handleInputChange(event)}
              className={styleprops}
              margin="normal"
              type={type}
              fullWidth
              helperText={validation ? "" : `*Enter A ${label}`}
              InputLabelProps={{
                style: {
                    height: '24px',
                    fontFamily:  'Roboto, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: 'rgba(0, 0, 0, 0.87)',
                }
              }}
            />
    );
  }
};

export default withSnackbar(InputArea);
