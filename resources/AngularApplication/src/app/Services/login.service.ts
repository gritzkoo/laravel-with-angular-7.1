import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    // private http: HttpRequest
  ) { }

  leggedIn(): boolean {
    return false;
  }
}
