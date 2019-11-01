import { Action, createReducer, on } from '@ngrx/store';
import { initialUserState, UserState } from '../states/user.state';
import { fetchUserSuccess, fetchUserFailure, updateUserSuccess } from '../actions/user.actions';

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
