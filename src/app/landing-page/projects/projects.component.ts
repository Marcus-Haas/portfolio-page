import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './responsive-projects.component.scss']
})
export class ProjectsComponent {

  changeDirection = false;

  projetcs = [
    {
      name: 'Pollo Loco',
      language: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'pollo_loco'
    },
    {
      name: 'Join',
      language: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      image: 'join'
    },
    {
      name: 'Simple CRM',
      language: 'Angular | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      image: 'simple_crm'
    },
  ];


}
