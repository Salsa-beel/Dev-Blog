import { Component, Input, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service/blog-service.service';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
  @Input() blogPosts: BlogPost[] = [];
  currentPage = 1;
  itemsPerPage = 9;
  allPosts = 0;
  isLoading = false;
  isError = false;

  constructor(private blogService: BlogServiceService) { }

  ngOnInit() {
    this.fetchBlogPosts();
  }

  // Fetch blog posts from the service
  private fetchBlogPosts(): void {
    this.isLoading = true;
    this.blogService.getPosts().subscribe(
      (posts: BlogPost[]) => {
        this.blogPosts = posts;
        this.allPosts = this.blogPosts.length;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching blog posts:', error);
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

  // Get the currently paginated blog posts
  get paginatedBlogPosts(): BlogPost[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.blogPosts.slice(startIndex, endIndex);
  }

  // Handle page change event
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
}
