import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service/blog-service.service';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(private blogservice: BlogServiceService) { }

  ngOnInit() {
    this.fetchBlogPosts(); // Fetch blog posts on component initialization
  }

  fetchBlogPosts(): void {
    this.isLoading = true; // Set loading state to true
    this.blogservice.getPosts().subscribe(
      (posts: BlogPost[]) => {
        this.blogPosts = posts; // Assign fetched posts to the array
        this.isLoading = false; // Set loading state to false
      },
      (error: any) => {
        console.error('Error fetching blog posts:', error); // Log error to console
        this.isError = true; // Set error state to true
        this.isLoading = false; // Set loading state to false
      }
    );
  }

  retryFetchBlogPosts(): void {
    this.isError = false; // Reset error state
    this.isLoading = true; // Set loading state to true
    this.fetchBlogPosts(); // Retry fetching blog posts
  }
}
