import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../games/games';
import { IUser } from '../users/users';
import { UserLogged } from '../users/userLogged';
import { UsersService } from '../users/usersService';
import { GamesService } from '../games/gamesService';
import { UsersGameService } from '../userGameService';


@Component({
  selector: 'app-merch-game-trade',
  templateUrl: './merch-game-trade.component.html',
  styleUrls: ['./merch-game-trade.component.css']
})
export class MerchGameTradeComponent implements OnInit {

  @Input()
  game: IGame;

  userLogged: IUser;
  userLoggedGames: IGame[];
  showTrade: boolean;
  GamesToTrade: Array<IGame>;
  showPopUp: boolean;
  selected: string;
  tradeSuccess: boolean;
  tradedWith: string;
  starsy: string;


  constructor(private _userLogged: UserLogged, private _userGameService: UsersGameService) {
    this.userLoggedGames = [];
    this.GamesToTrade = [];
  }

  ngOnInit() {
    this.userLogged = this._userLogged.GetUser();
    this.userLoggedGames = this._userGameService.userOwned(this.userLogged.login);
    this.showTrade = false;
    this.showPopUp = false;
    this.tradeSuccess = false;
    this.trade();
  }


  public popUpChange():void{
    this.showPopUp = !this.showPopUp;
  }

  public trade(): void{
    
    //Idziemy po userach ktorzy maja gre na ktorej jestesmy
    this.GamesToTrade = [];
    for(var i = 0; i < this.game.whoHas.length; i++){ 
      
      var user: IUser = this._userGameService.getUserByLogin(this.game.whoHas[i]);

      var userGames: IGame[] = this._userGameService.userSearched(this.game.whoHas[i]);
      //Idziemy po szukanych grach przez danego usera, ktory ma gre na ktorej jestesmy
      for(var j = 0; j < userGames.length; j++){
      //Idziemy po grach zalogowanego usera
        for(var k = 0; k < this.userLoggedGames.length; k++){
          if(userGames[j].name == this.userLoggedGames[k].name) //Mamy gre ktora szuka user. Mozna dokonac wymiany
          {
            this.showTrade = true;

            
            //Dodajemy gry za ktore sie mozemy wymienic wraz z uzytkownikami
            var Game;
            Game = Object.assign({}, userGames[j]);
            Game.whoWant = [];
            Game.whoWant.push(user.login);
            this.GamesToTrade.push(Game);


          }
        }

      }

    }

  }
  //  _game = GraZalogowanego              this.game = GraKtoraDostaniemy 
  //  _user = z ktorym sie wymieniam       this.userLogged.login = zalogowany
  public actualyTrade(_game: string, _user: string){
    this.tradedWith = _user;
    for(let i = 0; i < this._userGameService.GameList.length; i++){

      //Gra zalogowanego
      if(_game == this._userGameService.GameList[i].name){ 
        for(let j = 0; j < this._userGameService.GameList[i].whoHas.length; j++){
          if(this._userGameService.GameList[i].whoHas[j] == this.userLogged.login){
            this._userGameService.GameList[i].whoHas.splice(j,1); //Odejmuje gre zalogowanemu
            this._userGameService.GameList[i].whoHas.push(_user); //Dodaje gre uzytkownikowi z ktorym sie wymieniam
          }
        }
        for(let j = 0; j < this._userGameService.GameList[i].whoWant.length; j++){
          if(this._userGameService.GameList[i].whoWant[j] == _user){
            this._userGameService.GameList[i].whoWant.splice(j,1); //Usuwamy gre uzytkownikowi z poszukiwanych
          }
        }
      }

      //Gra ktora zalogowany dostanie
      if(this.game.name == this._userGameService.GameList[i].name){
        for(let j = 0; j < this._userGameService.GameList[i].whoHas.length; j++){
          if(this._userGameService.GameList[i].whoHas[j] == _user){
            this._userGameService.GameList[i].whoHas.splice(j,1); //Odejmuje gre uzytkownikowi z ktorym wymieniamy
            this._userGameService.GameList[i].whoHas.push(this.userLogged.login); //Dodajemy zalogowanemu
          }
        }
        for(let j = 0; j < this._userGameService.GameList[i].whoWant.length; j++){
          if(this._userGameService.GameList[i].whoWant[j] == this.userLogged.login){
            this._userGameService.GameList[i].whoWant.splice(j,1); //Usuwamy gre uzytkownikowi z poszukiwanych
          }
        }
      }

    }
    this.tradeSuccess = true;
  }



  public finish(): void{
    var rates = <HTMLInputElement[]><any>document.getElementsByName("star");
    
    var rate_value;
    for(var i = 0; i < rates.length; i++){
      
      if(rates[i].checked){
          rate_value = rates[i].value;
      }
  }
    var comment = <HTMLInputElement>document.getElementById("commentID");

    for(let i = 0; i < this._userGameService.UserList.length; i++){
      if(this._userGameService.UserList[i].login == this.tradedWith){
        this._userGameService.UserList[i].comments.push(comment.value);
        this._userGameService.UserList[i].rates.push(Number(rate_value));

      }

    }
    this.tradeSuccess = false; //Koniec wymiany

  }




  

}
