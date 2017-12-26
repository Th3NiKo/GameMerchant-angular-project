import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IUser } from './users/users';
import { IGame } from './games/games';
import { GamesService } from './games/gamesService';
import { UsersService } from './users/usersService';
import { MerchGameListComponent } from './merch-game-list/merch-game-list.component';
/*
Service do zarządzania Game i User service. Posiada wlasne tablice dzieki czemu moge manipulowac
na pojedynczej sesji.

userOwned(login: string) - zwraca gry posiadane przez uzytkownika o danym loginie
userSearched(login: string) - zwraca gry szukane przez uzytkownika o danym loginie
            Only - zwraca gry i przygowywuje dla pojedynczego usera do wyswietlenia


*/


@Injectable()
export class UsersGameService{
    GameList: IGame[];
    UserList: IUser[];


    constructor(private _gameService: GamesService, private _userService: UsersService){
        this.GameList = [];
        this.UserList = [];


        this._userService.getUsers().subscribe((allUsers: [any]) => {
            this.UserList = allUsers;

        });
        this._gameService.getGames().subscribe((allGames: [any]) => {
            this.GameList = allGames;
        });
        

    }


    public load(){
        this._userService.getUsers().subscribe((allUsers: [any]) => {
            this.UserList = allUsers;

        });
        this._gameService.getGames().subscribe((allGames: [any]) => {
            this.GameList = allGames;
        });
    }

    public userOwned(login: string): IGame[]{
        var UserGamesA: Array<IGame>;
        UserGamesA = [];
        for(var i = 0; i < this.GameList.length; i++){
            for(var j = 0; j < this.GameList[i].whoHas.length;j++){
              if(this.GameList[i].whoHas[j] == login){
                UserGamesA.push(Object.assign({}, this.GameList[i]));
              }
            }
        }
        return UserGamesA;
    }

    public userOwnedOnly(login: string): IGame[]{
        var UserGames: Array<IGame>;
        UserGames = [];
        for(var i = 0; i < this.GameList.length; i++){
            for(var j = 0; j < this.GameList[i].whoHas.length;j++){
              if(this.GameList[i].whoHas[j] == login){
                var game: IGame;
                game = Object.assign({}, this.GameList[i]);
                game.whoHas = [login];
                UserGames.push(game);
              }
            }
        }
        return UserGames;
    }


    public userSearched(login: string): IGame[]{
        var UserGamesB: Array<IGame>;
        UserGamesB = [];

        for(var i = 0; i < this.GameList.length; i++){
            for(var j = 0; j < this.GameList[i].whoWant.length;j++){
              if(this.GameList[i].whoWant[j] == login){
                UserGamesB.push(Object.assign({}, this.GameList[i]));
              }
            }
        }
        return UserGamesB;
    }

    public userSearchedOnly(login: string): IGame[]{
        var UserSearch: Array<IGame>;
        UserSearch = [];

        for(var i = 0; i < this.GameList.length; i++){
            for(var j = 0; j < this.GameList[i].whoWant.length;j++){
              if(this.GameList[i].whoWant[j] == login){
                var game: IGame;
                game = Object.assign({}, this.GameList[i]);
                game.whoWant = [login];
                UserSearch.push(game);
              }
            }
        }
        return UserSearch;
    }

    public getUserByLogin(login: string): IUser{
        for(var i= 0; i < this.UserList.length; i++){
            if(login == this.UserList[i].login){
                return Object.assign({},this.UserList[i]);
            }

        }
    }

    public getGameById(id: number): IGame{
        for(let i = 0 ; i < this.GameList.length; i++){
            if(this.GameList[i].id == id){
                return Object.assign({}, this.GameList[i])
            }
        }
    }



}
