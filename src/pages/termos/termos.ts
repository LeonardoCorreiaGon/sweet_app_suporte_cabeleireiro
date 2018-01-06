import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-termos',
  templateUrl: 'termos.html'
})
export class TermosPage {

  constructor(public navCtrl: NavController) {

  }

  backPage(){
    this.navCtrl.setRoot(HomePage);
  }
    

}
