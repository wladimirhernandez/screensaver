import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-screensaver',
  template: `
    <ion-slides (click)="goBack" pager="true" [options]="slideOpts">
      <ion-slide>
        <h1>Slide 1</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 2</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 3</h1>
      </ion-slide>
    </ion-slides>
  `
})

export class ScreensaverPage {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
