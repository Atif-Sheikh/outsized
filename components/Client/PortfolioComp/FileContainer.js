import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import PdfFile from "@material-ui/icons/PictureAsPdf";
import { styles } from "@styles/clientComponents/Portfolio.styles.js";

class FilesContainer extends Component {
  state = {
    uploadFile: false,
    saveFile: false,
    openDeleteModal: false
  };

  render() {
    const { classes, fileName } = this.props;
    return (
      <div className={classes.filePreview}>
        <div className={classes.nameSection}>
          <PdfFile />
          <Typography>{fileName}</Typography>
          <CheckIcon className={classes.check} />
        </div>
        <div className={classes.iconSection}>
          <IconButton
            className={classes.closeIcon}
            aria-label="Close"
            onClick={() => this.props.callFunction()}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FilesContainer);
