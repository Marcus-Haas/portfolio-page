import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './responsive-header.component.scss']
})
export class HeaderComponent {

  constructor(public language: GlobalService) { }

  aboutMeBorder = false;
  skillsBorder = false;
  portfolioBorder = false;
  englishBorder = true;
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
      this.language.german = false;
      this.language.english = true;
    } else if (language == 'de') {
      this.germanBorder = true;
      this.language.german = true;
      this.language.english = false;
    }
  }

  hideTranslationBorder() {
    this.englishBorder = false;
    this.germanBorder = false;
  }

  showAndHideMenu() {
    if (this.mobile_menu) {
      this.closeMenu();
    } else {
      this.showMenu()
    }
  }

  showMenu() {
    this.mobile_menu = true;
  }

  closeMenu() {
    this.mobile_menu = false;
  }
}
