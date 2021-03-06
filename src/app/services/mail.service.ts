import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(message: any) {
    let user = {
      to: '<info@belor.be>',
      from: message.from,
      subject: message.subject,
      message: message.message
    };

    this.http
      .post(
        'https://europe-west1-mamoot-6cad9.cloudfunctions.net/api/sendmail',
        user
      )
      .subscribe(
        data => {
          let res: any = data;
          console.log(
            `👏 > 👏 > 👏 > 👏 is successfully register and mail has been sent and the message id is ${res.messageId}`
          );
        },
        err => {
          console.log(err);
        },
        () => { }
      );
  }
}
