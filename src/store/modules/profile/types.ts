import { Action } from 'redux';

export interface UpdateProfileSuccessPayload {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
}

export const UPDATE_PROFILE_REQUEST = '@profile/UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = '@profile/UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_ERROR = '@profile/UPDATE_PROFILE_ERROR';

export interface updateProfileRequest extends Action {
  type: typeof UPDATE_PROFILE_REQUEST;
}

export interface updateProfileSuccess extends Action {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload: UpdateProfileSuccessPayload;
}

export interface updateProfileError extends Action {
  type: typeof UPDATE_PROFILE_ERROR;
}

export type ProfileActionTypes =
  | updateProfileSuccess
  | updateProfileRequest
  | updateProfileError;
