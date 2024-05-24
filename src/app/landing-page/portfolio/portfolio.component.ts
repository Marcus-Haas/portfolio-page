import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './responsive-portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(public language: GlobalService) { }

  description = {
    en: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
    ger: 'Hier finden Sie eine Auswahl meiner Projekte - verschaffen Sie sich einen Überblick über meine Fähigkeiten.'
  };

}
