import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  User,
  UserRegister,
  IUserResponse,
  UserLoginCheck,
  Tokens,
  TokenNames,
  ResetPasswordRequest
} from '@root/app/shared/models';
import { URL_CONFIG } from '@root/app/config/api.config';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUserTokenSubject: BehaviorSubject<string>;
  private currentUserRefreshTokenSubject: BehaviorSubject<string>;
  public currentUser: Observable<User>;
  public currentUserToken: Observable<string>;
  public currentUserRefreshToken: Observable<string>;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.currentUserSubject = new BehaviorSubject<User>(
      this.tokenService.getToken<User>(TokenNames.user)
    );
    this.currentUserTokenSubject = new BehaviorSubject<string>(
      this.tokenService.getToken<string>(TokenNames.token)
    );
    this.currentUserRefreshTokenSubject = new BehaviorSubject<string>(
      this.tokenService.getToken<string>(TokenNames.refreshToken)
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentUserToken = this.currentUserTokenSubject.asObservable();
    this.currentUserRefreshToken = this.currentUserRefreshTokenSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public get currentUserTokenValue(): string {
    return this.currentUserTokenSubject.value;
  }
  public get currentUserRefreshTokenValue(): string {
    return this.currentUserRefreshTokenSubject.value;
  }

  login(user: UserLoginCheck) {
    return this.http.post<IUserResponse>(URL_CONFIG.users.loginCheck, user).pipe(
      map((res: IUserResponse) => {
        this.setCurrentUser(res);
        return res;
      })
    );
  }

  signUp(user: UserRegister) {
    return this.http.post<User>(URL_CONFIG.users.register, user);
  }

  resetPassword(reset: ResetPasswordRequest) {
    return this.http.post(URL_CONFIG.users.reset, reset);
  }

  logout() {
    this.tokenService.removeTokens(new Tokens());
    this.currentUserSubject.next(null);
    this.currentUserTokenSubject.next(null);
    this.currentUserRefreshTokenSubject.next(null);
  }

  private setCurrentUser(res: IUserResponse) {
    this.tokenService.setTokens(new Tokens(res.user, res.token, res.refresh_token));
    this.currentUserSubject.next(res.user);
    this.currentUserTokenSubject.next(res.token);
    this.currentUserRefreshTokenSubject.next(res.refresh_token);
  }
}
