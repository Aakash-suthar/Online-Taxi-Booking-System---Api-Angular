import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'calender'
})
export class CalenderFilter implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) return [];
    if (!searchText) return items;

    if(searchText.toLocaleLowerCase()=='pending') {
        return items.filter(it => {
            return it.Trip == false;  
        });
    }
    else {
        return items.filter(it => {
        return it.Trip == true;  
    });
    }
}


}