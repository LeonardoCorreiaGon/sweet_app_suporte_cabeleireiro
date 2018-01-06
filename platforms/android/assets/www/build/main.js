webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeleireiroHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teste1_teste1__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Local storage
/*import { IonicStorageModule } from '@ionic/storage';*/
//Página de Teste

var CabeleireiroHomePage = (function () {
    function CabeleireiroHomePage(navCtrl, app, alertCtrl) {
        //Recebe o nome do usuário e armazena em uma variável
        /*  this.storage.get('nomeUsuario').then((data) => {
            this.nomeUsuario = data;
          });*/
        this.navCtrl = navCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
    }
    CabeleireiroHomePage.prototype.realizarTeste = function () {
        //Armazenar nome do usuário
        /*  this.storage.set('nomeUsuario', this.nomeUsuario);*/
        //Ir para página de teste
        // this.app.getRootNav().setRoot(Teste1Page);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teste1_teste1__["a" /* Teste1Page */]);
    };
    CabeleireiroHomePage.prototype.voltarPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return CabeleireiroHomePage;
}());
CabeleireiroHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-homecab',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\cabeleireirovirtual\home\home.html"*/'<ion-navbar>\n\n    <button ion-button color="light" clear menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cabeleireiro Virtual</ion-title>\n\n</ion-navbar>\n\n<ion-content padding class="bg-img" scroll="false">\n\n    <img class="logo-principal" src="assets/img/logo-sweet-hair.png" height="170" width="165" />\n\n</ion-content>\n\n<ion-footer>\n\n        <div class="flex">\n\n         <button class="button-continuar" ion-button block outline color="light" (click)="realizarTeste()">Continuar</button>\n\n         <button class="button-sair" ion-button block color="light" (click)="voltarPage()">Voltar</button>\n\n        </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\cabeleireirovirtual\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CabeleireiroHomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuemsomosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuemsomosPage = (function () {
    function QuemsomosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuemsomosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuemsomosPage');
    };
    QuemsomosPage.prototype.backPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return QuemsomosPage;
}());
QuemsomosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-quemsomos',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\quemsomos\quemsomos.html"*/'<ion-navbar>\n  <!-- <ion-buttons start> -->\n   <button ion-button color="black" clear menuToggle>\n      <ion-icon name="menu"></ion-icon>\n   </button>\n  <!-- </ion-buttons> -->\n  <ion-title>#somostodossweet</ion-title>\n  <ion-buttons end>\n      <button ion-button color="black" clear (click)="backPage()">\n          <p>voltar</p>\n      </button>\n  </ion-buttons>\n</ion-navbar>\n<ion-content>\n    <img src="https://s3-sa-east-1.amazonaws.com/sweetsite/aplicativos/Sweet+Hair+App/PagProdutos/Categorias/quemsomosPage/quemsomos.png" class="bg-page">\n    <div class="midias_sociais">\n        <a href="https://www.facebook.com/sweethairbrasil" >\n            <img src="assets/img/facebook.jpg" width="50" height="50" />\n        </a>\n        <a href="https://www.instagram.com/sweetprofessional/">\n            <img src="assets/img/instagram.jpg" width="50" height="50"/>\n        </a>\n        <a href="https://www.linkedin.com/company/sweet-hair-professional">\n            <img src="assets/img/linkedin.jpg" width="50" height="50"/>\n        </a>\n        <a href="https://br.pinterest.com/sweethairbrasil/">     \n            <img src="assets/img/pinterest.jpg" width="50" height="50"/>\n        </a>\n        <a href="https://www.youtube.com/user/SweetHairBrasil">\n            <img src="assets/img/youtube.jpg" width="50" height="50"/>\n        </a>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\quemsomos\quemsomos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], QuemsomosPage);

//# sourceMappingURL=quemsomos.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Teste1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Local storage

