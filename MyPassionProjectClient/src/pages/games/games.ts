import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { GamesService } from '../../providers/games-service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
 

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  private games: any;
  searchTerm: string = '';
    items: any;
    searchControl: FormControl;



  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public gamesService: GamesService) {
    this.searchControl = new FormControl();
  }

  initializeGames(){
    this.gamesService.getAllGames().subscribe(games => {
      this.games = games;
    })
  ;
  }
  
  // ionViewDidLoad() {
  //     this.gamesService.getAllGames().subscribe(games => {
  //       this.games = games;
  //     })
  //   ;
  // }

  // getItems(ev: any) {
  //   // Reset items back to all of the items
  //   this.initializeItems();

  //   // set val to the value of the searchbar
  //   const val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.games = this.games.filter((games) => {
  //       return (games.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

  ionViewDidLoad() {
    this.initializeGames();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.setFilteredItems();
    });

}

setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
}

filterItems(searchTerm){
  this.games = this.games.filter((games) => {
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
