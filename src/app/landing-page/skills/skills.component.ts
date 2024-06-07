import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './responsive-skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

  @ViewChildren('jumping') jumpingSkill!: QueryList<ElementRef>;

  constructor(public language: GlobalService) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('jumping');
          // observer.unobserve(entry.target);  // Stop observing once it is visible
        } else {
          entry.target.classList.remove('jumping');
        }
      });
    });

    this.jumpingSkill.forEach(skill => observer.observe(skill.nativeElement));
  }


  SKILLS_ARRAY = ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'GIT', 'Rest-Api', 'Firebase', 'Material Design'];

  skill_description = {
    en: 'HTML, CSS, and JS are my strengths. I`m currently working intensively with Angular to take my skills to the next level. This website, which was programmed with Angular 17, serves as an example.',
    ger: 'HTML, CSS, und JS sind meine Stärken. Aktuell arbeite ich intensiv mit Angular um meine Skills auf das nächste Level zu heben. Als Beispiel dient u.a. diese Website, die mit Angular 17 programmiert wurde.'
  };

}