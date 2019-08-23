import { UserActions, UserActionTypes } from '../actions/user.actions';
import { initialUserState, UserState } from '../states/user.state';

export function userReducer(
  state = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_SUCCESS: {
      return {
        ...initialUserState,
        currentUser: action.user
      };
    }

    case UserActionTypes.FETCH_USER_FAILURE: {
      return {
        ...state,
        operationState: 'error'
      };
    }
    // case AuthActionTypes.LOGOUT: {
    //   return initialUserState;
    // }

    default: {
      return state;
    }
  }
}
