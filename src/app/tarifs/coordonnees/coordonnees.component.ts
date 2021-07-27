import { ConnectionService } from '../../connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-coordonnees',
  templateUrl: './coordonnees.component.html',
  styleUrls: ['./coordonnees.component.scss']
})
export class CoordonneesComponent implements OnInit {


  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(fb: FormBuilder, private connectionService: ConnectionService) {

    this.contactForm = fb.group({
      'contactFormFirstName': ['', Validators.required],
      'contactFormLastName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormPhone': ['', Validators.compose([Validators.required, Validators.pattern("^((\\+32-?)|0)?[0-9]{8,14}$")])],
      'contactFormStreet': ['', Validators.required],
      'contactFormCity': ['', Validators.required],
      'contactFormZip': ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]{4}$")])],

    });
  }

  ngOnInit() {
  }

  get lastName() {
    return this.contactForm.get('contactFormLastName');
  }
  get firstName() {
    return this.contactForm.get('contactFormFirstName');
  }
  get email() {
    return this.contactForm.get('contactFormEmail');
  }
  get phone(){
    return this.contactForm.get('contactFormPhone');
  }
  get street(){
    return this.contactForm.get('contactFormStreet');
  }
  get city(){
    return this.contactForm.get('contactFormCity');
  }
  get zip(){
    return this.contactForm.get('contactFormZip');
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}

