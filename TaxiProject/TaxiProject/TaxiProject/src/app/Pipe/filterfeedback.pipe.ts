import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedbackfilter'
})
export class FeedbackFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];

    if (!searchText) return items;

    searchText = searchText;
    return items.filter(it => {
      return it.Rating==searchText;
    });
  }
}
