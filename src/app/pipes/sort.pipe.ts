import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: Product[]): Product[] {
    return list.sort((a,b)=> a.name.localeCompare(b.name));
  }
}
