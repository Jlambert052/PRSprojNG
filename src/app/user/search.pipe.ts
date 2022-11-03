import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], search: string = ""): User[] {
    search = search.toLowerCase();
    let searched: User[] = [];
    for(let u of users) {
      if((u.firstname.toLowerCase().includes(search) || u.lastname.toLowerCase().includes(search)) ||
       u.email !== null && u.email.toLowerCase().includes(search)) {
        searched.push(u);
       }
    };
    return searched;
  }

}
