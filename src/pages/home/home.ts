import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuportePage } from '../suporte/suporte';
import { CabeleireiroHomePage } from '../cabeleireirovirtual/home/home';
import { QuemsomosPage } from '../quemsomos/quemsomos';
import { InformationPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    openSuporteSweet(){
        this.navCtrl.setRoot(SuportePage);
    }
    openCabeleireiroVirtual(){
        this.navCtrl.setRoot(CabeleireiroHomePage);
    }
    openQuemSomos(){
        this.navCtrl.setRoot(QuemsomosPage);
    }
    openPageinfo(){
        this.navCtrl.setRoot(InformationPage);
    }
}
