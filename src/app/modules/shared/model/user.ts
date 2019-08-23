export class User {
  id: number = undefined;
  email: string = undefined;
  firstName: string = undefined;
  lastName: string = undefined;
  gender: string = undefined;
  birthday: Date = undefined;
  joinDate: Date = undefined;

  constructor(fields?: {
    id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    birthday?: Date;
    joinDate?: Date;
  }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
