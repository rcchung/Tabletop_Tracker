import { ViewChild, Component } from "../../../node_modules/@angular/core";
import { UsersService } from "../../providers/users-service";
import {ViewController, ToastController, NavController} from 'ionic-angular';

@Component({
    templateUrl: './profile-modal.html'
  })
export class ProfileModalPage {
    user: any;

    constructor(public viewCtrl: ViewController, public toastCtrl: ToastController, public usersService: UsersService, public navCtrl: NavController) {
        this.user = this.usersService.getUserProfile().subscribe(user=>this.user = user);
    } 
    
    updateProfile() {
        console.log(this.user);
        this.usersService.updateProfile(this.user).subscribe(response => {
            let toast = this.toastCtrl.create({
                message: 'Profile updated.',
                duration: 2000
              });
            toast.present();
            this.dismiss();
          }) 
      }
    
      ionViewDidLoad() {
      }
    
      dismiss() {
        this.viewCtrl.dismiss();
      }
    
}