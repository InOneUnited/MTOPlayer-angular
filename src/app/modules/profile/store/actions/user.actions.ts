import { Action } from '@ngrx/store';
import { User } from '../../../shared/model/user';

export enum UserActionTypes {
  FETCH_USER = '[data] Fetch user',
  FETCH_USER_SUCCESS = '[data] Fetch user success',
  FETCH_USER_FAILURE = '[data] Fetch user failure'
}

export class FetchUser implements Action {
  readonly type = UserActionTypes.FETCH_USER;
}

export class FetchUserSuccess implements Action {
  readonly type = UserActionTypes.FETCH_USER_SUCCESS;
  constructor(public user: User) {}
}

export class FetchUserFailure implements Action {
  readonly type = UserActionTypes.FETCH_USER_FAILURE;
  constructor(public failure: any) {}
}

export type UserActions =
  | FetchUser
  | FetchUserSuccess
  | FetchUserFailure;
//   | Logout
