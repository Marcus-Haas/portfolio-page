import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  english = true;
  german = false;
}
