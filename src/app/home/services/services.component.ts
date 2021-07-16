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
      img: "https://mdbootstrap.com/img/Photos/Others/food.jpg", 
      title: "Contrôle", 
      body: "Nos inspecteurs sont qualifiés pour contrôler vos installations domestiques et industrielles", 
      link: "" 
    },
    { 
      img: "https://mdbootstrap.com/img/Photos/Others/food.jpg", 
      title: "Consultance", 
      body: "Bureau de contrôle pour le suivi des chantiers de génie civil. Assistance à la mise en conformité des équipements de travail", 
      link: "" 
    },
    { img: "https://mdbootstrap.com/img/Photos/Others/food.jpg", 
      title: "Coordination", 
      body: "Belor effectue des missions de coordination sécurité et santé, des missions de coordination de chantier et des missions d'animateur de sécurité",
      link: ""
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
