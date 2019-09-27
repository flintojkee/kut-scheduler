export class Tokens<A, B, C> {
  constructor(user: A = null, token: B = null, refreshToken: C = null) {
    this.user = JSON.stringify(user);
    this.token = JSON.stringify(token);
    this.refreshToken = JSON.stringify(refreshToken);
  }
  user: string;
  token: string;
  refreshToken: string;
}

export enum TokenNames {
  user = 'user',
  token = 'token',
  refreshToken = 'refreshToken'
}

