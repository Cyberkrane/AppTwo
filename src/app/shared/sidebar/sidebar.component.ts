import { Component } from '@angular/core';
import { GiftService } from 'src/app/gift/services/gift.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial(){
    return this.giftservice.historial; 
  }

  constructor( private giftservice: GiftService ) {}
  buscar( termino: string ){
    this.giftservice.buscarGift(termino)
  }
}
