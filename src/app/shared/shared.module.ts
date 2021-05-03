import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PimeNGImportsModule } from './primeng-imports.module';
import { DataTableComponent } from './components/data-table/data-table.component';


@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    PimeNGImportsModule
  ],
  exports: [DataTableComponent]
})
export class SharedModule { }
