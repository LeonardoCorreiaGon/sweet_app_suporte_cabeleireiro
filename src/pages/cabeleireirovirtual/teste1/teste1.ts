import { Component, trigger, state, style, transition, animate, keyframes, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, LoadingController } from 'ionic-angular';

//Local storage
import { Storage } from '@ionic/storage';
// import { CabeleireiroHomePage } from '../home/home';

@IonicPage()
@Component({
  
  selector: 'page-teste1',
  templateUrl: 'teste1.html',

  //**************** INÍCIO ANIMAÇÃO ****************
  animations: [
    //Início Animação progressBar
    trigger('progressBar', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-250%, 0, 0)'
      })),
      /*transition('in => out', animate('300ms ease-in')),*/
      transition('out => in', animate('400ms ease-out'))
    ]),
    //Fim Animação progressBar

    //Início Animação Resultado
    trigger('resultado', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-250%, 0, 0)'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('300ms ease-out'))
    ]),

    trigger('resultadoEsq', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('300ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ]),
    //Fim Animiação Resultado
    //Início Animação para o texto de destaque do teste 1 (tipo de cabelo)
    trigger('txt', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0.0
      })),
      transition('visible <=> invisible', animate('100ms linear'))
    ]),
    //Fim Animação para o texto de destaque do teste 1 (tipo de cabelo)

    //Início Animação para o texto de destaque do teste 2 (espessura do fio)
    trigger('txt2', [
      state('visible', style({
        opacity: 0
      })),
      state('invisible', style({
        opacity: 1
      })),
      transition('visible <=> invisible', animate('100ms linear')),
    ]),
    //Fim Animação para o texto de destaque do teste 2 (espessura do fio)

    //Início Animação para o texto de destaque do teste 3 (espessura do fio)
    trigger('txt3', [
      state('visible', style({
        opacity: 0
      })),
      state('invisible', style({
        opacity: 1
      })),
      transition('visible <=> invisible', animate('100ms linear')),
    ]),
    //Fim Animação para o texto de destaque do teste 3 (espessura do fio)

    //Início Animação para o texto de destaque do teste 4 (espessura do fio)
    trigger('txt4', [
      state('visible', style({
        opacity: 0
      })),
      state('invisible', style({
        opacity: 1
      })),
      transition('visible <=> invisible', animate('100ms linear')),
    ]),
    //Fim Animação para o texto de destaque do teste 4 (espessura do fio)

    //Início Animação para o texto de destaque do teste 5 (espessura do fio)
    trigger('txt5', [
      state('visible', style({
        opacity: 0
      })),
      state('invisible', style({
        opacity: 1
      })),
      transition('visible <=> invisible', animate('100ms linear')),
    ]),
    //Fim Animação para o texto de destaque do teste 5 (espessura do fio)

    //Início Animação de tags
    trigger('tag1', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-5px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    trigger('tag2', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-5px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    trigger('tag3', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-5px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    trigger('tag4', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-5px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    trigger('tag5', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-5px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),
    //Fim Animação de tags

    //Início Animação div 1
    trigger('anim1', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-40px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    trigger('anim2', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-40px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    trigger('anim3', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-40px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    trigger('anim4', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-40px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    trigger('div1fade', [
      state('visible', style({
        opacity: 0
      })),
      state('invisible', style({
        opacity: 1
      })),
      transition('visible <=> invisible', animate('400ms linear'))
    ]),

    trigger('div1bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('500ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-40px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),
      
      //Fim Animação para div 1

    //Início Animação para div 2
    trigger('div2', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div22', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div222', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),
    //Fim Animação para div 2

    //Início Animação para div 3
    trigger('div3', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div33', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div333', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),
    //Fim Animação para div 3

    //Início Animação para div 4
    trigger('div4', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div44', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div444', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div4444', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div44444', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div444444', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div4444444', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),
    //Fim Animação para div 4

    //Início Animação para div 5
    trigger('div5Sim', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    trigger('div5Nao', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(250%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in')),
      transition('out => in', animate('400ms ease-out'))
    ]),

    //Fim Animação para div 5

    trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('300ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-10px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ])
  ]
})
  //**************** FIM ANIMAÇÃO ****************

export class Teste1Page {
  //Início Animação
  flyInOutState: String = 'in';
  anim1State: String = 'noBounce';
  anim2State: String = 'noBounce';
  anim3State: String = 'noBounce';
  anim4State: String = 'noBounce';
  fadeState: String = 'visible';
  txtState: String = 'invisible';
  txt2State: String = 'visible';
  txt3State: String = 'visible';
  txt4State: String = 'visible';
  txt5State: String = 'visible';
  div1fadeState: String = 'visible';
  div1bounceState: String = 'noBounce';
  bounceState: String = 'noBounce';
  progressBarState: String = 'in';
  resultadoState: String = 'out';
  resultadoEsqState: String = 'out';
  div2State: String = 'out';
  div22State: String = 'out';
  div222State: String = 'out';
  div3State: String = 'out';
  div33State: String = 'out';
  div333State: String = 'out';
  div4State: String = 'out';
  div44State: String = 'out';
  div444State: String = 'out';
  div4444State: String = 'out';
  div44444State: String = 'out';
  div444444State: String = 'out';
  div4444444State: String = 'out';
  div5SimState: String = 'out';
  div5NaoState: String = 'out';
  tag1State: String = 'noBounce';
  tag2State: String = 'noBounce';
  tag3State: String = 'noBounce';
  tag4State: String = 'noBounce';
  tag5State: String = 'noBounce';
  
  //Fim Animação

  //Início ProgressBar
   @Input('progress') progress;
   bar: any;
  //Fim ProgressBar

  //Início Mapa
   @Input('mapa') mapa;
   map: any;
  //Fim Mapa

  //Vars
  comprimentoDoCabelo: string;
  condicoesDoCabelo: string;
  espessuraDoFio: string;
  tipoDeCabelo: string;
  quimicamenteTratado: string;
  quimicamenteTratadoResult: any;
  nomeUsuario: string;
  tipoDeCabeloVar: string;
  espessuraDoFioVar: string;
  quimicamenteTratadoVar: string;
  comprimentoDoCabeloVar: string;
  condicoesDoCabeloVar: string;
  resultado: any;
  chamaIMG: any;
  browser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, private storage: Storage, public loadingCtrl: LoadingController) {
    //Esconde a progressBar
    this.progressBarState = 'out';
  }

  //FUNÇÃO INICIAL CLICK DA TAG1 LISO
  funInicial(){
    //Exibir Div
    var tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
    setTimeout(() => {
    tipoDeCabeloDiv.style.display = "inherit";
  }, 1500);

  //Recebe o nome do usuário e armazena em uma variável
  // this.storage.get('nomeUsuario').then((data) => {
  //   this.nomeUsuario = data;
  // });

  //Define valor 0 para a progress bar qnd clica na Tag1 liso
  setTimeout(() => {
    this.progressBarState = 'in';
    this.bar = 0;
  }, 300);

  //Animação inicial (div tipoDeCabelo)
    //Exibir texto de destaque em animação
    setTimeout(() => {
    //Move o mapa
    this.map = 50;
    this.txtState = (this.txtState == 'visible') ? 'invisible' : 'visible';
  }, 500);

  setTimeout(() => {
    this.div1fadeState = (this.div1fadeState == 'visible') ? 'invisible' : 'visible';
  }, 1200);

    setTimeout(() => {
      this.anim1State = (this.anim1State == 'noBounce') ? 'bouncing' : 'noBounce';
  });

  setTimeout(() => {
    this.anim2State = (this.anim2State == 'noBounce') ? 'bouncing' : 'noBounce';
  });

  setTimeout(() => {
    this.anim3State = (this.anim3State == 'noBounce') ? 'bouncing' : 'noBounce';
  });

setTimeout(() => {
  this.anim4State = (this.anim4State == 'noBounce') ? 'bouncing' : 'noBounce';
});
}
  //Fim Func inicial

  //Quando a página carregar
  ionViewDidLoad() {

    //Recebe o nome do usuário e armazena em uma variável
    // this.storage.get('nomeUsuario').then((data) => {
    //   this.nomeUsuario = data;
    // });

    //Define valor 0 para a progress bar
    setTimeout(() => {
      this.progressBarState = 'in';
      this.bar = 0;
    }, 0);

    //Animação inicial (div tipoDeCabelo)
      //Exibir texto de destaque em animação
      setTimeout(() => {
      this.txtState = (this.txtState == 'visible') ? 'invisible' : 'visible';
    }, 300);

    setTimeout(() => {
      this.div1fadeState = (this.div1fadeState == 'visible') ? 'invisible' : 'visible';
    }, 150);

  }
  //**************** INÍCIO TIPO DE CABELO ****************
  tipoDeCabeloFunc() {
    //Exibir no console tipo de cabelo
    console.log('tipo de cabelo', this.tipoDeCabelo);

            //Armazenar tipo de cabelo
            this.storage.set('tipoDeCabelo', this.tipoDeCabelo);

            //Alterar progress bar
            this.bar = 20;

            //Exibir no console confirmação do tipo de cabelo do usuário
            console.log('Confirmação de cabelo ' + this.tipoDeCabelo);

            //Animação
              //Fade
              this.div1fadeState = (this.div1fadeState == 'visible') ? 'invisible' : 'visible';
              //Bounce
              this.anim1State = (this.anim1State == 'noBounce') ? 'bouncing' : 'noBounce';
              this.anim2State = (this.anim2State == 'noBounce') ? 'bouncing' : 'noBounce';
              this.anim3State = (this.anim3State == 'noBounce') ? 'bouncing' : 'noBounce';
              this.anim4State = (this.anim4State == 'noBounce') ? 'bouncing' : 'noBounce';

              //FlyInOut
              setInterval(() => {
              this.flyInOutState = 'out';
            }, 500);

            //Esconder texto de destaque em animação
            setTimeout(() => {
            this.txtState = (this.txtState == 'visible') ? 'invisible' : 'visible';
          }, 600);

          //Esconder teste 1 (div tipoDeCabeloDiv)
          var tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
          setTimeout(() => {
          tipoDeCabeloDiv.style.display = "none";
          }, 2000);

          //Chamar função do teste 2 (espessuraDoFio)
          this.espessuraDoFioFunc();

          //ExibirTag
          var tipoDeCabeloTag = document.getElementById("tipoDeCabeloTag");
          tipoDeCabeloTag.style.display = "";
          this.tag1State = (this.tag1State == 'noBounce') ? 'bouncing' : 'noBounce';

          }
  //     }]
  //   });
  //   alert.present();
  // }
  //**************** FIM TIPO DE CABELO ****************

  //**************** INÍCIO ESPESSURA DO FIO ****************
  espessuraDoFioFunc() {

    console.log("Esta é a função do teste 2!");

    //Exibir div
    setTimeout(() => {
      var espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv")
      espessuraDoFioDiv.style.display = "inherit";
    }, 1300);

      var tipoDeCabeloDiv;
    //Animação do texto
    tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
    setTimeout(() => {
    this.map = 60;
    this.txt2State = (this.txt2State == 'visible') ? 'invisible' : 'visible';
  }, 2000);

    //Animação dos cards
    setTimeout(() => {
      this.div2State = 'in';
    }, 2500);

    setTimeout(() => {
      this.div22State = 'in';
    }, 2700);

    setTimeout(() => {
      this.div222State = 'in';
    }, 2900);
  }

  espessuraDoFioClick() {

    var teste = document.getElementsByClassName("bg");
    console.log(teste);

    //Exibir no console espessura do fio
    console.log(this.espessuraDoFio);

    // //Alerta de confirmação da espessura do fio
    // let alert = this.alertCtrl.create({
    //   title: this.nomeUsuario,
    //   message: 'Seu cabelo é ' + this.espessuraDoFio + '?',
    //   buttons: [{
    //     role: 'cancel',
    //     text: 'Não, escolher outro',
    //   },
    //   {
    //     text: 'Sim!',
    //     handler: () => {
            //Armazenar tipo de cabelo
            this.storage.set('espessuraDoFio', this.espessuraDoFio);

            //Alterar progress bar
            setTimeout(() => {
              this.bar = 40;
            }, 1000);

            //Exibir no console confirmação do tipo de cabelo do usuário
            console.log('Confirmação de cabelo ' + this.espessuraDoFio);

            //Animação de saída dos cards
            setTimeout(() => {
              this.div2State = 'out';
            }, 500);

            setTimeout(() => {
              this.div22State = 'out';
            }, 700);

            setTimeout(() => {
              this.div222State = 'out';
            }, 900);

            //Esconder texto de destaque em animação
            setTimeout(() => {
            this.txt2State = (this.txt2State == 'visible') ? 'invisible' : 'visible';
          }, 1300);

          //Esconder teste 2 (div espessuraDoFio)
          var espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv");
          setTimeout(() => {
          espessuraDoFioDiv.style.display = "none";
        }, 2100);

          //Chamar função do teste 3 (comprimentoDoCabelo)
          this.comprimentoDoCabeloFunc();

          //ExibirTag
          var espessuraDoFioTag = document.getElementById("espessuraDoFioTag");
          espessuraDoFioTag.style.display = "";
          this.tag2State = (this.tag2State == 'noBounce') ? 'bouncing' : 'noBounce';

          }
  //     }]
  //   });
  //   alert.present();
  // }
  //**************** FIM ESPESSURA DO FIO ****************

  //**************** INÍCIO COMPRIMENTO DO CABELO ****************
  comprimentoDoCabeloFunc() {
    console.log("Esta é a função do teste 3!");

    //Exibir div
    setTimeout(() => {
    var comprimentoDoCabeloDiv = document.getElementById("comprimentoDoCabeloDiv");
    comprimentoDoCabeloDiv.style.display = "inherit";
    }, 1300);

    //Animação do texto
    setTimeout(() => {
    this.map = 70;
    this.txt3State = (this.txt3State == 'visible') ? 'invisible' : 'visible';
  }, 2500);

    //Animação de entrada dos cards
    setTimeout(() => {
      this.div3State = 'in';
    }, 3000);

    setTimeout(() => {
      this.div33State = 'in';
    }, 3200);

    setTimeout(() => {
      this.div333State = 'in';
    }, 3400);
  }

    comprimentoDoCabeloClick() {
      //Exibir no console comprimento do cabelo
      console.log(this.comprimentoDoCabelo);

      //Alerta de confirmação da espessura do fio
      // let alert = this.alertCtrl.create({
      //   title: this.nomeUsuario,
      //   message: 'Seu cabelo é ' + this.comprimentoDoCabelo + '?',
      //   buttons: [{
      //     role: 'cancel',
      //     text: 'Não, escolher outro',
      //   },
      //   {
      //     text: 'Sim!',
      //     handler: () => {
              //Armazenar tipo de cabelo
              this.storage.set('comprimentoDoCabelo', this.comprimentoDoCabelo);

              //Alterar progress bar
              setTimeout(() => {
                this.bar = 60;
              }, 1000);

              //Exibir no console confirmação do tipo de cabelo do usuário
              console.log('Confirmação de cabelo ' + this.comprimentoDoCabelo);

              //Animação de saída dos cards
              setTimeout(() => {
                this.div3State = 'out';
              }, 500);

              setTimeout(() => {
                this.div33State = 'out';
              }, 700);

              setTimeout(() => {
                this.div333State = 'out';
              }, 900);

              //Esconder texto de destaque em animação
              setTimeout(() => {
              this.txt3State = (this.txt3State == 'visible') ? 'invisible' : 'visible';
            }, 1300);

            //Esconder teste 3 (div espessuraDoFio)
            var comprimentoDoCabeloDiv = document.getElementById("comprimentoDoCabeloDiv");
            setTimeout(() => {
            comprimentoDoCabeloDiv.style.display = "none";
          }, 2100);

            //Chamar função do teste 4 (comprimentoDoCabelo)
            this.condicoesDoCabeloFunc();

            //ExibirTag
            var comprimentoDoCabeloTag = document.getElementById("comprimentoDoCabeloTag");
            comprimentoDoCabeloTag.style.display = "";
            this.tag3State = (this.tag3State == 'noBounce') ? 'bouncing' : 'noBounce';

            }
    //     }]
    //   });
    //   alert.present();
    // }
  //**************** FIM COMPRIMENTO DO CABELO ****************

  //**************** INÍCIO CONDIÇÕES DO CABELO ****************
  condicoesDoCabeloFunc() {
    console.log("Esta é a função do teste 4!");

    //Exibir div
    setTimeout(() => {
      var condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
      condicoesDoCabeloDiv.style.display = "inherit";
  }, 1400);


    //Animação do texto
    setTimeout(() => {
    this.map = 80;
    this.txt4State = (this.txt4State == 'visible') ? 'invisible' : 'visible';
    }, 2500);

    //Animação de entrada dos cards
    setTimeout(() => {
      this.div4State = 'in';
    }, 3000);

    setTimeout(() => {
      this.div44State = 'in';
    }, 3200);

    setTimeout(() => {
      this.div444State = 'in';
    }, 3400);

    setTimeout(() => {
      this.div4444State = 'in';
    }, 3600);

    setTimeout(() => {
      this.div44444State = 'in';
    }, 3800);

    setTimeout(() => {
      this.div444444State = 'in';
    }, 4000);

    setTimeout(() => {
      this.div4444444State = 'in';
    }, 4200);
  }

    condicoesDoCabeloClick() {
      //Exibir no console condicoes do cabelo
      console.log(this.condicoesDoCabelo);

      // //Alerta de confirmação da espessura do fio
      // let alert = this.alertCtrl.create({
      //   title: this.nomeUsuario,
      //   message: 'Seu cabelo é ' + this.condicoesDoCabelo + '?',
      //   buttons: [{
      //     role: 'cancel',
      //     text: 'Não, escolher outro',
      //   },
      //   {
      //     text: 'Sim!',
      //     handler: () => {
              //Armazenar tipo de cabelo
              this.storage.set('condicoesDoCabelo', this.condicoesDoCabelo);

              //Alterar progress bar
              setTimeout(() => {
                this.bar = 80;
              }, 1000);

              //Exibir no console confirmação do tipo de cabelo do usuário
              console.log('Confirmação de cabelo ' + this.condicoesDoCabelo);

              //Animação de saída dos cards
              setTimeout(() => {
                this.div4State = 'out';
              }, 500);

              setTimeout(() => {
                this.div44State = 'out';
              }, 700);

              setTimeout(() => {
                this.div444State = 'out';
              }, 900);

              setTimeout(() => {
                this.div4444State = 'out';
              }, 1100);

              setTimeout(() => {
                this.div44444State = 'out';
              }, 1300);

              setTimeout(() => {
                this.div444444State = 'out';
              }, 1500);

              setTimeout(() => {
                this.div4444444State = 'out';
              }, 1700);

              //Esconder texto de destaque em animação
              setTimeout(() => {
              this.txt4State = (this.txt4State == 'visible') ? 'invisible' : 'visible';
            }, 1500);

            //Esconder teste 3 (div espessuraDoFio)
            var condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
            setTimeout(() => {
            condicoesDoCabeloDiv.style.display = "none";
          }, 2100);

            //Chamar função do teste 4 (comprimentoDoCabelo)
            this.quimicamenteTratadoFunc();

            //ExibirTag
            var condicoesDoCabeloTag = document.getElementById("condicoesDoCabeloTag");
            condicoesDoCabeloTag.style.display = "";
            this.tag4State = (this.tag4State == 'noBounce') ? 'bouncing' : 'noBounce';

            }
    //     }]
    //   });
    //   alert.present();
    // }
  //**************** FIM CONDIÇÕES DO CABELO ****************

  //**************** INÍCIO QUIMICAMENTE TRATADO ****************

  quimicamenteTratadoFunc() {
    console.log("Esta é a função do teste 5!");

    //Exibir div
    setTimeout(() => {
      var quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
      quimicamenteTratadoDiv.style.display = "inherit";
    }, 1300);

    //Animação do texto
    setTimeout(() => {
    this.map = 90;
    this.txt5State = (this.txt5State == 'visible') ? 'invisible' : 'visible';
  }, 1500);

    //Animação de entrada dos cards
    setTimeout(() => {
      this.div5SimState = 'in';
    }, 1700);

    setTimeout(() => {
      this.div5NaoState = 'in';
    }, 2000);

  }

    quimicamenteTratadoSimClick() {
      //Exibir no console tipo de química
      console.log(this.condicoesDoCabelo);

      //Alerta de confirmação da espessura do fio
      let alert = this.alertCtrl.create({
        title: '',
        message: 'Seu cabelo ultimamente foi:',
        inputs: [
          {
          type: 'radio',
          label: 'Colorido',
          value: 'colorido',
        },
        {
        type: 'radio',
        label: 'Descolorido',
        value: 'descolorido',
      },
      {
      type: 'radio',
      label: 'Alisado',
      value: 'alisado',
    }
      ],
        buttons: [
        {
          text: 'Sim!',
          handler: data => {
              //Armazenar tipo de cabelo

              this.storage.set('quimicamenteTratado', data);

              //Alterar progress bar
              setTimeout(() => {
                this.bar = 100;
              }, 1000);

              //Exibir no console confirmação do tipo de cabelo do usuário
              console.log('Confirmação de cabelo ' + data);

              //Alterar progress bar
              setTimeout(() => {
                this.bar = 100;
              }, 1000);

              //Animação de saída dos cards
              setTimeout(() => {
                this.div5SimState = 'out';
              }, 500);

              setTimeout(() => {
                this.div5NaoState = 'out';
              }, 700);

              //Esconder texto de destaque em animação
              setTimeout(() => {
              this.txt5State = (this.txt5State == 'visible') ? 'invisible' : 'visible';
            }, 1500);
              
              var quimicamenteTratadoDiv;

            //Esconder teste 5 (div espessuraDoFio)
            quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
            setTimeout(() => {
            quimicamenteTratadoDiv.style.display = "none";
          }, 1700);

            //Esconder teste 5 (div espessuraDoFio)
            quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
            setTimeout(() => {
            quimicamenteTratadoDiv.style.display = "none";
          }, 1900);

          //ExibirTag
          var quimicamenteTratadoTag = document.getElementById("quimicamenteTratadoTag");
          quimicamenteTratadoTag.style.display = "";
          this.tag5State = (this.tag5State == 'noBounce') ? 'bouncing' : 'noBounce';

            //Chamar função do teste 4 (comprimentoDoCabelo)
            this.logica();
            }
        }]
      });
      alert.present();
    }

    quimicamenteTratadoNaoClick() {
      //Exibir no console espessura do fio
      console.log(this.condicoesDoCabelo);

              //Armazenar tipo de cabelo
              this.storage.set('quimicamenteTratado', 's/ química');

              //Alterar progress bar
              setTimeout(() => {
                this.bar = 100;
              }, 1000);

              //Animação de saída dos cards
              setTimeout(() => {
                this.div5SimState = 'out';
              }, 500);

// funcao(this.div5SimState, out, 500);
        /*
        var nomedafuncao = function (variavel, animacao, tempo) {
           setTimeout(() => {
               variavel = 'animacao';
              }, tempo);
        }

        */


              setTimeout(() => {
                this.div5NaoState = 'out';
              }, 700);

              //Esconder texto de destaque em animação
              setTimeout(() => {
              this.txt5State = (this.txt5State == 'visible') ? 'invisible' : 'visible';
            }, 1300);

            //Esconder teste 5 (div espessuraDoFio)
            var quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
            setTimeout(() => {
            quimicamenteTratadoDiv.style.display = "none";
          }, 1700);

            //Chamar função de lógica (resultado)
            this.logica();

            //ExibirTag
            var quimicamenteTratadoTag = document.getElementById("quimicamenteTratadoTag");
            quimicamenteTratadoTag.style.display = "";
            this.tag5State = (this.tag5State == 'noBounce') ? 'bouncing' : 'noBounce';

            }
  //**************** FIM QUIMICAMENTE DO TRATADO ****************


  //**************** INÍCIO LÓGICA ****************
  logica() {
    //Exibir div
    setTimeout(() => {
    var resultadoDiv = document.getElementById("resultadoDiv");
    resultadoDiv.style.display = "inherit";
  }, 1800);
      //Animação
      setTimeout(() => {
        this.map = 100;
        this.resultadoState = 'in';
        this.resultadoEsqState = 'in';
      }, 2000);

    //Recebe os valores e armazenam em suas variáveis
    this.storage.get('tipoDeCabelo').then((data1) => {
      this.tipoDeCabeloVar = data1;

      this.storage.get('espessuraDoFio').then((data2) => {
        this.espessuraDoFioVar = data2;

      this.storage.get('comprimentoDoCabelo').then((data3) => {
        this.comprimentoDoCabeloVar = data3;

      this.storage.get('condicoesDoCabelo').then((data4) => {
        this.condicoesDoCabeloVar = data4;

        this.storage.get('quimicamenteTratado').then((data5) => {
          this.quimicamenteTratadoVar = data5;
         
         // aqui aparece o box do loading e controla e tempo
         let loading = this.loadingCtrl.create({
           content: 'Aguarde...'
         });
        loading.present();
        setTimeout(() => {
         loading.dismiss();
         }, 2300);
        //fim
          //Início Lógica
          //Liso, curto, saudável e colorido
          if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in ';
                this.chamaIMG = '1111.jpg';
            }
                   //Liso, curto, saudável e descolorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                     this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS home / Fluido Thermal / Shampoo Matizador Home ';
                     this.chamaIMG = '1112.jpg';                 
                   }
                   //Liso, curto, saudável e alisado
                   else  if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                     this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido  Thermal / Gloss';
                     this.chamaIMG = '1113.jpg';                                  
                   }
                   //Liso, curto, saudável e sem química
                  else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável') {
                     this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Ampola Repair / Spray de Brilho ';
                     this.chamaIMG = '1114.jpg';
                   }
                   //Liso, curto, danificado e colorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                     this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in  Lovely  ';
                     this.chamaIMG = '1121.jpg';                    
                   }
                   //Liso, curto, danificado e descolorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                     this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS home / Shampoo Matizador Home / Fluido Thermal';
                     this.chamaIMG = '1122.jpg';
                   }
                   //Liso, curto, danificado e alisado
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                     this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                     this.chamaIMG = '1123.jpg';
                   }
                   //Liso, curto, danificado e sem quimica
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado') {
                     this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                     this.chamaIMG = '1124.jpg';
                   }
                   //Liso, curto, seco e colorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                     this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream/ Leave in Lovely / Gloss';
                     this.chamaIMG = '1131.jpg';
                   }
                   //Liso, curto, seco e descolorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                     this.resultado = 'Shampoo e Condicionador Reconstrução / Máscara Hair Body Cream / SOS Home / Leave in Lovely / Shampoo Matizador Home';
                     this.chamaIMG = '1132.jpg';
                   }
                   //Liso, curto, seco e alisado
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                     this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal/ Spray de Brilho';
                     this.chamaIMG = '1133.jpg'; 
                   }
                   //Liso, curto, seco e sem quimica
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco') {
                     this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream';
                     this.chamaIMG = '1134.jpg';  
                   }
                   //Liso, curto, oleoso e colorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                     this.resultado = 'Shampoo e Condicionador Mousse Cabelos Oleosos / Shampoo em pó / Máscara Hair Body Cream / Fluido Thermal';
                     this.chamaIMG = '1141.jpg';                     
                   }
                   //Liso, curto, oleoso e descolorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                     this.resultado = 'Shampoo e Condicionador Mousse Cabelos Oleosos / Shampoo Barbados / Máscara Hair Body Cream / Fluido Thermal / SOS Home / Shampoo Matizador Home';
                     this.chamaIMG = '1142.jpg';
                   }
                   //Liso, curto, oleoso e alisado
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                     this.resultado = 'Shampoo e Condicionador The First / Shampoo Barbados / Máscara The First / Fluido Thermal';
                     this.chamaIMG = '1143.jpg';                    
                   }
                   //Liso, curto, oleoso sem quimica
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso') {
                     this.resultado = 'Shampoo Barbados / Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                     this.chamaIMG = '1144.jpg';
                   }
                   //Liso, curto, frizz e colorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                     this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely';
                     this.chamaIMG = '1151.jpg';
                   }
                   //Liso, curto, frizz e descolorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                     this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Fluido Thermal / Shampoo Matizador Home';
                     this.chamaIMG = '1152.jpg';                     
                   }
                   //Liso, curto, frizz e alisado
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                     this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss ';
                     this.chamaIMG = '1153.jpg';                     
                   }
                   //Liso, curto, frizz e sem quimica
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz') {
                     this.resultado = 'Shampoo e Condicionador Mousse Diário / Máscara Mystic Jelly / Fluido Thermal / Gloss';
                     this.chamaIMG = '1154.jpg'; 
                   }
                   //Liso, curto, opaco e colorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                     this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely ';
                     this.chamaIMG = '1161.jpg';
                   }
                   //Liso, curto, opaco e descolorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                     this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Fluido Thermal / Shampoo Matizador Home';
                     this.chamaIMG = '1162.jpg'; 
                   }
                   //Liso, curto, opaco e alisado
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                     this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Máscara The First / Fluido Thermal / Gloss';
                     this.chamaIMG = '1163.jpg'; 
                   }
                   //Liso, curto, opaco e sem quimica
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco') {
                     this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                     this.chamaIMG = '1164.jpg'; 
                   }
                   //Liso, curto, extremo danificado e colorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                       this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS Home / Leave in Lovely';
                       this.chamaIMG = '1171.jpg'; 
                   }
                   //Liso, curto, extremo danificado e descolorido
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                       this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home /Fluido Thermal';
                       this.chamaIMG = '1172.jpg'; 
                   }
                   //Liso, curto, extremo danificado e alisado
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                       this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                       this.chamaIMG = '1173.jpg'; 
                   }
                   //Liso, curto, extremo danificado e sem quimica
                   else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado') {
                       this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Fluido Thermal / Gloss';
                       this.chamaIMG = '1174.jpg'; 
                   }
            //Liso, médio, saudável e colorido
             else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Fluido Thermal';
                this.chamaIMG = '1211.jpg';
            }
            //Liso, médio, saudável e descolorido
             else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Leave in The First / Gloss';
                this.chamaIMG = '1212.jpg';  
            }
            //Liso, médio, saudável e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First Home / Mascara The First / Leave in The First / Gloss ';
                this.chamaIMG = '1213.jpg'; 
            }
            //Liso, médio, saudável e sem química
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável') {
                this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara Mystic Jelly / Leave in Lovely';
                this.chamaIMG = '1214.jpg'; 
            }
            //Liso, médio, danificado e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Spray de Brilho';
                this.chamaIMG = '1221.jpg'; 
            }
            //Liso, médio, danificado e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Leave in Lovely / Spray de Brilho';
                this.chamaIMG = '1222.jpg'; 
            }
            //Liso, médio, danificado e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '1223.jpg';
            }
            //Liso, médio, danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Fluido Thermal / Gloss';
                this.chamaIMG = '1224.jpg'; 
            }
            //Liso, médio, seco e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Mascara The First / Leave in Lovely';
                this.chamaIMG = '1231.jpg'; 
            }
            //Liso, médio, seco e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / Leave in The First / Gloss';
                this.chamaIMG = '1232.jpg'; 
            }
            //Liso, médio, seco e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Spray de Brilho';
                this.chamaIMG = '1233.jpg'; 
            }
            //Liso, médio, seco e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco') {
                this.resultado = 'Shampoo e condicionador Lovely / Mascara Hair Body Cream / Leave in Lovely / Spray de Brilho';
                this.chamaIMG = '1234.jpg'; 
            }
            //Liso, médio, oleoso e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Cabelos Oleosos / Shampoo em Pó / Máscara Hair Body Cream / Fluido Thermal';
                this.chamaIMG = '1241.jpg'; 
            }
            //Liso, médio, oleoso e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Cabelos Oleosos / Shampoo Barbados / Máscara Hair Body Cream / Fluido Thermal / SOS Home / Shampoo Matizador Home';
                this.chamaIMG = '1242.jpg'; 
            }
            //Liso, médio, oleoso e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First  /Shampoo Barbados / Máscara The First / Fluido Thermal';
                this.chamaIMG = '1243.jpg'; 
            }
            //Liso, médio, oleoso sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso') {
                this.resultado = 'Shampoo Barbados / Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                 this.chamaIMG = '1244.jpg';
            } 
            //Liso, médio, frizz e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Lovely Home / Máscara Hair Body Cream / Leave in Lovely / Gloss ';
                this.chamaIMG = '1251.jpg';  
            }
            //Liso, médio, frizz e descolorido
           else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Shampoo Matizador Home / Leave in Lovely';
                this.chamaIMG = '1252.jpg';
            }
            //Liso, médio, frizz e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Spray de Brilho ';
                this.chamaIMG = '1253.jpg'; 
            }
            //Liso, médio, frizz e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz') {
                this.resultado = 'Shampoo e Condicionador Lovely / Mascara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '1254.jpg'; 
            }
            //Liso, médio, opaco e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / Gloss / Leave in';
                this.chamaIMG = '1261.jpg';             
            }
            //Liso, médio, opaco e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Shampoo Matizador Home / Leave in / Gloss ';
                this.chamaIMG = '1262.jpg';              
            }
            //Liso, médio, opaco e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '1263.jpg';             
            }
            //Liso, médio, opaco e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco') {
                this.resultado = 'Shampoo e Condicionador Lovely / Mascara The First / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '1264.jpg'; 
            }
            //Liso, médio, extremo danificado e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '1271.jpg';          
            }
            //Liso, médio, extremo danificado e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Shampoo Matizador Home / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '1272.jpg';             
            }
            //Liso, médio, extremo danificado e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Spray de Brilho ';
                this.chamaIMG = '1273.jpg';
            }
            //Liso, médio, extremo danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado') {
                this.resultado = 'Shampoo e Condicionador Lovely / Mascara Hair Body Cream / SOS Home / Fluido Thermal / Gloss';
                this.chamaIMG = '1274.jpg';
            }
            //Liso, longo, saudável e colorido
           else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '1311.jpg';
            }
            //Liso, longo, saudável e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Lovely  / Máscara Hair Body Cream / SOS Home / Fluido Thermal / Gloss';
                this.chamaIMG = '1312.jpg';
            }
            //Liso, longo, saudável e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Spray de Brilho';
                this.chamaIMG = '1313.jpg';
            }
            //Liso, longo, saudável e sem química
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável') {
                this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara The First / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '1314.jpg';
            }
            //Liso, longo, danificado e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '1321.jpg';
            }
            //Liso, longo, danificado e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Mascara Matizadora Home / Fluido Thermal / Gloss';
                this.chamaIMG = '1322.jpg';
            }
            //Liso, longo, danificado e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in / Gloss / Spray de Brilho';
                this.chamaIMG = '1323.jpg'; 
            }
            //Liso, longo, danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Leave in / Gloss';
                this.chamaIMG = '1324.jpg'; 
            }
            //Liso, longo, seco e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '1331.jpg'; 
            }
            //Liso, longo, seco e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / SOS Home / Mascara Matizadora / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '1332.jpg';   
            }
            //Liso, longo, seco e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in / Gloss';
                this.chamaIMG = '1333.jpg';  
            }
            //Liso, longo, seco e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco') {
                this.resultado = 'Shampoo e Condicionador Lovely / Mascara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '1334.jpg';
            }
            //Liso, longo, oleoso e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream';
                this.chamaIMG = '1341.jpg';
            }
            //Liso, longo, oleoso e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home';
                this.chamaIMG = '1342.jpg';
            }
            //Liso, longo, oleoso e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal ou Leavin / Gloss';
                this.chamaIMG = '1343.jpg';
            }
            //Liso, longo, oleoso sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso') {
                this.resultado = 'Shampoó ou Shampoo e Condicionador Barbados ou Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum';
                this.chamaIMG = '1344.jpg';
            }
            //Liso, longo, frizz e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream';
                this.chamaIMG = '1351.jpg';
            }
            //Liso, longo, frizz e descolorido
           else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home';
                this.chamaIMG = '1352.jpg';
            }
            //Liso, longo, frizz e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal ou Leavin / Gloss';
                this.chamaIMG = '1353.jpg'; 
            }
            //Liso, longo, frizz e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz') {
                this.resultado = 'Shampoo e Condicionador Mousse Diário / Máscara Hair Body Cream / Fluido Thermal';
                this.chamaIMG = '1354.jpg';
            }
            //Liso, longo, opaco e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream';
                this.chamaIMG = '1361.jpg';
            }
            //Liso, longo, opaco e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home';
                this.chamaIMG = '1362.jpg'; 
            }
            //Liso, longo, opaco e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal ou Leavin / Gloss';
                this.chamaIMG = '1363.jpg';
            }
            //Liso, longo, opaco e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco') {
                this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / SOS Home / Gloss / Fluido Thermal';
                this.chamaIMG = '1364.jpg';
            }
            //Liso, longo, extremo danificado e colorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Lovely / Máscara The First / SOS Home / Gloss';
                this.chamaIMG = '1371.jpg';
            }
            //Liso, longo, extremo danificado e descolorido
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / GLoss / Mascara Matizadora';
                this.chamaIMG = '1372.jpg';
            }
            //Liso, longo, extremo danificado e alisado
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '1373.jpg'; 
            }
            //Liso, longo, extremo danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'liso' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss / Leave in The First';
                this.chamaIMG = '1374.jpg'; 
            }
            //ondulado, curto, saudável e colorido
           if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Lovely / Mascara Mystic Jelly / Leave in Lovely / Gloss';
                this.chamaIMG = '2111.jpg'; 
            }
            //ondulado, curto, saudável e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador em Mousse de Reconstrução /  Mascara Hair Body Cream / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '2112.jpg'; 
            }
            //ondulado, curto, saudável e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal / Gloss';
                this.chamaIMG = '2113.jpg'; 
            }
            //ondulado, curto, saudável e sem química
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Mystic Jelly / Modelador de Cachos / Gloss';
                this.chamaIMG = '2114.jpg';
            }
            //ondulado, curto, danificado e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos/ Spray de Brilho';
                this.chamaIMG = '2121.jpg'; 
            }
            //ondulado, curto, danificado e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Mascara Matizadora / Leave in Lovely';
                this.chamaIMG = '2122.jpg';
            }
            //ondulado, curto, danificado e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2123.jpg'; 
            }
            //ondulado, curto, danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Spray de Brilho';
                this.chamaIMG = '2124.jpg'; 
            }
            //ondulado, curto, seco e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Leave in Lovely / Gloss';
                this.chamaIMG = '2131.jpg'; 
            }
            //ondulado, curto, seco e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / Mascara Matizadora / Spray de Brilho';
                this.chamaIMG = '2132.jpg'; 
            }
            //ondulado, curto, seco e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2133.jpg'; 
            }
            //ondulado, curto, seco e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Modelador de Cachos / Gloss / Leave in';
                this.chamaIMG = '2134.jpg';              
            }
            //ondulado, curto, oleoso e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo Barbados /Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum';
                this.chamaIMG = '2141.jpg'; 
            }
            //ondulado, curto, oleoso e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo Barbados / Shampoo e Condicionador Mousse Oleosos / Máscara Hair Body Cream / Sérum / Mascara Matizadora / Modelador de Cachos / Gloss';
                this.chamaIMG = '2142.jpg'; 
            }
            //ondulado, curto, oleoso e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2143.jpg'; 
            }
            //ondulado, curto, oleoso sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso') {
                this.resultado = 'Shampoo Barbados ou Shampoo em Pó / Máscara Mystic Jelly / Sérum / Modelador de Cachos';
                this.chamaIMG = '2144.jpg';              
            }
            //ondulado, curto, frizz e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo em Pó / Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Fluido Thermal / Gloss';
                this.chamaIMG = '2151.jpg'; 
            }
            //ondulado, curto, frizz e descolorido
            if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Fluido Thermal / Mascara Matizadora / Gloss';
                this.chamaIMG = '2152.jpg'; 
            }
            //ondulado, curto, frizz e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2153.jpg'; 
            }
            //ondulado, curto, frizz e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Fluido Thermal / Spray de Brilho / Modelador de cachos';
                this.chamaIMG = '2154.jpg'; 
            }
            //ondulado, curto, opaco e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                this.chamaIMG = '2161.jpg'; 
            }
            //ondulado, curto, opaco e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Shampoo Matizador / Modelador de cachos / Gloss';
                this.chamaIMG = '2162.jpg'; 
            }
            //ondulado, curto, opaco e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal / Gloss';
                this.chamaIMG = '2163.jpg'; 
            }
            //ondulado, curto, opaco e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                this.chamaIMG = '2164.jpg'; 
            }
            //ondulado, curto, extremo danificado e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss / Modelador de Cachos';
                this.chamaIMG = '2171.jpg'; 
            }
            //ondulado, curto, extremo danificado e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss / Shampoo Matizadora / Modelador de Cachos';
                this.chamaIMG = '2172.jpg'; 
            }
            //ondulado, curto, extremo danificado e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2173.jpg'; 
            }
            //ondulado, curto, extremo danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss / Modelador De Cachos ';
                this.chamaIMG = '2174.jpg'; 
            }
            //ondulado, médio, saudável e colorido
            if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Modelador de Cachos / Gloss';
                this.chamaIMG = '2211.jpg'; 
            }
            //ondulado, médio, saudável e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Shampoo Matizador / Modelador de Cachos / Gloss';
                this.chamaIMG = '2212.jpg'; 
            }
            //ondulado, médio, saudável e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2213.jpg'; 
            }
            //ondulado, médio, saudável e sem química
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Mystic Jelly / Fluido Thermal / Modelador de Cachos / Gloss';
                this.chamaIMG = '2214.jpg'; 
            }
            //ondulado, médio, danificado e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / SOS Home';
                this.chamaIMG = '2221.jpg';  
            }
            //ondulado, médio, danificado e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / Mascara Matizadora Home / SOS Home / Gloss';
                this.chamaIMG = '2222.jpg'; 
            }
            //ondulado, médio, danificado e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '2223.jpg';
            }
            //ondulado, médio, danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                this.chamaIMG = '2224.jpg';
            }
            //ondulado, médio, seco e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Modelador de Cacho';
                this.chamaIMG = '2231.jpg';
            }
            //ondulado, médio, seco e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Modelador de Cachos / Gloss / Shampoo Matizadoro';
                this.chamaIMG = '2232.jpg';
            }
            //ondulado, médio, seco e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2233.jpg';  
            }
            //ondulado, médio, seco e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Hair Body Cream / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '2234.jpg';
            }
            //ondulado, médio, oleoso e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo Barbados / Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Modelador de Cachos';
                this.chamaIMG = '2241.jpg';  
            }
            //ondulado, médio, oleoso e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo Barbados / Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Mascara Matizadora / Modelador de Cachos ';
                this.chamaIMG = '2242.jpg';  
            }
            //ondulado, médio, oleoso e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo em pó / Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2243.jpg';  
            }
            //ondulado, médio, oleoso sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso') {
                this.resultado = 'Shampoo em Pó Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Leave in The First / Gloss / Modelador de Cachos';
                this.chamaIMG = '2244.jpg';
            }
            //ondulado, médio, frizz e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Leave in Lovely / Gloss / Modelador de Cachos ';
                this.chamaIMG = '2251.jpg';
            }
            //ondulado, médio, frizz e descolorido
            if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Leave in Lovely / Gloss / Modelador de Cachos / Shampoo Matizador';
                this.chamaIMG = '2252.jpg';  
            }
            //ondulado, médio, frizz e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in  The First / Gloss';
                this.chamaIMG = '2253.jpg';  
            }
            //ondulado, médio, frizz e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara The First / Modelador de Cachos / Fluido Thermal / Spray de Brilho';
                this.chamaIMG = '2254.jpg';  
            }
            //ondulado, médio, opaco e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara The First / Modelador de Cachos / Gloss / Fluido Thermal ';
                this.chamaIMG = '2261.jpg';              
            }
            //ondulado, médio, opaco e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Shampoo Matizador / Leave in Lovely / Gloss / Modelador de Cachos';
                this.chamaIMG = '2262.jpg';              
            }
            //ondulado, médio, opaco e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss / Spray de Brilho ';
                this.chamaIMG = '2263.jpg';              
            }
            //ondulado, médio, opaco e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Modelador de Cachos / Mascara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2264.jpg';
            }
            //ondulado, médio, extremo danificado e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Leave in The First / Gloss / Modelador de Cachos / SOS Home';
                this.chamaIMG = '2271.jpg'; 
            }
            //ondulado, médio, extremo danificado e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Mascara Matizadora / Gloss / Modelador de Cachos';
                this.chamaIMG = '2272.jpg';     
            }
            //ondulado, médio, extremo danificado e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss / SOS Home';
                this.chamaIMG = '2273.jpg';            
            }
            //ondulado, médio, extremo danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Leave in Lovely / Spray de Brilho';
                this.chamaIMG = '2274.jpg';
            }
            //ondulado, longo, saudável e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara The First / Modelador de Cachos / Fluido Thermal / Gloss';
                this.chamaIMG = '2311.jpg';      
            }
            //ondulado, longo, saudável e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Fluido Thermal / Gloss / Modelador de Cachos / Shampoo Matizador ';
                this.chamaIMG = '2312.jpg';  
            }
            //ondulado, longo, saudável e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '2313.jpg';
            }
            //ondulado, longo, saudável e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Modelador de Cachos / Gloss';
                this.chamaIMG = '2314.jpg'; 
            }
            //ondulado, longo, danificado e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                this.chamaIMG = '2321.jpg'; 
            }
            //ondulado, longo, danificado e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / Mascara Matizadora';
                this.chamaIMG = '2322.jpg';  
            }
            //ondulado, longo, danificado e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2323.jpg';           
            }
            //ondulado, longo, danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                this.chamaIMG = '2324.jpg';
            }
            //ondulado, longo, seco e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                this.chamaIMG = '2331.jpg'; 
            }
            //ondulado, longo, seco e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / SOS Home / Shampoo Matizador';
                this.chamaIMG = '2332.jpg'; 
            }
            //ondulado, longo, seco e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2333.jpg'; 
            }
            //ondulado, longo, seco e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco') {
                this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                this.chamaIMG = '2334.jpg'; 
            }
            //ondulado, longo, oleoso e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo Barbados / Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Modelador de Cachos';
                this.chamaIMG = '2341.jpg'; 
            }
            //ondulado, longo, oleoso e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo Barbados / Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Mascara Matizadora / Modelador de Cachos';
                this.chamaIMG = '2342.jpg'; 
            }
            //ondulado, longo, oleoso e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Shampoo Barbados / Máscara The First / Fluido Thermal';
                this.chamaIMG = '2343.jpg';  
            }
            //ondulado, longo, oleoso e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso') {
                this.resultado = 'Shampoo em Pó Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Leave in Lovely / Gloss / Modelador de Cachos ';
                this.chamaIMG = '2344.jpg';
            }
            //ondulado, longo, frizz e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Shampoo e condicionador Cronology / Máscara Hair Body Cream / Fluido Thermal / Gloss';
                this.chamaIMG = '2351.jpg';  
            }
            //ondulado, longo, frizz e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Shampoo e Máscara Matizadora / Leave in Lovely / Gloss';
                this.chamaIMG = '2352.jpg'; 
            }
            //ondulado, longo, frizz e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2353.jpg'; 
            }
            //ondulado, longo, frizz e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz') {
                this.resultado = 'Shampoo e Condicionador Mousse nutrição Diária / Máscara The First / Fluido Thermal / Gloss';
                this.chamaIMG = '2354.jpg';
            }
            //ondulado, longo, opaco e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '2361.jpg'; 
            }
            //ondulado, longo, opaco e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '2362.jpg';
            }
            //ondulado, longo, opaco e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '2363.jpg';
           }
            //ondulado, longo, opaco e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '2364.jpg';
            }
            //ondulado, longo, extremo danificado e colorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '2371.jpg';
            }
            //ondulado, longo, extremo danificado e descolorido
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '2372.jpg';  
            }
            //ondulado, longo, extremo danificado e alisado
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / SOS Home / Gloss';
                this.chamaIMG = '2373.jpg';
            }
            //ondulado, longo, extremo danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'ondulado' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '2374.jpg';
            }
            //crespo, curto, saudável e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                this.chamaIMG = '3111.jpg';            
            }
            //crespo, curto, saudável e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Máscara Matizadora / Leave Lovely / Gloss';
                this.chamaIMG = '3112.jpg'; 
            }
            //crespo, curto, saudável e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Leave Lovely / Gloss';
                this.chamaIMG = '3113.jpg'; 
            }
            //crespo, curto, saudável e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'saudável') {
                this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                this.chamaIMG = '3114.jpg'; 
            }
            //crespo, curto, danificado e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3121.jpg'; 
            }
            //crespo, curto, danificado e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS home / Gloss';
                this.chamaIMG = '3122.jpg'; 
            }
            //crespo, curto, danificado e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3123.jpg';   
            }
            //crespo, curto, danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'danificado') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3124.jpg';
            }
            //crespo, curto, seco e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3131.jpg';
            }
            //crespo, curto, seco e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3132.jpg';
            }
            //crespo, curto, seco e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3133.jpg'; 
            }
            //crespo, curto, seco e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'seco') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3134.jpg';
            }
            //crespo, curto, oleoso e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo Barbados / Condicionador Barbados / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                this.chamaIMG = '3141.jpg';
            }
            //crespo, curto, oleoso e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                this.chamaIMG = '3142.jpg';
            }
            //crespo, curto, oleoso e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador Barbados / Máscara Mystic Jelly / Fluido Thermal / Gloss';
                this.chamaIMG = '3143.jpg';
            }
            //crespo, curto, oleoso e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'oleoso') {
                this.resultado = 'Shampoó e Condicionador Barbados / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                this.chamaIMG = '3144.jpg';
            }
            //crespo, curto, frizz e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3151.jpg';
            }
            //crespo, curto, frizz e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3152.jpg';
            }
            //crespo, curto, frizz e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3153.jpg'; 
            }
            //crespo, curto, frizz e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'frizz') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3154.jpg';  
            }
            //crespo, curto, opaco e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3161.jpg';
            }
            //crespo, curto, opaco e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3162.jpg';
            }
            //crespo, curto, opaco e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3163.jpg'; 
            }
            //crespo, curto, opaco e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'opaco') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3164.jpg'; 
            }
            //crespo, curto, extremo danificado e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '3171.jpg';
            }
            //crespo, curto, extremo danificado e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = ' Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '3172.jpg'; 
            }
            //crespo, curto, extremo danificado e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / SOS home / Gloss';
                this.chamaIMG = '3173.jpg'; 
            }
            //crespo, curto, extremo danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'curto' && this.condicoesDoCabeloVar == 'extremo danificado') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '3174.jpg';
            }
            //crespo, médio, saudável e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                this.chamaIMG = '3211.jpg'; 
            }
            //crespo, médio, saudável e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Máscara Matizadora / Leave Lovely / Gloss';
                this.chamaIMG = '3212.jpg'; 
            }
            //crespo, médio, saudável e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Leave Lovely / Gloss';
                this.chamaIMG = '3213.jpg'; 
            }
            //crespo, médio, saudável e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'saudável') {
                this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                this.chamaIMG = '3214.jpg';
            }
            //crespo, médio, danificado e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3221.jpg';
            }
            //crespo, médio, danificado e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS home / Gloss';
                this.chamaIMG = '3222.jpg';
            }
            //crespo, médio, danificado e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3223.jpg';
            }
            //crespo, médio, danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'danificado') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3224.jpg';
            }
            //crespo, médio, seco e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3231.jpg'; 
            }
            //crespo, médio, seco e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3232.jpg';  
            }
            //crespo, médio, seco e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3233.jpg'; 
            }
            //crespo, médio, seco e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'seco') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3234.jpg';
            }
            //crespo, médio, oleoso e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo Barbados / Condicionador Barbados / Máscara Mystic Jelly / Sérum / Fluído Thermal';
                this.chamaIMG = '3241.jpg';  
            }
            //crespo, médio, oleoso e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                this.chamaIMG = '3242.jpg'; 
            }
            //crespo, médio, oleoso e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador Barbados / Máscara mystic Jelly / Fluido Thermal / Gloss';
                this.chamaIMG = '3243.jpg'; 
            }
            //crespo, médio, oleoso e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'oleoso') {
                this.resultado = 'Shampoó e Condicionador Barbados / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                this.chamaIMG = '3244.jpg';  
            }
            //crespo, médio, frizz e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3251.jpg'; 
            }
            //crespo, médio, frizz e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3252.jpg';  
            }
            //crespo, médio, frizz e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in the First / Gloss';
                this.chamaIMG = '3253.jpg';  
            }
            //crespo, médio, frizz e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'frizz') {
                this.resultado = 'Shampoo e Condicionador Mousse Recosntrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3254.jpg';
            }
            //crespo, médio, opaco e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3261.jpg';
            }
            //crespo, médio, opaco e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3262.jpg'; 
            }
            //crespo, médio, opaco e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3263.jpg';  
            }
            //crespo, médio, opaco e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'opaco') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3264.jpg';
            }
            //crespo, médio, extremo danificado e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '3271.jpg'; 
            }
            //crespo, médio, extremo danificado e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'hampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '3272.jpg';
            }
            //crespo, médio, extremo danificado e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / SOS home / Gloss';
                this.chamaIMG = '3273.jpg'; 
            }
            //crespo, médio, extremo danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'médio' && this.condicoesDoCabeloVar == 'extremo danificado') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                this.chamaIMG = '3274.jpg'; 
            }
            //crespo, longo, saudável e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                this.chamaIMG = '3311.jpg';   
            }
            //crespo, longo, saudável e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Máscara Matizadora / Leave Lovely / Gloss';
                this.chamaIMG = '3312.jpg';  
            }
            //crespo, longo, saudável e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Leave Lovely / Gloss';
                this.chamaIMG = '3313.jpg'; 
            }
            //crespo, longo, saudável e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'saudável') {
                this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                this.chamaIMG = '3314.jpg'; 
            }
            //crespo, longo, danificado e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Leave in The First / Gloss';
                this.chamaIMG = '3321.jpg';       
            }
            //crespo, longo, danificado e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS home / Gloss';
                this.chamaIMG = '3322.jpg';     
            }
            //crespo, longo, danificado e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3323.jpg';             
            }
            //crespo, longo, danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'danificado') {
                this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3324.jpg';              
            }
            //crespo, longo, seco e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3331.jpg';     
            }
            //crespo, longo, seco e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3332.jpg';    
            }
            //crespo, longo, seco e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3333.jpg';    
            }
            //crespo, longo, seco e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'seco') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3334.jpg';            
            }
            //crespo, longo, oleoso e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = ' Shampoo Barbados / Condicionador Nutrição Diária / Máscara Hair Body Cream / Sérum / Fluido Thermal';
                this.chamaIMG = '3341.jpg';              
            }
            //crespo, longo, oleoso e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo Barbados / Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Sérum / Fluido Thermal';
                this.chamaIMG = '3342.jpg';    
            }
            //crespo, longo, oleoso e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo Barbados / Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Fluido Thermal / Gloss';
                this.chamaIMG = '3343.jpg';
            }
            //crespo, longo, oleoso e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'oleoso') {
                this.resultado = 'Shampoo Barbados / Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Sérum / Fluido Thermal';
                this.chamaIMG = '3344.jpg'; 
            }
            //crespo, longo, frizz e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in / Máscara Hair Body Cream / Gloss';
                this.chamaIMG = '3351.jpg';  
            }
            //crespo, longo, frizz e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3352.jpg';  
            }
            //crespo, longo, frizz e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave  in The First / Gloss';
                this.chamaIMG = '3353.jpg';
            }
            //crespo, longo, frizz e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'frizz') {
                this.resultado = 'Shampoo e Condicionador Mousse Recosntrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3354.jpg';  
            }
            //crespo, longo, opaco e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3361.jpg';  
            }
            //crespo, longo, opaco e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3362.jpg';        
            }
            //crespo, longo, opaco e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                this.chamaIMG = '3363.jpg'; 
            }
            //crespo, longo, opaco e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'opaco') {
                this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                this.chamaIMG = '3364.jpg';
            }
            //crespo, longo, extremo danificado e colorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'colorido') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Leave in Lovely / SOS Home / Gloss';
                this.chamaIMG = '3371.jpg';  
            }
            //crespo, longo, extremo danificado e descolorido
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'descolorido') {
                this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Leave in Lovely / SOS Home / Gloss';
                this.chamaIMG = '3372.jpg'; 
            }
            //crespo, longo, extremo danificado e alisado
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado' && this.quimicamenteTratadoVar == 'alisado') {
                this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / SOS home / Gloss';
                this.chamaIMG = '3373.jpg';  
            }
            //crespo, longo, extremo danificado e sem quimica
            else if(this.tipoDeCabeloVar == 'crespo' && this.comprimentoDoCabeloVar == 'longo' && this.condicoesDoCabeloVar == 'extremo danificado') {
                this.resultado = 'Shampoo e Condicionador Cronology / MáscarHair Body Cream / Leave in Lovely / SOS Home / Gloss';
                this.chamaIMG = '3374.jpg';
            }
            //Fim Lógica

          });
        });
      });
    });
  });
  }


  // logica simples de execução para as paginas do cronograma capilar referente ao tipo de cabelo
  openPageRefer(){

    var resultadoDiv = document.getElementById('resultadoDiv');
    
    var progress_outer = document.getElementById('progress-outer');

    var list_op = document.getElementById('list-op');

    var cronograma_capilar_liso = document.getElementById('cronograma_capilar_liso');

    var cronograma_capilar_ondulado = document.getElementById('cronorgrama_capilar_ondulado') 

    var cronograma_capilar_crespo = document.getElementById('cronorgrama_capilar_crespo') 

    if(this.tipoDeCabeloVar == 'liso'){   
       //esconde a pagina do resultado
       resultadoDiv.style.display = 'none';
       progress_outer.style.display = 'none';
       list_op.style.display = 'none';
       cronograma_capilar_liso.style.display = 'inherit'; 
    }
    else if(this.tipoDeCabeloVar == 'ondulado'){
       //esconde a pagina do resultado
       resultadoDiv.style.display = 'none';
       progress_outer.style.display = 'none';
       list_op.style.display = 'none';
       cronograma_capilar_ondulado.style.display = 'inherit'; 
    }
    else if(this.tipoDeCabeloVar == 'crespo'){
       //esconde a pagina do resultado
       resultadoDiv.style.display = 'none';
       progress_outer.style.display = 'none';
       list_op.style.display = 'none'; 
       cronograma_capilar_crespo.style.display = 'inherit';     
    }
  }
  //**************** INÍCIO TAGS ****************
    
     tag1() {

   /* //Tipo de cabelo
    var tipoDeCabeloDiv = document.getElementById('tipoDeCabeloDiv');*/

    //Espessura do fio
    var espessuraDoFioDiv = document.getElementById('espessuraDoFioDiv');

    //Comprimento do cabelo
    var comprimentoDoCabeloDiv = document.getElementById('comprimentoDoCabeloDiv');

    //Condições do cabelo
    var condicoesDoCabeloDiv = document.getElementById('condicoesDoCabeloDiv');

    //Quimicamente tratado
    var quimicamenteTratadoDiv = document.getElementById('quimicamenteTratadoDiv');

    //Resultado
    var resultadoDiv = document.getElementById('resultadoDiv');

  /*  var condicoesDoCabeloTag = document.getElementById('condicoesDoCabeloTag');
    var quimicamenteTratadoTag = document.getElementById('quimicamenteTratadoTag');*/

         
   /* if(condicoesDoCabeloTag.style.display == 'none' && quimicamenteTratadoTag.style.display == 'none'){
      var txth1 = document.getElementById("txth1");
      txth1.style.margin = '0%';
    }*/

    if(espessuraDoFioDiv.style.display == 'inherit') {
        //Animação de saída dos cards
        setTimeout(() => {
          this.div2State = 'out';
        }, 500);

        setTimeout(() => {
          this.div22State = 'out';
        }, 700);

        setTimeout(() => {
          this.div222State = 'out';
        }, 900);

        //Esconder texto de destaque em animação
        setTimeout(() => {
        this.txt2State = (this.txt2State == 'visible') ? 'invisible' : 'visible';
        }, 1300);

        //Esconder teste 2 (div espessuraDoFio)
        espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv");
        setTimeout(() => {
        espessuraDoFioDiv.style.display = "none";
        }, 2100);

        this.funInicial();
    }

    if(comprimentoDoCabeloDiv.style.display == 'inherit') {
      //Animação de saída dos cards
      setTimeout(() => {
        this.div3State = 'out';
      }, 500);

      setTimeout(() => {
        this.div33State = 'out';
      }, 700);

      setTimeout(() => {
        this.div333State = 'out';
      }, 900);

      //Esconder texto de destaque em animação
      setTimeout(() => {
      this.txt3State = (this.txt3State == 'visible') ? 'invisible' : 'visible';
      }, 1300);

      //Esconder teste 3 (div espessuraDoFio)
    comprimentoDoCabeloDiv = document.getElementById("comprimentoDoCabeloDiv");
      setTimeout(() => {
      comprimentoDoCabeloDiv.style.display = "none";
      }, 2100);

        this.funInicial();
    }

    if(condicoesDoCabeloDiv.style.display == 'inherit') {
      //Animação de saída dos cards
      setTimeout(() => {
        this.div4State = 'out';
      }, 500);

      setTimeout(() => {
        this.div44State = 'out';
      }, 700);

      setTimeout(() => {
        this.div444State = 'out';
      }, 900);

      setTimeout(() => {
        this.div4444State = 'out';
      }, 1100);

      setTimeout(() => {
        this.div44444State = 'out';
      }, 1300);

      setTimeout(() => {
        this.div444444State = 'out';
      }, 1500);

      setTimeout(() => {
        this.div4444444State = 'out';
      }, 1700);

      //Esconder texto de destaque em animação
      setTimeout(() => {
      this.txt4State = (this.txt4State == 'visible') ? 'invisible' : 'visible';
    }, 2000);

    //Esconder teste 3 (div espessuraDoFio)
    condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
    setTimeout(() => {
    condicoesDoCabeloDiv.style.display = "none";
  }, 2500);

        this.funInicial();
   
    }

    if(quimicamenteTratadoDiv.style.display == 'inherit') {
      //Animação de saída dos cards
      setTimeout(() => {
        this.div5SimState = 'out';
      }, 500);

      setTimeout(() => {
        this.div5NaoState = 'out';
      }, 700);

      //Esconder texto de destaque em animação
      setTimeout(() => {
      this.txt5State = (this.txt5State == 'visible') ? 'invisible' : 'visible';
    }, 2000);

    //Esconder teste 5 (div espessuraDoFio)
    quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
    setTimeout(() => {
    quimicamenteTratadoDiv.style.display = "none";
  }, 3000);

        this.funInicial();
    }

    if(resultadoDiv.style.display == 'inherit') {
      this.resultadoState = 'out';
      this.resultadoEsqState = 'out';

      setTimeout(() => {
      resultadoDiv.style.display = "none";
    }, 1000);

      this.funInicial();
    }

  }


