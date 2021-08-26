import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TabsetComponent } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit, AfterViewInit {

  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;

  tabs = [
    { title: "Controles", component: "app-controles" },
    { title: "Consultance", component: "app-consultance" },
    { title: "Coordination", component: "app-coordination" }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.setActiveTab();
  }

  setActiveTab(){
    let route=this.router.url;
    if (route=="/activites#consultance"){
      this.staticTabs.setActiveTab(1);
    }
    if (route=="/activites#consultance"){
      this.staticTabs.setActiveTab(2);
    }
    else if (route=="/activites#coordination"){
      this.staticTabs.setActiveTab(3);
    }
  }

}
