import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../games/games';
import { IUser } from '../users/users';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games/gamesService';
import { UsersService } from '../users/usersService';
import { UsersGameService } from '../userGameService';

@Component({
  selector: 'app-merch-user-details',
  templateUrl: './merch-user-details.component.html',
  styleUrls: ['./merch-user-details.component.css']
})
export class MerchUserDetailsComponent implements OnInit {

  @Input()
  trueLogin: string;

  GameList: IGame[];
  UserGames: Array<IGame>;
  UserSearch: Array<IGame>;
  user: IUser;
  rating: number;



  constructor(private _route: ActivatedRoute, private _gameService: GamesService,
              private _userService: UsersService, private _userGameService: UsersGameService) {
                this.rating = 0;
                this.trueLogin = ".";
               }

  ngOnInit(){
    this._route.params.subscribe(params => {
        var login: string;
        login = "";
        if(this.trueLogin === "."){
          login = params['login'];
        } else {
          login = this.trueLogin;
        }
        
        
        this.user = this._userGameService.getUserByLogin(login);
        var suma = 0;
        this.rating = 0;
        for(var i = 0; i < this.user.rates.length; i++){
            suma+=this.user.rates[i];
        }
        if( this.user.rates.length > 0){
          console.log(suma );
          console.log(this.user.rates.length);
          this.rating = suma / this.user.rates.length;
        }
                 
      })
      this._gameService.getGames().subscribe((game: any) => {
      this.UserGames = this._userGameService.userOwnedOnly(this.user.login);
      this.UserSearch = this._userGameService.userSearchedOnly(this.user.login);
      });
                 
  }







}