//  tag2() {

//     //Alterar progress bar
//     setTimeout(() => {
//       this.bar = 20;
//     }, 1000);

//     //Tipo de cabelo
//     var tipoDeCabeloDiv = document.getElementById('tipoDeCabeloDiv');

//     //Comprimento do cabelo
//     var comprimentoDoCabeloDiv = document.getElementById('comprimentoDoCabeloDiv');

//     //Condições do cabelo
//     var condicoesDoCabeloDiv = document.getElementById('condicoesDoCabeloDiv');

//     //Quimicamente tratado
//     var quimicamenteTratadoDiv = document.getElementById('quimicamenteTratadoDiv');

//     //Resultado
//     var resultadoDiv = document.getElementById('resultadoDiv');

//     if(resultadoDiv.style.display == 'inherit') {
//       this.resultadoState = 'out';
//       this.resultadoEsqState = 'out';

//       setTimeout(() => {
//       resultadoDiv.style.display = "none";
//     }, 2000);

//       this.espessuraDoFioFunc();
//     }

//   if(tipoDeCabeloDiv.style.display == '' || tipoDeCabeloDiv.style.display == 'inherit') {
//       //Animação
//         //Fade
//         this.div1fadeState = (this.div1fadeState == 'visible') ? 'invisible' : 'visible';
//         //Bounce
//         this.anim1State = (this.anim1State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim2State = (this.anim2State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim3State = (this.anim3State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim4State = (this.anim4State == 'noBounce') ? 'bouncing' : 'noBounce';

