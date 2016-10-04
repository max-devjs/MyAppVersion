// import { Component } from '@angular/core';

// import { NavController } from 'ionic-angular';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {

//   constructor(public navCtrl: NavController) {

//   }

// }
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AppVersion} from 'ionic-native';
import {MyEnv} from '../../services/myenv'

@Component({

  templateUrl: 'home.html'
})
export class HomePage {
  myEnv: any;
  ver: string;

  constructor(private navCtrl: NavController, myEnv: MyEnv) {
    this.myEnv = myEnv;
  }

  getVersion() {
    console.log(this.myEnv.getAppVersion());
    this.myEnv.getAppVersion().then((data) => this.ver = data);
  }
}

