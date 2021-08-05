import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css', '../activites.component.scss']
})
export class ControlesComponent implements OnInit {

  tabs = [
    {
      title: "Contrôle des installations électriques domestiques"},
    { title: "Contrôle des installations électriques industrielles"},
    { title: "Contrôle des installations paratonnerres" },
    { title: "Contrôle des panneaux photovoltaïques" },
    { title: "Certificat de performance energétique - PEB" },
    { title: "Contrôle des installations gaz BT domestiques" },
    { title: "Thermographie" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
