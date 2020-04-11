import { Component, OnInit } from '@angular/core';
import { IpodetailsService } from '../ipodetails.service';
import { Ipos } from '../ipos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addipo',
  templateUrl: './addipo.component.html',
  styleUrls: ['./addipo.component.css']
})
export class AddipoComponent implements OnInit {
  constructor(private router:Router,private ipodetailsservice:IpodetailsService) { }
  ipos : Ipos=new Ipos();  
  submitted = false;  
  
  ngOnInit() {
    
    if (id !== null && id != "") {
      var id = window.localStorage.getItem("edit-ipoid");
      this.ipodetailsservice.find(parseInt(id))

        .subscribe(data => {
        this.ipos = data;
          this.iposaveform.setValue(this.ipos);
        });

      this.submitted = false;

    }

  }

  iposaveform=new FormGroup({ 
    ipoid:new FormControl('',[Validators.required , Validators.minLength(3) ]),
    companyname:new FormControl('',[Validators.required , Validators.minLength(4) ]),
    stockexchange:new FormControl('',[Validators.required]),
    pricepershare:new FormControl('',[Validators.required]),
    totalnoofshares:new FormControl('',[Validators.required]),
    opendatetime:new FormControl('',[Validators.required]),
     }); 

     saveIpos(saveIpos){  
      this.ipos=new Ipos();     
      this.ipos.ipoid=this.Ipoid.value; 
      this.ipos.companyname=this.Companyname.value;
      this.ipos.stockexchange=this.Stockexchange.value;
      this.ipos.pricepershare=this.Pricepershare.value;
      this.ipos.totalnoofshares=this.Totalnoofshares.value;
      this.ipos.opendatetime=this.Opendatetime.value;
       this.submitted = true;  
      this.save();  
    } 
     
    save() {  
      this.ipodetailsservice.saveIpos(this.ipos)  
        .subscribe(data => console.log(data), error => console.log(error));  
      this.ipos = new Ipos(); 
      window.localStorage.removeItem("edit-ipoid");
  this.router.navigate(['iops'])  
    
    }  
    
  get Ipoid(){  
    return this.iposaveform.get('ipoid');  
  } 
  get Stockexchange(){  
    return this.iposaveform.get('stockexchange');  
  } 
  get Pricepershare(){  
    return this.iposaveform.get('pricepershare');  
  } 
  get Totalnoofshares(){  
    return this.iposaveform.get('totalnoofshares');  
  } 
  get Opendatetime(){  
    return this.iposaveform.get('opendatetime');  
  } 
  get Companyname(){  
    return this.iposaveform.get('companyname');  
  } 
  
  
  saveIpoForm(){  
    this.submitted=false;  
    this.iposaveform.reset();  
  }  
  
}

