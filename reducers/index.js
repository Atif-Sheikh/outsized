import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { resetPasswordReducer } from "./resetPasswordReducer";
import { hiringTemplateReducer } from "./hiringTemplateReducer";
import { hiringStageReducer } from "./hiringStageReducer";
import { StageCategory } from "./stageCategoryReducer";
import { allTemplateReducer } from "./allTemplatesReducer";
import { emailTemplateReducer } from "./emailTemplateReducer";
import { scaleRatingReducer } from "./scaleRatingReducer.js";
import { allEmailsTemplateReducer } from "./allEmailsTemplateReducer.js";
import {
  clientLoginReducer,
  clientSignUpReducer,
  verifyEmail,
  clientResetPassword,
  clientForgotPassword,
  clientBasicProfileReducer
} from "./client";
export default combineReducers({
  loginReducer,
  registerReducer,
  allTemplateReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  hiringTemplateReducer,
  allEmailsTemplateReducer,
  hiringStageReducer,
  StageCategory,
  emailTemplateReducer,
  scaleRatingReducer,
  clientLoginReducer,
  clientSignUpReducer,
  verifyEmail,
  clientResetPassword,
  clientForgotPassword,
  clientBasicProfileReducer
});
