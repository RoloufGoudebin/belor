import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    { title: "Home", link: "/" },
    { title: "Tarifs", link: "/tarifs" },
    { title: "Nos activités", link: "/activites" },
    { title: "Formations", link: "/formations" },
    { title: "Liens", link: "/liens" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" }
  ]

  constructor() { }

  isNavbarCollapsed = true;

  ngOnInit(): void {
  }

}
