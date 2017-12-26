import { Component, OnInit } from '@angular/core';
import { IGame } from '../games/games';
import { IUser } from '../users/users';
import { UsersGameService } from '../userGameService';
import { UserLogged } from '../users/userLogged';
import { ActivatedRoute } from '@angular/router';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-merch-user-manage',
  templateUrl: './merch-user-manage.component.html',
  styleUrls: ['./merch-user-manage.component.css']
})
export class MerchUserManageComponent implements OnInit {

  user: IUser;
  UserGames: IGame[];
  UserSearch: IGame[];
  AllGames: IGame[]
  selected: string;
  succes1: boolean;
  succes2: boolean;

  constructor(private _userGameService :UsersGameService, private _userLogged: UserLogged) { }

  ngOnInit() {
    this.UserGames = [];
    this.UserSearch = [];
    this.AllGames = [];
    this.succes1 = false;
    this.succes2 = false;
    this.user = this._userGameService.getUserByLogin(this._userLogged.GetUser().login);

    this.update();

    
  }

  public update(): void{
    this.UserGames = this._userGameService.userOwnedOnly(this.user.login);
    this.UserGames = this.UserGames.sort((n1, n2) => {
      if(n1.name > n2.name){
        return 1;
      } 
      if(n1.name < n2.name){
        return -1;
      } 

      return 0;
    });
    this.UserSearch = this._userGameService.userSearchedOnly(this.user.login);
    this.UserSearch = this.UserSearch.sort((n1, n2) => {
      if(n1.name > n2.name){
        return 1;
      } 
      if(n1.name < n2.name){
        return -1;
      } 

      return 0;
    });
    this.AllGames = this._userGameService.GameList;
    this.AllGames = this.AllGames.sort((n1, n2) => {
      if(n1.name > n2.name){
        return 1;
      } 
      if(n1.name < n2.name){
        return -1;
      } 

      return 0;
    });
  }



  public addToGames(game: string):void{
    for(let i = 0; i < this._userGameService.GameList.length; i++){
      if(game == this._userGameService.GameList[i].name){
        this._userGameService.GameList[i].whoHas.push(this.user.login);
        this.update();
        this.succes1 = true;
      }
    }
  }

  public addToSearch(game: string):void{
    for(let i = 0; i < this._userGameService.GameList.length; i++){
      if(game == this._userGameService.GameList[i].name){
        this._userGameService.GameList[i].whoWant.push(this.user.login);
        this.update();
        this.succes1 = true;
      }
    }
  }

  public deleteGame(game: string, which:string):void{
    
    for(let i = 0; i < this._userGameService.GameList.length; i++){
      if(game == this._userGameService.GameList[i].name){
        if(which == "Owned"){
          for(let j = 0; j < this._userGameService.GameList[i].whoHas.length; j++){
            if(this._userGameService.GameList[i].whoHas[j] == this.user.login){
              
              this._userGameService.GameList[i].whoHas.splice(j,1)
              this.update();
              this.succes2 = true;
            }
          }
        } else if(which == "Searched"){
          for(let j = 0; j < this._userGameService.GameList[i].whoWant.length; j++){
            if(this._userGameService.GameList[i].whoWant[j] == this.user.login){
              this._userGameService.GameList[i].whoWant.splice(j,1)
              this.update();
              this.succes2 = true;
            }
          }
        }
      }
    }
   

  }

  public askAdmin(game: string):void{

  }

}
