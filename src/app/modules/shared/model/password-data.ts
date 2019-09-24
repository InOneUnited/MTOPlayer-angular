export class PasswordData {
    userId: number = undefined;
    email: string = undefined;
    password: string = undefined;
  
    constructor(fields?: {
      id?: number;
      email?: string;
      password?: string;
    }) {
      Object.assign(this, fields);
    }
  }
  