// import { CabeleireiroHomePage } from '../home/home';
var Teste1Page = (function () {
    function Teste1Page(navCtrl, navParams, platform, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        //Início Animação
        this.flyInOutState = 'in';
        this.anim1State = 'noBounce';
        this.anim2State = 'noBounce';
        this.anim3State = 'noBounce';
        this.anim4State = 'noBounce';
        this.fadeState = 'visible';
        this.txtState = 'invisible';
        this.txt2State = 'visible';
        this.txt3State = 'visible';
        this.txt4State = 'visible';
        this.txt5State = 'visible';
        this.div1fadeState = 'visible';
        this.div1bounceState = 'noBounce';
        this.bounceState = 'noBounce';
        this.progressBarState = 'in';
        this.resultadoState = 'out';
        this.resultadoEsqState = 'out';
        this.div2State = 'out';
        this.div22State = 'out';
        this.div222State = 'out';
        this.div3State = 'out';
        this.div33State = 'out';
        this.div333State = 'out';
        this.div4State = 'out';
        this.div44State = 'out';
        this.div444State = 'out';
        this.div4444State = 'out';
        this.div44444State = 'out';
        this.div444444State = 'out';
        this.div4444444State = 'out';
        this.div5SimState = 'out';
        this.div5NaoState = 'out';
        this.tag1State = 'noBounce';
        this.tag2State = 'noBounce';
        this.tag3State = 'noBounce';
        this.tag4State = 'noBounce';
        this.tag5State = 'noBounce';
        //Esconde a progressBar
        this.progressBarState = 'out';
    }
    //FUNÇÃO INICIAL CLICK DA TAG1 LISO
    Teste1Page.prototype.funInicial = function () {
        var _this = this;
        //Exibir Div
        var tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
        setTimeout(function () {
            tipoDeCabeloDiv.style.display = "inherit";
        }, 1500);
        //Recebe o nome do usuário e armazena em uma variável
        // this.storage.get('nomeUsuario').then((data) => {
        //   this.nomeUsuario = data;
        // });
        //Define valor 0 para a progress bar qnd clica na Tag1 liso
        setTimeout(function () {
            _this.progressBarState = 'in';
            _this.bar = 0;
        }, 300);
        //Animação inicial (div tipoDeCabelo)
        //Exibir texto de destaque em animação
        setTimeout(function () {
            //Move o mapa
            _this.map = 50;
            _this.txtState = (_this.txtState == 'visible') ? 'invisible' : 'visible';
        }, 500);
        setTimeout(function () {
            _this.div1fadeState = (_this.div1fadeState == 'visible') ? 'invisible' : 'visible';
        }, 1200);
        setTimeout(function () {
            _this.anim1State = (_this.anim1State == 'noBounce') ? 'bouncing' : 'noBounce';
        });
        setTimeout(function () {
            _this.anim2State = (_this.anim2State == 'noBounce') ? 'bouncing' : 'noBounce';
        });
        setTimeout(function () {
            _this.anim3State = (_this.anim3State == 'noBounce') ? 'bouncing' : 'noBounce';
        });
        setTimeout(function () {
            _this.anim4State = (_this.anim4State == 'noBounce') ? 'bouncing' : 'noBounce';
        });
    };
    //Fim Func inicial
    //Quando a página carregar
    Teste1Page.prototype.ionViewDidLoad = function () {
        //Recebe o nome do usuário e armazena em uma variável
        // this.storage.get('nomeUsuario').then((data) => {
        //   this.nomeUsuario = data;
        // });
        var _this = this;
        //Define valor 0 para a progress bar
        setTimeout(function () {
            _this.progressBarState = 'in';
            _this.bar = 0;
        }, 0);
        //Animação inicial (div tipoDeCabelo)
        //Exibir texto de destaque em animação
        setTimeout(function () {
            _this.txtState = (_this.txtState == 'visible') ? 'invisible' : 'visible';
        }, 300);
        setTimeout(function () {
            _this.div1fadeState = (_this.div1fadeState == 'visible') ? 'invisible' : 'visible';
        }, 150);
    };
    //**************** INÍCIO TIPO DE CABELO ****************
    Teste1Page.prototype.tipoDeCabeloFunc = function () {
        var _this = this;
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
        setInterval(function () {
            _this.flyInOutState = 'out';
        }, 500);
        //Esconder texto de destaque em animação
        setTimeout(function () {
            _this.txtState = (_this.txtState == 'visible') ? 'invisible' : 'visible';
        }, 600);
        //Esconder teste 1 (div tipoDeCabeloDiv)
        var tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
        setTimeout(function () {
            tipoDeCabeloDiv.style.display = "none";
        }, 2000);
        //Chamar função do teste 2 (espessuraDoFio)
        this.espessuraDoFioFunc();
        //ExibirTag
        var tipoDeCabeloTag = document.getElementById("tipoDeCabeloTag");
        tipoDeCabeloTag.style.display = "";
        this.tag1State = (this.tag1State == 'noBounce') ? 'bouncing' : 'noBounce';
    };
    //     }]
    //   });
    //   alert.present();
    // }
    //**************** FIM TIPO DE CABELO ****************
    //**************** INÍCIO ESPESSURA DO FIO ****************
    Teste1Page.prototype.espessuraDoFioFunc = function () {
        var _this = this;
        console.log("Esta é a função do teste 2!");
        //Exibir div
        setTimeout(function () {
            var espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv");
            espessuraDoFioDiv.style.display = "inherit";
        }, 1300);
        var tipoDeCabeloDiv;
        //Animação do texto
        tipoDeCabeloDiv = document.getElementById("tipoDeCabeloDiv");
        setTimeout(function () {
            _this.map = 60;
            _this.txt2State = (_this.txt2State == 'visible') ? 'invisible' : 'visible';
        }, 2000);
        //Animação dos cards
        setTimeout(function () {
            _this.div2State = 'in';
        }, 2500);
        setTimeout(function () {
            _this.div22State = 'in';
        }, 2700);
        setTimeout(function () {
            _this.div222State = 'in';
        }, 2900);
    };
    Teste1Page.prototype.espessuraDoFioClick = function () {
        var _this = this;
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
        setTimeout(function () {
            _this.bar = 40;
        }, 1000);
        //Exibir no console confirmação do tipo de cabelo do usuário
        console.log('Confirmação de cabelo ' + this.espessuraDoFio);
        //Animação de saída dos cards
        setTimeout(function () {
            _this.div2State = 'out';
        }, 500);
        setTimeout(function () {
            _this.div22State = 'out';
        }, 700);
        setTimeout(function () {
            _this.div222State = 'out';
        }, 900);
        //Esconder texto de destaque em animação
        setTimeout(function () {
            _this.txt2State = (_this.txt2State == 'visible') ? 'invisible' : 'visible';
        }, 1300);
        //Esconder teste 2 (div espessuraDoFio)
        var espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv");
        setTimeout(function () {
            espessuraDoFioDiv.style.display = "none";
        }, 2100);
        //Chamar função do teste 3 (comprimentoDoCabelo)
        this.comprimentoDoCabeloFunc();
        //ExibirTag
        var espessuraDoFioTag = document.getElementById("espessuraDoFioTag");
        espessuraDoFioTag.style.display = "";
        this.tag2State = (this.tag2State == 'noBounce') ? 'bouncing' : 'noBounce';
    };
    //     }]
    //   });
    //   alert.present();
    // }
    //**************** FIM ESPESSURA DO FIO ****************
    //**************** INÍCIO COMPRIMENTO DO CABELO ****************
    Teste1Page.prototype.comprimentoDoCabeloFunc = function () {
        var _this = this;
        console.log("Esta é a função do teste 3!");
        //Exibir div
        setTimeout(function () {
            var comprimentoDoCabeloDiv = document.getElementById("comprimentoDoCabeloDiv");
            comprimentoDoCabeloDiv.style.display = "inherit";
        }, 1300);
        //Animação do texto
        setTimeout(function () {
            _this.map = 70;
            _this.txt3State = (_this.txt3State == 'visible') ? 'invisible' : 'visible';
        }, 2500);
        //Animação de entrada dos cards
        setTimeout(function () {
            _this.div3State = 'in';
        }, 3000);
        setTimeout(function () {
            _this.div33State = 'in';
        }, 3200);
        setTimeout(function () {
            _this.div333State = 'in';
        }, 3400);
    };
    Teste1Page.prototype.comprimentoDoCabeloClick = function () {
        var _this = this;
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
        setTimeout(function () {
            _this.bar = 60;
        }, 1000);
        //Exibir no console confirmação do tipo de cabelo do usuário
        console.log('Confirmação de cabelo ' + this.comprimentoDoCabelo);
        //Animação de saída dos cards
        setTimeout(function () {
            _this.div3State = 'out';
        }, 500);
        setTimeout(function () {
            _this.div33State = 'out';
        }, 700);
        setTimeout(function () {
            _this.div333State = 'out';
        }, 900);
        //Esconder texto de destaque em animação
        setTimeout(function () {
            _this.txt3State = (_this.txt3State == 'visible') ? 'invisible' : 'visible';
        }, 1300);
        //Esconder teste 3 (div espessuraDoFio)
        var comprimentoDoCabeloDiv = document.getElementById("comprimentoDoCabeloDiv");
        setTimeout(function () {
            comprimentoDoCabeloDiv.style.display = "none";
        }, 2100);
        //Chamar função do teste 4 (comprimentoDoCabelo)
        this.condicoesDoCabeloFunc();
        //ExibirTag
        var comprimentoDoCabeloTag = document.getElementById("comprimentoDoCabeloTag");
        comprimentoDoCabeloTag.style.display = "";
        this.tag3State = (this.tag3State == 'noBounce') ? 'bouncing' : 'noBounce';
    };
    //     }]
    //   });
    //   alert.present();
    // }
    //**************** FIM COMPRIMENTO DO CABELO ****************
    //**************** INÍCIO CONDIÇÕES DO CABELO ****************
    Teste1Page.prototype.condicoesDoCabeloFunc = function () {
        var _this = this;
        console.log("Esta é a função do teste 4!");
        //Exibir div
        setTimeout(function () {
            var condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
            condicoesDoCabeloDiv.style.display = "inherit";
        }, 1400);
        //Animação do texto
        setTimeout(function () {
            _this.map = 80;
            _this.txt4State = (_this.txt4State == 'visible') ? 'invisible' : 'visible';
        }, 2500);
        //Animação de entrada dos cards
        setTimeout(function () {
            _this.div4State = 'in';
        }, 3000);
        setTimeout(function () {
            _this.div44State = 'in';
        }, 3200);
        setTimeout(function () {
            _this.div444State = 'in';
        }, 3400);
        setTimeout(function () {
            _this.div4444State = 'in';
        }, 3600);
        setTimeout(function () {
            _this.div44444State = 'in';
        }, 3800);
        setTimeout(function () {
            _this.div444444State = 'in';
        }, 4000);
        setTimeout(function () {
            _this.div4444444State = 'in';
        }, 4200);
    };
    Teste1Page.prototype.condicoesDoCabeloClick = function () {
        var _this = this;
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
        setTimeout(function () {
            _this.bar = 80;
        }, 1000);
        //Exibir no console confirmação do tipo de cabelo do usuário
        console.log('Confirmação de cabelo ' + this.condicoesDoCabelo);
        //Animação de saída dos cards
        setTimeout(function () {
            _this.div4State = 'out';
        }, 500);
        setTimeout(function () {
            _this.div44State = 'out';
        }, 700);
        setTimeout(function () {
            _this.div444State = 'out';
        }, 900);
        setTimeout(function () {
            _this.div4444State = 'out';
        }, 1100);
        setTimeout(function () {
            _this.div44444State = 'out';
        }, 1300);
        setTimeout(function () {
            _this.div444444State = 'out';
        }, 1500);
        setTimeout(function () {
            _this.div4444444State = 'out';
        }, 1700);
        //Esconder texto de destaque em animação
        setTimeout(function () {
            _this.txt4State = (_this.txt4State == 'visible') ? 'invisible' : 'visible';
        }, 1500);
        //Esconder teste 3 (div espessuraDoFio)
        var condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
        setTimeout(function () {
            condicoesDoCabeloDiv.style.display = "none";
        }, 2100);
        //Chamar função do teste 4 (comprimentoDoCabelo)
        this.quimicamenteTratadoFunc();
        //ExibirTag
        var condicoesDoCabeloTag = document.getElementById("condicoesDoCabeloTag");
        condicoesDoCabeloTag.style.display = "";
        this.tag4State = (this.tag4State == 'noBounce') ? 'bouncing' : 'noBounce';
    };
    //     }]
    //   });
    //   alert.present();
    // }
    //**************** FIM CONDIÇÕES DO CABELO ****************
    //**************** INÍCIO QUIMICAMENTE TRATADO ****************
    Teste1Page.prototype.quimicamenteTratadoFunc = function () {
        var _this = this;
        console.log("Esta é a função do teste 5!");
        //Exibir div
        setTimeout(function () {
            var quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
            quimicamenteTratadoDiv.style.display = "inherit";
        }, 1300);
        //Animação do texto
        setTimeout(function () {
            _this.map = 90;
            _this.txt5State = (_this.txt5State == 'visible') ? 'invisible' : 'visible';
        }, 1500);
        //Animação de entrada dos cards
        setTimeout(function () {
            _this.div5SimState = 'in';
        }, 1700);
        setTimeout(function () {
            _this.div5NaoState = 'in';
        }, 2000);
    };
    Teste1Page.prototype.quimicamenteTratadoSimClick = function () {
        var _this = this;
        //Exibir no console tipo de química
        console.log(this.condicoesDoCabelo);
        //Alerta de confirmação da espessura do fio
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        //Armazenar tipo de cabelo
                        _this.storage.set('quimicamenteTratado', data);
                        //Alterar progress bar
                        setTimeout(function () {
                            _this.bar = 100;
                        }, 1000);
                        //Exibir no console confirmação do tipo de cabelo do usuário
                        console.log('Confirmação de cabelo ' + data);
                        //Alterar progress bar
                        setTimeout(function () {
                            _this.bar = 100;
                        }, 1000);
                        //Animação de saída dos cards
                        setTimeout(function () {
                            _this.div5SimState = 'out';
                        }, 500);
                        setTimeout(function () {
                            _this.div5NaoState = 'out';
                        }, 700);
                        //Esconder texto de destaque em animação
                        setTimeout(function () {
                            _this.txt5State = (_this.txt5State == 'visible') ? 'invisible' : 'visible';
                        }, 1500);
                        var quimicamenteTratadoDiv;
                        //Esconder teste 5 (div espessuraDoFio)
                        quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
                        setTimeout(function () {
                            quimicamenteTratadoDiv.style.display = "none";
                        }, 1700);
                        //Esconder teste 5 (div espessuraDoFio)
                        quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
                        setTimeout(function () {
                            quimicamenteTratadoDiv.style.display = "none";
                        }, 1900);
                        //ExibirTag
                        var quimicamenteTratadoTag = document.getElementById("quimicamenteTratadoTag");
                        quimicamenteTratadoTag.style.display = "";
                        _this.tag5State = (_this.tag5State == 'noBounce') ? 'bouncing' : 'noBounce';
                        //Chamar função do teste 4 (comprimentoDoCabelo)
                        _this.logica();
                    }
                }
            ]
        });
        alert.present();
    };
    Teste1Page.prototype.quimicamenteTratadoNaoClick = function () {
        var _this = this;
        //Exibir no console espessura do fio
        console.log(this.condicoesDoCabelo);
        //Armazenar tipo de cabelo
        this.storage.set('quimicamenteTratado', 's/ química');
        //Alterar progress bar
        setTimeout(function () {
            _this.bar = 100;
        }, 1000);
        //Animação de saída dos cards
        setTimeout(function () {
            _this.div5SimState = 'out';
        }, 500);
        // funcao(this.div5SimState, out, 500);
        /*
        var nomedafuncao = function (variavel, animacao, tempo) {
           setTimeout(() => {
               variavel = 'animacao';
              }, tempo);
        }

        */
        setTimeout(function () {
            _this.div5NaoState = 'out';
        }, 700);
        //Esconder texto de destaque em animação
        setTimeout(function () {
            _this.txt5State = (_this.txt5State == 'visible') ? 'invisible' : 'visible';
        }, 1300);
        //Esconder teste 5 (div espessuraDoFio)
        var quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
        setTimeout(function () {
            quimicamenteTratadoDiv.style.display = "none";
        }, 1700);
        //Chamar função de lógica (resultado)
        this.logica();
        //ExibirTag
        var quimicamenteTratadoTag = document.getElementById("quimicamenteTratadoTag");
        quimicamenteTratadoTag.style.display = "";
        this.tag5State = (this.tag5State == 'noBounce') ? 'bouncing' : 'noBounce';
    };
    //**************** FIM QUIMICAMENTE DO TRATADO ****************
    //**************** INÍCIO LÓGICA ****************
    Teste1Page.prototype.logica = function () {
        var _this = this;
        //Exibir div
        setTimeout(function () {
            var resultadoDiv = document.getElementById("resultadoDiv");
            resultadoDiv.style.display = "inherit";
        }, 1800);
        //Animação
        setTimeout(function () {
            _this.map = 100;
            _this.resultadoState = 'in';
            _this.resultadoEsqState = 'in';
        }, 2000);
        //Recebe os valores e armazenam em suas variáveis
        this.storage.get('tipoDeCabelo').then(function (data1) {
            _this.tipoDeCabeloVar = data1;
            _this.storage.get('espessuraDoFio').then(function (data2) {
                _this.espessuraDoFioVar = data2;
                _this.storage.get('comprimentoDoCabelo').then(function (data3) {
                    _this.comprimentoDoCabeloVar = data3;
                    _this.storage.get('condicoesDoCabelo').then(function (data4) {
                        _this.condicoesDoCabeloVar = data4;
                        _this.storage.get('quimicamenteTratado').then(function (data5) {
                            _this.quimicamenteTratadoVar = data5;
                            //Início Lógica
                            //Liso, curto, saudável e colorido
                            if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in ';
                                _this.chamaIMG = '1111.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS home / Fluido Thermal / Shampoo Matizador Home ';
                                _this.chamaIMG = '1112.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido  Thermal / Gloss';
                                _this.chamaIMG = '1113.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Ampola Repair / Spray de Brilho ';
                                _this.chamaIMG = '1114.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in  Lovely  ';
                                _this.chamaIMG = '1121.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS home / Shampoo Matizador Home / Fluido Thermal';
                                _this.chamaIMG = '1122.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1123.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '1124.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream/ Leave in Lovely / Gloss';
                                _this.chamaIMG = '1131.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Reconstrução / Máscara Hair Body Cream / SOS Home / Leave in Lovely / Shampoo Matizador Home';
                                _this.chamaIMG = '1132.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal/ Spray de Brilho';
                                _this.chamaIMG = '1133.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream';
                                _this.chamaIMG = '1134.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Cabelos Oleosos / Shampoo em pó / Máscara Hair Body Cream / Fluido Thermal';
                                _this.chamaIMG = '1141.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Cabelos Oleosos / Shampoo Barbados / Máscara Hair Body Cream / Fluido Thermal / SOS Home / Shampoo Matizador Home';
                                _this.chamaIMG = '1142.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Shampoo Barbados / Máscara The First / Fluido Thermal';
                                _this.chamaIMG = '1143.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoo Barbados / Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                                _this.chamaIMG = '1144.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely';
                                _this.chamaIMG = '1151.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Fluido Thermal / Shampoo Matizador Home';
                                _this.chamaIMG = '1152.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss ';
                                _this.chamaIMG = '1153.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Diário / Máscara Mystic Jelly / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1154.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely ';
                                _this.chamaIMG = '1161.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Fluido Thermal / Shampoo Matizador Home';
                                _this.chamaIMG = '1162.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1163.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '1164.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS Home / Leave in Lovely';
                                _this.chamaIMG = '1171.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home /Fluido Thermal';
                                _this.chamaIMG = '1172.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1173.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1174.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Fluido Thermal';
                                _this.chamaIMG = '1211.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Leave in The First / Gloss';
                                _this.chamaIMG = '1212.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First Home / Mascara The First / Leave in The First / Gloss ';
                                _this.chamaIMG = '1213.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara Mystic Jelly / Leave in Lovely';
                                _this.chamaIMG = '1214.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Spray de Brilho';
                                _this.chamaIMG = '1221.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Leave in Lovely / Spray de Brilho';
                                _this.chamaIMG = '1222.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '1223.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1224.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Mascara The First / Leave in Lovely';
                                _this.chamaIMG = '1231.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / Leave in The First / Gloss';
                                _this.chamaIMG = '1232.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Spray de Brilho';
                                _this.chamaIMG = '1233.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e condicionador Lovely / Mascara Hair Body Cream / Leave in Lovely / Spray de Brilho';
                                _this.chamaIMG = '1234.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Cabelos Oleosos / Shampoo em Pó / Máscara Hair Body Cream / Fluido Thermal';
                                _this.chamaIMG = '1241.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Cabelos Oleosos / Shampoo Barbados / Máscara Hair Body Cream / Fluido Thermal / SOS Home / Shampoo Matizador Home';
                                _this.chamaIMG = '1242.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First  /Shampoo Barbados / Máscara The First / Fluido Thermal';
                                _this.chamaIMG = '1243.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoo Barbados / Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                                _this.chamaIMG = '1244.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely Home / Máscara Hair Body Cream / Leave in Lovely / Gloss ';
                                _this.chamaIMG = '1251.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Shampoo Matizador Home / Leave in Lovely';
                                _this.chamaIMG = '1252.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Spray de Brilho ';
                                _this.chamaIMG = '1253.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Mascara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1254.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / Gloss / Leave in';
                                _this.chamaIMG = '1261.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Shampoo Matizador Home / Leave in / Gloss ';
                                _this.chamaIMG = '1262.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1263.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Mascara The First / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '1264.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '1271.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Shampoo Matizador Home / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '1272.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Spray de Brilho ';
                                _this.chamaIMG = '1273.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Mascara Hair Body Cream / SOS Home / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1274.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '1311.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely  / Máscara Hair Body Cream / SOS Home / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1312.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Spray de Brilho';
                                _this.chamaIMG = '1313.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Máscara The First / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '1314.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '1321.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / Mascara Matizadora Home / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1322.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in / Gloss / Spray de Brilho';
                                _this.chamaIMG = '1323.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Leave in / Gloss';
                                _this.chamaIMG = '1324.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '1331.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / SOS Home / Mascara Matizadora / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '1332.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in / Gloss';
                                _this.chamaIMG = '1333.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Mascara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1334.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream';
                                _this.chamaIMG = '1341.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home';
                                _this.chamaIMG = '1342.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal ou Leavin / Gloss';
                                _this.chamaIMG = '1343.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoó ou Shampoo e Condicionador Barbados ou Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum';
                                _this.chamaIMG = '1344.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream';
                                _this.chamaIMG = '1351.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home';
                                _this.chamaIMG = '1352.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal ou Leavin / Gloss';
                                _this.chamaIMG = '1353.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Diário / Máscara Hair Body Cream / Fluido Thermal';
                                _this.chamaIMG = '1354.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream';
                                _this.chamaIMG = '1361.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home';
                                _this.chamaIMG = '1362.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal ou Leavin / Gloss';
                                _this.chamaIMG = '1363.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Máscara Hair Body Cream / SOS Home / Gloss / Fluido Thermal';
                                _this.chamaIMG = '1364.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Máscara The First / SOS Home / Gloss';
                                _this.chamaIMG = '1371.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology Reconstrução / Máscara Hair Body Cream / SOS Home / GLoss / Mascara Matizadora';
                                _this.chamaIMG = '1372.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '1373.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'liso' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss / Leave in The First';
                                _this.chamaIMG = '1374.jpg';
                                _this.acessanav = 'liso.php';
                            }
                            //ondulado, curto, saudável e colorido
                            if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Lovely / Mascara Mystic Jelly / Leave in Lovely / Gloss';
                                _this.chamaIMG = '2111.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador em Mousse de Reconstrução /  Mascara Hair Body Cream / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '2112.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal / Gloss';
                                _this.chamaIMG = '2113.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Mystic Jelly / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2114.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos/ Spray de Brilho';
                                _this.chamaIMG = '2121.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Mascara Matizadora / Leave in Lovely';
                                _this.chamaIMG = '2122.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2123.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Spray de Brilho';
                                _this.chamaIMG = '2124.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Leave in Lovely / Gloss';
                                _this.chamaIMG = '2131.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / Mascara Matizadora / Spray de Brilho';
                                _this.chamaIMG = '2132.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2133.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Modelador de Cachos / Gloss / Leave in';
                                _this.chamaIMG = '2134.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo Barbados /Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum';
                                _this.chamaIMG = '2141.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo Barbados / Shampoo e Condicionador Mousse Oleosos / Máscara Hair Body Cream / Sérum / Mascara Matizadora / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2142.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2143.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoo Barbados ou Shampoo em Pó / Máscara Mystic Jelly / Sérum / Modelador de Cachos';
                                _this.chamaIMG = '2144.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo em Pó / Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2151.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            //ondulado, curto, frizz e descolorido
                            if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Fluido Thermal / Mascara Matizadora / Gloss';
                                _this.chamaIMG = '2152.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2153.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Fluido Thermal / Spray de Brilho / Modelador de cachos';
                                _this.chamaIMG = '2154.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2161.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Shampoo Matizador / Modelador de cachos / Gloss';
                                _this.chamaIMG = '2162.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Thermal / Gloss';
                                _this.chamaIMG = '2163.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2164.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss / Modelador de Cachos';
                                _this.chamaIMG = '2171.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss / Shampoo Matizadora / Modelador de Cachos';
                                _this.chamaIMG = '2172.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2173.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss / Modelador De Cachos ';
                                _this.chamaIMG = '2174.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            //ondulado, médio, saudável e colorido
                            if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2211.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Shampoo Matizador / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2212.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2213.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Mystic Jelly / Fluido Thermal / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2214.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / SOS Home';
                                _this.chamaIMG = '2221.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / Mascara Matizadora Home / SOS Home / Gloss';
                                _this.chamaIMG = '2222.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '2223.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2224.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Modelador de Cacho';
                                _this.chamaIMG = '2231.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Modelador de Cachos / Gloss / Shampoo Matizadoro';
                                _this.chamaIMG = '2232.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2233.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Hair Body Cream / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '2234.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo Barbados / Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Modelador de Cachos';
                                _this.chamaIMG = '2241.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo Barbados / Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Mascara Matizadora / Modelador de Cachos ';
                                _this.chamaIMG = '2242.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo em pó / Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2243.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoo em Pó Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Leave in The First / Gloss / Modelador de Cachos';
                                _this.chamaIMG = '2244.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Leave in Lovely / Gloss / Modelador de Cachos ';
                                _this.chamaIMG = '2251.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            //ondulado, médio, frizz e descolorido
                            if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Leave in Lovely / Gloss / Modelador de Cachos / Shampoo Matizador';
                                _this.chamaIMG = '2252.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in  The First / Gloss';
                                _this.chamaIMG = '2253.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara The First / Modelador de Cachos / Fluido Thermal / Spray de Brilho';
                                _this.chamaIMG = '2254.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara The First / Modelador de Cachos / Gloss / Fluido Thermal ';
                                _this.chamaIMG = '2261.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Shampoo Matizador / Leave in Lovely / Gloss / Modelador de Cachos';
                                _this.chamaIMG = '2262.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss / Spray de Brilho ';
                                _this.chamaIMG = '2263.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Modelador de Cachos / Mascara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2264.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Leave in The First / Gloss / Modelador de Cachos / SOS Home';
                                _this.chamaIMG = '2271.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Mascara Matizadora / Gloss / Modelador de Cachos';
                                _this.chamaIMG = '2272.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss / SOS Home';
                                _this.chamaIMG = '2273.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Leave in Lovely / Spray de Brilho';
                                _this.chamaIMG = '2274.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara The First / Modelador de Cachos / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2311.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / SOS Home / Fluido Thermal / Gloss / Modelador de Cachos / Shampoo Matizador ';
                                _this.chamaIMG = '2312.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '2313.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2314.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2321.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / Mascara Matizadora';
                                _this.chamaIMG = '2322.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2323.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2324.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2331.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss / SOS Home / Shampoo Matizador';
                                _this.chamaIMG = '2332.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2333.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e Condicionador de Cachos / Máscara Hair Body Cream / Modelador de Cachos / Gloss';
                                _this.chamaIMG = '2334.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo Barbados / Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Modelador de Cachos';
                                _this.chamaIMG = '2341.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo Barbados / Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Fluido Thermal / Gloss / Mascara Matizadora / Modelador de Cachos';
                                _this.chamaIMG = '2342.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Shampoo Barbados / Máscara The First / Fluido Thermal';
                                _this.chamaIMG = '2343.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoo em Pó Shampoo e Condicionador de Cachos / Mascara Hair Body Cream / Leave in Lovely / Gloss / Modelador de Cachos ';
                                _this.chamaIMG = '2344.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Shampoo e condicionador Cronology / Máscara Hair Body Cream / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2351.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Nutrição Diária / Shampoo e Máscara Matizadora / Leave in Lovely / Gloss';
                                _this.chamaIMG = '2352.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2353.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador Mousse nutrição Diária / Máscara The First / Fluido Thermal / Gloss';
                                _this.chamaIMG = '2354.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '2361.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '2362.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '2363.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '2364.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '2371.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '2372.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / SOS Home / Gloss';
                                _this.chamaIMG = '2373.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'ondulado' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '2374.jpg';
                                _this.acessanav = 'ondulado.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                                _this.chamaIMG = '3111.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Máscara Matizadora / Leave Lovely / Gloss';
                                _this.chamaIMG = '3112.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Leave Lovely / Gloss';
                                _this.chamaIMG = '3113.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                                _this.chamaIMG = '3114.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3121.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS home / Gloss';
                                _this.chamaIMG = '3122.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3123.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3124.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3131.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3132.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3133.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3134.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo Barbados / Condicionador Barbados / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                                _this.chamaIMG = '3141.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                                _this.chamaIMG = '3142.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador Barbados / Máscara Mystic Jelly / Fluido Thermal / Gloss';
                                _this.chamaIMG = '3143.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoó e Condicionador Barbados / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                                _this.chamaIMG = '3144.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3151.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3152.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3153.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3154.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3161.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3162.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3163.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3164.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '3171.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = ' Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '3172.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / SOS home / Gloss';
                                _this.chamaIMG = '3173.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'curto' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '3174.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                                _this.chamaIMG = '3211.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Máscara Matizadora / Leave Lovely / Gloss';
                                _this.chamaIMG = '3212.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Leave Lovely / Gloss';
                                _this.chamaIMG = '3213.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                                _this.chamaIMG = '3214.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3221.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS home / Gloss';
                                _this.chamaIMG = '3222.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3223.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3224.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3231.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3232.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3233.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3234.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo Barbados / Condicionador Barbados / Máscara Mystic Jelly / Sérum / Fluído Thermal';
                                _this.chamaIMG = '3241.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Oleosos / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                                _this.chamaIMG = '3242.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador Barbados / Máscara mystic Jelly / Fluido Thermal / Gloss';
                                _this.chamaIMG = '3243.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoó e Condicionador Barbados / Máscara Mystic Jelly / Sérum / Fluido Thermal';
                                _this.chamaIMG = '3244.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3251.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3252.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in the First / Gloss';
                                _this.chamaIMG = '3253.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Recosntrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3254.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3261.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3262.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3263.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3264.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '3271.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'hampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '3272.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / SOS home / Gloss';
                                _this.chamaIMG = '3273.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'médio' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / SOS Home / Gloss';
                                _this.chamaIMG = '3274.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                                _this.chamaIMG = '3311.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Máscara Matizadora / Leave Lovely / Gloss';
                                _this.chamaIMG = '3312.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Leave Lovely / Gloss';
                                _this.chamaIMG = '3313.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'saudável') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Leave Lovely / Gloss';
                                _this.chamaIMG = '3314.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Modelador de Cachos / Leave in The First / Gloss';
                                _this.chamaIMG = '3321.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / SOS home / Gloss';
                                _this.chamaIMG = '3322.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3323.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cachos / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3324.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3331.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3332.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3333.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'seco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3334.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = ' Shampoo Barbados / Condicionador Nutrição Diária / Máscara Hair Body Cream / Sérum / Fluido Thermal';
                                _this.chamaIMG = '3341.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo Barbados / Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Sérum / Fluido Thermal';
                                _this.chamaIMG = '3342.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo Barbados / Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Fluido Thermal / Gloss';
                                _this.chamaIMG = '3343.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'oleoso') {
                                _this.resultado = 'Shampoo Barbados / Condicionador Mousse Nutrição Diária / Máscara Hair Body Cream / Sérum / Fluido Thermal';
                                _this.chamaIMG = '3344.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in / Máscara Hair Body Cream / Gloss';
                                _this.chamaIMG = '3351.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3352.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave  in The First / Gloss';
                                _this.chamaIMG = '3353.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'frizz') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Recosntrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3354.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3361.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3362.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / Gloss';
                                _this.chamaIMG = '3363.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'opaco') {
                                _this.resultado = 'Shampoo e Condicionador Mousse Reconstrução / Máscara Hair Body Cream / Leave in Lovely / Gloss';
                                _this.chamaIMG = '3364.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'colorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Leave in Lovely / SOS Home / Gloss';
                                _this.chamaIMG = '3371.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'descolorido') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Leave in Lovely / SOS Home / Gloss';
                                _this.chamaIMG = '3372.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado' && _this.quimicamenteTratadoVar == 'alisado') {
                                _this.resultado = 'Shampoo e Condicionador The First / Máscara The First / Leave in The First / SOS home / Gloss';
                                _this.chamaIMG = '3373.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            else if (_this.tipoDeCabeloVar == 'crespo' && _this.comprimentoDoCabeloVar == 'longo' && _this.condicoesDoCabeloVar == 'extremo danificado') {
                                _this.resultado = 'Shampoo e Condicionador Cronology / Máscara Hair Body Cream / Leave in Lovely / SOS Home / Gloss';
                                _this.chamaIMG = '3374.jpg';
                                _this.acessanav = 'crespo.php';
                            }
                            //Fim Lógica
                        });
                    });
                });
            });
        });
    };
    //**************** INÍCIO TAGS ****************
    Teste1Page.prototype.tag1 = function () {
        /* //Tipo de cabelo
         var tipoDeCabeloDiv = document.getElementById('tipoDeCabeloDiv');*/
        var _this = this;
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
        if (espessuraDoFioDiv.style.display == 'inherit') {
            //Animação de saída dos cards
            setTimeout(function () {
                _this.div2State = 'out';
            }, 500);
            setTimeout(function () {
                _this.div22State = 'out';
            }, 700);
            setTimeout(function () {
                _this.div222State = 'out';
            }, 900);
            //Esconder texto de destaque em animação
            setTimeout(function () {
                _this.txt2State = (_this.txt2State == 'visible') ? 'invisible' : 'visible';
            }, 1300);
            //Esconder teste 2 (div espessuraDoFio)
            espessuraDoFioDiv = document.getElementById("espessuraDoFioDiv");
            setTimeout(function () {
                espessuraDoFioDiv.style.display = "none";
            }, 2100);
            this.funInicial();
        }
        if (comprimentoDoCabeloDiv.style.display == 'inherit') {
            //Animação de saída dos cards
            setTimeout(function () {
                _this.div3State = 'out';
            }, 500);
            setTimeout(function () {
                _this.div33State = 'out';
            }, 700);
            setTimeout(function () {
                _this.div333State = 'out';
            }, 900);
            //Esconder texto de destaque em animação
            setTimeout(function () {
                _this.txt3State = (_this.txt3State == 'visible') ? 'invisible' : 'visible';
            }, 1300);
            //Esconder teste 3 (div espessuraDoFio)
            comprimentoDoCabeloDiv = document.getElementById("comprimentoDoCabeloDiv");
            setTimeout(function () {
                comprimentoDoCabeloDiv.style.display = "none";
            }, 2100);
            this.funInicial();
        }
        if (condicoesDoCabeloDiv.style.display == 'inherit') {
            //Animação de saída dos cards
            setTimeout(function () {
                _this.div4State = 'out';
            }, 500);
            setTimeout(function () {
                _this.div44State = 'out';
            }, 700);
            setTimeout(function () {
                _this.div444State = 'out';
            }, 900);
            setTimeout(function () {
                _this.div4444State = 'out';
            }, 1100);
            setTimeout(function () {
                _this.div44444State = 'out';
            }, 1300);
            setTimeout(function () {
                _this.div444444State = 'out';
            }, 1500);
            setTimeout(function () {
                _this.div4444444State = 'out';
            }, 1700);
            //Esconder texto de destaque em animação
            setTimeout(function () {
                _this.txt4State = (_this.txt4State == 'visible') ? 'invisible' : 'visible';
            }, 2000);
            //Esconder teste 3 (div espessuraDoFio)
            condicoesDoCabeloDiv = document.getElementById("condicoesDoCabeloDiv");
            setTimeout(function () {
                condicoesDoCabeloDiv.style.display = "none";
            }, 2500);
            this.funInicial();
        }
        if (quimicamenteTratadoDiv.style.display == 'inherit') {
            //Animação de saída dos cards
            setTimeout(function () {
                _this.div5SimState = 'out';
            }, 500);
            setTimeout(function () {
                _this.div5NaoState = 'out';
            }, 700);
            //Esconder texto de destaque em animação
            setTimeout(function () {
                _this.txt5State = (_this.txt5State == 'visible') ? 'invisible' : 'visible';
            }, 2000);
            //Esconder teste 5 (div espessuraDoFio)
            quimicamenteTratadoDiv = document.getElementById("quimicamenteTratadoDiv");
            setTimeout(function () {
                quimicamenteTratadoDiv.style.display = "none";
            }, 3000);
            this.funInicial();
        }
        if (resultadoDiv.style.display == 'inherit') {
            this.resultadoState = 'out';
            this.resultadoEsqState = 'out';
            setTimeout(function () {
                resultadoDiv.style.display = "none";
            }, 1000);
            this.funInicial();
        }
    };
    return Teste1Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
    __metadata("design:type", Object)
], Teste1Page.prototype, "progress", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('mapa'),
    __metadata("design:type", Object)
], Teste1Page.prototype, "mapa", void 0);
Teste1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-teste1',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\cabeleireirovirtual\teste1\teste1.html"*/'<ion-header>\n\n   <div id="barbar"> \n\n    <div class="menu">\n\n     <button ion-button clear color="dark" menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n     </button>\n\n    </div>\n\n    <div class="progress-outer" [@progressBar]="progressBarState">\n\n         <div class="progress-inner" [style.width]="bar + \'%\'">\n\n             {{bar}}%\n\n         </div>\n\n    </div>\n\n    </div>\n\n</ion-header>\n\n<ion-content class="bg" [style.background-position]="map + \'%\'">\n\n    <div style="margin-right: 10%; margin-left: 10%;margin-top: 11%;">\n\n        <ion-row>\n\n            <div [@tag1]="tag1State" class="tag1" id="tipoDeCabeloTag" style="display: none">\n\n                {{tipoDeCabelo}} \n\n                <!-- <span style="color:indianred; font-weight: 700">x</span> -->\n\n            </div>\n\n            <div [@tag2]="tag2State" class="tag" id="espessuraDoFioTag" style="display: none">\n\n                {{espessuraDoFio}} \n\n                <!-- <span style="color:indianred; font-weight: 700">x</span> -->\n\n            </div>\n\n            <div [@tag3]="tag3State" class="tag3" id="comprimentoDoCabeloTag" style="display: none">\n\n                {{comprimentoDoCabelo}}\n\n                 <!-- <span style="color:indianred; font-weight: 700">x</span> -->\n\n            </div>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div [@tag4]="tag4State" class="tag2" id="condicoesDoCabeloTag" style="display: none">\n\n                {{condicoesDoCabelo}}\n\n                 <!-- <span style="color:indianred; font-weight: 700">x</span> -->\n\n            </div>\n\n            <div [@tag5]="tag5State" class="tag5" id="quimicamenteTratadoTag" style="display: none">\n\n                {{quimicamenteTratadoVar}} \n\n                <!-- <span style="color:indianred; font-weight: 700">x</span> -->\n\n            </div>\n\n        </ion-row>\n\n    </div>\n\n    <div id="tipoDeCabeloDiv">\n\n        <h1 [@txt]="txtState" id="txth1" style="margin-top: 8%; color: #242424" class="font-sweet">Qual é o tipo do seu cabelo?\n\n        </h1>\n\n        <ion-grid class="font-sweet" style="position: absolute;" radio-group [(ngModel)]="tipoDeCabelo" [@div1fade]="div1fadeState" [@div1bounce]="div1bounceState">\n\n            <ion-row>\n\n                <ion-col col-6 [@anim1]="anim1State">\n\n                    <ion-card text-wraper style="border: 1px solid grey;">\n\n                        <ion-radio value="liso" style="height:200px;width:300px;" (click)="tipoDeCabeloFunc()">\n\n                        </ion-radio>\n\n                        <img class="testandoimg" src="assets/img/Lisom.jpg" style="height:200px;" />\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-6 [@anim2]="anim2State">\n\n                    <ion-card text-wraper style="border: 1px solid grey;">\n\n                        <ion-radio value="liso" style="height:200px;width:300px;" (click)="tipoDeCabeloFunc()">\n\n                        </ion-radio>\n\n                        <img class="testandoimg" src="assets/img/cabelo_liso.jpg" style="height:200px;" />\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6 [@anim3]="anim3State">\n\n                    <ion-card text-wraper style="border: 1px solid grey;">\n\n                        <ion-radio value="ondulado" style="height:200px;width:300px;" (click)="tipoDeCabeloFunc()">\n\n                        </ion-radio>\n\n                        <img class="testandoimg" src="assets/img/cabelo_ondulado.jpg" style="height:200px;" />\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-6 [@anim4]="anim4State">\n\n                    <ion-card text-wraper style="border: 1px solid grey;">\n\n                        <ion-radio value="ondulado" style="height:200px;width:300px;" (click)="tipoDeCabeloFunc()">\n\n                        </ion-radio>\n\n                        <img class="testandoimg" src="assets/img/Ondulado1.jpg" style="height:200px;" />\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-card text-wraper style="border: 1px solid grey;">\n\n                        <ion-radio value="crespo" style="height:217px;width: 300px;" (click)="tipoDeCabeloFunc()">\n\n                        </ion-radio>\n\n                        <img class="testandoimg" src="assets/img/Crespo.jpg" />\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-card text-wraper style="border: 1px solid grey;">\n\n                        <ion-radio value="crespo" style="height:210px;width: 300px;" (click)="tipoDeCabeloFunc()">\n\n                        </ion-radio>\n\n                        <img class="testandoimg" src="assets/img/Crespo1.jpg" />\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <ion-card text-wraper style="border: 1px solid grey;">\n\n                        <ion-radio value="crespo" style="height:210px;width: 300px;" (click)="tipoDeCabeloFunc()">\n\n                        </ion-radio>\n\n                        <img class="testandoimg" src="assets/img/Crespo2.jpg" />\n\n                    </ion-card>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-card text-wraper style="border: 1px solid grey;">\n\n                        <ion-radio value="crespo" style="height:207px;width: 300px;" (click)="tipoDeCabeloFunc()">\n\n                        </ion-radio>\n\n                        <img class="testandoimg" src="assets/img/Crespo3.jpg" />\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div id="espessuraDoFioDiv" style="display: none" class="font-sweet">\n\n        <h1 [@txt2]="txt2State" style="margin-top: 15%; color: #242424">Selecione a espessura do seu fio de cabelo!</h1>\n\n        <ion-grid style="margin-top: 10%" radio-group [(ngModel)]="espessuraDoFio">\n\n            <ion-row [@div2]="div2State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Fino</ion-label>\n\n                            <ion-radio value="fino" (click)="espessuraDoFioClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div22]="div22State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Médio</ion-label>\n\n                            <ion-radio value="médio" (click)="espessuraDoFioClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div222]="div222State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Grosso</ion-label>\n\n                            <ion-radio value="grosso" (click)="espessuraDoFioClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div id="comprimentoDoCabeloDiv" style="display: none" class="font-sweet">\n\n        <h1 [@txt3]="txt3State" style="margin-top: 15%; color: #242424">Qual é o comprimento do seu cabelo?</h1>\n\n        <ion-grid style="margin-top: 10%" radio-group [(ngModel)]="comprimentoDoCabelo">\n\n            <ion-row [@div3]="div3State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Curto</ion-label>\n\n                            <ion-radio value="curto" (click)="comprimentoDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div33]="div33State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Médio</ion-label>\n\n                            <ion-radio value="médio" (click)="comprimentoDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div333]="div333State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Longo</ion-label>\n\n                            <ion-radio value="longo" (click)="comprimentoDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div id="condicoesDoCabeloDiv" style="display: none" class="font-sweet">\n\n        <h1 [@txt4]="txt4State" style="margin-top: 15%; color: #242424">Quais as condições do seu cabelo?</h1>\n\n        <ion-grid style="margin-top: 10%" radio-group [(ngModel)]="condicoesDoCabelo">\n\n            <ion-row [@div4]="div4State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Saudável</ion-label>\n\n                            <ion-radio value="saudável" (click)="condicoesDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div44]="div44State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Danificado/Quebradiço</ion-label>\n\n                            <ion-radio value="danificado" (click)="condicoesDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div444]="div444State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Seco/Poroso</ion-label>\n\n                            <ion-radio value="seco" (click)="condicoesDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div4444]="div4444State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Oleoso/Queda</ion-label>\n\n                            <ion-radio value="oleoso" (click)="condicoesDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div44444]="div44444State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Frizz</ion-label>\n\n                            <ion-radio value="frizz" (click)="condicoesDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div444444]="div444444State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Opaco/Pontas Duplas</ion-label>\n\n                            <ion-radio value="opaco" (click)="condicoesDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div4444444]="div4444444State">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Extremo Danificado/Elástico</ion-label>\n\n                            <ion-radio value="extremo danificado" (click)="condicoesDoCabeloClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div id="quimicamenteTratadoDiv" style="display: none" class="font-sweet">\n\n        <h1 [@txt5]="txt5State" style="margin-top: 15%; color: #242424">Seu cabelo é quimicamente tratado?</h1>\n\n        <ion-grid style="margin-top: 10%" radio-group>\n\n            <!-- SIM -->\n\n            <ion-row [@div5Sim]="div5SimState">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Sim</ion-label>\n\n                            <ion-radio (click)="quimicamenteTratadoSimClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-row [@div5Nao]="div5NaoState">\n\n                <ion-card>\n\n                    <ion-card-content class="card-color">\n\n                        <ion-item class="card-color">\n\n                            <ion-label>Não</ion-label>\n\n                            <ion-radio (click)="quimicamenteTratadoNaoClick()"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div id="resultadoDiv" style="display: none;">\n\n        <ion-row>\n\n            <div class="box1">\n\n                <p class="resultadoideal" [@resultadoEsq]="resultadoEsqState"><strong>Olha o que preparamos\n\n                    para você:</strong></p>\n\n\n\n                <ion-card class=\'cardresultado\' [@resultado]="resultadoState">\n\n                    <img src="assets/img/{{chamaIMG}}" />\n\n                    <ion-card-content>\n\n                        <ion-card-title style="font-size:18px;">\n\n                            Produtos para você:\n\n                        </ion-card-title>\n\n                        <p>\n\n                            {{resultado}}\n\n                        </p>\n\n                    </ion-card-content>\n\n                    <hr/>\n\n                    <button ion-button clear block color="black" (click)="tag1()">Refazer Diagnóstico</button>\n\n                </ion-card>\n\n            </div>\n\n            <div class="box2" [@resultadoEsq]="resultadoEsqState">\n\n                <br>\n\n                <a href="http://www.cronograma.sweethair.com.br/{{acessanav}}">\n\n                    <button class="btn-cronog" ion-button outline block color="black">\n\n                    <strong>Cronograma Capilar</strong>\n\n                </button>\n\n                </a>\n\n                <br>\n\n            </div>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\cabeleireirovirtual\teste1\teste1.html"*/,
        //**************** INÍCIO ANIMAÇÃO ****************
        animations: [
            //Início Animação progressBar
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('progressBar', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(-250%, 0, 0)'
                })),
                /*transition('in => out', animate('300ms ease-in')),*/
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            //Fim Animação progressBar
            //Início Animação Resultado
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('resultado', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(-250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('300ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('resultadoEsq', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('300ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('200ms ease-out'))
            ]),
            //Fim Animiação Resultado
            //Início Animação para o texto de destaque do teste 1 (tipo de cabelo)
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('txt', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 0.0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('100ms linear'))
            ]),
            //Fim Animação para o texto de destaque do teste 1 (tipo de cabelo)
            //Início Animação para o texto de destaque do teste 2 (espessura do fio)
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('txt2', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('100ms linear')),
            ]),
            //Fim Animação para o texto de destaque do teste 2 (espessura do fio)
            //Início Animação para o texto de destaque do teste 3 (espessura do fio)
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('txt3', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('100ms linear')),
            ]),
            //Fim Animação para o texto de destaque do teste 3 (espessura do fio)
            //Início Animação para o texto de destaque do teste 4 (espessura do fio)
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('txt4', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('100ms linear')),
            ]),
            //Fim Animação para o texto de destaque do teste 4 (espessura do fio)
            //Início Animação para o texto de destaque do teste 5 (espessura do fio)
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('txt5', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('100ms linear')),
            ]),
            //Fim Animação para o texto de destaque do teste 5 (espessura do fio)
            //Início Animação de tags
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('tag1', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-5px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('tag2', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-5px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('tag3', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-5px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('tag4', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-5px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('tag5', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-5px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            //Fim Animação de tags
            //Início Animação div 1
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('anim1', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-40px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('anim2', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-40px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('anim3', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-40px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('anim4', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-40px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div1fade', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms linear'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div1bounce', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-40px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            //Fim Animação para div 1
            //Início Animação para div 2
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div2', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(-250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div22', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(-250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div222', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(-250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            //Fim Animação para div 2
            //Início Animação para div 3
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div3', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div33', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div333', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            //Fim Animação para div 3
            //Início Animação para div 4
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div4', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div44', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div444', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div4444', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div44444', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div444444', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div4444444', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            //Fim Animação para div 4
            //Início Animação para div 5
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div5Sim', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('div5Nao', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(250%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('400ms ease-out'))
            ]),
            //Fim Animação para div 5
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* trigger */])('bounce', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* state */])('bouncing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* transition */])('* => bouncing', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,-10px,0)', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ])
        ]
        //**************** FIM ANIMAÇÃO ****************
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], Teste1Page);

//# sourceMappingURL=teste1.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cabeleireirovirtual/teste1/teste1.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suporte_suporte__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TiPage = (function () {
    function TiPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.diseases = [
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
        this.shownGroup = null;
    }
    TiPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__suporte_suporte__["a" /* SuportePage */]);
    };
    TiPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    TiPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    return TiPage;
}());
TiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-ti',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\ti\ti.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="back()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>TI Perguntas</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item style="background-color: #222;" *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n\n        <strong style="color:white;">{{d.title}}</strong>\n\n        <ion-icon style="color:white;" item-right [name]="isGroupShown(i) ? \'arrow-dropup\' : \'arrow-dropdown\'"></ion-icon>\n\n        <div class="pg-descricao" *ngIf="isGroupShown(i)">{{d.description}}</div>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\ti\ti.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], TiPage);

