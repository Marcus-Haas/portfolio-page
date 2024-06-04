import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  constructor(public language: GlobalService) {

    window.scroll(0, 0);
  }
}
