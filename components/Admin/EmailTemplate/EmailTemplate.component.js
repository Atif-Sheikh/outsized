import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import {
  addEmailTemplateApi,
  getRetreiveEmailTemplate
} from "@actions/admin/emailTemplate.actions.js";
import Router from "next/router";

import { styles } from "@styles/adminComponents/components/EmailTemplate.styles";

class EmailTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      subject: "",
      body: "",
      nameValid: true,
      descriptionValid: true,
      subjectValid: true,
      bodyValid: true,
      editiorBody: ""
    };
  }
  componentDidMount() {
    if (Router.router.query && Router.router.query.email_id)
      this.props.getRetreiveEmailTemplate(Router.router.query.email_id);
  }
  componentWillReceiveProps(nextProps) {
    if (
      Router.router.query &&
      Router.router.query.email_id &&
      nextProps.getRetreiveEmail
    ) {
      const {
        body,
        description,
        id,
        name,
        subject
      } = nextProps.getRetreiveEmail;
      this.setState({
        name: name,
        description: description,
        body: body,
        subject: subject,
        editiorBody: body
      });
    }
    if (nextProps.success) {
      Router.push("/admin/all-emails");
    }
  }
  inputField = (
    fieldContainer,
    contentTitleInput,
    textField,
    typo,
    placeholderText,
    width,
    textArea,
    value,
    ChangeText,
    validation,
    helpText
  ) => {
    return (
      <div className={fieldContainer}>
        <Typography
          className={contentTitleInput}
          variant="h6"
          color="inherit"
          noWrap
        >
          {typo}
        </Typography>
        <TextField
          className={textField}
          style={{ width: width }}
          value={value}
          variant="outlined"
          onChange={ChangeText}
          placeholder={placeholderText}
          // placeholder="MultiLine with rows: 2 asdasdand rowsMax: 4"
          multiline={true}
          rows={!textArea ? 1 : 8}
          // rowsMax={1}
          helperText={validation ? "" : helpText}
        />
      </div>
    );
  };
  addEmailTemplate = () => {
    const {
      name,
      description,
      subject,
      editiorBody,
      nameValid,
      descriptionValid,
      subjectValid,
      bodyValid
    } = this.state;
    let nameIs = false;
    let descriptionIs = false;
    let subjectIs = false;
    let bodyIs = false;
    // name
    if (name.length) {
      nameIs = true;
    } else {
      this.setState({ nameValid: false });
    }
    // description
    if (description.length) {
      descriptionIs = true;
    } else {
      this.setState({ descriptionValid: false });
    }
    // subject
    if (subject.length) {
      subjectIs = true;
    } else {
      this.setState({ subjectValid: false });
    }
    // body
    if (editiorBody.length) {
      bodyIs = true;
    } else {
      this.setState({ bodyValid: false });
    }
    if (
      nameIs &&
      descriptionIs &&
      subjectIs &&
      bodyIs &&
      !Router.router.query.email_id
    ) {
      this.props.addEmailTemplateApi(
        "AddNew",
        name,
        subject,
        description,
        editiorBody,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar
      );
    } else if (Router.router.query.email_id) {
      var id = Router.router.query.email_id;
      this.props.addEmailTemplateApi(
        "Update",
        name,
        subject,
        description,
        editiorBody,
        this.props.enqueueSnackbar,
        this.props.closeSnackbar,
        id
      );
    }
  };
  render() {
    const { classes } = this.props;
    const {
      name,
      description,
      subject,
      body,
      nameValid,
      descriptionValid,
      subjectValid,
      bodyValid
    } = this.state;
    const {
      mainContainer,
      contentTitle,
      inputContainer,
      fieldContainer,
      textField,
      contentTitleInput,
      placeholderContainer,
      placeholderDiv,
      button,
      editorClass,
      templateSubmitButton
    } = classes;
    const editorFunction = editorClass => {
      if (typeof window === "undefined") {
      } else {
        // Cannot import at the beginning of the file, will crash with ReferenceError: window is not defined
        const CKEditor = require("@ckeditor/ckeditor5-react");
        const ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
        return (
          <CKEditor
            editor={ClassicEditor}
            className={editorClass}
            style={{ width: "50px" }}
            data={body}
            // data="<p>Dear Candidate_name,</p><br /><p>We are reaching out for project_name, if you are  interested do reply.</p><br /><p>Thanks,</p><br /><p>Sender_name</p>"
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              this.setState({ editiorBody: data, bodyValid: true });
            }}
            onBlur={editor => {
              console.log("Blur.", editor);
            }}
            onFocus={editor => {
              console.log("Focus.", editor);
            }}
          />
        );
      }
    };
    return (
      <div className={mainContainer}>
        <Typography
          className={contentTitle}
          variant="h6"
          color="inherit"
          noWrap
        >
          New Email Template
        </Typography>
        <div className={inputContainer}>
          {this.inputField(
            fieldContainer,
            contentTitleInput,
            textField,
            "Name",
            "Template Name",
            "200px",
            false,
            name,
            e => this.setState({ name: e.target.value, nameValid: true }),
            nameValid,
            "*Please enter valid template name"
          )}
          {this.inputField(
            fieldContainer,
            contentTitleInput,
            textField,
            "Description",
            "Template Description",
            "340px",
            false,
            description,
            e =>
              this.setState({
                description: e.target.value,
                descriptionValid: true
              }),
            descriptionValid,
            "*Please enter valid template description"
          )}
        </div>
        <div className={inputContainer}>
          {this.inputField(
            fieldContainer,
            contentTitleInput,
            textField,
            "Email Subject",
            "Reaching out for so and so",
            "340px",
            false,
            subject,
            e => this.setState({ subject: e.target.value, subjectValid: true }),
            subjectValid,
            "*Please enter valid Email Subject"
          )}
        </div>
        <div className={inputContainer}>
          <div className={fieldContainer}>
            <Typography
              className={contentTitleInput}
              variant="h6"
              color="inherit"
              noWrap
            >
              Email Body
            </Typography>
            {editorFunction(editorClass)}
            {this.state.bodyValid ? "" : <p>*Please enter a valid body</p>}
          </div>
          <div className={placeholderContainer}>
            <div className={placeholderDiv}>
              About Placeholder <br />
              <br />
              Start Typing &lt; to see list of available placeholders that can
              be included in a template
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          className={templateSubmitButton}
          onClick={this.addEmailTemplate}
        >
          Create
        </Button>
      </div>
    );
  }
}

EmailTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    isLoading: state.emailTemplateReducer.isLoading,
    getRetreiveEmail: state.emailTemplateReducer.getRetreiveEmail,
    success: state.emailTemplateReducer.success
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addEmailTemplateApi: (
      type,
      name,
      subject,
      description,
      body,
      enqueueSnackbar,
      closeSnackbar,
      id
    ) =>
      dispatch(
        addEmailTemplateApi(
          type,
          name,
          subject,
          description,
          body,
          enqueueSnackbar,
          closeSnackbar,
          id
        )
      ),
    getRetreiveEmailTemplate: id => dispatch(getRetreiveEmailTemplate(id))
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(EmailTemplate))
);
