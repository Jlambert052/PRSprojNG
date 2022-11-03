import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean, lang: string = "en"): string {
    return value ? "Yes" : "No";
  }

}
