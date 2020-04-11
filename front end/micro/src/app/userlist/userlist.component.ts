import { Component, OnInit } from '@angular/core';


import { UserService } from '../user.service';

import { User } from '../user';

import { FormGroup, FormControl } from '@angular/forms';

import { Subject } from 'rxjs/internal/Subject';

import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({

  selector: 'app-userlist',

  templateUrl: './userlist.component.html',

  styleUrls: ['./userlist.component.css']

})

export class UserListComponent implements OnInit {
  isupdated: false;
  constructor(private router:Router,private userservice:UserService) { }
   
  userList: Observable<User[]>;

  ngOnInit() {
 
   this.userservice.getAllUser().subscribe(data => {
 
    this.userList = data;
   })
  }
  updateUser(user: User) {
    window.localStorage.removeItem("edit-username");

    window.localStorage.setItem("edit-username", user.username.toString());
   
    this.router.navigate(['signup']);
    
   }
   
 deleteUser(user:User)



 {



 this.userservice.deleteUser(user.username).subscribe(data=>{



 this.userservice.getAllUser().subscribe(data=>{this.userList=data;});



 });

 }
  userupdateform=new FormGroup({  
    firstname:new FormControl(),
    lastname:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    address:new FormControl(),
    mobileno:new FormControl(),
    username:new FormControl(),
    password:new FormControl(),
    confirmed:new FormControl(), 
    profileimage:new FormControl()
  }); 
  
  get FirstName(){  
    return this.userupdateform.get('firstname');  
  } 
  get LastName(){  
    return this.userupdateform.get('lastname');  
  } 
  get Gender(){  
    return this.userupdateform.get('gender');  
  } 
  get Email(){  
    return this.userupdateform.get('email');  
  } 
  get Address(){  
    return this.userupdateform.get('address');  
  } 
  get Mobileno(){  
    return this.userupdateform.get('mobileno');  
  } 
  
  get UserName(){  
    return this.userupdateform.get('username');  
  } 
  get Password(){  
    return this.userupdateform.get('password');  
  } 
  get Confirmed(){  
    return this.userupdateform.get('confirmed');  
  } 
  get Profileimage(){  
    return this.userupdateform.get('profileimage');  
  } 

  changeisupdate(){
    this.isupdated=false;
  }
  
  
}