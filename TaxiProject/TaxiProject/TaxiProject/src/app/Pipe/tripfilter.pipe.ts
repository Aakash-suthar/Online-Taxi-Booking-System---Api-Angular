import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'tripfilter'
})
export class TripFilter implements PipeTransform {

  transform(value: boolean): string {
    if (value)
      return "Done"
    else
      return "Pending"
  }


}