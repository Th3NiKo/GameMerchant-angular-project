import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { IGame } from '../games/games';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: IGame[], value: string): any[] {
   if (!items) return [];
   return items.filter(it =>  (it.name.toLowerCase().includes)(value.toLowerCase()));
 }
}