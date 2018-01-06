import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SuportePage } from '../pages/suporte/suporte';
import { CabeleireiroHomePage } from '../pages/cabeleireirovirtual/home/home';
import { TermosPage } from '../pages/termos/termos';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';
import { QuemsomosPage } from '../pages/quemsomos/quemsomos';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
    rootPage: any = HomePage;
  
    pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Quem Somos', component: QuemsomosPage },
      { title: 'Suporte Sweet', component: SuportePage },
      { title: 'Cabeleireiro Virtual', component: CabeleireiroHomePage },
      { title: 'Termos e Condições', component: TermosPage }
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  pushLocalizacao(){
    this.nav.setRoot(LocalizacaoPage);
  }
}
