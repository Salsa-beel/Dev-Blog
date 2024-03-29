import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostItemComponent } from './components/blog-post-list/blog-post-item/blog-post-item.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { ErrorMessageComponent } from './shared-components/error-message/error-message.component';
import { LoadingIndicatorComponent } from './shared-components/loading-indicator/loading-indicator.component';
import { PaginationComponent } from './shared-components/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostListComponent,
    BlogPostItemComponent,
    ErrorMessageComponent,
    LoadingIndicatorComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
