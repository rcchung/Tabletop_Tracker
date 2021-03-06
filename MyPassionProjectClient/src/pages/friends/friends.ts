import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { UsersService } from '../../providers/users-service';

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public usersService: UsersService) {
  }

  addToFriendList() {
    let toast = this.toastCtrl.create({
      message: 'Friend Request Sent!',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();

  }

  viewFriendDetails() {}

  get(){console.log(this.usersService.user)}

}
