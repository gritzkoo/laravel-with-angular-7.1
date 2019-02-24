import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PanelGuardGuard implements CanActivate {
  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  canActivate(): boolean {
    if(this._loginService.leggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  } */
}
