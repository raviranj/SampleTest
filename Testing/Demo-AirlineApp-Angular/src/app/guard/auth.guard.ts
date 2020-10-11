import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionManagent } from '../commons/service.sessionManagment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private session: SessionManagent,private router:Router) { }
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    if (this.session.isLoggedin) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

}
