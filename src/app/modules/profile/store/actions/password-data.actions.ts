import { createAction, props } from '@ngrx/store';
import { PasswordData } from 'src/app/modules/shared/model/password-data';

export const fetchPasswordData = createAction('[passwordData] Fetch password data');

export const fetchPasswordDataSuccess = createAction(
  '[passwordData] Fetch password data success',
  props<{ passwordData: PasswordData }>()
);

export const fetchPasswordDataFailure = createAction(
  '[passwordData] Fetch password data failure',
  props<{ failure: any }>()
);

export const updatePasswordData = createAction(
  '[passwordData] Update password data',
  props<{ passwordData: PasswordData }>()
);

export const updatePasswordDataSuccess = createAction(
  '[passwordData] Update password data success',
  props<{ passwordData: PasswordData }>()
);

export const updatePasswordDataFailure = createAction(
  '[passwordData] Update password data failure',
  props<{ failure: any }>()
);
