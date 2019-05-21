import { Component, OnInit } from '@angular/core';
import {postList} from "../postList";


@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
post: postList[] = [
  {title: "dfkdsfkdsjdfkjskjsdkj",
   post:"dfjkdsjkjdfsakjldsjldkskldasdslkdfslkjdsfkjdsjkfhjdfshjddfsjsdkjdjskjdfdsjkdjsjkdsjkdshjdskjdsjhdfskhdfjkshdfkdsfhdfksdhdsjkfdhkjd"},

   {title: "lorem ipsum pipsum ",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

  constructor() { }

  onSubmit(): void{
    
  }

  ngOnInit() {
  }

  
}