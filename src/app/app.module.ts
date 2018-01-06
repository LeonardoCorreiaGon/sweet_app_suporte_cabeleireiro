import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SuportePage } from '../pages/suporte/suporte';
import { ComercialPage } from '../pages/frequentes/comercial/comercial';
import { LogisticaPage } from '../pages/frequentes/logistica/logistica';
import { TecnicaPage } from '../pages/frequentes/tecnica/tecnica';
import { TiPage } from '../pages/frequentes/ti/ti';
import { FinanceiroPage } from '../pages/frequentes/financeiro/financeiro';
import { CabeleireiroHomePage } from '../pages/cabeleireirovirtual/home/home';
import { Teste1Page } from '../pages/cabeleireirovirtual/teste1/teste1';
import { TermosPage } from '../pages/termos/termos';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';
import { QuemsomosPage } from '../pages/quemsomos/quemsomos';
import { InformationPage } from '../pages/info/info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SuportePage,
    ComercialPage,
    LogisticaPage,
    TecnicaPage,
    TiPage,
    FinanceiroPage,  
    CabeleireiroHomePage,
    Teste1Page,
    TermosPage,
    LocalizacaoPage,
    QuemsomosPage,
    InformationPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SuportePage,
    ComercialPage,
    LogisticaPage,
    TecnicaPage,
    TiPage,
    FinanceiroPage,
    CabeleireiroHomePage,
    Teste1Page,
    TermosPage,
    LocalizacaoPage,
    QuemsomosPage,
    InformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
