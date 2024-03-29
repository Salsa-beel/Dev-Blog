import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.model';


@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.css']
})
export class BlogPostItemComponent implements OnInit {

  @Input() blogPost!:BlogPost;

  constructor( ) { }

  ngOnInit() {

  }



}
