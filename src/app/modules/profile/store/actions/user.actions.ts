import { Action } from '@ngrx/store';
import { User } from '../../../shared/model/user';

export enum UserActionTypes {
  FETCH_USER_DATA = '[data] Fetch user data',
  FETCH_USER_DATA_SUCCESS = '[data] Fetch user data success',
  FETCH_USER_DATA_FAILURE = '[data] Fetch user data failure'
}

export class FetchUserData implements Action {
  readonly type = UserActionTypes.FETCH_USER_DATA;
}

export class FetchUserDataSuccess implements Action {
  readonly type = UserActionTypes.FETCH_USER_DATA_SUCCESS;
  constructor(public user: User) {}
}

export class FetchUserDataFailure implements Action {
  readonly type = UserActionTypes.FETCH_USER_DATA_FAILURE;
  constructor(public failure: any) {}
}

export type UserActions =
  | FetchUserData
  | FetchUserDataSuccess
  | FetchUserDataFailure;
//   | Logout