//         //FlyInOut
//         setInterval(() => {
//         this.flyInOutState = 'out';
//       }, 500);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txtState = (this.txtState == 'visible') ? 'invisible' : 'visible';
//     }, 400);

//     //Esconder teste 1 (div tipoDeCabeloDiv)
//     tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
//     setTimeout(() => {
//     tipoDeCabeloDiv.style.display = "none";
//     }, 2000);

//     this.espessuraDoFioFunc();

//     }

//     if(comprimentoDoCabeloDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div3State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div33State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div333State = 'out';
//       }, 900);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt3State = (this.txt3State == 'visible') ? 'invisible' : 'visible';
//       }, 1300);

//       //Esconder teste 3 (div espessuraDoFio)
//       comprimentoDoCabeloDiv = document.getElementById("comprimentoDoCabeloDiv");
//       setTimeout(() => {
//       comprimentoDoCabeloDiv.style.display = "none";
//       }, 2100);

//       this.espessuraDoFioFunc();

//     }

//    if(condicoesDoCabeloDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div4State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div44State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div444State = 'out';
//       }, 900);

//       setTimeout(() => {
//         this.div4444State = 'out';
//       }, 1100);

//       setTimeout(() => {
//         this.div44444State = 'out';
//       }, 1300);

//       setTimeout(() => {
//         this.div444444State = 'out';
//       }, 1500);

