import { Component, OnInit } from '@angular/core';
import { IGame } from '../games/games';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games/gamesService';
import { UserLogged } from '../users/userLogged';
import { UsersGameService } from '../userGameService';


@Component({
  selector: 'app-merch-game-details',
  templateUrl: './merch-game-details.component.html',
  styleUrls: ['./merch-game-details.component.css']
})

export class MerchGameDetailsComponent implements OnInit {

  game: IGame;
  isLogged:boolean;
  constructor(private _route: ActivatedRoute, private _userLogged: UserLogged, 
              private _userGameService: UsersGameService) {}

  ngOnInit(){
    this.isLogged = this._userLogged.Logged();
    this._route.params.subscribe(params => {
        const id: number = params['id'];
        this.game = this._userGameService.getGameById(id);
        
    })
      
    
  }

  

}
