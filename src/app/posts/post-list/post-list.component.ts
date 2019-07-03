import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {

  posts:Post[]=[];
  private subScription:Subscription;
  constructor(public PostService:PostService) {

   }
  

  ngOnInit() {
    // this.posts=this.PostService.getPosts();
  this.subScription=this.PostService.getUpdated().subscribe((posts:Post[])=>{
     this.posts=posts;
   });
    console.log(this.posts);
  }
  ngOnDestroy(){
    this.subScription.unsubscribe();
  }

}
