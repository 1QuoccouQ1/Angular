import {
    CanActivateFn,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
  } from '@angular/router';
  
export const canActiveProduct: CanActivateFn = (
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
) => {
let isLogin = false;
if (isLogin) {
    return true;
} else {
    return false;
}
};
  