import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { GamesService } from '../../providers/games-service';
 
@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
    games: any;
    filteredGames: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public gamesService: GamesService) {
    this.gamesService.getAllGames().subscribe(games=>{
      this.filteredGames = games;
      this.games = games;
    })
    ;
  }
  
    ionViewDidLoad() {
    }

    getItems(ev: any) {
      // Reset items back to all of the items
      this.filteredGames = this.games;
      // set val to the value of the searchbar
      const val = ev.target.value;
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.filterGamesBySearch(val);
      }
    }

  filterGamesBySearch(searchTerm){
    this.filteredGames = this.games.filter((games) => {
        return games.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    
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
