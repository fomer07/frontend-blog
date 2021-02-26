import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PostDto} from "./post-dto";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {PostServiceService} from "../post-service.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  addPostForm: FormGroup;

  postDto:PostDto;

  constructor(private formBuilder: FormBuilder, private postservice:PostServiceService,private router: Router) {
    this.addPostForm = formBuilder.group({
      title:'',
      content:''
    })
    this.postDto={
      id:'',
      title:'',
      content:'',
      username:''
    }
  }

  ngOnInit(): void {
  }

  addPost() {
    this.postDto.title=this.addPostForm.get('title').value;
    this.postDto.content=this.addPostForm.get('content').value;
    this.postservice.addPost(this.postDto).subscribe(data =>{
      this.router.navigateByUrl('/home');
    },error => {
      console.log('could not create post');
    })
  }
}
