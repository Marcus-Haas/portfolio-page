import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './responsive-about-me.component.scss']
})
export class AboutMeComponent {

  constructor(public language: GlobalService) { }

  about_me_en = {
    main_text: `Hi, I'm Marcus, web developer and live near Cologne. I completed my further training at the Developer Academy Munich in 2024 and am now looking forward to using my skills in your company.
                Please do not hesitate to contact me.`,
    personal_one: 'nature Repellendus aliquam tempora perferendis voluptas, placeat at sed ex itaque dolor nisi inventore unde recusandae',
    personal_two: 'NASA Repellendus aliquam tempora perferendis voluptas, placeat at sed ex itaque dolor nisi inventore unde recusandae'
  };

  about_me_ger = {
    main_text: `Hi, ich bin Marcus, Web Entwickler und lebe in der Nähe von Köln. Ich habe 2024 meine Weiterbildung bei der
                Developer Akademie München abgeschlossen und freue mich nun darauf, meine Fähigkeiten in Ihrem Unternehmen einsetzen zu dürfen.
                Sprechen Sie mich gerne an.`,
    personal_one: 'Natur Repellendus aliquam tempora perferendis voluptas, placeat at sed ex itaque dolor nisi inventore unde recusandae',
    personal_two: 'Betchen-Astronaut Repellendus aliquam tempora perferendis voluptas, placeat at sed ex itaque dolor nisi inventore unde recusandae'
  };
}
