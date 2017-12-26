import { Component, OnInit } from '@angular/core';
import { IUser } from '../users/users';
import { UserLogged } from '../users/userLogged';
import { UsersGameService } from '../userGameService';


@Component({
  selector: 'app-merch-user-profile',
  templateUrl: './merch-user-profile.component.html',
  styleUrls: ['./merch-user-profile.component.css']
})
export class MerchUserProfileComponent implements OnInit {
  user: IUser;
  rating: number;
  numberOfGames: number;
  numberOfSearch: number;

  constructor(private _userLogged: UserLogged, private _userGameService: UsersGameService) { 
    this.user = this._userGameService.getUserByLogin(this._userLogged.GetUser().login);
  }

  ngOnInit() {
     //Rating counts
    var suma = 0;
    for(var i = 0; i < this.user.rates.length; i++){
      suma+=this.user.rates[i];
    }
    if( this.user.rates.length > 0){
      this.rating = suma / this.user.rates.length;
    }

    //Numbers Of
    this.numberOfGames = this._userGameService.userOwned(this.user.login).length;
    this.numberOfSearch = this._userGameService.userSearched(this.user.login).length;
  }

}
