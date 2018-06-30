import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class WebServiceProvider {

  private api_key = 'f90ac41c9b96fff24359c1811c2aa147';
  public basepath = 'https://api.themoviedb.org/3/';

  constructor(
    public http: Http) {
  }

  getPopular(){
    return this.http.get(`${this.basepath}movie/popular?api_key=${this.api_key}&language=pt-BR&page=1`);
  }

}
