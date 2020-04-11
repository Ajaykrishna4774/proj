import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from './sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private baseUrl = 'http://localhost:8082/sector/sectors/';  

  constructor(private http:HttpClient){}
  getAllSector(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getSectorId');  
  }  
  
  saveSector(sector: Sector): Observable<Sector> {  
    return this.http.post<Sector>(this.baseUrl+'saveSector/', sector);  
  }  
  
  deleteSector(sectorid: number): Observable<object> {  
    return this.http.delete<Sector>(this.baseUrl+'deleteSectordetails/'+sectorid);  
  }  
  
  find(sectorid: number): Observable<Sector> {  
    return this.http.get<Sector>(this.baseUrl+'findOneInAll3/'+sectorid);  
  }  
  
  updateSector(sectorid: object): Observable<Object> {  
    return this.http.put(this.baseUrl+'updateSector/{sectorid}',+ sectorid);  
  }  
}



