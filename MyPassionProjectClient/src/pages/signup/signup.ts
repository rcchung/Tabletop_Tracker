import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import { UsersService } from '../../providers/users-service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  account = {
    profileName:'',
    userName:'',
    password:''
  };

  constructor(public navCtrl: NavController, private usersService: UsersService) {
  }

  createAccount() {
    this.usersService.addUser(this.account).subscribe(response  => {
      this.navCtrl.setRoot(MenuPage);
    })
  }

}
