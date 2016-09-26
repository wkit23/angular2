import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'superpipe'
})
export class SuperpipePipe implements PipeTransform {

  transform(value: any, format:string): any {
    if (format) {
      return value + " " + format;
    }

    return value + " tonne";
  }

}
