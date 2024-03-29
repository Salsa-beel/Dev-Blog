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
  currentPage: number = 1;
  itemsPerPage: number = 9; // Add this line
  allPosts: number = 0; // Initialize allPosts

  constructor(private blogService: BlogServiceService) { }

  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.blogService.getPosts().subscribe(posts => {
      this.blogPosts = posts;
      this.allPosts = this.blogPosts.length; // Update allPosts after fetching blog posts
    });
  }

  get paginatedBlogPosts(): BlogPost[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.blogPosts.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;

  }


}
