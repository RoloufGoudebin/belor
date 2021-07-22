import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css', './services.component.scss']
})
export class ServicesComponent implements OnInit {

  mouseOvered;

  //cards of services
  cardsServices = [
    {
      img: "/assets/img/boitier.jpg",
      title: "Contrôle",
      body: "Nos inspecteurs sont qualifiés pour contrôler vos installations domestiques et industrielles",
      link: ""
    },
    {
      img:  "/assets/img/coordination.jpg",
      title: "Consultance",
      body: "Bureau de contrôle pour le suivi des chantiers de génie civil. Assistance à la mise en conformité des équipements de travail",
      link: ""
    },
    { img: "/assets/img/security.jpg",
      title: "Coordination",
      body: "Belor effectue des missions de coordination sécurité et santé, des missions de coordination de chantier et des missions d'animateur de sécurité",
      link: ""
    }
  ];
  constructor() { }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit(): void {
  }
}
