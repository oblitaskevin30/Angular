import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CacheStore } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{

  public countries : Country[] = [];
  public initValue : string = ''; 

  constructor(private countryService : CountryService) {

  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initValue = this.countryService.cacheStore.byCountries.term;
  }

  searchByCountry(searchCountry : string) : void {
    this.countryService.searchCountry(searchCountry).subscribe(countryList =>{
      this.countries = countryList;
    })
  }
}
