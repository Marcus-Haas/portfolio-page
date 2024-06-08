import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './responsive-projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChildren('project') projects!: QueryList<ElementRef>;

  constructor(public language: GlobalService){}

  changeDirection = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
          // observer.unobserve(entry.target);  // Stop observing once it is visible
        } else {
          entry.target.classList.remove('fadeIn');
        }
      });
    });

    this.projects.forEach(project => observer.observe(project.nativeElement));
  }

  projetcs = [
    {
      name: 'Pollo Loco',
      language: 'JavaScript | HTML | CSS',
      en_description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      ger_description: 'Jump-, run- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      image: 'pollo_loco',
      link: 'https://el-pollo-loco.marcus-haas.com/',
      git: 'https://github.com/Marcus-Haas/el-pollo-loco'
    },
    {
      name: 'Join',
      language: 'JavaScript | HTML | CSS',
      en_description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      ger_description: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      image: 'join',
      link: 'https://join.marcus-haas.com/',
      git: 'https://github.com/Marcus-Haas/new-join'
    },
    // {
    //   name: 'Simple CRM',
    //   language: 'Angular | Firebase',
    //   en_description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
    //   ger_description: 'Ein einfaches Customer-Relationship-Management-System, das mit CRUD-Funktionalität arbeitet.',
    //   image: 'simple_crm',
    //   link: '',
    //   git: ''
    // },
  ];

}
