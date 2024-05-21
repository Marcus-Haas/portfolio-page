import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './responsive-header.component.scss']
})
export class HeaderComponent {





  aboutMeBorder = false;
  skillsBorder = false;
  portfolioBorder = false;
  englishBorder = false;
  germanBorder = false;


  mobile_menu = false;



  navigation(topic: string) {
    this.hideAllBorders();
    if (topic == 'about-me') {
      this.aboutMeBorder = true;
    } else if (topic == 'skills') {
      this.skillsBorder = true;
    } else if (topic == 'portfolio') {
      this.portfolioBorder = true
    }
  }

  hideAllBorders() {
    this.skillsBorder = false;
    this.portfolioBorder = false;
    this.aboutMeBorder = false;
  }

  translation(language: string) {
    this.hideTranslationBorder();
    if (language == 'en') {
      this.englishBorder = true;
    } else if (language == 'de') {
      this.germanBorder = true;
    }
  }

  hideTranslationBorder() {
    this.englishBorder = false;
    this.germanBorder = false;
  }

  showMenu() {
    this.mobile_menu = true;
  }

  closeMenu() {
    this.mobile_menu = false;
  }

}
