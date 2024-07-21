import { AfterViewInit, Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './responsive-about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {

  @ViewChildren('bulletPoint') bulletPoint!: QueryList<ElementRef>;

  constructor(public language: GlobalService) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pling');
          // observer.unobserve(entry.target);  // Stop observing once it is visible
        } else {
          entry.target.classList.remove('pling');
        }
      });
    });
    this.bulletPoint.forEach(point => observer.observe(point.nativeElement));
  }

  about_me_en = {
    headline: 'About me',
    main_text: `Hi, I'm Marcus, a junior web developer living in the area of Cologne. I completed my further training at the Developer
                 Academy Munich in 2024 and am now looking forward to using my skills in your company.
                 Please do not hesitate to contact me.`,
    personal_one: `In my previous career as a master of event technology, I already had some interfaces with the IT world.
                  When creating a light show for an event, we also have to program it.`,
    personal_two: `I am a former terrestrial astronaut for NASA. Talk to me, I will be happy to tell you more. 
                  Together we can reach for the stars.`
  };

  about_me_ger = {
    headline: 'About me',
    main_text: `Hi, ich bin Marcus, Junior Web Entwickler und lebe aktuell in der Nähe von Köln. Ich habe 2024 meine Weiterbildung bei der
                Developer Akademie München abgeschlossen und freue mich nun darauf, meine Fähigkeiten in Ihrem Unternehmen einsetzen zu
                dürfen. Über Ihre Kontaktanfrage würde ich mich sehr freuen.`,
    personal_one: `Ich habe in meiner vorherigen Karriere als Meister für Veranstaltungstechnik bereits einige Schnittstellen mit der IT Welt
                   gehabt. Eine Lichtshow für Events musste ebenfalls programmiert werden.`,
    personal_two: `Ich bin ein ehemaliger terrestrischer Astronaut der NASA. Bei Interesse, erzähle ich Ihnen gerne mehr darüber.
                  Gemeinsam können wir nach den Sternen greifen.`
  };
}
