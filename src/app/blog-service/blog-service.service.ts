// Import necessary modules and libraries
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'; // Import catchError operator
import { Observable, throwError } from 'rxjs'; // Import Observable and throwError
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  // Define the API URL for fetching blog posts
  private apiUrl = "https://dev.to/api/articles"; // Fixed typo in the API URL

  // Constructor to inject HttpClient
  constructor(private http: HttpClient) { }

  // Method to retrieve blog posts from the API
  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl).pipe(
      catchError(this.handleError) // Pass handleError function to catchError
    );
  }

  // Error handling function
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred!'; // Default error message

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage); // Log the error to console
    return throwError(errorMessage); // Throw the error as observable
  }
}
