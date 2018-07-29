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
    this.usersService.getUserIdByUserName(this.account.userName).subscribe(response => {
      this.usersService.setUser(response);
      console.log(response);
      console.log("response");
      this.navCtrl.setRoot(MenuPage);
    })    
  }
}
