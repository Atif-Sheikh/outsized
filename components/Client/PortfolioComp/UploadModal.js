import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import InputArea from "../../ReuseableComponents/InputArea";
import CheckIcon from "@material-ui/icons/Check";
import PdfFile from "@material-ui/icons/PictureAsPdf";
import { styles } from "@styles/clientComponents/Portfolio.styles.js";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FilesContainer from "./FileContainer";
class ModalClient extends Component {
  state = {
    uploadFile: false,
    saveFile: false,
    openDeleteModal: false,
    show: ""
  };

  componentWillReceiveProps(newProps) {
    this.setState({ uploadFile: newProps.uploadFile });
  }
  deleteModal = () => {
    const { openDeleteModal } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        open={openDeleteModal}
        onClose={() => this.setState({ openDeleteModal: false })}
        style={{ minWidth: "500px", minHeight: "250px", borderRadius: "5px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => this.setState({ openDeleteModal: false })}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
          <Typography className={classes.deleteTitle}>
            Are you sure you want to delete ?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div className={classes.deleteModal}>
            <div className={classes.deleteBtnsContainer}>
              <Button className={classes.yesOrNoBtn}>No</Button>
              <Button className={classes.yesOrNoBtn} autoFocus>
                Yes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  saveBeforeLeaving = () => {
    const { saveFile } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        open={saveFile}
        onClose={() => {}}
        style={{ minWidth: "500px", minHeight: "250px", borderRadius: "5px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => this.setState({ saveFile: false })}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <DialogTitle id="alert-dialog-title">
          <Typography className={classes.saveBefore}>
            Save before leaving?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div className={classes.saveBeforeModal}>
            <div className={classes.flexContainer}>
              <Button className={classes.notInterested}>
                No, not interested
              </Button>
              <Button className={classes.btnBg} autoFocus>
                Yes, please save it
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  uploadFileModal = fileName => {
    const { uploadFile } = this.state;
    const { classes } = this.props;

    return (
      <Dialog
        open={true}
        onClose={() => {}}
        style={{ minWidth: "630px !important", minHeight: "400px" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          className={classes.closeIcon}
          aria-label="Close"
          onClick={() => this.setState({ uploadFile: false })}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
        <DialogTitle className={classes.headerTitle} id="alert-dialog-title">
          Upload Files
        </DialogTitle>
        <DialogContent>
          <div className={classes.uploadFileModal}>
            <div className={classes.filePreviewUpload}>
              <div className={classes.nameSectionUploaded}>
                <CheckIcon className={classes.check} />
                <PdfFile />
                <Typography>{fileName}</Typography>
              </div>
              <div className={classes.iconSection}>
                <IconButton
                  className={classes.closeIcon}
                  aria-label="Close"
                  onClick={() => this.setState({ openDeleteModal: true })}
                >
                  <CloseIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
            <InputArea
              label="File Name"
              name="fileName"
              validation={true}
              styleprops={classes.textField}
              handleInputChange={() => {}}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.saveBtn}
            onClick={() => this.setState({ uploadFile: false, saveFile: true })}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return <>{this.state.show}</>;
  }
}

export default withStyles(styles)(ModalClient);
