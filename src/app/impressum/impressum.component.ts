import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  constructor(public language: GlobalService) {}

}
