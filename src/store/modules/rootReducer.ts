import { combineReducers } from 'redux';

import { authReducer, AuthState } from './auth/reducer';
import { ProfileState, profileReducer } from './profile/reducer';

export interface ApplicationState {
  auth: AuthState;
  profile: ProfileState;
}

export const rootReducer = combineReducers<ApplicationState>({
  auth: authReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
