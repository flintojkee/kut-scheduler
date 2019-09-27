export class User {
  id?: number;
  email: string;
  fullName: string;
}

export class UserRegister {
  constructor(fullName: string, email: string, password: string, retypedPassword: string) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.retypedPassword = retypedPassword;
  }
  email: string;
  fullName: string;
  password: string;
  retypedPassword: string;
}

export class UserLoginCheck {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  username: string;
  password: string;
}

export interface IUserResponse {
  token: string;
  user: User;
  refresh_token: string;
}
