import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { initialUserState, UserState } from '../states/user.state';

const reducer = createReducer(
  initialUserState,
  on(UserActions.fetchUserSuccess, (state, { user }) => ({
    ...state,
    currentUser: user
  })),
  on(UserActions.fetchUserFailure, state => ({
    ...state,
    operationState: 'error'
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
