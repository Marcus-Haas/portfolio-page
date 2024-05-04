import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  SKILLS_ARRAY = ['Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'GIT', 'Rest-Api', 'Firebase', 'Material design'];

}