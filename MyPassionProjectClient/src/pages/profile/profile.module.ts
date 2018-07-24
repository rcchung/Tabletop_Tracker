import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { UsersService } from '../../providers/users-service';

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers: [
    UsersService,
  ],
})
export class ProfilePageModule {}
