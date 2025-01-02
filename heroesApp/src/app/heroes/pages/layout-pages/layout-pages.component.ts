import { Component } from '@angular/core';
import { AuthSerivice } from '../../../auth/services/service.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.component.html',
  styleUrl: './layout-pages.component.css'
})
export class LayoutPagesComponent {

  constructor(
    private authService : AuthSerivice,
    private router : Router
  ){

  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

  get getUser() : User | undefined {
    return this.authService.currrentUser;

  }

}
