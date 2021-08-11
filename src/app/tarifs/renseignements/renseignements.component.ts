import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

  @Input() typeOfControls;

  ControlActive;

  @Output() onSubmit = new EventEmitter<any>();
  @Output() refreshTypeOfControls = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  choseClient(i: number) {
    this.typeOfControls[i].active = true;
    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls.length; j++) {
      if (i != j) {
        this.typeOfControls[j].active = false;
      }
    }
  }

  choseDomestique(i: number) {
    this.typeOfControls[0].particulier[i].active = true;
    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls[0].particulier.length; j++) {
      if (i != j) {
        this.typeOfControls[0].particulier[j].active = false;
      }
    }
  }

  choseControl(i: number) {

    this.typeOfControls[0].particulier[0].domestique[i].active = true;
    console.log(this.typeOfControls[0].particulier[0].domestique[i]);
    this.ControlActive = this.typeOfControls[0].particulier[0].domestique[i].choix;
    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls[0].particulier[0].domestique.length; j++) {
      if (i != j) {
        this.typeOfControls[0].particulier[0].domestique[j].active = false;
      }
    }
    this.refreshTypeOfControls.emit(this.typeOfControls);
  }

  chosePEB(i: number) {

    this.typeOfControls[0].particulier[0].domestique[4].typeBien[i].active = true;
    console.log(this.typeOfControls[0].particulier[0].domestique[4].typeBien[i].active);
    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls[0].particulier[0].domestique[4].typeBien.length; j++) {
      if (i != j) {
        this.typeOfControls[0].particulier[0].domestique[4].typeBien[j].active = false;
      }
    }
    this.refreshTypeOfControls.emit(this.typeOfControls);
  }


  getControl(){
    return this.ControlActive;
  }


  //submit pour les pros
  public submitPro(i: number) {
    this.onSubmit.emit(i);
  }

}
