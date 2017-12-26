import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { UserLogged } from '../users/userLogged';

@Component({
  selector: 'app-merch-nav',
  templateUrl: './merch-nav.component.html',
  styleUrls: ['./merch-nav.component.css']
})
export class MerchNavComponent implements OnInit,AfterContentChecked {

  isLogged: boolean;
  constructor(private _userLogged: UserLogged) { 

  }

  ngOnInit() {

  }
  
  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.isLogged = this._userLogged.Logged();
  }

}
