import { UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR } from './types';
import {
  ProfileActionTypes,
  UPDATE_PROFILE_REQUEST,
  UpdateProfileSuccessPayload,
} from './types';

export function updateProfileRequest(): ProfileActionTypes {
  return {
    type: UPDATE_PROFILE_REQUEST,
  };
}

export function updateProfileSuccess(
  data: UpdateProfileSuccessPayload,
): ProfileActionTypes {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: data,
  };
}

export function updateProfileError(): ProfileActionTypes {
  return {
    type: UPDATE_PROFILE_ERROR,
  };
}
