import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'reverse'
})
export class Reverse implements PipeTransform {

  transform(value: string): string {
    return value.split("").reverse().join("");
  }

}
