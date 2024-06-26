import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './responsive-footer.component.scss']
})
export class FooterComponent {

  constructor(public language: GlobalService) {}
  
}
