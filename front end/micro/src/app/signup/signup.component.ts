import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private userservice: UserService) { }
  user: User = new User();
  
selectedFiles: FileList;  
  submitted = false;
  public userFile: any = File;

  ngOnInit() {
    var id = window.localStorage.getItem("edit-username");
    if (id !== null && id != "") {
      this.userservice.find(id)

        .subscribe(data => {
          this.user = data;

          this.usersaveform.setValue(this.user);
        });
      this.submitted = false;
    }

  }

  usersaveform = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mobileno: new FormControl('', [Validators.required, Validators.minLength(7)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
   
    usertype:new FormControl(),
    confirmed:new FormControl(),

    profileimage : new FormControl(),


  });
  saveUser(saveUser) {
    if (this.usersaveform.invalid) {
      alert("Invalid Form");

    }
    else {

      this.user = new User();
      this.user.firstname = this.FirstName.value;
      this.user.lastname = this.LastName.value;

      this.user.email = this.Email.value;
      this.user.gender = this.Gender.value;
      this.user.address = this.Address.value;
      this.user.mobileno = this.Mobileno.value;
      this.user.username = this.UserName.value;
      this.user.password = this.Password.value;
      this.user.profileimage=this.Profileimage.value;
     
      this.user.usertype = "user";
      this.user.confirmed = "no"; 
       this.submitted = true;
      this.save();
    }
  }


  onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
  }
  save() {
    this.userservice.saveUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    window.localStorage.removeItem("edit-username");
    this.router.navigate(['userlist'])
  }

  get Profileimage(){



    return this.usersaveform.get('profileimage');
  
   }
  get FirstName() {
    return this.usersaveform.get('firstname');
  }
  get LastName() {
    return this.usersaveform.get('lastname');
  }
  get Gender() {
    return this.usersaveform.get('gender');
  }
  get Email() {
    return this.usersaveform.get('email');
  }
  get Address() {
    return this.usersaveform.get('address');
  }
  get Mobileno() {
    return this.usersaveform.get('mobileno');
  }

  get UserName() {
    return this.usersaveform.get('username');
  }
  get Password() {
    return this.usersaveform.get('password');
  }



  selectFile(event) {

    const file = event.target.files.item(0);



    if (file.type.match('image.*')) {

      var size = event.target.files[0].size;

      if (size > 1000000) {

        alert("size must not exceeds 1 MB");

        this.usersaveform.get('profileimage').setValue("");

      }

      else {

        this.selectedFiles = event.target.files;

      }

    } else {

      alert('invalid format!');

    }

  }

  saveUserForm() {
    this.submitted = false;
    this.usersaveform.reset();
  }

}
