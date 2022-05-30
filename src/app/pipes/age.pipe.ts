import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age2'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value + 5;
  }

}
