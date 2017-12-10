import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// directive
import {
  FixedTitleDirective
} from './directive';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { EventService } from './service/event.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FixedTitleDirective
  ],
  exports: [
    FixedTitleDirective
  ],
  providers: []
})

export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ShareModule,
      providers: [EventService]
    };
  }
}
