import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostDto} from "./post/post-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private httpClient: HttpClient) { }


  addPost(postDto:PostDto){
   return this.httpClient.post('http://localhost:8080/api/post/new',postDto);
  }





}

