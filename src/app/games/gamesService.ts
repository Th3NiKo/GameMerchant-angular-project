import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IGame } from './games';
import 'rxjs/add/operator/map'


//Getting games from json file
@Injectable()
export class GamesService{

    constructor(private _http: Http) {}

    public getGames(): Observable<IGame[]>{

        return this._http
        .get("assets/games.json")
        .map((response: Response) => <IGame[]> response.json());

    }

    public getGame(id: number): Observable<IGame>{

        return this.getGames()
        .map((games: IGame[]) => games.find(game => game.id === id));
        
    }




}