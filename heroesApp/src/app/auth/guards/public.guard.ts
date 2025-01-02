import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanMatch, GuardResult, MaybeAsync, Route, UrlSegment, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthSerivice } from '../services/service.service';


@Injectable({
    providedIn: 'root'
})
export class publicGuard implements CanActivate , CanMatch {

    constructor(
        private authService: AuthSerivice,
        private router: Router,
      ) { }
    
      private checkAuthStatus(): boolean | Observable<boolean> {
    
        return this.authService.checkAuthentication()
          .pipe(
            tap( isAuthenticated => console.log('Authenticated:', isAuthenticated ) ),
            tap( isAuthenticated => {
              if ( isAuthenticated ) {
                this.router.navigate(['./'])
              }
            }),
            map( isAuthenticated => !isAuthenticated )
          )
    
      }
    
    
      canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        // console.log('Can Match');
        // console.log({ route, segments })
        return this.checkAuthStatus();
      }
    
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        // console.log('Can Activate');
        // console.log({ route, state })
    
        return this.checkAuthStatus();
      }
}
