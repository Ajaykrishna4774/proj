import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockexchange } from './stockexchange';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {

  private baseUrl = 'http://localhost:8082/stockexchange/stockExchange/';  

  constructor(private http:HttpClient){}
  getAllStockEx(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllStockExchange');  
  }  
  
  saveStockEx(stockex: Stockexchange): Observable<Stockexchange> {  
    return this.http.post<Stockexchange>(`${this.baseUrl}`+'savestockexchange', stockex);  
  }  
  
  deleteStockEx(seid: number): Observable<object> {  
    return this.http.delete<Stockexchange>(this.baseUrl+'deletestockexchange/'+seid);  
  }  
  
  find(seid: number): Observable<Stockexchange> {  
    return this.http.get<Stockexchange>(this.baseUrl+'findOneInAll4/'+seid);  
  }  
  
  updateStockEx(seid: number): Observable<object> {  
    return this.http.put(this.baseUrl+'updateStockExchange/{seid}', seid);  
  }  
}




