import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'bookingfilter'
})
export class BookingStatusFilter implements PipeTransform {

  transform(value: boolean): string {
    if (value)
      return "Done"
    else
      return "Pending"
  }


}