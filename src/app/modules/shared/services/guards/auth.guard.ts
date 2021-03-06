import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    route: import ('@angular/router').ActivatedRouteSnapshot,
    state: import ('@angular/router').RouterStateSnapshot
  ):
    | boolean
    | import ('@angular/router').UrlTree
    | import ('rxjs').Observable<boolean | import ('@angular/router').UrlTree>
    | Promise<boolean | import ('@angular/router').UrlTree> {
    return true;
  }
}
