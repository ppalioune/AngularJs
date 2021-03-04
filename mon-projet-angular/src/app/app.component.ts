import { Component, OnDestroy, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import {AppareilService} from './services/appareil.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes!: number;
  counterSubscription!: Subscription;
  constructor(){}
  ngOnInit(){
    //crée un compteur par un observable
    const counter = Observable.interval(1000)
    counter.subscribe(
      (value)=>{
        this.secondes = value
      },
      (error)=>{
        console.log('An error occured', +error);
        
      },
      ()=>{
        console.log('Observalbe complete');
      }
    )
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
  /*
  //title = 'my awesome app';
  isAuth = false
  appareils!: any[];

  lastUpdate = new Date();
  /*lastUpdate = new Promise((resolve, reject)=>{
    const date = new Date()
    setTimeout(
      ()=>{
        resolve(date)
      },900000
      );
    });*/
  //appareilOne = "Machine a laver"
  //appareilTwo = "Frigo"
  //appareilThree = "Ordinateur"

  /**
   * Les directives
   */
  
  /*
  constructor(private appareilService: AppareilService){
    setTimeout(()=>{
      this.isAuth = true
    }, 4000
    )
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
}

onAllumer() {
  this.appareilService.switchOnAll();
}

onEteindre() {
  this.appareilService.switchOffAll();
}
*/

}
