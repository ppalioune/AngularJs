import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'my awesome app';
  isAuth = false

  appareilOne = "Machine a laver"
  appareilTwo = "Frigo"
  appareilThree = "Ordinateur"
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
