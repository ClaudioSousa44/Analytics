import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  initialezed(){
    FirebaseAnalytics.initializeFirebase( {
      apiKey: "AIzaSyCdhRF76Y8V4mYQLjsNdcP2pcK2Fq7Pf6I",
      authDomain: "analytics-claudio.firebaseapp.com",
      projectId: "analytics-claudio",
      storageBucket: "analytics-claudio.appspot.com",
      messagingSenderId: "358647652054",
      appId: "1:358647652054:web:330d96ac7fcbc76fb07377",
      measurementId: "G-M401XRH99E"
    })
  }

  logEvent2(){
      FirebaseAnalytics.logEvent({
    name: "select_content",
    params: {
      content_type: "image",
      content_id: "P12453",
      items: [{ name: "Kittens" }],
    },
});
  }
}
