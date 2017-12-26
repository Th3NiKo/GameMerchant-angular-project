import { Component, OnInit } from '@angular/core';
import { IGame } from '../games/games';
import { IUser } from '../users/users';
import { UserLogged } from '../users/userLogged';
import { GamesService } from '../games/gamesService';
import { UsersGameService } from '../userGameService';


@Component({
  selector: 'app-merch-user-games',
  templateUrl: './merch-user-games.component.html',
  styleUrls: ['./merch-user-games.component.css']
})
export class MerchUserGamesComponent implements OnInit {

  constructor(private _userLogged: UserLogged,private _gameService: GamesService, 
              private _userGameService: UsersGameService) { 
    this.user = this._userLogged.GetUser();
  }

  GameList: IGame[];
  UserGames: Array<IGame>;
  UserSearch: Array<IGame>;
  user: IUser;

  ngOnInit() {
    this._gameService.getGames().subscribe(GameList => 
    {
      this.GameList = GameList;
      this.UserGames = [];
      this.UserSearch = [];
      this.UserGames = this._userGameService.userOwnedOnly(this.user.login);
      this.UserSearch = this._userGameService.userSearchedOnly(this.user.login);
    }
  );
}
}
