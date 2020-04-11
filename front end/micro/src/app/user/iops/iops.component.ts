import { Component, OnInit } from '@angular/core';
import { IpodetailsService } from 'src/app/ipodetails.service';
import { Ipos } from 'src/app/ipos';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-iops',
  templateUrl: './iops.component.html',
  styleUrls: ['./iops.component.css']
})
export class IopsComponent implements OnInit {

  isupdated: boolean;
  constructor(private router:Router,private Ipodetailsservice:IpodetailsService) { }
   
  iposList: Observable<Ipos[]>;

  ngOnInit() {
 
   this.Ipodetailsservice.getAllIpos().subscribe(data => {
 
    this.iposList = data;
 
   })
  }
  updateIpos(ipos:Ipos) {
    window.localStorage.removeItem("edit-ipoid");
  
  
  
      window.localStorage.setItem("edit-ipoid", ipos.ipoid.toString());
  
     
     
      this.router.navigate(['addipo']);
  
   
  }
  deleteIpos(ipos:Ipos)



 {


 this.Ipodetailsservice.deleteIpos(ipos.ipoid).subscribe(data=>{



 this.Ipodetailsservice.getAllIpos().subscribe(data=>{this.iposList=data;});



 });

}
iposaveform=new FormGroup({ 
  ipoid:new FormControl('',[Validators.required , Validators.minLength(3) ]),
  companyname:new FormControl('',[Validators.required , Validators.minLength(4) ]),
  stockexchange:new FormControl('',[Validators.required]),
  pricepershare:new FormControl('',[Validators.required]),
  totalnoofshares:new FormControl('',[Validators.required]),
  opendatetime:new FormControl('',[Validators.required]),
   }); 
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
  

  
}

