import { Action, createReducer, on } from '@ngrx/store';

import { fetchUserFailure, fetchUserSuccess, updateUserSuccess } from '../actions/user.actions';
import { initialUserState, UserState } from '../states/user.state';

const reducer = createReducer(
  initialUserState,
  on(fetchUserSuccess, (state, { user }) => ({
    ...state,
    currentUser: user
  })),

  on(fetchUserFailure, fetchUserFailure, state => ({
    ...state,
    operationState: 'error'
  })),

  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    currentUser: user
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
