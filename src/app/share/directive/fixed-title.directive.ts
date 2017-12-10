import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from '../service/event.service';

@Directive({
  selector: '[appFixedMenu]'
})
export class FixedTitleDirective  implements OnInit {

  @Input() appFixedMenu: string;
  @Input() howFixed: string;

  constructor(
    private _elem: ElementRef,
    private _EventService: EventService
  ) {
  }

  ngOnInit() {
    this._EventService.scrollEvent
      .map(e => this.conditions())
      .subscribe(bool => {
        if (bool) {
          this._elem.nativeElement.classList.add(this.appFixedMenu);
        } else {
          this._elem.nativeElement.classList.remove(this.appFixedMenu);
        }
      });
  }

  private conditions() {
    switch (this.howFixed) {
      case 'scroll':
        return this._elem.nativeElement.parentElement.getBoundingClientRect().top < 0;
      case 'top':
        return window.scrollY > 0;
    }
  }


}
