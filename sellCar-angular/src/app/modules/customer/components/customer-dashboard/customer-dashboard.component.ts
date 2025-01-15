import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {

  public carsList = [];

  constructor(
    private httpService : CustomerService,
    private router : Router
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.findAllCars()
  }

  findAllCars() : void {
    this.httpService.findAllCars().subscribe(
      (res) =>{
        this.carsList = res ;
        console.log(res);
      }
    )
  }

}
