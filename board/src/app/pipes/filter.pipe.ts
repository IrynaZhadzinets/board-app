import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: any[], criterion: string): any {
    return criterion
      ? value.filter((item: {name: string}) => item.name.startsWith(criterion))
      : value;
  }
}
