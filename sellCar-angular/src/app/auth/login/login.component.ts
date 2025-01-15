import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { StorageService } from '../service/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    public loginForm!: FormGroup;
    public isSpinning : boolean = false;
  
  
    constructor (
      private formBuilder : FormBuilder, 
      private authService : AuthService,
      private router : Router
    ){
      this.loginForm = this.formBuilder.group({
        email : [null,[Validators.required, Validators.email]],
        password:[null , [Validators.required]],
      })
    }
  
    public login() {
      this.isSpinning = true;
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
        this.authService.login(this.loginForm.value).subscribe((res)=>{
          console.log(res);
          if(res.userId !== null){
            const user = {
              id : res.userId,
              role :res.userRole
            }
          StorageService.saveToken(res.jwt);
          StorageService.saveUser(user)
          console.log("login antes de router")
          if(StorageService.isAdminLoggedIn()) this.router.navigate(["/admin/dashboard"]);
          else if(StorageService.isCustomerLoggedIn()) this.router.navigate(["/customer/dashboard"])
            console.log("login despues de router")
          }else {
            console.log("bad credentials")
          }
        })
      } else {
        console.log("Formulario no válido");
      }
      this.isSpinning = false;
    }
    
}
