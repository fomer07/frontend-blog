import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterDto} from "./register-dto";
import {Observable} from "rxjs";
import {LoginDto} from "./login-dto";
import {LocalStorageService} from "ngx-webstorage";
import {JwtAuthResponse} from "./jwtAuthResponse";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient,private localStorageService:LocalStorageService) {

  }

  register(registerDto: RegisterDto) : Observable<any> {
    return this.httpClient.post(this.url+'signup',registerDto);
  }

  login(loginDto: LoginDto) : Observable<boolean>{
    return this.httpClient.post<JwtAuthResponse>(this.url+'login',loginDto).pipe(map(data =>{
      this.localStorageService.store('authToken',data.authToken);
      this.localStorageService.store('username',data.username);
      return true;
    }));
  }

  isAuthenticated():boolean{
    return this.localStorageService.retrieve('username') != null;
  }

  logOut(){
    this.localStorageService.clear('authToken');
    this.localStorageService.clear('username');
  }





}
