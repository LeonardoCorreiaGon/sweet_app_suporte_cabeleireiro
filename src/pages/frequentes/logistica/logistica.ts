import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuportePage } from '../../suporte/suporte';

@Component({
  selector: 'page-logistica',
  templateUrl: 'logistica.html'
})
export class LogisticaPage {

  diseases = [
     
    { title: "Posso alterar meu endereço de entrega após fazer o pedido?", description: "Não. O endereço de envio é aquele que foi cadastrado no sistema. Confira se seu cadastro está correto para evitar atrasos." },
     
    { title: "Como posso acompanhar minha entrega?", description: "Atualmente, através do email do suporte. No futuro, o próprio sistema enviará o rastreio." },
     
    { title: "Como receberei meu pedido?", description: "Pelos correios. Fique atento para que sempre haja um responsável para receber seu pedido no local de entrega." },
     
    { title: "Qual o valor do meu frete?", description: "O envio de Kits é por conta da Sweet. Para outras modalidades de compra, consulte o site da Vitrine." },
      
    { title: "Qual o prazo de recebimento?", description: "O prazo varia de acordo com a tabela dos correios." },
      
    { title: "Minha compra chegou danificada, como devo proceder?", description: "Faça fotos dos produtos danificados, mostrando claramente qual foi o problema e envie para o email do suporte sweet, juntamente com seu login, para fazermos a reposição dos produtos." },
      
    { title: "Minha compra chegou incompleta, como devo proceder?", description: "Faça fotos dos produtos danificados, mostrando claramente qual foi o problema e envie para o email do suporte sweet, juntamente com seu login, para fazermos a reposição dos produtos." },
      
     
    { title: "Minha compra chegou incorreta, como devo proceder?", description: "Envie um email para o suporte sweet, relatando seu caso. Ele será averiguado e o time responderá em 24h." }
     
  ];

  shownGroup = null;

  constructor(public navCtrl: NavController) {
  }

  back(){
       this.navCtrl.setRoot(SuportePage);
  }
  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  }
  isGroupShown(group) {
      return this.shownGroup === group;
  }


}