import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-renseignements',
  templateUrl: './renseignements.component.html',
  styleUrls: ['./renseignements.component.scss']
})
export class RenseignementsComponent implements OnInit {

  typeOfClients = [
    { type: "Particulier", active: false },
    { type: "Pro", active: false }
  ]

  @Output() onSubmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  choseClient(i: number) {

    this.typeOfClients[i].active = true;

    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfClients.length; j++) {
      if (i != j) {
        this.typeOfClients[j].active = false;
      }
    }

  }

  //submit pour les pros
  public submitPro(i: number) {
    this.onSubmit.emit(i);
  }

}
