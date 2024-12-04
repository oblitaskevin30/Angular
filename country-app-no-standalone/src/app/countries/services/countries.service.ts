import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private apiUrl : string  = 'https://restcountries.com/v3.1'

    public cacheStore : CacheStore = {
        byCapital : {term : '' , countries : []},
        byCountries : {term : '' , countries : []},
        byRegion : {term : '' , countries : []}
    }

    constructor(private httpClient : HttpClient){  
        this.loadFromLocalStorage()
    }

    private saveToLocalStorage (){
        localStorage.setItem('cacheStore' , JSON.stringify(this.cacheStore))
    }

    private loadFromLocalStorage(){
        if(!localStorage.getItem('cacheStore')) return ;
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

    searchCapital ( searchCapital : string) : Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${searchCapital}`
        return  this.httpClient.get<Country[]>(url)
        .pipe(
            tap(
                (countries) => this.cacheStore.byCapital = {term : searchCapital , countries : countries}
            ),
            tap(
                () => this.saveToLocalStorage()
            ),
            catchError(error => {
                console.log(error);
                return of([])
            })
            
        );
    }
    searchRegion ( searchRegion: string) : Observable<Country[]>{
        const url = `${this.apiUrl}/region/${searchRegion}`
        return  this.httpClient.get<Country[]>(url).pipe(
            tap(
                countries => this.cacheStore.byRegion = {term : searchRegion , countries : countries}
            ),
            tap(
                () => this.saveToLocalStorage()
            ),
            catchError(error => {
                console.log(error);
                return of([])
            })
        );
    }
    searchCountry ( searchCountry : string) : Observable<Country[]>{
        const url = `${this.apiUrl}/name/${searchCountry}`
        return  this.httpClient.get<Country[]>(url).pipe(
            tap(
                countries => this.cacheStore.byCountries = {term : searchCountry , countries :  countries}
            ),
            tap(
                () => this.saveToLocalStorage()
            ),
            catchError(error => {
                console.log(error);
                return of([])
            })
        );
    }

    searchByCountryAlfaCode(code : string) : Observable<Country | null>{
        const url = `${this.apiUrl}/alpha/${code}`
        return this.httpClient.get<Country[]>(url).pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError(()=>of(null))

        );
    }
}