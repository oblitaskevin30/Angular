import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthSerivice } from '../services/service.service';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanMatch, CanActivate {

    constructor( private authService : AuthSerivice,
        private router : Router
    ){

    }

    private checkAuthStatus() : Observable<boolean>{
        return this.authService.checkAuthentication().pipe(
            tap(isAuthenticated =>{
                if(!isAuthenticated){
                    this.router.navigate(['./auth/login'])
                }
            })
        )
    }


    canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        console.log('canMatch')
        console.log({route,segments})
        return this.checkAuthStatus();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        console.log('Can Activate')
        console.log({route,state})
        return this.checkAuthStatus();
    }

}