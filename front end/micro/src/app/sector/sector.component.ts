import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(private router:Router,private sectorService :SectorService  ) { }
   
  sectorList: Observable<Sector[]>;

  ngOnInit() {
    
   this.sectorService.getAllSector().subscribe(data => {
 
    this.sectorList = data;
 
   })
  }
  updateSector(sector:Sector) {
    window.localStorage.removeItem("edit-sectorid");
  
  
  
      window.localStorage.setItem("edit-sectorid", sector.sectorid.toString());
  
     
     
      this.router.navigate(['addsector']);
  
   
  }
  deleteSector(sector:Sector)
  
  
  
   {
  
  
   this.sectorService.deleteSector(sector.sectorid).subscribe(data=>{
  
  
  
   this.sectorService.getAllSector().subscribe(data=>{this.sectorList=data;});
  
  
  
   });
  
  }
  sectorsaveform=new FormGroup({ 
    
    sectorid:new FormControl('',[Validators.required , Validators.minLength(3) ]),
    sectorname:new FormControl('',[Validators.required , Validators.minLength(4) ]),
    brief:new FormControl('',[Validators.required]),
     }); 
     get Sectorid(){  
      return this.sectorsaveform.get('sectorid');  
    } 
    get Sectorname(){  
      return this.sectorsaveform.get('sectorname');  
    } 
    get Brief(){  
      return this.sectorsaveform.get('brief');  
    } 
   
  
}

