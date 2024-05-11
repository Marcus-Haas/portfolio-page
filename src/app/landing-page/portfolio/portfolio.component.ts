import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './responsive-portfolio.component.scss']
})
export class PortfolioComponent {

}
