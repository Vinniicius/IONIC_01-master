import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPaisesPage } from '../lista-paises/lista-paises';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  

  constructor(public navCtrl: NavController) {

  }

  goToPaises(){
    this.navCtrl.push(ListaPaisesPage);
  }

}
