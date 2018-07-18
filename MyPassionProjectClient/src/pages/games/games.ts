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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,) {
  }

  doAddToOwnedList() {
      let toast = this.toastCtrl.create({
        message: 'Game Added To Owned List',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

  }

  doAddToPlayedList() {
    let toast = this.toastCtrl.create({
      message: 'Game Added To Played List',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

  }

}
