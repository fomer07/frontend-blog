import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginDto} from "../login-dto";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {LocalStorageService} from "ngx-webstorage";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  loginDto : LoginDto;
  storage : LocalStorageService;

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    this.loginDto={
      username:'',
      password:''
    };

  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.loginDto.username=this.loginForm.get('username').value;
    this.loginDto.password=this.loginForm.get('password').value;

    this.authService.login(this.loginDto).subscribe(data =>{
      if (data){
        console.log('login successful');
        this.router.navigateByUrl('/home');
      }else {
        console.log('login failed');
      }
    });

  }
}
