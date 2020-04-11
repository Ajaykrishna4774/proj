import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipos } from './ipos';

@Injectable({
  providedIn: 'root'
})
export class IpodetailsService {
  private baseUrl = 'http://localhost:8082/ipodetails/ipoDetails/';  

  constructor(private http:HttpClient){}
  getAllIpos(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllIpoDetails');  
  }  
 
  saveIpos(ipos: Ipos): Observable<Ipos> {  
    return this.http.post<Ipos>(this.baseUrl+'saveIpodetails', ipos);  
  }  
  
  deleteIpos(ipoid: number): Observable<object> {  
    return this.http.delete<Ipos>(this.baseUrl+'deleteipodetails/'+ipoid);  
  }  
   
  find(ipoid: number): Observable<Ipos> {  
    return this.http.get<Ipos>(this.baseUrl+'findOneInAll2/'+ipoid);  
  }  
   
  
  updateIpos(ipoid: number): Observable<object> {  
    return this.http.put(this.baseUrl+'updateIpodetails/{iopid}',ipoid);  
  }  
}


