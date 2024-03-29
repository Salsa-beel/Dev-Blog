import { Component, EventEmitter, Output } from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor() {}

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();


  onPageChange(pageNumber: number) {
    this.pageChange.emit(pageNumber);
    this.scrollToTop();
  }

    scrollToTop() {
    // Scroll to top of the page using Renderer2
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
