import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import {AppareilService} from './services/appareil.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    
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
