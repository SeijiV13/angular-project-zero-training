import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

const PRIMENG_MODULES = [
  TableModule,
  CardModule
];

@NgModule({
  imports: PRIMENG_MODULES,
  exports: PRIMENG_MODULES
})
export class PimeNGImportsModule { }
