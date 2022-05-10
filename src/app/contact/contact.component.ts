import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
    society: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private mail: MailService) { }

  ngOnInit(): void {
  }

  submit() {
    let user = {
      subject : "Contact site",
      from : this.contactForm.value.mail,
      message: "<p>Nom : " + this.contactForm.value.name + "</p> " +
      "<p>Mail : " + this.contactForm.value.mail + "</p> " +
      "<p>Téléphone : " + this.contactForm.value.phone + "</p> " +
      "<p>Société : " + this.contactForm.value.society + "</p> " +
      "<p>Message : " + this.contactForm.value.message + "</p> "
    }
    this.contactForm.reset();
    this.mail.sendMail(user)
  }
}
