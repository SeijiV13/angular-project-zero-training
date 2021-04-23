import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductResolver } from 'src/app/core/resolvers/product.resolver';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ProductResolver],
  declarations: []
})
export class ProductModule { }
