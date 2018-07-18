import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,) {
    this.initializeItems();
  }

  doAddToOwnedList() {
      let toast = this.toastCtrl.create({
        message: 'Game Added To MyGames',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

  }

  doAddToPlayedList() {
    let toast = this.toastCtrl.create({
      message: 'Game Added To PlayedGames',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

  }

  doAddToOwnedAndPlayedList() {
    let toast = this.toastCtrl.create({
      message: 'Game Added To MyPlayedGames',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

  }

  initializeItems() {
    this.items = [
      'Agricola',
      'Catan',
      'Magic'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
