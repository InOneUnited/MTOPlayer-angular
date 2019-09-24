import { ActionReducerMap } from '@ngrx/store';
import { ProfileState } from '../states/profile.state';
import { musicAppsReducer } from './music-apps.reducer';
import { userReducer } from './user.reducer';
import { passwordDataReducer } from './password-data.reducer';

export const profileFeatureKey = 'profile';

export const profileReducers: ActionReducerMap<ProfileState> = {
  userState: userReducer,
  musicAppsState: musicAppsReducer,
  passwordDataState: passwordDataReducer
};
