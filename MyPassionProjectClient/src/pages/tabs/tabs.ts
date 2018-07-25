import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  summaryRoot: any = 'SummaryPage';
  friendsRoot: any = 'FriendsPage';
  gamesRoot: any = 'GamesPage';
  gameSearchRoot: any = 'GameSearchPage';
  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }

}
