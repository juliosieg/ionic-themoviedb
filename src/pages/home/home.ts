import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebServiceProvider } from '../../providers/web-service/web-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public filmes;

  constructor(public navCtrl: NavController, public wsProvider: WebServiceProvider) {

    this.wsProvider.getPopular().subscribe(data => {

      const response = (data as any);
      const objetoRetorno = JSON.parse(response._body);
  
      this.filmes = objetoRetorno['results'];

    }, error => {
  
      console.log(error);
  
    })  

  }
 
}
