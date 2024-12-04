import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {

  public countries : Country[] = [];
  public regionList : string[] = ['Africa','Americas','Asia' , 'Europe','Oceania'];
  public selectedRegion?  : String ;


  constructor(private countryService : CountryService) {
    
  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.term
  }


  searchByRegion(searchRegion : string) : void{
    this.selectedRegion = searchRegion;
    this.countryService.searchRegion(searchRegion).subscribe(countryList => {
      this.countries = countryList;
    })
  }
}
