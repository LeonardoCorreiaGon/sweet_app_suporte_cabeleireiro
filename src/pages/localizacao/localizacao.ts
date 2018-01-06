import { ElementRef, Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html'
})
export class LocalizacaoPage {

   @ViewChild('map') mapRef: ElementRef;
   // map: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {}
   ionViewDidLoad(){
      let loading = this.loadingCtrl.create({
        content: 'Verificando Conexão...'
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 2500);
      this.showMap();
   }

   showMap(){
   	//location - lat long
   	const location = new google.maps.LatLng(-23.5492026, -46.571972);
   	// map options
   	const options = {
   		center: location,
   		zoom: 17,
   		streetViewControl: true
   	};
    
    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);
   }

   addMarker(position, map) {
   	return new google.maps.Marker({
   		position,
   		map
   	});
   }

}