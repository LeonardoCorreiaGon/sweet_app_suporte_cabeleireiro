import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { TiPage } from '../frequentes/ti/ti';
import { LogisticaPage } from '../frequentes/logistica/logistica';
import { ComercialPage } from '../frequentes/comercial/comercial';
import { TecnicaPage } from '../frequentes/tecnica/tecnica';
import { FinanceiroPage } from '../frequentes/financeiro/financeiro';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-suporte',
  templateUrl: 'suporte.html'
})

export class SuportePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private emailComposer: EmailComposer) {
     
 }
   
    backPage(){
    this.navCtrl.setRoot(HomePage);
    }

    FrTi(){
    this.navCtrl.setRoot(TiPage);   
    }
    

    FrLogistica(){
    this.navCtrl.setRoot(LogisticaPage);
    }
    
   
    FrComercial(){
    this.navCtrl.setRoot(ComercialPage);
    }
    
     
    FrTecnica(){
    this.navCtrl.setRoot(TecnicaPage);
    }
    
    FrFinanceiro(){
    this.navCtrl.setRoot(FinanceiroPage);
    }


    sendEmailTi() {
    let email = {
      to: 'ti@suportesweet.com.br',
      subject: 'Suporte Sweet',
      body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }
    
    
    sendEmailFinanceiro() {
    let email1 = {
      to: 'financeiro@suportesweet.com.br',
      subject: 'Suporte Sweet',
      body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
      isHtml: true
    };
 
    this.emailComposer.open(email1);
  }
    
    
    
     sendEmailLogistica() {
    let email2 = {
      to: 'logistica@suportesweet.com.br',
      subject: 'Suporte Sweet',
      body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
      isHtml: true
    };
 
    this.emailComposer.open(email2);
  }
    
    
    
    sendEmailComercial() {
    let email3 = {
      to: 'comercial@suportesweet.com.br',
      subject: 'Suporte Sweet',
      body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
      isHtml: true
    };
 
    this.emailComposer.open(email3);
  }
    
    
    
    sendEmailTecnica() {
    let email4 = {
      to: 'areatecnica@suportesweet.com.br',
      subject: 'Suporte Sweet',
      body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
      isHtml: true
    };
 
    this.emailComposer.open(email4);
  }
    
    
    
    
    sendEmailMarketing() {
    let email5 = {
      to: 'marketing@suportesweet.com.br',
      subject: 'Suporte Sweet',
      body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
      isHtml: true
    };
 
    this.emailComposer.open(email5);
  }
    
    
    
  //   sendEmailInstituto() {
  //   let email6 = {
  //     to: 'institutosweet@suportesweet.com.br',
  //     subject: 'Suporte Sweet',
  //     body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
  //     isHtml: true
  //   };
 
  //   this.emailComposer.open(email6);
  // }
    

}