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
  surface: number;
  selectedOption;

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
    for (let j = 0; j < this.typeOfControls[0].particulier[0].typeBien.length; j++) {
      if (i != j) {
        this.typeOfControls[0].particulier[0].typeBien[j].active = false;
      }
    }
    this.currentControl.name = this.selectedOption;
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
  }



  //submit pour les pros
  public submitPro(i: number) {
    this.onSubmit.emit(i);
  }

  submit(i: number) {
    this.onSubmit.emit(i);

    // Controle électrique
    if (this.typeOfControls[0].particulier[0].active) {
      if (this.currentControl.name == "maison" || this.currentControl.name == "appartement") {
        this.currentControl.name = this.selectedOption + " : " + this.currentControl.name;
        this.currentControl.surface = this.surface;
      }
      else {
        this.currentControl.name = this.selectedOption
      }
      if (this.currentControl.name.includes("Réception – périodique - vente installation électrique avec ou sans schémas")) {
        if (this.currentControl.name.includes("appartement")) {
          if (this.surface > 150) {
            let x = Math.floor((this.surface - 150) / 50)
            this.currentControl.price = x * 25 + 155;
          }
        }
        else if (this.currentControl.name.includes("maison")) {
          if (this.surface > 250) {
            let x = Math.floor((this.surface - 250) / 50)
            this.currentControl.price = x * 25 + 175;
          }
        }
      }
      else if (this.selectedOption == 'Chantier (compteur provisoire pour un an) / Revisite par un même client') {
        this.currentControl.price = 110;
      }
      else if (this.selectedOption == 'Compteur supplémentaire dans le même immeuble / Revisite') {
        this.currentControl.price = 100;
      }
      else if (this.selectedOption == 'Calcul dimensionnement des canalisations gaz') {
        this.currentControl.price = 100;
      }
    }

    // Controle panneaux photovoltaïques
    else if (this.typeOfControls[0].particulier[1].active) {
      this.currentControl.name = "Contrôle panneaux photovoltaïques : " + this.selectedOption;
      if (this.selectedOption == 'Réception/périodique pour un onduleur ˂ 10 kVA') {
        this.currentControl.price = 130;
      }
      else if (this.selectedOption == 'Revisite pour un même client') {
        this.currentControl.price = 100;
      }
      else if (this.selectedOption == 'Contrôle avec l’installation électrique du bâtiment / onduleur supplémentaire') {
        this.currentControl.price = 70;
      }
    }

    // Controle gaz
    else if (this.typeOfControls[0].particulier[2].active) {
      this.currentControl.name = "Contrôle gaz : " + this.selectedOption;
      if (this.selectedOption == 'Ouverture compteur avec attestation et rapport GRD obligatoires') {
        this.currentControl.price = 170;
      }
      else if (this.selectedOption == 'Réception / périodique compteur ouvert') {
        this.currentControl.price = 140;
      }
      else if (this.selectedOption == 'Revisite pour un même client') {
        this.currentControl.price = 120;
      }
      else if (this.selectedOption == 'Prévisite conseil + contrôle d’étanchéité des canalisations gaz') {
        this.currentControl.price = 100;
      }
      else if (this.selectedOption == 'Calcul dimensionnement des canalisations gaz') {
        this.currentControl.price = 100;
      }
    }

    // Controle bornes de recharge
    else if (this.typeOfControls[0].particulier[3].active) {
      this.currentControl.name = "Contrôle bornes de recharge : " + this.selectedOption;
      if (this.selectedOption == 'Réception / périodique') {
        this.currentControl.price = 130;
      }
      else if (this.selectedOption == 'Revisite pour un même client') {
        this.currentControl.price = 100;
      }
      else if (this.selectedOption == 'Contrôle avec l’installation électrique du bâtiment / borne supplémentaire') {
        this.currentControl.price = 65;
      }
    }

    // PEB
    else if (this.typeOfControls[0].particulier[4].active) {
      this.currentControl.nbrChambres = this.nbrChambres;
      this.currentControl.name = "Contrôle PEB " + this.currentControl.name + " de " + this.currentControl.nbrChambres + " chambre(s)";
      if (this.currentControl.name.includes("appartement")) {
        this.currentControl.price = 205;
      }
      else if (this.currentControl.name.includes("maison")) {
        this.currentControl.price = 290;
      }
    }
  }
}
