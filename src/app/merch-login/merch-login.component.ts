import { Component, OnInit } from '@angular/core';
import { UserLogged } from '../users/userLogged';
import { IUser } from '../users/users';
import { Router } from '@angular/router';
import { isError } from 'util';





@Component({
  selector: 'app-merch-login',
  templateUrl: './merch-login.component.html',
  styleUrls: ['./merch-login.component.css']
})
export class MerchLoginComponent implements OnInit {

  isError: boolean;

  constructor(private _userLogged: UserLogged, private router: Router) { }

  ngOnInit() {
    this.isError = false;
  }

  public checkLogin(login: string, password: string){

    this._userLogged.Authorize(login, password);
    if(this._userLogged.Logged() == true){
      this.isError = false;
      this.router.navigate(["home"]);
    } else {
      this.isError = true;
    }
    
  }

}
