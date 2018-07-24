import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { BggGameSearch } from '../../providers/bggGames-service';
 
@IonicPage()
@Component({
  selector: 'page-game-search',
  templateUrl: 'game-search.html',
})
export class GameSearchPage {
    game: any;
    searchResult: any;
    searchTerm: '';
    userName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public bggGames: BggGameSearch) {
  }
  
    ionViewDidLoad() {
    }

    searchGame(){
      console.log("search method called");
      this.bggGames.searchGame(this.searchTerm).subscribe(games=>{
        this.searchResult = games;
        this.searchResult = Array.of(this.searchResult);
      })
      ;
    }

  doAddToOwnedList() {
      let toast = this.toastCtrl.create({
        message: 'Game Added To MyGames',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();

  }

  doAddToPlayedList() {
    let toast = this.toastCtrl.create({
      message: 'Game Added To PlayedGames',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();

  }

  doAddToOwnedAndPlayedList() {
    let toast = this.toastCtrl.create({
      message: 'Game Added To MyPlayedGames',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();

  }
}