//# sourceMappingURL=ti.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogisticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suporte_suporte__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogisticaPage = (function () {
    function LogisticaPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.diseases = [
            { title: "Posso alterar meu endereço de entrega após fazer o pedido?", description: "Não. O endereço de envio é aquele que foi cadastrado no sistema. Confira se seu cadastro está correto para evitar atrasos." },
            { title: "Como posso acompanhar minha entrega?", description: "Atualmente, através do email do suporte. No futuro, o próprio sistema enviará o rastreio." },
            { title: "Como receberei meu pedido?", description: "Pelos correios. Fique atento para que sempre haja um responsável para receber seu pedido no local de entrega." },
            { title: "Qual o valor do meu frete?", description: "O envio de Kits é por conta da Sweet. Para outras modalidades de compra, consulte o site da Vitrine." },
            { title: "Qual o prazo de recebimento?", description: "O prazo varia de acordo com a tabela dos correios." },
            { title: "Minha compra chegou danificada, como devo proceder?", description: "Faça fotos dos produtos danificados, mostrando claramente qual foi o problema e envie para o email do suporte sweet, juntamente com seu login, para fazermos a reposição dos produtos." },
            { title: "Minha compra chegou incompleta, como devo proceder?", description: "Faça fotos dos produtos danificados, mostrando claramente qual foi o problema e envie para o email do suporte sweet, juntamente com seu login, para fazermos a reposição dos produtos." },
            { title: "Minha compra chegou incorreta, como devo proceder?", description: "Envie um email para o suporte sweet, relatando seu caso. Ele será averiguado e o time responderá em 24h." }
        ];
        this.shownGroup = null;
    }
    LogisticaPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__suporte_suporte__["a" /* SuportePage */]);
    };
    LogisticaPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    LogisticaPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    return LogisticaPage;
}());
LogisticaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-logistica',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\logistica\logistica.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="back()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            Logistica Perguntas\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item style="background-color: #222;" *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n\n\n\n        <strong style="color:white;">{{d.title}}</strong>\n\n\n\n        <ion-icon style="color:white;" item-right [name]="isGroupShown(i) ? \'arrow-dropup\' : \'arrow-dropdown\'"></ion-icon>\n\n\n\n        <div class="pg-descricao" *ngIf="isGroupShown(i)">{{d.description}}</div>\n\n    </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\logistica\logistica.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], LogisticaPage);

