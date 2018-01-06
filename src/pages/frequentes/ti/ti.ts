import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuportePage } from '../../suporte/suporte';

@Component({
  selector: 'page-ti',
  templateUrl: 'ti.html'
})
export class TiPage {
      
diseases = [
     
    { title: "Esqueci a minha senha, como recuperar?", description: "Na página inicial do site www.ezitus.com, você poderá recuperar a sua senha, basta clicar em “esqueci a minha senha” e informar o seu login, você receberá um email para recuperar a senha." },
     
    { title: "Eu posso alterar os meus dados de Pessoa Física para Pessoa Jurídica?", description: "Sim, basta acessar o site www.suportesweet.com.br e abrir um chamado de alteração de cadastro na área do Suporte TI." },
     
    { title: "O meu botão de saque não está liberado, o que fazer?", description: "Confirme se você enviou corretamente os documentos para confirmação do seu cadastro." },
     
    { title: "Os meus documentos não foram aprovados, qual o motivo?", description: "Verifique se você enviou documentos legíveis, e se os dados do seu cadastro estão corretos." },
     
    { title: "Cadastrei uma pessoa e ela não apareceu na minha rede, o que fazer?", description: "Basta acessar o site www.suportesweet.com.br e abrir um chamado de localização de usuário na área do Suporte TI." },
     
    { title: "Estou tentando cadastrar um novo usuário e está dando erro, o que fazer?", description: "Basta acessar o site www.suportesweet.com.br e abrir um chamado de erro na área do Suporte TI, informe o seu login e o CPF/CNPJ que está tentando cadastrar na mensagem." },
     
    { title: "Eu posso cadastrar mais de um usuário por CPF ou CNPJ?", description: "Não, o sistema permite apenas um cadastro para cada documento." },
     
    { title: "Onde posso fazer o Download da apresentação e do contrato de Distribuidor Independente?", description: "Acesse seu escritorio virtual, clique em “minha conta” e posteriormente em “Downloads”." },
     
    { title: "Como faço para ativar um usuário com o meu saldo?", description: "Não, uma vez cadastrado este usuário não poderá mais trocar de posição." },
     
    { title: "Eu posso trocar de posição um distribuidor já cadastrado?", description: "Sim, desde que ainda não esteja ativo ou não tenha nenhum outro usuário abaixo dele." },
     
    { title: "Eu posso trocar de patrocinador? Posso trocar de equipe?", description: "Não, uma vez cadastrado em uma equipe você não poderá mais mudar." }
     
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
