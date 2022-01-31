import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {

  steps = [
    { type: "Renseignements", valid: false },
    { type: "Coordonnées", valid: false },
    { type: "Validation", valid: false }
  ]

  currentControl = {
    name: String,
    nbrChambres: Number,
    surface: Number,
    price: Number
  }


  currentStep = 0;

  typeOfControls = [
    {
      type: "particulier",
      active: false,
      particulier: [
        {
          control: "Électrique",
          active: false,
          choix: [
            "Réception – périodique - vente installation électrique avec ou sans schémas",
            "Chantier (compteur provisoire pour un an) / Revisite par un même client",
            "Compteur supplémentaire dans le même immeuble / Revisite",
            "Prévisite conseil + mesures d’isolement + mesure de terre"
          ],
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
          ],
          price: [0, 110, 100, 100]
        },
        {
          control: "Panneaux photovoltaïque",
          active: false,
          choix:
            [
              "Réception/périodique pour un onduleur ˂ 10 kVA",
              "Revisite pour un même client",
              "Contrôle avec l’installation électrique du bâtiment / onduleur supplémentaire"
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
              "Revisite pour un même client",
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
                chambres: [3],
                price: [205],
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
    { type: "professionnel", active: false }
  ]



  constructor() { }

  ngOnInit(): void {
  }

  nextStep(i: number) {
    this.currentStep = i + 1;
    for (let j = 0; j < this.currentStep; j++) {
      this.steps[i].valid = true;
    }
  }

  changeCurrentStep(i: number) {
    if (this.currentStep >= i){
      this.currentStep = i;
    }
  }

  validatedBefore(i: number) {
    if (i > 0) {
      if (this.steps[i - 1].valid) {
        return true;
      }
    }
  }

}
