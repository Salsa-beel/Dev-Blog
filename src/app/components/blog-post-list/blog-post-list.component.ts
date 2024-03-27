import { Component, Input, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service/blog-service.service';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {

blogPosts: BlogPost[] = [];

  constructor( private blogService:BlogServiceService) { }
  ngOnInit() {
    this.getBlogPosts();
  }


  getBlogPosts(){
    this.blogService.getPosts().subscribe(posts => {
      this.blogPosts = posts;

    });

  }
}
