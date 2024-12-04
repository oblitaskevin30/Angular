import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponentComponent } from './components/table-component/table-component.component';




@NgModule({
  declarations: [
    ByCapitalPageComponent,
    CountryPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,
    TableComponentComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
