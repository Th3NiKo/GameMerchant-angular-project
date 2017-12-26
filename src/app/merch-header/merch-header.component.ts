import { Component, OnInit, } from '@angular/core';
import { UserLogged } from '../users/userLogged';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-merch-header',
  templateUrl: './merch-header.component.html',
  styleUrls: ['./merch-header.component.css']
})
export class MerchHeaderComponent implements OnInit {
  isLogged: boolean;
  constructor(private _userLogged:UserLogged) { 

  }

  ngOnInit() {
    
  }
  ngAfterContentChecked() {
    this.isLogged = this._userLogged.Logged();
    
  }
  ngAfterViewChecked() {
    
  }

  public logout():void{
    this._userLogged.logOut();
  }

}
