import { Component } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HtmlParser } from '@angular/compiler';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
    warning_name:'Dein Name ist erforderlich',
    warning_email:'Deine Email ist erforderlich',
    warning_message:'Bitte schreibe eine Nachricht',
    warning_policy: 'Bitte akzeptiere die Datenschutzerklärung',
    submit_btn: 'Jetzt senden :)'
  };

  englishText = {
    placeholder_name: "Your name",
    placeholder_email: "Your email",
    placeholder_message: "Your message",
    head_text: "Got a problem to solve?",
    main_text: "Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.",
    warning_name:'Your name is required',
    warning_email:'Your email is required',
    warning_message:'Your message is empty',
    warning_policy: 'Please accept the privacy policy',
    submit_btn: 'Send message :)'
  };


  contactData = {
    name: "",
    email: "",
    message: ""
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      console.log(this.contactData);

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
