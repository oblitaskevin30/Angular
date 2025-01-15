import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  public carsList = [];

  constructor(
    private httpService : AdminService,
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
