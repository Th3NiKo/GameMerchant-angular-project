import { Component, OnInit } from '@angular/core';
import { IGame } from '../games/games';
import { IUser } from '../users/users';
import { UsersGameService } from '../userGameService';




@Component({
  selector: 'app-merch-alloffers',
  templateUrl: './merch-alloffers.component.html',
  styleUrls: ['./merch-alloffers.component.css'],
})

export class MerchAlloffersComponent implements OnInit {

  GameList: IGame[];
  UserList: IUser[];
  constructor(private _userGameService: UsersGameService) { 
  }

  ngOnInit() {
    this.GameList = this._userGameService.GameList;
    this.UserList = this._userGameService.UserList;

  }

  

}
