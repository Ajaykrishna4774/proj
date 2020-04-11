import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {

  private baseUrl = 'http://localhost:8082/stockprice/stockPrice/';  

  constructor(private http:HttpClient){}
  getAllStockPrice(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllStockPrice');  
  }  

  saveStockPrice(stockprice: Stockprice): Observable<Stockprice> {  
    return this.http.post<Stockprice>(this.baseUrl+'savestockprice/', stockprice);  
  }  
  
  deleteStockPrice(stockexchange: String): Observable<any> {  
    return this.http.delete(this.baseUrl+'deletestockprice/'+stockexchange);  
  }  
    
  find(stockexchange: String): Observable<Stockprice> {  
    return this.http.get<Stockprice>(this.baseUrl+'findOneInAll5/'+stockexchange);  
  }  
  
  updateStockPrice(stockexchange: String): Observable<Object> {  
    return this.http.post(this.baseUrl+'/updateStockPrice/{stockexchange}',stockexchange);  
  }  
  getmultiplelinechart(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'multiplelinechart');  
  }  
  
  uploadFile(file: File, stockexchange: String): Observable<any> {

    let url = this.baseUrl + "uploadfile/" + stockexchange;



    const formdata: FormData = new FormData();



    formdata.append('file', file);



    return this.http.post(url, formdata);

  }

}

