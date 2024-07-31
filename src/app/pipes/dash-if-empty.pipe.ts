import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string | any {
    const EMPTY_VALUE = value === undefined || value === null || value === "";
    if(EMPTY_VALUE){
       return '---';
    }
    return value;
  }

}
