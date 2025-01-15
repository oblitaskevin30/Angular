
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public signupForm!: FormGroup;
  isSpinning : boolean = false;


  constructor (private formBuilder : FormBuilder , private authService : AuthService){
    this.signupForm = this.formBuilder.group({
      name : [null,[Validators.required]],
      email : [null,[Validators.required, Validators.email]],
      password:[null , [Validators.required]],
      confirmPassword:[null , [Validators.required] , this.confirmationValidator]
    })
  }

  
  confirmationValidator = (control : FormControl) : Observable<{[s:string] : boolean}> => {
      // Si el control está vacío, no se realiza ninguna validación.
      if (!control.value) {
        return of(null);
      }
      // Si las contraseñas no coinciden, devolvemos un error.
      if (control.value !== this.signupForm.controls['password'].value) {
        return of({ confirm: true, error: true });
      }
      return of(null);  // Si no hay error, retornamos null.
    }
  
  public singup() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.signup(this.signupForm.value).subscribe((res)=>{
        console.log(res)
      })
    } else {
      console.log("Formulario no válido");
    }
  }



}
