import { AfterViewInit, Injectable, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  english = true;
  german = false;
}
