import { Component, Input } from '@angular/core';
import { IGame } from '../games/games'
import { IUser } from '../users/users';
import { SearchFilterPipe } from './search-filter-pipe';

@Component({
  selector: 'app-merch-game-list',
  templateUrl: './merch-game-list.component.html',
  styleUrls: ['./merch-game-list.component.css'],

})

//Multiusable list of games.
export class MerchGameListComponent{

  @Input()
  GameList: IGame[];

  @Input()
  UserList: IUser[];

  @Input()
  showSearched: boolean;
  
  @Input()
  showOwned: boolean;

  @Input()
  showLogin: boolean;

  test:string;

  constructor(private _searchPipe:SearchFilterPipe) { 
    this.showSearched = true;
    this.showOwned = true;
    this.showLogin = true;
  }

  public getUserByID(userId: number): IUser{
    return this.UserList[userId];

  }



}
