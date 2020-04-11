import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {

  
  isupdated: boolean;
  constructor(private router:Router,private stockpriceService:StockpriceService) { }
   
  stockpriceList: Observable<Stockprice[]>;

  ngOnInit() {
 
   this.stockpriceService.getAllStockPrice().subscribe(data => {
 
    this.stockpriceList = data;
 
   })
  }
  updateStockPrice(stockprice:Stockprice) {
    window.localStorage.removeItem("edit-stockexchange");
  
  
  
      window.localStorage.setItem("edit-stockexchange", stockprice.stockexchange.toString());
  
     
     
      this.router.navigate(['addstockprice']);
  
   
  }
  deleteStockPrice(stockprice:Stockprice)
  
  
  
   {
  
  
   this.stockpriceService.deleteStockPrice(stockprice.stockexchange).subscribe(data=>{
  
  
  
   this.stockpriceService.getAllStockPrice().subscribe(data=>{this.stockpriceList=data;});
  
  
  
   });
  
  }
  stockpricesaveform=new FormGroup({  
    stockexchange:new FormControl('',[Validators.required , Validators.minLength(3) ]),
    companyname:new FormControl('',[Validators.required , Validators.minLength(3) ]),
    currentprice:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    time:new FormControl('',[Validators.required]),
    uploadfile:new FormControl('',[Validators.required])
     });  
     get Stockexchange(){  
      return this.stockpricesaveform.get('stockexchange');  
    } 
    get Companyname(){  
      return this.stockpricesaveform.get('companyname');  
    } 
    get Currentprice(){  
      return this.stockpricesaveform.get('currentprice');  
    } 
    get Date(){  
      return this.stockpricesaveform.get('date');  
    } 
    get Time(){  
      return this.stockpricesaveform.get('time');  
    } 
    get Uploadfile(){
      return this.stockpricesaveform.get('uploadfile');
    }
  
  
  
}
