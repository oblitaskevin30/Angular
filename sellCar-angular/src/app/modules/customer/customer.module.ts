import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCarsComponent } from './components/my-cars/my-cars.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    PostCarComponent,
    MyCarsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class CustomerModule { }
