import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Subject } from 'rxjs/internal/Subject';

import { Observable } from 'rxjs/internal/Observable';
import { companyService } from 'src/app/company.service';
import { Company } from 'src/app/company';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

isupdated: boolean;
  
constructor(private router:Router,private companyservice: companyService) { }

companyList: Observable<Company[]>;

ngOnInit() {

  this.companyservice.getAllCompanies().subscribe(data => {
 
    this.companyList = data;
 
  })
}
updateCompany(company:Company) {
  window.localStorage.removeItem("edit-companyname");



    window.localStorage.setItem("edit-companyname", company.companyname.toString());

   
   
    this.router.navigate(['addcompany']);

 
}
deleteCompany(company:Company)



 {


 this.companyservice.deleteCompany(company.companyname).subscribe(data=>{



 this.companyservice.getAllCompanies().subscribe(data=>{this.companyList=data;});



 });

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

  }