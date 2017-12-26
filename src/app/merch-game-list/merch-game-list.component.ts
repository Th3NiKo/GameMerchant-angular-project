import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../games/games'
import { IUser } from '../users/users';
import { SearchFilterPipe } from './search-filter-pipe';

@Component({
  selector: 'app-merch-game-list',
  templateUrl: './merch-game-list.component.html',
  styleUrls: ['./merch-game-list.component.css'],

})

export class MerchGameListComponent implements OnInit {

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

  ngOnInit() {
  }

  public getUserByID(userId: number): IUser{
    return this.UserList[userId];

  }

  public isUserInList(login: string): boolean{
    for(var i = 0 ; i < this.UserList.length; i++){
      if(this.UserList[i].login == login){
        return true;
      }
    }
    return false;
  }

}
