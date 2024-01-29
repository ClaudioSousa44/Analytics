import { Component } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private analytics: AnalyticsService) {}
  
  ngOnInit(): void{
    this.analytics.initialezed();
  }

  evento(){
    this.analytics.logEvent2();
  }
  

}
