import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-quemsomos',
  templateUrl: 'quemsomos.html',
})
export class QuemsomosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuemsomosPage');
  }

  backPage(){
    this.navCtrl.setRoot(HomePage);
  }

}