//       setTimeout(() => {
//         this.div4444444State = 'out';
//       }, 1700);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt4State = (this.txt4State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 3 (div espessuraDoFio)
//     condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
//     setTimeout(() => {
//     condicoesDoCabeloDiv.style.display = "none";
//   }, 2500);

//       this.espessuraDoFioFunc();

//     }

//     if(quimicamenteTratadoDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div5SimState = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div5NaoState = 'out';
//       }, 700);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt5State = (this.txt5State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 5 (div espessuraDoFio)
//     quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
//     setTimeout(() => {
//     quimicamenteTratadoDiv.style.display = "none";
//   }, 3000);

//         this.espessuraDoFioFunc();
//     }

//   }

//   tag3() {

//     //Alterar progress bar
//     setTimeout(() => {
//       this.bar = 40;
//     }, 1000);

//     //Tipo de cabelo
//     var tipoDeCabeloDiv = document.getElementById('tipoDeCabeloDiv');

//     //Espessura do fio
//     var espessuraDoFioDiv = document.getElementById('espessuraDoFioDiv');


//     //Condições do cabelo
//     var condicoesDoCabeloDiv = document.getElementById('condicoesDoCabeloDiv');

//     //Quimicamente tratado
//     var quimicamenteTratadoDiv = document.getElementById('quimicamenteTratadoDiv');

