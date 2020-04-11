import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Stockexchange } from '../stockexchange';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstockexchange',
  templateUrl: './addstockexchange.component.html',
  styleUrls: ['./addstockexchange.component.css']
})
export class AddstockexchangeComponent implements OnInit {

 
  constructor(private router:Router,private stockexchangeService:StockexchangeService) { }
  stockex : Stockexchange=new Stockexchange();  
  submitted = false;  
  
  ngOnInit() {
    var id = window.localStorage.getItem("edit-seid");
    if (id !== null && id != "") {
      this.stockexchangeService.find(parseInt(id))

        .subscribe(data => {
        this.stockex = data;
          this.stockexsaveform.setValue(this.stockex);
        });

      this.submitted = false;

    }

  }
  stockexsaveform=new FormGroup({ 

    seid:new FormControl('',[Validators.required , Validators.minLength(3) ]),
    stock_exchange:new FormControl('',[Validators.required , Validators.minLength(4) ]),
    brief:new FormControl('',[Validators.required]),
    remarks:new FormControl('',[Validators.required]),
    contact_address:new FormControl('',[Validators.required]),
     }); 

     saveStockEx(saveStockEx){  
      this.stockex=new Stockexchange();     
      this.stockex.seid=this.Seid.value; 
      this.stockex.stock_exchange=this.Stock_exchange.value;
      this.stockex.brief=this.Brief.value;
      this.stockex.remarks=this.Remarks.value;
      this.stockex.contact_address=this.Contact_address.value;
        this.submitted = true;  
      this.save();  
    } 
     
    save() {  
      this.stockexchangeService.saveStockEx(this.stockex)  
        .subscribe(data => console.log(data), error => console.log(error));  
      this.stockex = new Stockexchange();  
      window.localStorage.removeItem("edit-seid");

      this.router.navigate(['manage-exchange'])  
      
    }  
    
    
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
  
  
  
  saveStockExForm(){  
    this.submitted=false;  
    this.stockexsaveform.reset();  
  }  
  
}


