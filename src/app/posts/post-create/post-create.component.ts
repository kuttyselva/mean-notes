import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';

  constructor(public PostService:PostService) { }
  onAddPost(form:NgForm) {
    if(form.invalid){
      return;
    }
    const post:Post={
      title:form.value.title,content:form.value.content
    };
    // this.postCreated.emit(post);
    this.PostService.addPost(post);
    console.log(form.value.title,form.value.content);

  }
  ngOnInit() {
  
  }

}
