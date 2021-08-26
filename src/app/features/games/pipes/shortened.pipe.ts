import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortened'
})
export class ShortenedPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let sliced = value.slice(0,60);
    if (sliced.length < value.length) {
      sliced += '...';
    }
    return sliced;
  }
}
