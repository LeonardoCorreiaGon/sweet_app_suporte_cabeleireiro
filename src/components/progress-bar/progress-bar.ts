import { Component, Input } from '@angular/core';

//Local storage
import { Storage } from '@ionic/storage';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input('progress') progress;

  bar: any;

  constructor(private storage: Storage) {
    
    this.storage.get('tipoDeCabelo').then((data) => {
      if(data == 'ondulado') {
        this.bar = 50;
      }
    });

  }

}
