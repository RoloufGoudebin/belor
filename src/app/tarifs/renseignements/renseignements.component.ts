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

  typeOfControls = [
    {
      type: "Domestique",
      active: false,
      domestique: 
        [
          {
            control: "Électrique",
            active: false,
            typeBien: [
              {
                bien: "Appartement",
                taille: [150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
                price: [130, 155, 180, 205, 230, 255, 280, 305, 330, 355],
                active: false
              },
              {
                type: "Maison",
                taille: [250, 300, 350, 400, 450, 500, 550, 600],
                price: [150, 175, 200, 225, 250, 275, 300, 325],
                active: false
              },
              {
                type: "Commerce/bureaux",
                taille: [150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
                price: [160, 185, 210, 235, 260, 285, 310, 335, 360, 385],
                active: false
              },
            ]
          },
          {
            control: "Panneaux photovoltaïque",
            active: false,
            choix:
              [
                "Réception/périodique pour un onduleur ˂ 10 kVA",
                "Revisite pour un même client ",
                "Contrôle avec l’installation électrique du bâtiment / onduleur supplémentaire "
              ],
            price: [130, 100, 70]
          },
          {
            control: "Gaz",
            active: false,
            choix:
              [
                "Ouverture compteur avec attestation et rapport GRD obligatoires",
                "Réception / périodique compteur ouvert",
                "Par compteur supplémentaire / revisite pour un même client",
                "Prévisite conseil + contrôle d’étanchéité des canalisations gaz",
                "Calcul dimensionnement des canalisations gaz"
              ],
            price: [170, 140, 120, 100, 100]
          },
          {
            control: "Bornes de recharge",
            active: false,
            choix:
              [
                "Réception / périodique",
                "Revisite pour un même client ",
                "Contrôle avec l’installation électrique du bâtiment / borne supplémentaire"
              ],
            price: [130, 100, 65]
          },
          {
            control: "PEB",
            active: false,
            typeBien:
              [
                {
                  bien: "Appartement",
                  chambres: [3, 4],
                  price: [205, 140],
                  active: false
                },
                {
                  bien: "Maison",
                  price: 290,
                  active: false
                }
              ]
          }
        ]
    },
    { type: "Non-domestique", active: false }
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

  choseDomestique(i: number) {

    this.typeOfControls[i].active = true;

    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls.length; j++) {
      if (i != j) {
        this.typeOfControls[j].active = false;
      }
    }

  }

  choseControl(i: number) {

    this.typeOfControls[0].domestique[i].active = true;
    console.log(this.typeOfControls[0].domestique[i].active);
    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls[0].domestique.length; j++) {
      if (i != j) {
        this.typeOfControls[0].domestique[j].active = false;
      }
    }

  }

  chosePEB(i: number) {

    this.typeOfControls[0].domestique[4].typeBien[i].active = true;
    console.log(this.typeOfControls[0].domestique[4].typeBien[i].active);
    // on met tous les autres types à false
    for (let j = 0; j < this.typeOfControls[0].domestique[4].typeBien.length; j++) {
      if (i != j) {
        this.typeOfControls[0].domestique[4].typeBien[j].active = false;
      }
    }

  }



  //submit pour les pros
  public submitPro(i: number) {
    this.onSubmit.emit(i);
  }

}
