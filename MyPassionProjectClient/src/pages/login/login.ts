import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import { UsersService } from '../../providers/users-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: { userName: string, password: string } = {
    userName: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
  }

  doLogin() {
    console.log("login");
    this.usersService.getUserProfile().subscribe(response => {
      console.log(response);
      console.log("response");
      // this.usersService.setUser(response);
      // this.usersService.userId = response.id;
    })
    this.navCtrl.setRoot(MenuPage);
  }
}
