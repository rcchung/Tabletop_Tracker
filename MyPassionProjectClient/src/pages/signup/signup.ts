import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  account: { profilename: string, username: string, password: string } = {
    profilename:'',
    username:'',
    password:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doSignup() {
    this.navCtrl.setRoot(MenuPage);
  }

}
