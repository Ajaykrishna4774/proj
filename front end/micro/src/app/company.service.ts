
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Company } from './company';
@Injectable({
  providedIn: 'root'
})
export class companyService {
  private baseUrl = 'http://localhost:8082/company/company/';  

  constructor(private http:HttpClient){}
  getAllCompanies(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllcompines');  
  }  
 
  saveCompany(company: Company): Observable<Company> {  
    return this.http.post<Company>(this.baseUrl+'saveCompany', company);  
  }  
   
  deleteCompany(companyname: String): Observable<object> {  
    return this.http.delete<Company>(this.baseUrl+'deletecomapany/'+companyname);  
  }  
  
  find(companyname: String): Observable<Company> {  
    return this.http.get<Company>(this.baseUrl+'findOneInAll1/'+companyname);  
  }  
  
  updateCompany(companyname: String): Observable<object> {  
    return this.http.put(this.baseUrl+'updatecompany/{companyname}',companyname);  
  }  
}


