import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNew: User = new User();
  constructor(private router: Router, private userservice: UserService) { }
  user: User = new User();

  submitted = false;


  ngOnInit() {
    this.submitted = false;
  }
  usersaveform = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  saveUser(saveuser) {
    this.user = new User();
    this.user.username = this.UserName.value;
    this.user.password = this.Password.value;
    //this.submitted = true;
    //alert(this.user.username+" "+ this.user.password);
    this.userservice.findByUsernameAndPassword(this.user.username, this.user.password).subscribe(data => {

      this.userNew = data;

      if (this.userNew != null && this.userNew.usertype == 'admin') {
        alert("Welcome Admin");
        this.router.navigate(['admin']);

      }

      else if (this.userNew != null && this.userNew.usertype == 'user') {
        alert("Welcome User");
        this.router.navigate(['user']);

      }
      else{
        alert("invalid Credentials");
      this.router.navigate(['login']);

      }

    },

      error => console.log(console.error()));

  }

  get UserName() {
    return this.usersaveform.get('username');
  }
  get Password() {
    return this.usersaveform.get('password');
  }

}

