import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {MenuPageModule} from "../pages/menu/menu.module";
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { UsersService } from '../providers/users-service';
import { ProfileModalPage } from '../pages/settings/profile-modal';
import { PictureModalPage } from '../pages/settings/picture-modal';
import { Transfer } from '../../node_modules/@ionic-native/transfer';
import { Camera } from '../../node_modules/@ionic-native/camera';
import { FilePath } from '../../node_modules/@ionic-native/file-path';
import {File} from '../../node_modules/@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    ProfileModalPage,
    PictureModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MenuPageModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfileModalPage,
    PictureModalPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    UsersService,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
