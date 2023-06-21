import {
  postForgotPassword,
  postResetPassword,
} from "../../components/api/api";
import {
  VERIFICATION_EMAIL_REQUEST, VERIFICATION_EMAIL_SUCCESS, VERIFICATION_EMAIL_FAILED,
  RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED
} from "../constants/password-reset";
import { AppDispatch, AppThunk } from "../types";

// Verification Email
export interface VerificationEmailRequest {
  readonly type: typeof VERIFICATION_EMAIL_REQUEST,
}
export interface VerificationEmailSuccess {
  readonly type: typeof VERIFICATION_EMAIL_SUCCESS,
  payload: { success: true, message: 'Reset email sent' },
}
export interface VerificationEmailFailed {
  readonly type: typeof VERIFICATION_EMAIL_FAILED,
}

export const VerificationEmailRequest = (): VerificationEmailRequest => ({
  type: VERIFICATION_EMAIL_REQUEST,
});
export const VerificationEmailSuccess = (payload: { success: true, message: 'Reset email sent' }): VerificationEmailSuccess => ({
  type: VERIFICATION_EMAIL_SUCCESS,
  payload
});
export const VerificationEmailFailed = (): VerificationEmailFailed => ({
  type: VERIFICATION_EMAIL_FAILED,
});

// Reset Password
export interface ResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST,
}
export interface ResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS,
}
export interface ResetPasswordFailed {
  readonly type: typeof RESET_PASSWORD_FAILED,
}

export const ResetPasswordRequest = (): ResetPasswordRequest => ({
  type: RESET_PASSWORD_REQUEST,
});
export const ResetPasswordSuccess = (): ResetPasswordSuccess => ({
  type: RESET_PASSWORD_SUCCESS,
});
export const ResetPasswordFailed = (): ResetPasswordFailed => ({
  type: RESET_PASSWORD_FAILED,
});

export const sentVerificationEmail: AppThunk = (email, goToPage) => {
  return function (dispatch: AppDispatch) {
    dispatch(VerificationEmailRequest);
    postForgotPassword(email)
      .then((res) => {
        if (res && res.success) {
          dispatch(VerificationEmailSuccess(res));
        }
      })
      .then(goToPage)
      .catch((e) => {
        dispatch(VerificationEmailFailed);
      });
  };
}

export const resetPassword: AppThunk = (password, token) => {
  return function (dispatch: AppDispatch) {
    dispatch(ResetPasswordRequest);
    postResetPassword(password, token)
      .then((res) => {
        if (res && res.success) {
          dispatch(ResetPasswordSuccess);
        }
      })
      .catch((e) => {
        dispatch(ResetPasswordFailed);
      });
  };
}
