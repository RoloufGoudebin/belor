import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    { title: "Home", link: "/", dropdown: false },
    { title: "Tarifs", link: "/tarifs", dropdown: false },
    {
      title: "Nos activités", link: "/activites", dropdown: true,
      navs:
        [
          { title: "Contrôles", link: "/controles" },
          { title: "Consultance", link: "/consultance" },
          { title: "Coordination", link: "/coordination" }
        ]
    },
    { title: "Formations", link: "/formations", dropdown: false },
    { title: "Liens", link: "/liens", dropdown: false },
    { title: "Blog", link: "/blog", dropdown: false },
    { title: "Contact", link: "/contact", dropdown: false }
  ]

  constructor() { }

  isNavbarCollapsed = true;

  ngOnInit(): void {
  }

}