//# sourceMappingURL=logistica.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComercialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suporte_suporte__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComercialPage = (function () {
    function ComercialPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.diseases = [
            { title: "O que é Marketing Multinível (MMN) Sweet Hair?", description: "É um modelo de vendas diretas, via mononível/binível, de produtos de alta qualidadede, tecnolgia e perfomance no mercado de cósmeticos de uso profissional e para consumidor final." },
            { title: "Como faço para revender os produtos da Sweet Hair?", description: "Primeiramente você precisará de um líder, os líderes são pessoas conhecedoras do MMN que estão incorporando esse grande conhecimento a Sweet Hair. O líder irá te orientar sobre todas as diretizes do Plano de Négocio e te ajudar a desenvolver um bom trabalho. Caso você não conheça ninguém entre em contato conosco através do e-mail contato@sweethair.com.br (com as seguintes informações: nome completo, telefone de contato ‘de preferência que tenha (WhatsApp)’, sua região ‘cidade e estado) e seu interesse em fazer parte do MMN Sweet Hair) que lhe conectaremos ao líder mais proximo de sua região." },
            { title: "Como me ativo no sistema Marketing Multinível (MMN) Sweet Hair?", description: "Após se cadastrar no sistema e adquirir seu login e senha de acesso, deverá obter um de nossos combos de R$800,00, R$2.100,00 ou R$4.100,00. Desta forma você como distribuidor independente, poderá realizar todas as funcionalidades, usufruir do sistema com ferramenta de trabalho e dos benefícios nele incorporados." },
            { title: "O que é upgrade e como faço?", description: "O upgrade é a troca do seu plano de combo atual para um maior. Fazer o upgrade é muito simples, entre no sistema com seu login e senha e solicite o upgrade, efetue o pagamento da diferença do combo. Ex: Você adquiriu o combo de R$800,00 na sua ativação e deseja fazer o upgrade, então você o solicita no seu cadastro e escolhe entre as opções de R$2.100,00 ou de R$4.100,00, seguindo isso é só pagar a diferença, nesse caso supondo que escolha o de R$2100,00 você irá pagar a diferença de R$1.300,00 e receberá em seu estabelecimento os produtos que complementarão o primeiro combo adquirido de R$800,00." },
            { title: "Como são feitas as vendas para o salão e quais são seus ganhos?", description: "As vendas são feitas atraves do sistema Ezitus Sweet MMN onde o salão é cadastrado. Ao adquirir um dos combos de produtos oferecidos, o salão tem como beneficios: 60% de desconto nas suas recompras, lembrando sempre que para que este salão tenha direito ao beneficio, deverá estar ativo no sistema (para isso ele deverá dispor de um valor de R$150,00 para a manuenção do sistema e um consumo mínimo em produtos de R$350,00 para o beneficio do frete gratuito." },
            { title: "Como são feitas as vendas para o consumidor final?", description: "As vendas para consumidor final que não tem cadastro no sistema serão realizadas através da vitrine disponível no cadastro do distribuidor independente. Após a recompra feita, os produtos serão repassados ao consumidor final." }
        ];
        this.shownGroup = null;
    }
    ComercialPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__suporte_suporte__["a" /* SuportePage */]);
    };
    ComercialPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ComercialPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    return ComercialPage;
}());
ComercialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-comercial',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\comercial\comercial.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="back()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            Comercial Perguntas\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item style="background-color: #222;" *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n\n        <strong style="color:white;">{{d.title}}</strong>\n\n        <ion-icon style="color:white;" item-right [name]="isGroupShown(i) ? \'arrow-dropup\' : \'arrow-dropdown\'"></ion-icon>\n\n        <div class="pg-descricao" *ngIf="isGroupShown(i)">{{d.description}}</div>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\comercial\comercial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ComercialPage);

