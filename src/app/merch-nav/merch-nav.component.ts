import { Component,AfterContentChecked } from '@angular/core';
import { UserLogged } from '../users/userLogged';

@Component({
  selector: 'app-merch-nav',
  templateUrl: './merch-nav.component.html',
  styleUrls: ['./merch-nav.component.css']
})
export class MerchNavComponent implements AfterContentChecked {

  isLogged: boolean;
  constructor(private _userLogged: UserLogged) { }

  ngAfterContentChecked() {
    this.isLogged = this._userLogged.Logged();
  }

}
