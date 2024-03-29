import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.model';


@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.css']
})
export class BlogPostItemComponent implements OnInit {

  @Input() blogPost!:BlogPost;

  constructor() { }

  ngOnInit() {

  }

//  handleImageLoad(event: any) {
//     if (!this.blogPost.cover_image) {
//       event.target.src = 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8lvvnvil0m75nw7yi6iz.jpg'; // Replace with the actual URL of the alternative image
//     }
//   }
}
