import { Injectable } from '@angular/core';
import { Tokens, User } from '@kut/shared/models';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  setTokens(tokens: Tokens<User, string, string>) {
    Object.keys(tokens).map(key => {
      localStorage.setItem(key, tokens[key]);
    });
  }
  removeTokens(tokens: Tokens<User, string, string>) {
    Object.keys(tokens).map(key => {
      localStorage.removeItem(key);
    });
  }
  getToken<T>(tokenName: string): T {
    return JSON.parse(localStorage.getItem(tokenName));
  }

}
