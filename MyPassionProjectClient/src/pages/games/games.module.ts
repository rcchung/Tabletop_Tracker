import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamesPage } from './games';
import { GamesService } from '../../providers/games-service';

@NgModule({
  declarations: [
    GamesPage,
  ],
  imports: [
    IonicPageModule.forChild(GamesPage),
  ],
  providers: [
    GamesService
  ],
})
export class GamesPageModule {}
