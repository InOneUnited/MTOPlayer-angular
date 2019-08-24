import { ActionReducerMap } from '@ngrx/store';
import { ProfileState } from '../states/profile.state';
import { userReducer } from './user.reducer';

export const profileReducers: ActionReducerMap<ProfileState> = {
  userState: userReducer
};
