import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { initialUserState, UserState } from '../states/user.state';

const userReducer = createReducer(
  initialUserState,
  on(UserActions.fetchUserSuccess, state => ({
    ...state,
    currentUser: state.currentUser
  })),
  on(UserActions.fetchUserFailure, state => ({
    ...state,
    operationState: 'error'
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

// export function userReducer(
//   state = initialUserState,
//   action: UserActions
// ): UserState {
//   switch (action.type) {
//     case UserActionTypes.FETCH_USER_SUCCESS: {
//       return {
//         ...initialUserState,
//         currentUser: action.user
//       };
//     }

//     case UserActionTypes.FETCH_USER_FAILURE: {
//       return {
//         ...state,
//         operationState: 'error'
//       };
//     }
//     // case AuthActionTypes.LOGOUT: {
//     //   return initialUserState;
//     // }

//     default: {
//       return state;
//     }
//   }
// }
