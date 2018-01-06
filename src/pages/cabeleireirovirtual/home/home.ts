import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../../home/home';
//Local storage
/*import { IonicStorageModule } from '@ionic/storage';*/

//Página de Teste
import { Teste1Page } from '../teste1/teste1';

@Component({
  selector: 'page-homecab',
  templateUrl: 'home.html'
})

export class CabeleireiroHomePage {

  
  constructor(public navCtrl: NavController, public app: App,  public alertCtrl: AlertController) {
    //Recebe o nome do usuário e armazena em uma variável
  /*  this.storage.get('nomeUsuario').then((data) => {
      this.nomeUsuario = data;
    });*/
    
  }

  realizarTeste() {
    //Armazenar nome do usuário
  /*  this.storage.set('nomeUsuario', this.nomeUsuario);*/
    //Ir para página de teste
    // this.app.getRootNav().setRoot(Teste1Page);
       this.navCtrl.push(Teste1Page);
  }

  voltarPage(){
    this.navCtrl.setRoot(HomePage);
  }
   
    
}