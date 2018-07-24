import {ProfilePage} from "../profile/profile";
import {GamesPage} from "../games/games";
import {FriendsPage} from "../friends/friends";
import { TabsPage } from './../tabs/tabs';
import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, Nav, NavParams, MenuController } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 0, icon: 'home' },
    { title: 'MyGames', pageName: 'TabsPage', tabComponent: 'GamesPage', index: 1, icon: 'search' },
    { title: 'Game Search', pageName: 'TabsPage', tabComponent: 'GameSearchPage', index: 2, icon: 'search' },
    { title: 'Friends', pageName: 'TabsPage', tabComponent: 'FriendsPage', index: 3, icon: 'contacts' },
    { title: 'Settings', pageName: 'SettingsPage', icon: 'build' },
  ];

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  logout(){
    this.menuCtrl.close();
    this.navCtrl.setRoot(WelcomePage);
  }

}
