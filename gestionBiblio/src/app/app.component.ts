import { Component } from '@angular/core';

//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestionBiblio';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCQgngXL07MArJHc55AtyH8oIddE7TYdMk",
      authDomain: "gestionbiblio-97f31.firebaseapp.com",
      projectId: "gestionbiblio-97f31",
      storageBucket: "gestionbiblio-97f31.appspot.com",
      messagingSenderId: "225719355634",
      appId: "1:225719355634:web:c68fa5b60f3f1d2dd6286b",
      measurementId: "G-HGPDXWW7C5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
