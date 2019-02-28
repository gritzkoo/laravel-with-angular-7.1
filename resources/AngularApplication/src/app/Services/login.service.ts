import { Injectable } from '@angular/core';
import { AuthUser } from '../Interfaces/auth-user.interface';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { lararoutes } from '../Interfaces/laravel-routes';
import { Observable } from 'rxjs';
import { CacheService } from './cache-service.service';
import { Users, IOauth, IOauthResponse, IOauthLoggedUser } from '../Interfaces/repository-interfaces';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _logged = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private cache: CacheService
  ) { }

  leggedIn(): boolean {
    return this.cache.has('token');
  }

  setLoggedState(flag: boolean): void {
    this._logged = flag;
  }

  apiLogin(user: AuthUser): Observable<IOauthResponse|HttpErrorResponse> {
    const protocol: IOauth = {
      grant_type: environment.oauth_client.grant_type,
      client_id: environment.oauth_client.client_id,
      client_secret: environment.oauth_client.client_secret,
      scope: environment.oauth_client.scope,
      username: user.name,
      password: user.password
    };
    return this.http.post<IOauthResponse>(lararoutes.passport.token.index, protocol);
  }

  test(): Observable<IOauthLoggedUser> {
    return this.http.get<IOauthLoggedUser>(lararoutes.panel.user);
  }
}



