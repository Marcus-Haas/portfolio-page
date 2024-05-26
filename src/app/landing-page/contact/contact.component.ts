import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { GlobalService } from '../../global.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './responsive-contact.component.scss']
})
export class ContactComponent {

  constructor(public language: GlobalService) { }

  checkbox: boolean = false;
  checkboxTouched: boolean = false;


  germanText = {
    placeholder_name: "Dein Name",
    placeholder_email: "Deine Email",
    placeholder_message: "Deine Nachricht",
    head_text: "Sie stehen vor einer Herausforderung?",
    main_text: "Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.",
    warning_name: 'Dein Name ist erforderlich',
    warning_email: 'Deine Email ist erforderlich',
    warning_message: 'Bitte schreibe eine Nachricht',
    warning_policy: 'Bitte akzeptiere die Datenschutzerklärung',
    submit_btn: 'Jetzt senden :)'
  };

  englishText = {
    placeholder_name: "Your name",
    placeholder_email: "Your email",
    placeholder_message: "Your message",
    head_text: "Got a problem to solve?",
    main_text: "Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.",
    warning_name: 'Your name is required',
    warning_email: 'Your email is required',
    warning_message: 'Your message is empty',
    warning_policy: 'Please accept the privacy policy',
    submit_btn: 'Send message :)'
  };


  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  mailTest = false;

  post = {
    endPoint: 'https://marcus-haas.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.checkbox = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  onChecked(event: any) {
    if (event.target.checked) {
      this.checkbox = true;
      this.checkboxTouched = true;
    } else {
      this.checkbox = false;
      this.checkboxTouched = true;

    }
    console.log(this.checkbox);
  }


}
