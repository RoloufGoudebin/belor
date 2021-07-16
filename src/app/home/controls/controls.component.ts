import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  controlsFeatures = [
    {
      icon: "home",
      title: "Certificat PEB",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },
    {
      icon: "plug",
      title: "Installation électrique",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },
    {
      icon: "solar-panel",
      title: "Panneaux photovoltaïques",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },
    {
      icon: "exclamation",
      title: "Installation gaz",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },
    {
      icon: "fire",
      title: "Paratonnerre",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },
    {
      icon: "thermometer-three-quarters",
      title: "Thermographie",
      body: "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas excommuni. At nos hinc posthac, sitientis piros Afros."
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
