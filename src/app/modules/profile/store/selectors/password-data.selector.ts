import { createSelector } from '@ngrx/store';
import { ProfileState } from '../states/profile.state';
import { getProfileState } from './profile.selector';
import { PasswordDataState } from '../states/password-data.state';

export const getPasswordDataState = createSelector(
  getProfileState,
  (state: ProfileState) => state && state.passwordDataState
);

export const getCurrentPasswordData = createSelector(
  getPasswordDataState,
  (state: PasswordDataState) => state && state.currentPasswordData
);

export const getUpdatePasswordDataOperationState = createSelector(
  getPasswordDataState,
  (state: PasswordDataState) => state.operationState
);
