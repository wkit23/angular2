import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'sumpipe',
  pure: false
})
export class SumpipePipe implements PipeTransform {

  transform(users: Array<User>, args?: any): any {
    let sum = 0;

    users.forEach((value:User, index:number, arr:User[]) => {
      sum += value.age;
    })

    return sum;
  }

}
