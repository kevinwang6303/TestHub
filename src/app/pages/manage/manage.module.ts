import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { HeaderComponent } from './header/header.component';
import { ShareModule } from '../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule,
    ShareModule
  ],
  declarations: [ManageComponent, HeaderComponent]
})
export class ManageModule { }
