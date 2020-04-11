import { Component, OnInit } from '@angular/core';
import { companyService } from '../company.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from '../company';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {
  
  
  constructor(private companyservice: companyService) { }

  company: Company = new Company();

  submitted = false;

  ngOnInit() {

    this.submitted = false;

  }

  companyupdateform = new FormGroup({
    companyname:new FormControl('',[Validators.required , Validators.minLength(4) ]),
    turnover:new FormControl('',[Validators.required , Validators.minLength(4) ]),
    ceo:new FormControl('',[Validators.required]),
    boardofdirectors:new FormControl('',[Validators.required]),
    listedinstock:new FormControl('',[Validators.required]),
    sector:new FormControl('',[Validators.required]),
    briefwriteup:new FormControl('',[Validators.required, Validators.minLength(4)]),
    stockcode:new FormControl('',[Validators.required, Validators.minLength(4)]),
   
  });

  updateCompany(updateCompany) {

    this.company = new Company();

    this.company.companyname = this.Companyname.value;

    this.company.turnover = this.Turnover.value

    this.company.ceo = this.Ceo.value;

    this.company.boardofdirectors = this.Boardofdirectors.value;

    this.company.listedinstock = this.Listedinstock.value;

    this.company.sector = this.Sector.value;

    this.company.briefwriteup = this.Briefwriteup.value;

    this.company.stockcode = this.Stockcode.value;

    this.submitted = true;

    this.update();

  }
  update() {

    this.companyservice.updateCompany(this.company.companyname)
  
     .subscribe(data => console.log(data), error => console.log(error));
  
    this.company = new Company();
  
   }
  


  get Companyname(){  
    return this.companyupdateform.get('companyname');  
  } 
  get Turnover(){  
    return this.companyupdateform.get('turnover');  
  } 
  get Ceo(){  
    return this.companyupdateform.get('ceo');  
  } 
  get Boardofdirectors(){  
    return this.companyupdateform.get('boardofdirectors');  
  } 
  get Listedinstock(){  
    return this.companyupdateform.get('listedinstock');  
  } 
  get Sector(){  
    return this.companyupdateform.get('sector');  
  } 
  
  get Briefwriteup(){  
    return this.companyupdateform.get('briefwriteup');  
  } 
  get Stockcode(){  
    return this.companyupdateform.get('stockcode');  
  } 
 
  
  updateCompanyForm(){  
    this.submitted=false;  
    this.companyupdateform.reset();  
  }  
  
}