//     //Resultado
//     var resultadoDiv = document.getElementById('resultadoDiv');

//     if(resultadoDiv.style.display == 'inherit') {
//       this.resultadoState = 'out';
//       this.resultadoEsqState = 'out';

//       setTimeout(() => {
//       resultadoDiv.style.display = "none";
//     }, 2000);

//       this.comprimentoDoCabeloFunc();
//     }

//     if(tipoDeCabeloDiv.style.display == '' || tipoDeCabeloDiv.style.display == 'inherit') {
//       //Animação
//         //Fade
//         this.div1fadeState = (this.div1fadeState == 'visible') ? 'invisible' : 'visible';
//         //Bounce
//         this.anim1State = (this.anim1State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim2State = (this.anim2State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim3State = (this.anim3State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim4State = (this.anim4State == 'noBounce') ? 'bouncing' : 'noBounce';

//         //FlyInOut
//         setInterval(() => {
//         this.flyInOutState = 'out';
//       }, 500);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txtState = (this.txtState == 'visible') ? 'invisible' : 'visible';
//     }, 400);

//     //Esconder teste 1 (div tipoDeCabeloDiv)
//     tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
//     setTimeout(() => {
//     tipoDeCabeloDiv.style.display = "none";
//     }, 2000);

//     this.comprimentoDoCabeloFunc();

