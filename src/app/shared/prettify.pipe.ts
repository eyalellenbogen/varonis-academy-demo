import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettify',
})
export class PrettifyPipe implements PipeTransform {
  transform(value: string, decor: string): string {
    return `${decor} ${value} ${decor}`;
  }
}
