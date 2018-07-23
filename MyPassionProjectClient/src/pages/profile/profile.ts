import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../providers/users-service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
    this.user = this.usersService.getUserById().subscribe(user=>this.user = user);
  }

  ionViewDidLoad() { 
  }
}
 