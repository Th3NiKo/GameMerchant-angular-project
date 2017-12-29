import { Component } from '@angular/core';
import { UserLogged } from '../users/userLogged';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-merch-header',
  templateUrl: './merch-header.component.html',
  styleUrls: ['./merch-header.component.css']
})
export class MerchHeaderComponent{
  isLogged: boolean;
  constructor(private _userLogged:UserLogged) {}

  ngAfterContentChecked() {
    this.isLogged = this._userLogged.Logged();
  }

  public logout():void{
    this._userLogged.logOut();
  }

}
