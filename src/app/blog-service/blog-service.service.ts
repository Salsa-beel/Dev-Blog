// Import necessary modules and libraries
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  // Define the API URL for fetching blog posts
  private apiUrl = " https://dev.to/api/articles";

  // Constructor to inject HttpClient
  constructor(private http: HttpClient) { }

  // Method to retrieve blog posts from the API
  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }
}
