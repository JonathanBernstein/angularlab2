import { Component, OnInit } from '@angular/core';
import { Post }  from '../postList';


@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;
  posts: Post[] = [

      {  
      title: "lorum ipsum",
      post: "dsfjskjsdjkdskjdskjdsjkdkfjdskjdfsjdkkjdskjsdjkdskhfdkh"
      }, 

      {
        title: "lorum ipsum pipsum",
        post: "lorum quorum ipsum sigil kdjlskjflkdlkdsljkdslksdkldjfs"
      }
    
    ];
 



  constructor() { }

  onSubmit(post: Post): void {
    this.posts.unshift(post)
    this.show = false;
  }

  toggleForm(): void {

  this.show = !this.show;
  }

  ngOnInit() {
  }

  

  
}