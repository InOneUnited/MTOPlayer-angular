export class PasswordData {
  userId: number = undefined;
  email: string = undefined;
  oldPassword: string = undefined;
  newPassword: string = undefined;
  constructor(fields?: {
    id?: number;
    email?: string;
    oldPassword: string;
    newPassword: string;
  }) {
    Object.assign(this, fields);
  }
}
