import { Action } from 'redux';

// Payloads types
export interface SignInSuccessPayload {
  profile: {
    id: string;
    name: string;
    email: string;
    avatar_url?: string;
  };
  token: string;
}

// Actions types
export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = '@auth/SIGN_IN_ERROR';

interface signInRequest extends Action {
  type: typeof SIGN_IN_REQUEST;
}

interface signInSuccess extends Action {
  type: typeof SIGN_IN_SUCCESS;
  payload: SignInSuccessPayload;
}

interface signInError extends Action {
  type: typeof SIGN_IN_ERROR;
}

export type AuthActionTypes = signInRequest | signInSuccess | signInError;
