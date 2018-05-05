import {UserProfileComponent} from './user-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SkilleModule } from './../skills/skills.component.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
    imports: [ RouterModule, CommonModule,TooltipModule,SkilleModule,ScrollToModule.forRoot()],
    declarations: [ UserProfileComponent ],
    exports: [ UserProfileComponent ]
  })

  export class UserProfileModule {}