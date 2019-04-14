import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazmenaPodatakaService {

  private izvorPodatka = new BehaviorSubject([]);
  trenutniPodatak = this.izvorPodatka.asObservable();

  constructor() { }

  promeniPodatak(podatak : any[]){
    this.izvorPodatka.next(podatak);
  }


}
