import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

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
      img: "/assets/img/boitierjpg.jpg",
      title: "Contrôle",
      body: "Nos inspecteurs sont qualifiés pour contrôler vos installations domestiques et industrielles",
      link: "controle"
    },
    {
      img:  "/assets/img/coordination.jpg",
      title: "Consultance",
      body: "Bureau de contrôle pour le suivi des chantiers de génie civil. Assistance à la mise en conformité des équipements de travail",
      link: "consultance"
    },
    { img: "/assets/img/security.jpg",
      title: "Coordination",
      body: "Belor effectue des missions de coordination sécurité et santé, des missions de coordination de chantier et des missions d'animateur de sécurité",
      link: "coordination"
    }
  ];
  constructor(private router: Router, private scroller: ViewportScroller,) { }

  ngOnInit(): void {
  }

  scroll(page: string, anchor: string) {
    this.router.navigate(["/" + page], { fragment: anchor });
  }
}
