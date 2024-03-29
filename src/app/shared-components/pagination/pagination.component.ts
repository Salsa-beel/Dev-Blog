import { Component, EventEmitter, Output } from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor() {}

  // Output EventEmitter to emit the page change event
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  // Method to emit page change event and scroll to top
  onPageChange(pageNumber: number) {
    this.emitPageChange(pageNumber);
    this.scrollToTop();
  }

  // Emit the page change event
  private emitPageChange(pageNumber: number) {
    this.pageChange.emit(pageNumber);
  }

  // Scroll to top of the page
  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
