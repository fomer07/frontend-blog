import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterDto} from "./register-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {

  }

  register(registerDto: RegisterDto) : Observable<any> {
    return this.httpClient.post(this.url+'signup',registerDto);
  }
}
