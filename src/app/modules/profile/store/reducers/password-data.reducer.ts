import { Action, createReducer, on } from '@ngrx/store';
import { initialPasswordDataState, PasswordDataState } from '../states/password-data.state';
import { fetchPasswordDataSuccess, fetchPasswordDataFailure, updatePasswordDataSuccess } from '../actions/password-data.actions';

const reducer = createReducer(
  initialPasswordDataState,
  on(fetchPasswordDataSuccess, (state, { passwordData }) => ({
    ...state,
    currentPasswordData: passwordData
  })),

  on(fetchPasswordDataFailure, fetchPasswordDataFailure, state => ({
    ...state,
    operationState: 'error'
  })),

  on(updatePasswordDataSuccess, (state, { passwordData }) => ({
    ...state,
    currentPasswordData: passwordData
  }))
);

export function passwordDataReducer(state: PasswordDataState | undefined, action: Action) {
  return reducer(state, action);
}
