// Import necessary modules and libraries
import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-blog-post-item', // Component selector
  templateUrl: './blog-post-item.component.html', // Template file path
  styleUrls: ['./blog-post-item.component.css'] // Stylesheet file paths
})
export class BlogPostItemComponent implements OnInit {

  @Input() blogPost!: BlogPost; // Input property to receive blog post data

  constructor() { }

  ngOnInit() {

  }
}
