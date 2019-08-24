import { Action, createAction, props } from '@ngrx/store';
import { User } from '../../../shared/model/user';

export const fetchUser = createAction('[user] Fetch user');

export const fetchUserSuccess = createAction(
  '[user] Fetch user success',
  props<{ user: User }>()
);

export const fetchUserFailure = createAction(
  '[user] Fetch user failure',
  props<{ failure: any }>()
);

// export enum UserActionTypes {
//   FETCH_USER = '[user] Fetch user',
//   FETCH_USER_SUCCESS = '[user] Fetch user success',
//   FETCH_USER_FAILURE = '[user] Fetch user failure'
// }

// export class FetchUser implements Action {
//   readonly type = UserActionTypes.FETCH_USER;
// }

// export class FetchUserSuccess implements Action {
//   readonly type = UserActionTypes.FETCH_USER_SUCCESS;
//   constructor(public user: User) {}
// }

// export class FetchUserFailure implements Action {
//   readonly type = UserActionTypes.FETCH_USER_FAILURE;
//   constructor(public failure: any) {}
// }

// export type UserActions = FetchUser | FetchUserSuccess | FetchUserFailure;
// //   | Logout
