import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { MerchHeaderComponent } from './merch-header/merch-header.component';
import { MerchNavComponent } from './merch-nav/merch-nav.component';

import {UsersService} from './users/usersService'
import {GamesService} from './games/gamesService';
import { MerchHomeComponent } from './merch-home/merch-home.component';
import { MerchGameListComponent } from './merch-game-list/merch-game-list.component';
import { MerchAlloffersComponent } from './merch-alloffers/merch-alloffers.component'
import { HttpModule } from '@angular/http';
import { MerchLoginComponent } from './merch-login/merch-login.component';
import { UserLogged } from './users/userLogged';
import { MerchGameDetailsComponent } from './merch-game-details/merch-game-details.component';
import { MerchUserDetailsComponent } from './merch-user-details/merch-user-details.component';
import { MerchUserProfileComponent } from './merch-user-profile/merch-user-profile.component';
import { MerchUserGamesComponent } from './merch-user-games/merch-user-games.component';
import { SearchFilterPipe } from './merch-game-list/search-filter-pipe';
import { UsersGameService } from './userGameService';
import { MerchGameTradeComponent } from './merch-game-trade/merch-game-trade.component';
import { MerchUserManageComponent } from './merch-user-manage/merch-user-manage.component';

const routes: Array<Route> = [
  { path: 'home', pathMatch: 'full', component: MerchHomeComponent },
  { path: 'alloffers', pathMatch: 'full', component: MerchAlloffersComponent},
  { path: 'login', pathMatch: 'full', component: MerchLoginComponent},
  { path: 'userGames', pathMatch: 'full', component: MerchUserGamesComponent},
  { path: 'userProfile', pathMatch: 'full', component: MerchUserProfileComponent},
  { path: 'userManage', pathMatch: 'full', component: MerchUserManageComponent},
  { path: 'game/:id', pathMatch: 'full', component: MerchGameDetailsComponent},
  { path: 'user/:login', pathMatch: 'full', component: MerchUserDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: '**', redirectTo: 'home', pathMatch:'full' },

];



@NgModule({
  declarations: [
    AppComponent,
    MerchHeaderComponent,
    MerchNavComponent,
    MerchHomeComponent,
    MerchGameListComponent,
    MerchAlloffersComponent,
    MerchLoginComponent,
    MerchGameDetailsComponent,
    MerchUserDetailsComponent,
    MerchUserProfileComponent,
    MerchUserGamesComponent,
    SearchFilterPipe,
    MerchGameTradeComponent,
    MerchUserManageComponent
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    UsersService, 
    GamesService, 
    UserLogged,  
    SearchFilterPipe, 
    UsersGameService,
    { provide: APP_INITIALIZER, useFactory: (config: UsersGameService) => () => config.load(),
                                             deps: [UsersGameService], multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