//# sourceMappingURL=comercial.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TecnicaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suporte_suporte__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TecnicaPage = (function () {
    function TecnicaPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.diseases = [
            { title: "Qual o campo de atuação de um técnico Expert Sweet?", description: "A Área Técnica tem por objetivo fornecer todo suporte necessário para o êxito das vendas e garantia de uma performance 100% eficaz de todos os produtos Sweet, tanto profissionais quanto para o cliente final. Dessa forma, nossos Experts estão preparados para:  1. realizar cursos e wokshops voltados à área comercial (líderes e distribuidores independentes) no que se refere ao treinamento dos produtos e estratégias de vendas dos mesmos;  2. realizar cursos e workshops direcionados aos profissionais cabeleireiros desenvolvendo técnicas associadas à utilização dos produtos; 3. realizar visitas e apresentações em salões; 4. realizar suporte via e-mail, WhatsApp e telefone para esclarecer dúvidas e solucionar problemas; 5. fornecer material apostilado explicativo e técnico.Todos os cursos poderão ser realizados em nossas sedes em São Paulo, bem como nas cidades de atuação do líder ou distribuidor independente." },
            { title: "Como solicitar um técnico?", description: "Para fazer a solicitação de um técnico, seja para o desenvolvimento de um evento na sua cidade, em nossas sedes em São Paulo ou no Instituto Sweet, bem como para solicitar visita em salões o procedimento deverá ser realizado via email. Você deverá enviar uma solicitação para o email: mmn@sweethair.com.br descrevendo qual tipo de evento e qual data. O setor responsável responderá de maneira rápida e objetiva informando com relação à existência de disponibilidade e encaminhando demais protocolos para preenchimento. Devemos lembrar que a agenda será liberada de acordo com a disponibilidade dos técnicos Experts e caso seja de interesse do líder ou do distribuidor independente, a Sweet também forma técnicos através do Curso Expert." },
            { title: "Como se tornar um técnico Expert Sweet", description: "A Sweet Hair possui um curso voltado para o profissional cabeleireiro que deseja se tornar um Técnico Expert. Esse curso acontece normalmente uma vez por mês e as vagas são limitadas. Trata-se de um curso com no máximo 15 profissionais que aprenderam ao longo de 1 semana todos os conceitos da marca, composição química dos produtos, atuação na estrutura capilar, técnicas de aplicação, desenvolvimento de capacidade de resolver problemas e dar suporte para os profissionais cabeleireiros, de forma teórica e prática. As inscrições deverão ser feitas e confirmadas através do email: adriana.picolo@sweethair.com.br. Aviso importante: A SWEET HAIR NÃO SE RESPONSABILIZA PELA ATUAÇÃO TÉCNICA DE PROFISSIONAIS CABELEIREIROS QUE NÃO TENHAM REALIZADO NOSSO CURSO DE FORMAÇÃO EXPERT." },
            { title: "O que é o The First?", description: "O The First é um sistema de alisamento térmico desenvolvido sob a forma de shampoo com o objetivo de facilitar a aplicação e otimizar o tempo do profissional cabeleireiro. O processo de aplicação de uma progressiva normal leva em média 4 horas. Realizando o processo de alisamento com o The First, o profissional consegue realizar o mesmo procedimento em 2 horas. Ou seja, há muito mais agilidade e rapidez, possibilitando que o profissional realize mais trabalhos durante o dia." },
            { title: "O The First ou a escova Lovely desbotam ou alteram a cor dos cabelos?", description: "Não, nenhum dos dois produtos alteram a cor dos cabelos, porém, temos que considerar que qualquer alisamento térmico precisa da fonte de calor que vem da prancha e essa fonte de calor pode ocasionar oxidação da cor do cabelo. Essa oxidação pode ser notada se o cabelo for extremamente poroso, se o tipo de coloração utilizada for superficial, como tonalizantes ou máscaras ou se a cliente possuir muitos cabelos brancos, o que gera a revelação do fundo de clareamento. Por esse motivo indicamos sempre realizar o procedimento de coloração ou descoloração após a realização do alisamento, seja ele efetuado com The First ou Lovely." },
            { title: "Podemos usar The First em cabelos coloridos ou com descoloração?", description: "Sim. O The First pode ser usado em todos os tipos de cabelo. O que devemos sempre levar em conta é a saúde dos fios para determinar qual temperatura será utilizada. Em cabelos sensibilizados ou danificados a temperatura da prancha não deve ultrapassar 200ᵒC (ou 410ᵒF). Para cabelos saudáveis, a temperatura utilizada na prancha deve ser de 230ᵒC (ou 450ᵒF)." },
            { title: "O shampoo The First é compatível com todas as químicas?", description: "Sim. Tanto o The First quanto a Lovely são produtos à base de ácidos que agem nas pontes salinas do córtex do cabelo, não tendo nenhum tipo de incompatibilidade com nenhuma química. Sendo assim, cabelos com coloração, descoloração, relaxamentos alcalinos a base de hidróxidos ou tioglicolato, henê, etc. podem ser processados com os produtos Sweet. Lembrando que se o cabelo estiver sensibilizado, a temperatura usada na prancha não deverá ser superior à 200ᵒC." },
            { title: "Qual o pH do shampoo The First?", description: "O shampoo The First possui pH de 2,0, sendo que, na aplicação no cabelo, com a presença de água, esse pH mantem-se um pouco mais elevado." },
            { title: "O The First amarela cabelos loiros?", description: "Não. Se o processo for feito da forma correta, não ocasiona amarelamento. O máximo que pode acontecer é, num cabelo matizado com máscara ou tonalizado, pode ocorrer perda do pigmento acinzentado ou irisado e revelar o fundo de clareamento. Ou seja, se o cabelo loiro estiver na altura de tom 10 acinzentado, após o procedimento ele vai estar na altura do tom 10, porém, sem o acinzentado." },
            { title: "Qual a melhor forma de fazer o alisamento em um cabelo com luzes ou coloração?", description: "Em cabelos que já tenham luzes, o The First pode ser feito normalmente, respeitando a saúde dos fios. Caso a cliente queira fazer os dois procedimentos: alisar e descolorir, sugerimos que primeiro o profissional faça o alisamento com o The First ou com a Lovely. Assim que finalizar o processo de prancha, o cabelo deverá ser lavado (com um shampoo normal) e condicionado para haver normalização do pH do cabelo, seco e em seguida pode-se proceder a descoloração. O mesmo processo deve ser feito para coloração. Caso não seja feito no mesmo dia, deve haver obrigatoriamente uma lavagem completa do cabelo entre um processo e outro." },
            { title: "Qual a diferença entre o The First e a Lovely?", description: "Os dois produtos alisam do mesmo jeito, entretanto, a Lovely é um produto mais tradicional, com 3 passos que automaticamente requer um pouco mais de tempo na aplicação." },
            { title: "O The First e a Lovely possuem formol na sua composição?", description: "Não. Os dois produtos são compostos por ácidos que também são utilizados pela área de estética facial. Nenhum dos dois possui formol na sua composição." },
            { title: "O The First ou a Lovely podem causar reações alérgicas?", description: "Não. Temos laudos dermatológicos que comprovam que a utilização correta de ambos não ocasionam reações alérgicas, porém, se a cliente possuir feridas ou doenças no couro cabeludo, indicamos que não sejam realizados os procedimentos pois tratam-se de produtos ácidos que podem acentuar os sintomas ou gerar incômodos." },
            { title: "Qual a porcentagem de alisamento que conseguimos obter com o The First?", description: "Tanto o The First quanto a Lovely alisam 100% os cabelos ondulados, cacheados e crespos. Cabelos afro carapinhas ou crespos muito resistentes, utilizando um dos dois produtos obtemos de 70 a 90% de alisamento, entretanto, temos um protocolo de aplicação denominado “semidefinitiva para cabelos afros” que combina a utilização do kit Lovely com o The First para obtermos 100% de alisamento em uma única aplicação para esse tipo de cabelo, sem a necessidade de utilizar relaxamentos alcalinos." },
            { title: "Mulheres grávidas, lactantes e crianças podem utilizar os alisamentos Sweet (The First ou Lovely)?", description: "Temos laudos e estudos que comprovam que os componentes dos alisamentos Sweet não caem na corrente sanguínea. Da mesma forma, durante a aplicação não ocorre a produção de fumaça densa e abundante, não havendo risco de intoxicação. Entretanto, sugerimos que gestantes e lactantes peçam autorização médica antes do procedimento, uma vez que podem haver restrições ou outros problemas de saúde pré-existentes que o profissional cabeleireiro não terá condições de identificar. Para crianças, sugerimos após os 12 anos de idade, uma vez que antes dessa idade, dificilmente a criança conseguirá manter-se parada para a realização do procedimento." },
            { title: "Cabelos brancos podem sofrer alterações de cor durante os procedimentos de alisamento?", description: "Sim. Os cabelos brancos não possuem melanina, ou seja, nenhum tipo de pigmento. Durante o processo de alisamento pode ocorrer oxidação do cabelo e revelar um tom amarelado. Isso pode ser evitado com a utilização de uma temperatura mais baixa na prancha ou utilização de matizadores associados aos alisamentos." },
            { title: "Qual a durabilidade dos alisamentos Sweet?", description: "Tanto para The First quanto para a Lovely, a durabilidade média é de 2 a 4 meses, podendo ser estendido com o uso de produtos adequados de manutenção e utilização de fonte de calor (secador com ar quente)." },
            { title: "O alisamento sai do cabelo com o tempo?", description: "Sim. Caso a cliente resolva não alisar mais os cabelos, a mesma deverá aguardar um período de 9 meses a 1 ano para que o cabelo volte completamente à forma original (considerando que o cabelo não possuía outros produtos de alisamento)." },
            { title: "Qual a melhor forma de realizar um procedimento de alisamento com The First?", description: "A melhor forma de realizar um procedimento de alisamento com o The First é sempre de acordo com o diagnóstico dos cabelos. Sendo assim, devemos sempre avaliar as reais necessidade do cabelo e realizar o protocolo que mais se enquadra às mesmas. Para isso, consulte as diferentes formas de aplicação do The First. 01 – Para cabelos loiros – retirar frizz Misture 35 ml do shampoo The First com 15 ml do Shampoo Matizador. Deixe agir de 10 a 20 minutos, enxágue 100%, seque os cabelos e finalize com a prancha. 02 – Reconstrução e nutrição Após os 20 minutos de pausa com The First, enxágue 100% e aplique a Máscara de Tratamento Cronology. Deixe agir por 7 minutos, enxágue 100%, seque e finalize com a prancha. 03 – Reparação de pontas danificadas Após os 20 minutos de pausa com The First, enxágue 100% e aplique nas pontas danificadas o S.O.S 1º Passo, Seque 100% e finalize com a prancha. 04 – Semi definitiva Aplique 50ml de The First por todo o cabelo, deixe agir por 20 minutos e enxágue 100%. Seque os fios 80% e aplique sob os cabelos o Hair Treatment 2º Passo, da linha Lovely. Deixe agir por 15 minutos, enxágue 100%, seque os cabelos e pranche 7 vezes cada mecha. 05 – Espelhamento Capilar Após os 20 minutos de pausa com The First, enxágue 100% e aplique a Máscara Touch of Silk 3º Passo, da linha Lovely. Deixe agir por 10 minutos, enxágue 100%, seque os cabelos e pranche 7 vezes cada mecha. 06 – Coloração Após realizar o procedimento completo do The First, ou seja, após pranchar, molhe abundantemente o cabelo, seque com o auxílio do secador e aplique a coloração conforme orientação do fabricante. Após o tempo de pausa da coloração, enxague novamente. Para melhor sensorial e durabilidade da cor, sugerimos finalizar com o Touch of Silk ou com a Máscara Hair Cream da linha Cronology. 07 – Descoloração Após realizar o procedimento completo do The First, ou seja, após pranchar, lave os cabelos com Shampoo e Condicionador de sua preferência (sugerimos a Linha Mousse), seque com o auxílio do secador e realize o procedimento de descoloração. Em seguida realize a matização ou tonalização, conforme desejar e, para melhor sensorial e durabilidade da cor, sugerimos finalizar com o Touch of Silk ou com a Máscara Hair Cream da linha Cronology. 08 – The First para loiras – Alisamento Após os 20 minutos de pausa com The First, enxágue 100% e aplique a Máscara Platinum e deixe agir por 10 a 15 minutos até obter o efeito chumbado, enxágue 100%, seque os cabelos e pranche de 5 a 7 vezes cada mecha com a temperatura de acordo com a saúde do cabelo." },
            { title: "Por que devemos usar a manutenção pós progressiva do The First?", description: "O uso da família The First garante maior durabilidade do alisamento exatamente por possuir na sua composição uma matéria prima chamada N-duhance, a qual age no córtex do cabelo, promovendo alinhamento, efeito anti-frizz e anti umidade e mantendo as cutículas seladas." },
            { title: "Qual é o pigmento base presente na coloração Royal Colour da Sweet (Qual o fundo da coloração)?", description: "A coloração Royal Colour não possui um único tom no fundo das suas bases, mas para cada altura de tom temos um fundo que neutraliza o fundo de clareamento indesejado, a saber: 1.0 ao 4.0 – fundo mate (responsável por neutralizar o fundo de clareamento vermelho) 5.0 – fundo mate azulado (responsável por neutralizar o fundo de clareamento vermelho alaranjado) 6.0 – fundo azul (responsável por neutralizar o fundo de clareamento laranja) 7.0 – fundo azul violeta (responsável por neutralizar o fundo de clareamento amarelo alaranjado) 8.0 ao 10.0 – fundo violeta (responsável por neutralizar o fundo de clareamento amarelo)." },
            { title: "Posso tonalizar um cabelo usando a coloração Royal Colour?", description: "Sim, porém, trata-se de coloração permanente. Para obter um efeito de tonalização com a linha Royal devemos utilizar oxidante de 10 volumes, na proporção de 1 parte de coloração para 2 partes de OX e o tempo de pausa não pode exceder 10 minutos no cabelo para não haver alteração da cor do cabelo natural da cliente." },
            { title: "Consigo cobrir brancos com a coloração da Sweet?", description: "Sim. A coloração Royal Colour cobre 100% cabelos brancos desde que seja utilizada a regra abaixo: até 50% de brancos espalhados por toda a cabeça, podemos utilizar apenas as nuances escolhidas, de 50% a 70% de brancos devemos usar metade da nuance e metade da base, de 70% a 100% de cabelos brancos devemos usar ¾ de base e ¼ de nuance escolhida. O oxidante escolhido deve ser de acordo com quantos tons queremos oxidar do cabelo escuro e o tempo de pausa para cabelos brancos deve ser de 45 a 50 minutos." },
            { title: "Quantos tons consigo clarear com o pó descolorante da Sweet?", description: "O pó descolorante Sweet clareia de 7 a 8 tons, lembrando que ele possui partículas anti-amarelo que auxiliam na obtenção do clareamento desejado." },
            { title: "Por que o pó descolorante da Sweet é branco?", description: "Desenvolvemos um pó descolorante branco porque os pós azuis ou violetas que existem no mercado possuem somente corante azul e/ou violeta, matéria prima que não tem poder de neutralizar o fundo de clareamento do cabelo, mas simplesmente mascarar a real cor obtida com a descoloração. Sendo assim, com esse tipo de corante, muitas vezes o profissional pode ter a impressão que já está na altura de tom desejada e enxaguar o cabelo antes de realmente chegar, o que acaba por atrapalhar o procedimento. Com o pó descolorante branco, a visualização do fundo de clareamento é mais fácil e o profissional pode realizar o procedimento com mais segurança." },
            { title: "Qual a proporção correta para misturar o pó descolorante com OX?", description: "Nosso pó descolorante foi desenvolvido para melhor atender às necessidades dos profissionais cabeleireiros e melhor se adaptar às técnicas de clareamento. Sendo assim, o profissional poderá fazer a mistura nas seguintes proporções: – 1 medida de pó descolorante para 1 e meia medida de peróxido (Ox); – 1 medida de pó descolorante para 2 medidas de peróxido (Ox); – 1 medida de pó descolorante para 2 e meia medidas de peróxido (Ox); – 1 medida de pó descolorante para 3 medidas de peróxido (Ox). Essas medidas deverão ser adequadas à técnica pretendida e cabe lembrar que independente da proporção escolhida, a medida deverá ser realizada com auxílio de balança de precisão, pois, além de fazê-las de forma correta o profissional terá noção da quantidade de produto utilizada para cada procedimento." },
            { title: "Qual é a diferença do peróxido (oxigenada) da Sweet para as demais?", description: "A Ox da Sweet (peróxido) não possui carga iônica, portanto pode ser utilizada com toda e qualquer outra marca de coloração ou pó descolorante, sem afetar a performance do produto e sem desestabilizar as misturas realizadas." },
            { title: "Para que serve o S.O.S Powder?", description: "É um sistema de proteção em pó para ser utilizado junto com o pó descolorante ou coloração, que não compromete o desempenho do clareamento e descoloração dos cabelos, mas os protege dos efeitos nocivos do excesso de alcalinidade dos procedimentos químicos." },
            { title: "Para que serve o passo 1 do S.O.S Impact Shock?", description: "O S.O.S 1 Impact Shock serve para várias funções:– neutralizar e parar a ação dos produtos alcalinos (descoloreção e relaxamentos) durante o procedimento, como forma de SOCORRO; – para proteger os cabelos antes de um processo químico, aplicando-o diretamente na parte sensibilizada do cabelo (antes da química) ou misturando-o diretamente no produto (descoloração ou coloração); – para realizar um tratamento de reconstrução de alto impacto (ou cauterização) junto com o S.O.S passo 2 – Regeneration." },
            { title: "O passo 1 do S.O.S pode ser utilizado com a descoloração?", description: "Sim porque promove a reestruturação do fio do cabelo devolvendo resistência e massa (reposição de proteínas que normalmente são perdidas por conta dos procedimentos químicos alcalinos. Possui pH de 2,5, ácido cítrico, aminoácidos, fluído de silicone e alta carga de queratina vegetal hidrolisada." },
            { title: "O passo 1 do S.O.S pode ser utilizado com outra máscara para finalização da cauterização ou de um tratamento profundo?", description: "Sim, pode. Indicamos para cabelos intensamente sensibilizados realizar o procedimento de cauterização e finalizar com a Hair Cream Cronology para obtenção de um sensorial mais macio, emoliente e com muito brilho." },
            { title: "Qual a indicação do kit Renovação Molecular Cronology?", description: "O kit Cronology é indicado para todos os tipos de cabelo e promove hidratação, nutrição e reconstrução de ma  neira inteligente. Ou seja, ao aplicar o produto, o mesmo irá realizar um mapeamento das necessidades dos fios e depositar somente o que for necessário com o objetivo de manter a saúde e a beleza dos mesmos." }
        ];
        this.shownGroup = null;
    }
    TecnicaPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__suporte_suporte__["a" /* SuportePage */]);
    };
    TecnicaPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    TecnicaPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    return TecnicaPage;
}());
TecnicaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-tecnica',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\tecnica\tecnica.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="back()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            Área Técnica Perguntas\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item style="background-color: #222;" *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n\n        <strong style="color:white;">{{d.title}}</strong>\n\n        <ion-icon style="color:white;" item-right [name]="isGroupShown(i) ? \'arrow-dropup\' : \'arrow-dropdown\'"></ion-icon>\n\n        <div class="pg-descricao" *ngIf="isGroupShown(i)">{{d.description}}</div>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\tecnica\tecnica.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], TecnicaPage);

