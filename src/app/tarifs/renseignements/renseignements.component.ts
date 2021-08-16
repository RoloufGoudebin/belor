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
  @Input() currentControl;

  nbrChambres: number;
  selectedOption: string;

  @Output() onSubmit = new EventEmitter<any>();
  @Output() refreshTypeOfControls = new EventEmitter<any>();
  @Output() refreshCurrentControlName = new EventEmitter<any>();

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
    console.log(this.typeOfControls[i]);
  }

  ChoseElec(i: number) {
    this.currentControl.name = this.typeOfControls[0].particulier[0].typeBien[i].choice;
    // on met tous les autres types à false
    console.log("prout");
    for (let j = 0; j < this.typeOfControls[0].particulier[0].typeBien.length; j++) {
      if (i != j) {
        this.typeOfControls[0].particulier[0].typeBien[j].active = false;
      }
    }
    this.currentControl.name = this.selectedOption;
    console.log(this.currentControl.name)
  }

  choseControl(i: number) {
    this.typeOfControls[0].particulier[i].active = true;
    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls[0].particulier.length; j++) {
      if (i != j) {
        this.typeOfControls[0].particulier[j].active = false;
      }
    }
    this.currentControl.name = this.typeOfControls[0].particulier[i].control;
    console.log(this.typeOfControls.name);
  }

  chosePEB(i: number) {

    this.typeOfControls[0].particulier[4].typeBien[i].active = true;
    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls[0].particulier[4].typeBien.length; j++) {
      if (i != j) {
        this.typeOfControls[0].particulier[4].typeBien[j].active = false;
      }
    }
    this.currentControl.name = this.typeOfControls[0].particulier[4].typeBien[i].bien.toLowerCase();
    console.log(this.currentControl.name)
  }



  //submit pour les pros
  public submitPro(i: number) {
    this.onSubmit.emit(i);
  }

  submit(i: number) {
    this.onSubmit.emit(i);



    // Controle électrique
    if (this.typeOfControls[0].particulier[0].active) {
      this.currentControl.name = this.selectedOption;
      this.currentControl.surface = this.currentControl.surface;
    }

    // Controle panneaux photovoltaïques
    else if (this.typeOfControls[0].particulier[1].active){
      this.currentControl.name = "contrôle panneaux photovoltaïques : " + this.selectedOption;
    }

    // Controle gaz
    else if(this.typeOfControls[0].particulier[2].active){
      this.currentControl.name = "Contrôle gaz : " + this.selectedOption;

    }

    // Controle bornes de recharge
    else if(this.typeOfControls[0].particulier[3].active){
      this.currentControl.name = "Contrôle bornes de recharge : " + this.selectedOption;
    }

    // PEB
    else if (this.typeOfControls[0].particulier[4].active) {
      this.currentControl.nbrChambres = this.nbrChambres;
      this.currentControl.name = "Contrôle PEB " + this.currentControl.name + " de " + this.currentControl.nbrChambres + " chambre(s)";
    }
  }


}
