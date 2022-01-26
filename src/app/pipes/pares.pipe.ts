import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pares'
})
export class ParesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
