import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{

  public isLoading : boolean = false;

  public countries : Country[] = [];

  public initialValue : string = '';

  constructor ( private countryService : CountryService) {

  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term : string) : void{
    this.isLoading = true;
    this.countryService.searchCapital(term).subscribe(countriesList =>{
      this.countries = countriesList
      this.isLoading = false;
    })
    console.log('desde by capital page');
    console.log(term)
    

  }
}
