import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from 'src/app/stockexchange.service';
import { Observable } from 'rxjs';
import { Stockexchange } from 'src/app/stockexchange';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

 
  isupdated: boolean;
  constructor(private router:Router,private stockexchangeService:StockexchangeService) { }
   
  stockexList: Observable<Stockexchange[]>;

  ngOnInit() {
 
   this.stockexchangeService.getAllStockEx().subscribe(data => {
 
    this.stockexList = data;
 
   })
  }
  updateStockEx(stockexchange:Stockexchange) {
    window.localStorage.removeItem("edit-seid");
  
  
  
      window.localStorage.setItem("edit-seid", stockexchange.seid.toString());
  
     
     
      this.router.navigate(['addstockexchange']);
  
   
  }
  deleteStockEx(stockexchange:Stockexchange)



 {


 this.stockexchangeService.deleteStockEx(stockexchange.seid).subscribe(data=>{



 this.stockexchangeService.getAllStockEx().subscribe(data=>{this.stockexList=data;});



 });

}
stockexsaveform=new FormGroup({ 

  seid:new FormControl('',[Validators.required , Validators.minLength(3) ]),
  stock_exchange:new FormControl('',[Validators.required , Validators.minLength(4) ]),
  brief:new FormControl('',[Validators.required]),
  remarks:new FormControl('',[Validators.required]),
  contact_address:new FormControl('',[Validators.required]),
   }); 
   get Seid(){  
    return this.stockexsaveform.get('seid');  
  } 
  get Stock_exchange(){  
    return this.stockexsaveform.get('stock_exchange');  
  } 
  get Brief(){  
    return this.stockexsaveform.get('brief');  
  } 
  get Remarks(){  
    return this.stockexsaveform.get('remarks');  
  } 
  get Contact_address(){  
    return this.stockexsaveform.get('contact_address');  
  } 
  
  
  
}
