import { Pipe, PipeTransform } from '@angular/core';
import { SortPipe } from './sort.pipe';

@Pipe({
  name: 'sortImpure',
  pure: false
})
export class SortImpurePipe extends SortPipe {

  constructor() {
    super();
  }

}