//# sourceMappingURL=tecnica.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suporte_suporte__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinanceiroPage = (function () {
    function FinanceiroPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.diseases = [
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
        this.shownGroup = null;
    }
    FinanceiroPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__suporte_suporte__["a" /* SuportePage */]);
    };
    FinanceiroPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    FinanceiroPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    return FinanceiroPage;
}());
FinanceiroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-financeiro',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\financeiro\financeiro.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="back()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>Financeiro Perguntas</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item style="background-color: #222;" *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n\n\n\n        <strong style="color:white;">{{d.title}}</strong>\n\n\n\n        <ion-icon style="color:white;" item-right [name]="isGroupShown(i) ? \'arrow-dropup\' : \'arrow-dropdown\'"></ion-icon>\n\n\n\n        <div class="pg-descricao" *ngIf="isGroupShown(i)">{{d.description}}</div>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\frequentes\financeiro\financeiro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], FinanceiroPage);

//# sourceMappingURL=financeiro.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationPage = (function () {
    function InformationPage(navCtrl, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
    }
    InformationPage.prototype.backButtonAction = function () {
        /* checks if modal is open */
        if (this.modal && this.modal.index === 0) {
            /* closes modal */
            this.modal.dismiss();
        }
        else {
            /* exits the app, since this is the main/first tab */
            this.platform.exitApp();
            // this.navCtrl.setRoot(AnotherPage);  <-- if you wanted to go to another page
        }
    };
    InformationPage.prototype.ionViewDidLoad = function () {
        var loading = this.loadingCtrl.create({
            content: 'Aguardando Conexão...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    InformationPage.prototype.backpage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return InformationPage;
}());
InformationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-info',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\info\info.html"*/'<ion-navbar>\n\n    <!-- <ion-buttons start> -->\n\n        <button ion-button color="light" clear menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <!-- </ion-buttons> -->\n\n    <ion-buttons end>\n\n        <button ion-button color="light" clear (click)="backpage()">\n\n            <p>voltar</p>\n\n        </button>\n\n    </ion-buttons>\n\n    <ion-title>Sweet | SevenLink</ion-title>\n\n</ion-navbar>\n\n<ion-content>\n\n   <img src="https://s3-sa-east-1.amazonaws.com/sweetsite/aplicativos/Sweet+Hair+App/PagProdutos/Categorias/quemsomosPage/tela_seven.png" class="bg-page">\n\n</ion-content> '/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\info\info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], InformationPage);

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermosPage = (function () {
    function TermosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TermosPage.prototype.backPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return TermosPage;
}());
TermosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-termos',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\termos\termos.html"*/'<!-- <ion-header> -->\n\n <ion-navbar>\n\n  <!-- <ion-buttons start> -->\n\n    <button ion-button color="black" clear menuToggle>\n\n       <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n   <!-- </ion-buttons> -->\n\n   <ion-buttons end>\n\n       <button ion-button color="black" clear (click)="backPage()">\n\n           <p>voltar</p>\n\n       </button>\n\n   </ion-buttons>\n\n    <ion-title>Termos e condições</ion-title>\n\n </ion-navbar>\n\n<!-- </ion-header> -->\n\n\n\n<ion-content padding>\n\n  \n\n<!-- <strong> Termos </strong>\n\n<p>Todos os aplicativos da Sweet Hair Professional disponibilizados para você estão sujeitos aos Termos e Condições (http://sweethair.com.br/politicas/). Leia esses documentos com atenção para garantir a compreensão da base em que fornecemos esses aplicativos a você. Ao disponibilizarmos esses aplicativos para você, poderemos coletar informações pessoais sobre você a fim de fornecermos os aplicativos para o seu dispositivo. Faremos isso de acordo com a nossa política de privacidade (http://sweethair.com.br/politicas/). “Ao acessar ou utilizar” qualquer um dos aplicativos, indica que você concorda com nossos termos e condições e com uso de seus dados pessoais de acordo com a nossa política de privacidade.<p> -->\n\n<br><br>\n\n<strong> Termos e Condições </strong>\n\n\n\n<p>O Usuário reconhece e concorda que o Serviço foi desenvolvido para uso genérico, e não foi customizado às suas necessidades específicas. Portanto, o Usuário concorda que o Serviço é fornecido “NO ESTADO EM QUE SE ENCONTRA” e “CONFORME A DISPONIBILIDADE”. O Usuário ainda entende e concorda que, em razão de diversos fatores, não há como garantir que durante o fornecimento dos Serviços estes não estejam livres de erros. Portanto, na máxima extensão permitida pela lei aplicável e sujeito a este Termo, a Sweet Hair Professional não garante que o Serviço não será interrompido, ou que seja livre de vírus ou erros. Na máxima extensão permitida pela legislação aplicável , nenhuma garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando a garantia de titularidade ou de não violação, ou garantias implícitas de comerciabilidade ou adequação a uma finalidade específica, é concedida em relação à disponibilidade, precisão, confiabilidade do Serviço, incluindo qualquer informação ou conteúdo fornecido pelo Serviço. O Usuário expressamente entende e concorda que o uso dos Serviços é sob seu próprio risco, e que o Usuário poderá ser exposto a conteúdo de diversas fontes, sem qualquer controle e responsabilidade da Sweet Hair Professional. O Usuário reconhece e concorda que a Sweet Hair Professional não será responsabilizada por qualquer conteúdo ou serviço de terceiros que possam ser acessados pelo Serviço, tampouco a Sweet Hair Professional será responsabilizada por códigos maliciosos contidos ou distribuídos por terceiros. A Sweet Hair Professional não controlará ou aprovará o conteúdo e não poderá garantir a precisão, integridade ou qualidade desse conteúdo. O Usuário reconhece que, ao utilizar o serviço, poderá estar exposto a um conteúdo ofensivo e/ou indecente. A Sweet Hair Professional não garante ainda a disponibilidade continuada desse conteúdo ou serviço. O Usuário assume inteira responsabilidade por quaisquer danos, perdas, custos ou prejuízos decorrentes do seu uso ou inabilidade de usar o Serviço. Na extensão permitida pela lei, a Sweet Hair Professional renuncia a todas as responsabilidades relacionadas ao uso do Serviço (incluindo danos diretos, indiretos, punitivos ou consequenciais). O Usuário entende e concorda que, se houver a alegação de que houve a invalidade de quaisquer das disposições deste Termo, isto não afetará ou invalidará as demais disposições deste Termo.</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\termos\termos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], TermosPage);

//# sourceMappingURL=termos.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalizacaoPage = (function () {
    // map: any;
    function LocalizacaoPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    LocalizacaoPage.prototype.ionViewDidLoad = function () {
        var loading = this.loadingCtrl.create({
            content: 'Verificando Conexão...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2500);
        this.showMap();
    };
    LocalizacaoPage.prototype.showMap = function () {
        //location - lat long
        var location = new google.maps.LatLng(-23.5492026, -46.571972);
        // map options
        var options = {
            center: location,
            zoom: 17,
            streetViewControl: true
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
    };
    LocalizacaoPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    return LocalizacaoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], LocalizacaoPage.prototype, "mapRef", void 0);
LocalizacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-localizacao',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\localizacao\localizacao.html"*/'<ion-header>\n\n    <ion-navbar color="black"> \n\n        <button ion-button menuToggle color="light">\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Localização Sweet</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n   <div #map id="map"></div>\n\n</ion-content>\n\n<ion-footer>\n\n   <ion-icon name="pin"> Rua Coelho lisboa 556 - Tatuapé - São Paulo/SP - Brasil</ion-icon>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\localizacao\localizacao.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LocalizacaoPage);

//# sourceMappingURL=localizacao.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_suporte_suporte__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_frequentes_comercial_comercial__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_frequentes_logistica_logistica__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_frequentes_tecnica_tecnica__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_frequentes_ti_ti__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_frequentes_financeiro_financeiro__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cabeleireirovirtual_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cabeleireirovirtual_teste1_teste1__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_termos_termos__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_localizacao_localizacao__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_quemsomos_quemsomos__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_info_info__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_email_composer__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_suporte_suporte__["a" /* SuportePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_frequentes_comercial_comercial__["a" /* ComercialPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_frequentes_logistica_logistica__["a" /* LogisticaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_frequentes_tecnica_tecnica__["a" /* TecnicaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_frequentes_ti_ti__["a" /* TiPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_frequentes_financeiro_financeiro__["a" /* FinanceiroPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cabeleireirovirtual_home_home__["a" /* CabeleireiroHomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_cabeleireirovirtual_teste1_teste1__["a" /* Teste1Page */],
            __WEBPACK_IMPORTED_MODULE_13__pages_termos_termos__["a" /* TermosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_localizacao_localizacao__["a" /* LocalizacaoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_quemsomos_quemsomos__["a" /* QuemsomosPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_info_info__["a" /* InformationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cabeleireirovirtual/teste1/teste1.module#Teste1PageModule', name: 'Teste1Page', segment: 'teste1', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_suporte_suporte__["a" /* SuportePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_frequentes_comercial_comercial__["a" /* ComercialPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_frequentes_logistica_logistica__["a" /* LogisticaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_frequentes_tecnica_tecnica__["a" /* TecnicaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_frequentes_ti_ti__["a" /* TiPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_frequentes_financeiro_financeiro__["a" /* FinanceiroPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cabeleireirovirtual_home_home__["a" /* CabeleireiroHomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_cabeleireirovirtual_teste1_teste1__["a" /* Teste1Page */],
            __WEBPACK_IMPORTED_MODULE_13__pages_termos_termos__["a" /* TermosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_localizacao_localizacao__["a" /* LocalizacaoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_quemsomos_quemsomos__["a" /* QuemsomosPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_info_info__["a" /* InformationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frequentes_ti_ti__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__frequentes_logistica_logistica__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__frequentes_comercial_comercial__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__frequentes_tecnica_tecnica__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frequentes_financeiro_financeiro__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SuportePage = (function () {
    function SuportePage(navCtrl, alertCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
    }
    SuportePage.prototype.backPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    SuportePage.prototype.FrTi = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__frequentes_ti_ti__["a" /* TiPage */]);
    };
    SuportePage.prototype.FrLogistica = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__frequentes_logistica_logistica__["a" /* LogisticaPage */]);
    };
    SuportePage.prototype.FrComercial = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__frequentes_comercial_comercial__["a" /* ComercialPage */]);
    };
    SuportePage.prototype.FrTecnica = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__frequentes_tecnica_tecnica__["a" /* TecnicaPage */]);
    };
    SuportePage.prototype.FrFinanceiro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__frequentes_financeiro_financeiro__["a" /* FinanceiroPage */]);
    };
    SuportePage.prototype.sendEmailTi = function () {
        var email = {
            to: 'ti@suportesweet.com.br',
            subject: 'Suporte Sweet',
            body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    SuportePage.prototype.sendEmailFinanceiro = function () {
        var email1 = {
            to: 'financeiro@suportesweet.com.br',
            subject: 'Suporte Sweet',
            body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
            isHtml: true
        };
        this.emailComposer.open(email1);
    };
    SuportePage.prototype.sendEmailLogistica = function () {
        var email2 = {
            to: 'logistica@suportesweet.com.br',
            subject: 'Suporte Sweet',
            body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
            isHtml: true
        };
        this.emailComposer.open(email2);
    };
    SuportePage.prototype.sendEmailComercial = function () {
        var email3 = {
            to: 'comercial@suportesweet.com.br',
            subject: 'Suporte Sweet',
            body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
            isHtml: true
        };
        this.emailComposer.open(email3);
    };
    SuportePage.prototype.sendEmailTecnica = function () {
        var email4 = {
            to: 'areatecnica@suportesweet.com.br',
            subject: 'Suporte Sweet',
            body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
            isHtml: true
        };
        this.emailComposer.open(email4);
    };
    SuportePage.prototype.sendEmailMarketing = function () {
        var email5 = {
            to: 'marketing@suportesweet.com.br',
            subject: 'Suporte Sweet',
            body: 'Olá, antes de solicitar a sua dúvida, informe juntamente com a mensagem seu telefone e ID de login caso possua. Assim posteriormente poderemos entrar em contato para melhor te ajudar.',
            isHtml: true
        };
        this.emailComposer.open(email5);
    };
    return SuportePage;
}());
SuportePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-suporte',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\suporte\suporte.html"*/'<ion-navbar>\n\n    <!-- <ion-buttons start> -->\n\n            <button ion-button color="light" clear menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n    <!-- </ion-buttons> -->\n\n    <ion-title>Suporte Sweet</ion-title>\n\n    <ion-buttons end>\n\n            <button ion-button color="light" clear (click)="backPage()">\n\n                <p>voltar</p>\n\n            </button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n<ion-content padding="10">\n\n    <!--Logo Principal Suporte MMN-->\n\n    <div class="div-logo-suporte">\n\n        <img src="assets/img/logo_suporte.png" style="margin-left:-2.5rem;">\n\n        <p style="margin-top:30px;">Esse Aplicativo ajudará você a entender o nosso negócio.</p>\n\n        <hr>\n\n        <p style="color: grey;">Aqui você seleciona a àrea que deseja solicitar suporte.</p>\n\n    </div>\n\n    <!--DIV BACKGROUND-->\n\n    <div class="bg-cards">\n\n        <!--Primeira div Area TI-->\n\n        <div class="div-logo-ti">\n\n            <img class="logo-ti" src="assets/img/area_ti.png" width="60%">\n\n            <button ion-button class="btn-pergunta" color="light" outline (click)="sendEmailTi()">Solicitar Suporte</button>\n\n            <button ion-button class="btn-pergunta" color="light" outline (click)="FrTi()">Perguntas Frequentes</button>\n\n        </div>\n\n        <!--Segunda div Area Financeiro-->\n\n        <div class="div-logo-financeiro">\n\n            <img class="logo-financeiro" src="assets/img/area_financeiro.png">\n\n            <button ion-button class="btn-pergunta" color="dark" outline (click)="sendEmailFinanceiro()">Solicitar Suporte</button>\n\n            <button ion-button class="btn-pergunta" color="dark" outline (click)="FrFinanceiro()">Perguntas Frequentes</button>\n\n        </div>\n\n        <!--Terceira div Area Logistica-->\n\n        <div class="div-logo-logistica">\n\n            <img class="logo-logistica" src="assets/img/area_logistica.png">\n\n            <button ion-button class="btn-pergunta" color="light" outline (click)="sendEmailLogistica()">Solicitar Suporte</button>\n\n            <button ion-button class="btn-pergunta" color="light" outline (click)="FrLogistica()">Perguntas Frequentes</button>\n\n        </div>\n\n        <!--Quarta div Area comercial-->\n\n        <div class="div-logo-comercial">\n\n            <img class="logo-comercial" src="assets/img/area_comercial.png">\n\n            <button ion-button class="btn-pergunta" color="dark" outline (click)="sendEmailComercial()">Solicitar Suporte</button>\n\n            <button ion-button class="btn-pergunta" color="dark" outline (click)="FrComercial()">Perguntas Frequentes</button>\n\n        </div>\n\n        <!--Quinta div Area tecnica-->\n\n        <div class="div-logo-tecnica">\n\n            <img class="logo-tecnica" src="assets/img/area_tecnica.png">\n\n            <button ion-button class="btn-pergunta" color="light" outline (click)="sendEmailTecnica()">Solicitar Suporte</button>\n\n            <button ion-button class="btn-pergunta" color="light" outline (click)="FrTecnica()">Perguntas Frequentes</button>\n\n        </div>\n\n        <!--Sexta div Area marketing-->\n\n        <div class="div-logo-marketing">\n\n            <img class="logo-marketing" src="assets/img/area_marketing.png">\n\n            <button ion-button class="btn-pergunta" color="dark" outline (click)="sendEmailMarketing()">Solicitar Suporte</button>\n\n            <!--<a href="http://www.sweettransfer.com.br" style=" text-decoration: none;"><button ion-button class="btn-pergunta" color="dark"  outline>Materiais De Marketing</button></a>-->\n\n        </div>\n\n        <!--Sétima div Area instituto-->\n\n        <!-- <div class="div-logo-instituto">\n\n            <img class="logo-instituto" src="assets/img/area_instituto.png">\n\n            <button ion-button class="btn-pergunta" color="light" outline (click)="sendEmailInstituto()">Solicitar Suporte</button>\n\n            <a href="http://institutosweet.com.br" style=" text-decoration: none;"><button ion-button class="btn-pergunta" color="light" outline>Site Instituto</button></a>\n\n        </div> -->\n\n    </div>\n\n    <br>\n\n    <p style="text-align:center;color: grey;">Dentro de um prazo de 24h entraremos em contato.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\suporte\suporte.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
], SuportePage);

