import { Component } from '@angular/core';
import { NavController, LoadingController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InformationPage {
  modal: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public platform: Platform) {

  }
  backButtonAction(){
    /* checks if modal is open */
    if(this.modal && this.modal.index === 0) {
        /* closes modal */
        this.modal.dismiss();
    } else {
        /* exits the app, since this is the main/first tab */
        this.platform.exitApp();
        // this.navCtrl.setRoot(AnotherPage);  <-- if you wanted to go to another page
    }
  }

  ionViewDidLoad(){
    let loading = this.loadingCtrl.create({
      content: 'Aguardando Conexão...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  backpage(){
      this.navCtrl.setRoot(HomePage);
  }
}