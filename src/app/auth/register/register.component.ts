import { Component, OnInit } from '@angular/core';
import {register} from "ts-node";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterDto} from "../register-dto";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  registerDto : RegisterDto;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
   this.registerForm = this.formBuilder.group({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  });
    this.registerDto= {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
   this.registerDto.username= this.registerForm.get('username').value;
   this.registerDto.email= this.registerForm.get('email').value;
   this.registerDto.password= this.registerForm.get('password').value;
   this.registerDto.confirmPassword= this.registerForm.get('confirmPassword').value;
   this.authService.register(this.registerDto).subscribe(data =>{
     console.log("register successful")
   },error => {
     console.log("register failed")
   });
  }
}
