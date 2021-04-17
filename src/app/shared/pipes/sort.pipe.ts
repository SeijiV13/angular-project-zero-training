import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';

@Pipe({
  name: 'sortPure'
})
export class SortPipe implements PipeTransform {

  transform(value: User[], field: string) {
    if (!Array.isArray(value)) {
      return;
    }

    return value.sort((a, b) => (a[field] > b[field]) ? 1 : (a[field] < b[field]) ? -1 : 0);
  }

}
