import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit {

  tabs = [
    { title: "Controles", component: "app-controles" },
    { title: "Consultance", component: "app-consultance" },
    { title: "Coordination", component: "app-coordination" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
