import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './responsive-skills.component.scss']
})
export class SkillsComponent {

  constructor(public language: GlobalService) { }

  SKILLS_ARRAY = ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'GIT', 'Rest-Api', 'Firebase', 'Material design'];

  skill_description = {
    en: 'HTML, CSS, and JS are my strengths. I`m currently working intensively with Angular to take my skills to the next level. This website, which was programmed with Angular 17, serves as an example.',
    ger: 'HTML, CSS, und JS sind meine Stärken. Aktuell arbeite ich intensiv mit Angular um meine Skills auf das nächste Level zu heben. Als Beispiel dient u.a. diese Website, die mit Angular 17 programmiert wurde.'
  };

}