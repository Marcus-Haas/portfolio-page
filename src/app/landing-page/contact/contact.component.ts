import { Component } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './responsive-contact.component.scss']
})
export class ContactComponent {

  checkbox: boolean = false;
  checkboxTouched: boolean = false;



  contactData = {
    name: "",
    email: "",
    message: ""
  };

  constructor() { }

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
