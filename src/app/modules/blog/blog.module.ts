import { BlogRoutes } from './blog.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutes
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
