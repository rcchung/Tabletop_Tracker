import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: { username: string, password: string } = {
    username: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doLogin() {
    this.navCtrl.setRoot(MenuPage);
  }
}
