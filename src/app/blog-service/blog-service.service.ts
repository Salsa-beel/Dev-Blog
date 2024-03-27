import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {


  private apiUrl = " https://dev.to/api/articles"


constructor(private http: HttpClient) { }

getPosts(): Observable<BlogPost[]> {
  return this.http.get<BlogPost[]>(this.apiUrl);

}
}