//     }

//     if(espessuraDoFioDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div2State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div22State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div222State = 'out';
//       }, 900);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt2State = (this.txt2State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 2 (div espessuraDoFio)
//     espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv");
//     setTimeout(() => {
//     espessuraDoFioDiv.style.display = "none";
//   }, 2100);

//       this.comprimentoDoCabeloFunc();

//     }

//     if(condicoesDoCabeloDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div4State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div44State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div444State = 'out';
//       }, 900);

//       setTimeout(() => {
//         this.div4444State = 'out';
//       }, 1100);

//       setTimeout(() => {
//         this.div44444State = 'out';
//       }, 1300);

//       setTimeout(() => {
//         this.div444444State = 'out';
//       }, 1500);

//       setTimeout(() => {
//         this.div4444444State = 'out';
//       }, 1700);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt4State = (this.txt4State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 3 (div espessuraDoFio)
//     condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
//     setTimeout(() => {
//     condicoesDoCabeloDiv.style.display = "none";
//   }, 2500);

//       this.comprimentoDoCabeloFunc();

//     }

//     if(quimicamenteTratadoDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div5SimState = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div5NaoState = 'out';
//       }, 700);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt5State = (this.txt5State == 'visible') ? 'invisible' : 'visible';
//     }, 1200);

