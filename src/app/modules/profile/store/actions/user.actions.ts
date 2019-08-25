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

export const updateUser = createAction(
  '[user] Update user',
  props<{ user: User }>()
);

export const updateUserSuccess = createAction(
  '[user] Update user success',
  props<{ user: User }>()
);

export const updateUserFailure = createAction(
  '[user] Update user failure',
  props<{ failure: any }>()
);
