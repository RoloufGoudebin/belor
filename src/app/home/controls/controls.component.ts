import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css', './controls.component.scss']
})
export class ControlsComponent implements OnInit {

  isCollapse = false;

  controlsFeatures = [
    {
      img : "assets/img/house.png",
      title: "Certificat PEB",
      price: "DÈS 205€"
    },
    {
      img : "assets/img/plug.png",
      title: "Installation électrique",
      price: "",
    },
    {
      img : "assets/img/solar.png",
      title: "Panneaux photovoltaïques",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },
    {
      img : "assets/img/gaz.png",
      title: "Installation gaz",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },
    {
      img : "assets/img/cloud.png",
      title: "Paratonnerre",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },
    {
      img : "assets/img/thermo.png",
      title: "Thermographie",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
