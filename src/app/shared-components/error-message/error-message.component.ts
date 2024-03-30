import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service/blog-service.service';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  blogPosts: BlogPost[]=[];
  isLoading: boolean=false;
  isError: boolean=false;


  constructor(private blogservice:BlogServiceService) { }

  ngOnInit() {
    this.fetchBlogPosts();
  }

  fetchBlogPosts(): void {
    this.isLoading = true;
    this.blogservice.getPosts().subscribe(
      (posts: BlogPost[]) => {
        this.blogPosts = posts;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching blog posts:', error);
        this.isError = true;
        this.isLoading = false;
      }
    );
  }

  retryFetchBlogPosts(): void {
    // Reset error state
    this.isError = false;
    this.isLoading = true;
    // Retry fetching blog posts
    this.fetchBlogPosts();
  }
}
