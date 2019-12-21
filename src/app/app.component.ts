import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor() {
  const firebaseConfig = {
    apiKey: 'AIzaSyB5P5IPDVxOFnz3jx_NJ0NDRRHbVdTeFqM',
    authDomain: 'immodelache.firebaseapp.com',
    databaseURL: 'https://immodelache.firebaseio.com',
    projectId: 'immodelache',
    storageBucket: 'immodelache.appspot.com',
    messagingSenderId: '392087924457',
    appId: '1:392087924457:web:f504146f80cdba07488a78'
  };
  firebase.initializeApp(firebaseConfig);
}

}
