import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ProfileModalPage } from './profile-modal';
import { PictureModalPage } from './picture-modal';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
    
  updateProfile() {
    let modal = this.modalCtrl.create(ProfileModalPage);
    modal.present();
  }

  uploadPicture() {
    let modal = this.modalCtrl.create(PictureModalPage);
    modal.present();
  }

}