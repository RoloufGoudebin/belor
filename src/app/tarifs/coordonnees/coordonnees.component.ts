import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';


@Component({
  selector: 'app-coordonnees',
  templateUrl: './coordonnees.component.html',
  styleUrls: ['./coordonnees.component.scss']
})
export class CoordonneesComponent implements OnInit {


  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @Input() currentControl;
  @Input()
  @Output() onSubmit = new EventEmitter<any>();

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(fb: FormBuilder, private mailService: MailService) {

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
    console.log(this.currentControl);
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
  get phone() {
    return this.contactForm.get('contactFormPhone');
  }
  get street() {
    return this.contactForm.get('contactFormStreet');
  }
  get city() {
    return this.contactForm.get('contactFormCity');
  }
  get zip() {
    return this.contactForm.get('contactFormZip');
  }

  submit(i: number) {
    this.onSubmit.emit(i);
    let user = {
      message: "<h1>" + this.currentControl.name + "</h1>" +
        "<p> Nom : " + this.contactForm.get('contactFormLastName').value + "</p>" +
        "<p> Prénom : " + this.contactForm.get('contactFormFirstName').value + "</p>" +
        "<p> Email : " + this.contactForm.get('contactFormEmail').value + "</p>" +
        "<p> Numéro téléphone : " + this.contactForm.get('contactFormPhone').value + "</p>" +
        "<p> Rue : " + this.contactForm.get('contactFormStreet').value + "</p>" +
        "<p> Ville : " + this.contactForm.get('contactFormZip').value + " " + this.contactForm.get('contactFormCity').value + "</p>"
    }
    this.mailService.sendMail(user);
  }

}

