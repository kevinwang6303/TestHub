import {
  Component,
  OnInit,
  AnimationEntryMetadata,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

export function popup(
  inTime: number = 300,
  outTime: number = 150
): AnimationEntryMetadata {
  return trigger('popup', [
    transition('void => *', [
      style({
        opacity: 0,
        height: 0
      }),
      animate(inTime)
    ]),
    transition('* => void', [
      animate(
        outTime,
        style({
          opacity: 0,
          height: 0
        })
      )
    ])
  ]);
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [popup()]
})
export class HeaderComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit() {}
}
