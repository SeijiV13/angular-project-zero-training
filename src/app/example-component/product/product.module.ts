import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductResolver } from 'src/app/core/resolvers/product.resolver';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ProductResolver],
  declarations: []
})
export class ProductModule { }