//     //Esconder teste 5 (div espessuraDoFio)
//     quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
//     setTimeout(() => {
//     quimicamenteTratadoDiv.style.display = "none";
//   }, 2000);

//   this.comprimentoDoCabeloFunc();

//     }

//   }

//   tag4() {

//     //Alterar progress bar
//     setTimeout(() => {
//       this.bar = 60;
//     }, 1000);

//     //Tipo de cabelo
//     var tipoDeCabeloDiv = document.getElementById('tipoDeCabeloDiv');

//     //Espessura do fio
//     var espessuraDoFioDiv = document.getElementById('espessuraDoFioDiv');

//     //Comprimento do cabelo
//     var comprimentoDoCabeloDiv = document.getElementById('comprimentoDoCabeloDiv');

//     //Condições do cabelo
//     var condicoesDoCabeloDiv = document.getElementById('condicoesDoCabeloDiv');

//     //Quimicamente tratado
//     var quimicamenteTratadoDiv = document.getElementById('quimicamenteTratadoDiv');

//     //Resultado
//     var resultadoDiv = document.getElementById('resultadoDiv');

//     if(resultadoDiv.style.display == 'inherit') {
//       this.resultadoState = 'out';
//       this.resultadoEsqState = 'out';

//       setTimeout(() => {
//       resultadoDiv.style.display = "none";
//     }, 2000);

