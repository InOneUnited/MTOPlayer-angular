import { PasswordData } from '../../../shared/model/password-data';

export interface PasswordDataState {
  currentPasswordData: PasswordData;
  operationState: string;
}

export const initialPasswordDataState: PasswordDataState = {
  currentPasswordData: undefined,
  operationState: undefined
};
