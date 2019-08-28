import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AppActions } from './app.actions';
import { AppState } from './app.state';
export function connectionLostReducer(
  state = false,
  action: AppActions
): boolean {
  switch (action.type) {
    // case AuthActionTypes.LOGOUT: {
    //   return action.payload && action.payload.connectionLost;
    // }

    // case AppActionTypes.TRY_AGAIN: {
    //   return false;
    // }

    default: {
      return state;
    }
  }
}
export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  connectionLost: connectionLostReducer
};
