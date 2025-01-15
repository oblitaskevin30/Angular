import { Component } from '@angular/core';
import { StorageService } from './auth/service/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sellCar-angular';

  isAdminloggedIn : Boolean = StorageService.isAdminLoggedIn();
  iscustomerLoggedIn : Boolean = StorageService.isCustomerLoggedIn();

  constructor(private router : Router ){

  }

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if(event.constructor.name === "NavigationEnd" ){
        this.isAdminloggedIn = StorageService.isAdminLoggedIn();
        this.iscustomerLoggedIn = StorageService.isCustomerLoggedIn();
      }
    })
  }

  logout():void{
    StorageService.signout();
    this.router.navigate(["/login"])
  }
}
