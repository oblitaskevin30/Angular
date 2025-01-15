import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/service/storage/storage.service';
const BASE_URL = "http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) { }
  
    postCar(formData : any) : Observable<any>{
      console.log("post car customer service")
      return this.http.post(`${BASE_URL}/api/admin/car` , formData , {
        headers : this.createAutorizationHeader()
      })
    }
  
    findAllCars(): Observable<any>{
      return this.http.get(`${BASE_URL}/api/admin/cars`,{
        headers : this.createAutorizationHeader()
      });
    }
  
    createAutorizationHeader() : HttpHeaders {
      console.log("header autorization function customer service")
      console.log(`Bearer ${StorageService.getToken()}`)
      
      let authHeaders : HttpHeaders = new HttpHeaders();
      authHeaders = authHeaders.set(
        'Authorization',
        `Bearer ${StorageService.getToken()}`
      )
      console.log(authHeaders)
      return authHeaders;
    }
}