//       this.condicoesDoCabeloFunc();
//     }

//     if(tipoDeCabeloDiv.style.display == '' || tipoDeCabeloDiv.style.display == 'inherit') {
//       //Animação
//         //Fade
//         this.div1fadeState = (this.div1fadeState == 'visible') ? 'invisible' : 'visible';
//         //Bounce
//         this.anim1State = (this.anim1State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim2State = (this.anim2State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim3State = (this.anim3State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim4State = (this.anim4State == 'noBounce') ? 'bouncing' : 'noBounce';

//         //FlyInOut
//         setInterval(() => {
//         this.flyInOutState = 'out';
//       }, 500);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txtState = (this.txtState == 'visible') ? 'invisible' : 'visible';
//     }, 400);

//     //Esconder teste 1 (div tipoDeCabeloDiv)
//     tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
//     setTimeout(() => {
//     tipoDeCabeloDiv.style.display = "none";
//     }, 2000);

//     this.condicoesDoCabeloFunc();

//     }

//     if(espessuraDoFioDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div2State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div22State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div222State = 'out';
//       }, 900);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt2State = (this.txt2State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 2 (div espessuraDoFio)
//    espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv");
//     setTimeout(() => {
//     espessuraDoFioDiv.style.display = "none";
//   }, 2100);

//       this.condicoesDoCabeloFunc();

//     }

//     if(comprimentoDoCabeloDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div4State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div44State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div444State = 'out';
//       }, 900);

//       setTimeout(() => {
//         this.div4444State = 'out';
//       }, 1100);

//       setTimeout(() => {
//         this.div44444State = 'out';
//       }, 1300);

//       setTimeout(() => {
//         this.div444444State = 'out';
//       }, 1500);

//       setTimeout(() => {
//         this.div4444444State = 'out';
//       }, 1700);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt4State = (this.txt4State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 3 (div espessuraDoFio)
//      condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
//     setTimeout(() => {
//     condicoesDoCabeloDiv.style.display = "none";
//   }, 2500);

//       this.condicoesDoCabeloFunc();

//     }

//     if(quimicamenteTratadoDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div5SimState = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div5NaoState = 'out';
//       }, 700);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt5State = (this.txt5State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 5 (div espessuraDoFio)
//      quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
//     setTimeout(() => {
//     quimicamenteTratadoDiv.style.display = "none";
//   }, 3000);

//         this.condicoesDoCabeloFunc();
//     }

//   }
    
    
//   tag5() {

//     //Alterar progress bar
//     setTimeout(() => {
//       this.bar = 80;
//     }, 1000);

//     //Tipo de cabelo
//     var tipoDeCabeloDiv = document.getElementById('tipoDeCabeloDiv');

//     //Espessura do fio
//     var espessuraDoFioDiv = document.getElementById('espessuraDoFioDiv');

//     //Comprimento do cabelo
//     var comprimentoDoCabeloDiv = document.getElementById('comprimentoDoCabeloDiv');

//     //Condições do cabelo
//     var condicoesDoCabeloDiv = document.getElementById('condicoesDoCabeloDiv');

// /*    //Quimicamente tratado
//     var quimicamenteTratadoDiv = document.getElementById('quimicamenteTratadoDiv');*/

//     //Resultado
//     var resultadoDiv = document.getElementById('resultadoDiv');

//     if(resultadoDiv.style.display == 'inherit') {
//       this.resultadoState = 'out';
//       this.resultadoEsqState = 'out';

//       setTimeout(() => {
//       resultadoDiv.style.display = "none";
//     }, 2000);

//       this.quimicamenteTratadoFunc();
//     }

//     if(tipoDeCabeloDiv.style.display == '' || tipoDeCabeloDiv.style.display == 'inherit') {
//       //Animação
//         //Fade
//         this.div1fadeState = (this.div1fadeState == 'visible') ? 'invisible' : 'visible';
//         //Bounce
//         this.anim1State = (this.anim1State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim2State = (this.anim2State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim3State = (this.anim3State == 'noBounce') ? 'bouncing' : 'noBounce';
//         this.anim4State = (this.anim4State == 'noBounce') ? 'bouncing' : 'noBounce';

//         //FlyInOut
//         setInterval(() => {
//         this.flyInOutState = 'out';
//       }, 500);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txtState = (this.txtState == 'visible') ? 'invisible' : 'visible';
//     }, 400);

//     //Esconder teste 1 (div tipoDeCabeloDiv)
//     tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
//     setTimeout(() => {
//     tipoDeCabeloDiv.style.display = "none";
//     }, 2000);

//     this.quimicamenteTratadoFunc();

//     }

//     if(espessuraDoFioDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div2State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div22State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div222State = 'out';
//       }, 900);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt2State = (this.txt2State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 2 (div espessuraDoFio)
//     espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv");
//     setTimeout(() => {
//     espessuraDoFioDiv.style.display = "none";
//   }, 2100);

//       this.quimicamenteTratadoFunc();

//     }

//     if(comprimentoDoCabeloDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div4State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div44State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div444State = 'out';
//       }, 900);

//       setTimeout(() => {
//         this.div4444State = 'out';
//       }, 1100);

//       setTimeout(() => {
//         this.div44444State = 'out';
//       }, 1300);

//       setTimeout(() => {
//         this.div444444State = 'out';
//       }, 1500);

//       setTimeout(() => {
//         this.div4444444State = 'out';
//       }, 1700);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt4State = (this.txt4State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 3 (div espessuraDoFio)
//     condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
//     setTimeout(() => {
//     condicoesDoCabeloDiv.style.display = "none";
//   }, 2500);

//       this.quimicamenteTratadoFunc();

//     }

//     if(condicoesDoCabeloDiv.style.display == 'inherit') {
//       //Animação de saída dos cards
//       setTimeout(() => {
//         this.div4State = 'out';
//       }, 500);

//       setTimeout(() => {
//         this.div44State = 'out';
//       }, 700);

//       setTimeout(() => {
//         this.div444State = 'out';
//       }, 900);

//       setTimeout(() => {
//         this.div4444State = 'out';
//       }, 1100);

//       setTimeout(() => {
//         this.div44444State = 'out';
//       }, 1300);

//       setTimeout(() => {
//         this.div444444State = 'out';
//       }, 1500);

//       setTimeout(() => {
//         this.div4444444State = 'out';
//       }, 1700);

//       //Esconder texto de destaque em animação
//       setTimeout(() => {
//       this.txt4State = (this.txt4State == 'visible') ? 'invisible' : 'visible';
//     }, 1300);

//     //Esconder teste 3 (div espessuraDoFio)
//     condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
//     setTimeout(() => {
//     condicoesDoCabeloDiv.style.display = "none";
//   }, 2500);


//         this.quimicamenteTratadoFunc();
//     }

//   }

//   //**************** FIM TAGS ****************


}
