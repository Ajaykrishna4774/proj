import { Component, OnInit } from '@angular/core';
import { companyService } from '../company.service';
import { Company } from '../company';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {


  constructor(private router:Router,private companyservice:companyService) { }
  company : Company=new Company();  
  submitted = false;  
  
  ngOnInit() {
    var id = window.localStorage.getItem("edit-companyname");
    if (id !== null && id != "") {
      this.companyservice.find(id)

        .subscribe(data => {
        this.company = data;
          this.companysaveform.setValue(this.company);
        });

      this.submitted = false;

    }


  }
  companysaveform=new FormGroup({  
    companyname:new FormControl('',[Validators.required , Validators.minLength(4) ]),
    turnover:new FormControl('',[Validators.required , Validators.minLength(4) ]),
    ceo:new FormControl('',[Validators.required]),
    boardofdirectors:new FormControl('',[Validators.required]),
    listedinstock:new FormControl('',[Validators.required]),
    sector:new FormControl('',[Validators.required]),
    briefwriteup:new FormControl('',[Validators.required, Validators.minLength(4)]),
    stockcode:new FormControl('',[Validators.required, Validators.minLength(4)]),
     });  
  saveCompany(saveCompany){  
    this.company=new Company();     
    this.company.companyname=this.CompanyName.value; 
    this.company.turnover=this.Turnover.value;
    this.company.ceo=this.Ceo.value;
    this.company.boardofdirectors=this.Boardofdirectors.value;
    this.company.listedinstock=this.Listedinstock.value;
    this.company.sector=this.Sector.value;
    this.company.briefwriteup=this.Briefwriteup.value;
    this.company.stockcode=this.Stockcode.value;
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.companyservice.saveCompany(this.company)  
    .subscribe(data => console.log(data), error => console.log(error));  
  this.company = new Company();
  window.localStorage.removeItem("edit-companyname");

  this.router.navigate(['manage-company'])  
    }  
  
  get CompanyName(){  
    return this.companysaveform.get('companyname');  
  } 
  get Turnover(){  
    return this.companysaveform.get('turnover');  
  } 
  get Ceo(){  
    return this.companysaveform.get('ceo');  
  } 
  get Boardofdirectors(){  
    return this.companysaveform.get('boardofdirectors');  
  } 
  get Listedinstock(){  
    return this.companysaveform.get('listedinstock');  
  } 
  get Sector(){  
    return this.companysaveform.get('sector');  
  } 
  
  get Briefwriteup(){  
    return this.companysaveform.get('briefwriteup');  
  } 
  get Stockcode(){  
    return this.companysaveform.get('stockcode');  
  } 
 
  
  saveCompanyForm(){  
    this.submitted=false;  
    this.companysaveform.reset();  
  }  
  
}
