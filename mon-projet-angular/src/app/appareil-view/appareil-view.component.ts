import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

 //title = 'my awesome app';
 isAuth = false
 appareils!: any[];

 lastUpdate = new Date(); 
 
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
}
