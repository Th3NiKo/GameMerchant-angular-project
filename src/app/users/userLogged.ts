import { Injectable} from '@angular/core';
import { IUser } from './users';
import { UsersService } from './usersService';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class UserLogged{

    allUsers: IUser[];
    isLogged: boolean;
    actualUser: IUser;
    constructor(private _userService: UsersService){
        this.allUsers = [];
        this._userService.getUsers().subscribe((allUsers: [any]) => {
            this.allUsers = allUsers;
    });
    }



    public Authorize(login: string, password: string): IUser{
        var success: boolean = false;
        for(let i = 0; i < this.allUsers.length; i++){
            if((this.allUsers[i].login == login) && (this.allUsers[i].password == password)) {
                success = true;
                this.isLogged = true;
                this.actualUser = this.allUsers[i];
                return this.allUsers[i];
            }
        }
        
        if(success == false){
            this.isLogged = false;
            var user: IUser;
            return user;
        }
    }

    public Logged():boolean{
        return this.isLogged;
    }

    public GetUser(): IUser{
        return this.actualUser;
    }

    
    public logOut():void{
        this.isLogged = false;
        var user: IUser;
        this.actualUser = user;
    }
}