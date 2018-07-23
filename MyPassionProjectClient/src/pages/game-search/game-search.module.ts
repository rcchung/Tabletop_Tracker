import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameSearchPage } from './game-search';
import { BggGameSearch } from '../../providers/bggGames-service';

@NgModule({
  declarations: [
    GameSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(GameSearchPage),
  ],
  providers: [
    BggGameSearch
  ],
})
export class GameSearchPageModule {}
