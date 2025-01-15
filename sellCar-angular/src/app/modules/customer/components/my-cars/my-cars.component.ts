import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrl: './my-cars.component.css'
})
export class MyCarsComponent {

  public cars = [];

  constructor(
    private customerService : CustomerService,
    private router : Router
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.findMyCars();
  }

  findMyCars(){
    this.customerService.findMyCars().subscribe(
      (res) => {
        console.log(res);
        this.cars = res;
      }
    )
  }
  

}
