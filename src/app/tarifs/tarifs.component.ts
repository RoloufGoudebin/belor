import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {

  steps = [
    { type: "Renseignements", valid: false },
    { type: "Coordonnées", valid: false },
    { type: "Vos disponibilités", valid: false }
  ]

  currentStep = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.steps);
  }

  nextStep(i: number) {
    this.currentStep = i + 1;
    for (let j = 0; j < this.currentStep; j++) {
      this.steps[i].valid = true;
    }
  }

  changeCurrentStep(i: number) {
    this.currentStep = i;
    console.log(this.currentStep);
  }

  validatedBefore(i: number) {
    console.log(i);
    if (i > 0) {
      console.log(i);
      if (this.steps[i-1].valid) {
        console.log("blablabla")
        return true;
      }
    }
  }

}