//# sourceMappingURL=suporte.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_suporte_suporte__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cabeleireirovirtual_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_termos_termos__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_localizacao_localizacao__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quemsomos_quemsomos__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Quem Somos', component: __WEBPACK_IMPORTED_MODULE_9__pages_quemsomos_quemsomos__["a" /* QuemsomosPage */] },
            { title: 'Suporte Sweet', component: __WEBPACK_IMPORTED_MODULE_5__pages_suporte_suporte__["a" /* SuportePage */] },
            { title: 'Cabeleireiro Virtual', component: __WEBPACK_IMPORTED_MODULE_6__pages_cabeleireirovirtual_home_home__["a" /* CabeleireiroHomePage */] },
            { title: 'Termos e Condições', component: __WEBPACK_IMPORTED_MODULE_7__pages_termos_termos__["a" /* TermosPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.hide();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushLocalizacao = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_localizacao_localizacao__["a" /* LocalizacaoPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-app',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\app\app.html"*/'<style>\n    @import url(\'https://fonts.googleapis.com/css?family=Playfair+Display|Playfair+Display+SC|Lato\');\n    ion-header {\n        box-shadow: 0px 2px 13px 0px rgba(0,0,0,0.75);\n        font-family: \'Playfair Display SC\', serif;\n    }\n    button {\n        margin-top: 7px;\n        width: 100%;\n        font-family: \'Lato\', serif;\n        text-align: left;\n        font-size: 16px;\n        color: white;\n        padding: 14px;\n        background-color: rgba(14, 14, 14, 0);\n    }\n    .toolbar-ios{\n        height: 70px;\n    }\n    .logosweet {\n        display:block;\n        margin: 0 auto;\n    }\n    ion-backdrop {\n        background-color: white;\n    }\n    .btn-lc {\n        display: flex;\n        box-shadow: 2px 0px 13px 0px rgba(0, 0, 0, 0.75);\n    }\n    .btn-lc button {\n        font-size: 14px;\n    }\n    .btn-lc button p {\n        margin-left: 5px;\n    }\n</style>\n<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="black">\n            <ion-title>\n                <img src="assets/img/logo_white.png" width="60" height="60" class="logosweet">\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content class="gradiente_mov">\n<!-- Seleção opções menu --> \n            <button menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n            </button>\n<!-- Seleção opções menu --> \n    </ion-content>\n    <ion-footer>\n        <div class="btn-lc">\n            <button ion-button menuClose clear block color="light" (click)="pushLocalizacao()"><ion-icon name="pin"></ion-icon><p> Localização</p></button>\n        </div>\n    </ion-footer>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suporte_suporte__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cabeleireirovirtual_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quemsomos_quemsomos__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_info__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.SuporteSweet = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__suporte_suporte__["a" /* SuportePage */]);
    };
    HomePage.prototype.CabeleireiroVirtual = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cabeleireirovirtual_home_home__["a" /* CabeleireiroHomePage */]);
    };
    HomePage.prototype.openQuemSomos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__quemsomos_quemsomos__["a" /* QuemsomosPage */]);
    };
    HomePage.prototype.openPageinfo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__info_info__["a" /* InformationPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\home\home.html"*/'<ion-navbar>\n    <!-- <ion-buttons start> -->\n        <button ion-button color="black" clear menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <!-- </ion-buttons> -->\n    <ion-buttons end>\n        <button ion-button color="black" clear (click)="openPageinfo()">\n            <ion-icon name="information-circle"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title>Somos todos Sweet</ion-title>\n</ion-navbar>\n<ion-content scroll="false">\n    <ion-slides autoplay="1500" loop="true" pager="false" effect="fade" speed="1280"> \n     <ion-slide>\n       <img src="assets/img/tt1.png" class="bg-page">\n     </ion-slide>\n     <ion-slide>  \n      <img src="assets/img/tt2.png" class="bg-page" (click)="openQuemSomos()">\n     </ion-slide>   \n     <ion-slide>  \n        <img src="assets/img/tt3.png" class="bg-page"> \n     </ion-slide>\n     <ion-slide>  \n      <img src="assets/img/tt4.png" class="bg-page">\n     </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\Sweet Hair App\Desktop\09-11-2017-CAB\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map