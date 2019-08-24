import { ActionReducerMap } from '@ngrx/store';
import { ProfileState } from '../states/profile.state';
import { reducer } from './user.reducer';

export const profileReducers: ActionReducerMap<ProfileState> = {
  userState: reducer
};
