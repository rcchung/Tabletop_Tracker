import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // homeRoot = 'HomePage'
  // friendsRoot = 'FriendsPage'
  // gamesRoot = 'GamesPage'

  profileRoot: any = 'ProfilePage';
  friendsRoot: any = 'FriendsPage';
  gamesRoot: any = 'GamesPage';
  myIndex: number;


  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }

}