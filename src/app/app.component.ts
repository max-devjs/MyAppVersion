import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';

// import {MyEnv} from './services/myenv'

// @Component({
//   template: `<ion-nav [root]="rootPage"></ion-nav>`
// })
// export class MyApp {
//   rootPage = HomePage;

//   constructor(platform: Platform) {
//     platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       StatusBar.styleDefault();
//     });
//   }
// }

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  // templateUrl: 'app.template.html'
  // providers: [MyEnv]
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      console.log("app.component.ts");
    });
  }
}
