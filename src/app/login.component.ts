import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {Router} from '@angular/router';
import {Route} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent {
    
    public users : string[] = ["abc", "xyz"];
    public actualPasswords : string[] = ["pass", "letmein"];

    userName: string = "";
    password: string = "";
  
    login() {
    if (this.users.includes(this.userName) && this.actualPasswords.includes(this.password) ){
      this.router.navigate(['/tasks'])
    } else{
        alert('The password you entered is incorrect, please email sandeepiniacharya93@gmail.com for login details!')
    }
    }
      
    constructor(private router: Router){
  
    }
  }

