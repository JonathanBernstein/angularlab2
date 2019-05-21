import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {postList} from "../postList";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   @Input() post: postList[];
  constructor() { }

  ngOnInit() {
  }

}
