import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../states/user.state';

export const getUserState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(
  getUserState,
  (state: UserState) => state && state.currentUser
);

export const getUpdateUserOperationState = createSelector(
  getUserState,
  (state: UserState) => state.operationState
);
