import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuportePage } from '../../suporte/suporte';
@Component({
  selector: 'page-comercial',
  templateUrl: 'comercial.html'
})
export class ComercialPage {

   diseases = [
     
    { title: "O que é Marketing Multinível (MMN) Sweet Hair?", description: "É um modelo de vendas diretas, via mononível/binível, de produtos de alta qualidadede, tecnolgia e perfomance no mercado de cósmeticos de uso profissional e para consumidor final." },
     
    { title: "Como faço para revender os produtos da Sweet Hair?", description: "Primeiramente você precisará de um líder, os líderes são pessoas conhecedoras do MMN que estão incorporando esse grande conhecimento a Sweet Hair. O líder irá te orientar sobre todas as diretizes do Plano de Négocio e te ajudar a desenvolver um bom trabalho. Caso você não conheça ninguém entre em contato conosco através do e-mail contato@sweethair.com.br (com as seguintes informações: nome completo, telefone de contato ‘de preferência que tenha (WhatsApp)’, sua região ‘cidade e estado) e seu interesse em fazer parte do MMN Sweet Hair) que lhe conectaremos ao líder mais proximo de sua região." },
     
    { title: "Como me ativo no sistema Marketing Multinível (MMN) Sweet Hair?", description: "Após se cadastrar no sistema e adquirir seu login e senha de acesso, deverá obter um de nossos combos de R$800,00, R$2.100,00 ou R$4.100,00. Desta forma você como distribuidor independente, poderá realizar todas as funcionalidades, usufruir do sistema com ferramenta de trabalho e dos benefícios nele incorporados." },
     
    { title: "O que é upgrade e como faço?", description: "O upgrade é a troca do seu plano de combo atual para um maior. Fazer o upgrade é muito simples, entre no sistema com seu login e senha e solicite o upgrade, efetue o pagamento da diferença do combo. Ex: Você adquiriu o combo de R$800,00 na sua ativação e deseja fazer o upgrade, então você o solicita no seu cadastro e escolhe entre as opções de R$2.100,00 ou de R$4.100,00, seguindo isso é só pagar a diferença, nesse caso supondo que escolha o de R$2100,00 você irá pagar a diferença de R$1.300,00 e receberá em seu estabelecimento os produtos que complementarão o primeiro combo adquirido de R$800,00." },
     
    { title: "Como são feitas as vendas para o salão e quais são seus ganhos?", description: "As vendas são feitas atraves do sistema Ezitus Sweet MMN onde o salão é cadastrado. Ao adquirir um dos combos de produtos oferecidos, o salão tem como beneficios: 60% de desconto nas suas recompras, lembrando sempre que para que este salão tenha direito ao beneficio, deverá estar ativo no sistema (para isso ele deverá dispor de um valor de R$150,00 para a manuenção do sistema e um consumo mínimo em produtos de R$350,00 para o beneficio do frete gratuito." },
     
    { title: "Como são feitas as vendas para o consumidor final?", description: "As vendas para consumidor final que não tem cadastro no sistema serão realizadas através da vitrine disponível no cadastro do distribuidor independente. Após a recompra feita, os produtos serão repassados ao consumidor final." }
    
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