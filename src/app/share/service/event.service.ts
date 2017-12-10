import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService {

  public scrollEvent = Observable.fromEvent(document, 'scroll');
  public mouseMove = Observable.fromEvent(document, 'mousemove');
  public touchMove = Observable.fromEvent(document, 'touchmove');

  constructor() { }

}
