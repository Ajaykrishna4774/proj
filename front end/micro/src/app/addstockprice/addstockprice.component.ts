import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstockprice',
  templateUrl: './addstockprice.component.html',
  styleUrls: ['./addstockprice.component.css']
})
export class AddstockpriceComponent implements OnInit {
  constructor(private router:Router,private stockpriceService:StockpriceService) { }
  stockprice : Stockprice=new Stockprice();  
  submitted = false;  
  
  ngOnInit() {
    var id = window.localStorage.getItem("edit-stockexchange");
    if (id !== null && id != "") {
      this.stockpriceService.find(id)

        .subscribe(data => {
        this.stockprice = data;
          this.stockpricesaveform.setValue(this.stockprice);
        });

      this.submitted = false;

    }

  }

  stockpricesaveform=new FormGroup({  
    stockexchange:new FormControl('',[Validators.required , Validators.minLength(3) ]),
    companyname:new FormControl('',[Validators.required , Validators.minLength(3) ]),
    currentprice:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    time:new FormControl('',[Validators.required]),
    uploadfile:new FormControl('',[Validators.required])
     });  
     saveStockPrice(saveStockPrice){  
    this.stockprice=new Stockprice();     
    this.stockprice.stockexchange=this.Stockexchange.value; 
    this.stockprice.companyname=this.Companyname.value;
    this.stockprice.currentprice=this.Currentprice.value;
    this.stockprice.date=this.Date.value;
    this.stockprice.time=this.Time.value;
    this.stockprice.uploadfile=this.Uploadfile.value;
    
   this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.stockpriceService.saveStockPrice(this.stockprice)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.stockprice = new Stockprice();  
    window.localStorage.removeItem("edit-stockexchange");

    this.router.navigate(['stockprice'])  
    
  }  
  
  get Stockexchange(){  
    return this.stockpricesaveform.get("stockexchange");  
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
   
  selectFile(event) {

    const file = event.target.files.item(0);


    alert(file.type);

    if (file.type.match('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {

      var size = event.target.files[0].size;

      if (size > 1000000) {

        alert("size must not exceeds 1 MB");

        this.stockpricesaveform.get('uploadfile').setValue("");

      }

      else {

        this.stockpricesaveform = event.target.files;

      }

    } else {

      alert('invalid format!');

    }

  }

  
  saveCompanyForm(){  
    this.submitted=false;  
    this.stockpricesaveform.reset();  
  }  
  
}
