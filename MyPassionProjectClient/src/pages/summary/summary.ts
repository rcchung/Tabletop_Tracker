import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../providers/users-service';

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
    this.user = this.usersService.user;
  }

  get() {
    console.log(this.usersService.user);
  }

}
 