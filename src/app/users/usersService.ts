import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IUser } from './users';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService{

    constructor(private _http: Http) {}

    public getUsers(): Observable<IUser[]>{
        
        return this._http
        .get("assets/users.json")
        .map((response: Response) => <IUser[]> response.json());
       

    }

    public getUser(id: number): Observable<IUser>{

        return this.getUsers()
        .map((users: IUser[]) => users.find(user => user.id === id));
        
    }

    public getUserByLogin(login: string): Observable<IUser>{

        return this.getUsers()
        .map((users: IUser[]) => users.find(user => user.login === login));
        
    }






}