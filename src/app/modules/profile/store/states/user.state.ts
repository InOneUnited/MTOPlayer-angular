import { User } from '../../../shared/model/user';

export interface UserState {
  currentUser: User;
  operationState: string;
}

export const initialUserState: UserState = {
  currentUser: undefined,
  operationState: undefined
};
