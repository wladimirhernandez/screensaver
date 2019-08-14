import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    Insomnia
  ]
})
export class AppComponent {
  userActivity;
  userLocation;
  userInactive: Subject<any> = new Subject();
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private insomnia: Insomnia,
    private router: Router,
    private location: Location
  ) {
    this.setTimeout();
    this.initializeApp();
    this.userInactive.subscribe(() =>
    this.showSlides());
  }

  showSlides() {
    this.router.navigate(['/screensaver']);
    this.userLocation = true;
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 20000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    if(this.userLocation) {
      console.log('entró en actividad')
      clearTimeout(this.userActivity);
      this.location.back();
      this.setTimeout();
      this.userLocation = false;
    }
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.insomnia.keepAwake()
      .then(
        (success) => console.log('success', success),
        (error) => console.log('error', error)
      );
    });
  }

}

