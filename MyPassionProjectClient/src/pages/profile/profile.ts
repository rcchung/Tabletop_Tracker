import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, UsersService } from '../../providers/users-service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
    console.log("profile"); 
    console.log(navParams.data);
    console.log(this.navParams.get("user"));
    console.log("passed in from param");

    console.log(this.usersService.user);
    this.user = this.usersService.getUser();
    console.log(this.user);
    if (!this.user) {
      this.user = new User(1, "test", "test1", "test");
    }
  }

  ionViewDidLoad() { 
  }

  getProfile(){
    console.log(this.usersService.user);
  }
}
 