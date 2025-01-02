import { Component } from '@angular/core';
import { AuthSerivice } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


  constructor(
    private authService : AuthSerivice,
    private router : Router
  ){}

  onLogin() : void {
    this.authService.login('fernando@gmail.com' , '123456')
    .subscribe(
      user =>{
        this.router.navigate(['/']);
        console.log(`${user}  en el login`)
      }
    )
  }

}
