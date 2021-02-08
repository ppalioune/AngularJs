import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'my awesome app';
  isAuth = false

  //appareilOne = "Machine a laver"
  //appareilTwo = "Frigo"
  //appareilThree = "Ordinateur"

  /**
   * Les directives
   */
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  
  constructor(){
    setTimeout(()=>{
      this.isAuth = true
    }, 4000
    )
  }
  onAllumer(){
    console.log("allumer");
    
  }
}
