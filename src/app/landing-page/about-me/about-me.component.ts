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
    main_text: `Hi, I'm Marcus, a web developer living in the area of Cologne. I completed my further training at the Developer
                 Academy Munich in 2024 and am now looking forward to using my skills in your company. Please do not hesitate to contact me.`,
    personal_one: `In my first career as a master of event technology, I already had some interfaces with the IT world.
                  When creating a light show for an event, we also talk about programming.`,
    personal_two: `I am a former terrestrial astronaut for NASA. Talk to me, I will be happy to tell you more. 
                  Together we can reach for the stars.`
  };

  about_me_ger = {
    main_text: `Hi, ich bin Marcus, Web Entwickler und lebe in der Nähe von Köln. Ich habe 2024 meine Weiterbildung bei der
                Developer Akademie München abgeschlossen und freue mich nun darauf, meine Fähigkeiten in Ihrem Unternehmen einsetzen zu dürfen.
                Sprechen Sie mich gerne an.`,
    personal_one: `Ich habe in meiner ersten Karriere als Meister für Veranstaltungstechnik bereits einige Schnittstellen mit der IT Welt
                   gehabt. Bei der Erstellung einer Lichtshow für Events spricht man auch vom programmieren.`,
    personal_two: `Ich bin ein ehemaliger terrestrischer Astronaut der NASA. Sprechen Sie mich an, dann erzähle ich Ihnen gerne mehr.
                  Gemeinsam können wir nach den Sternen greifen.`
  };
}
