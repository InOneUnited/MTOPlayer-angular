import { createSelector } from '@ngrx/store';

import { ProfileState } from '../states/profile.state';
import { UserState } from '../states/user.state';
import { getProfileState } from './profile.selector';

export const getUserState = createSelector(
  getProfileState,
  (state: ProfileState) => state && state.userState
);

export const getCurrentUser = createSelector(
  getUserState,
  (state: UserState) => state && state.currentUser
);

export const getUpdateUserOperationState = createSelector(
  getUserState,
  (state: UserState) => state.operationState
);
