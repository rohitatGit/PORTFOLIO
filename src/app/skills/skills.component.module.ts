import {SkillsComponent} from './skills.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [ RouterModule, CommonModule],
    declarations: [ SkillsComponent ],
    exports: [ SkillsComponent ]
  })

  export class SkilleModule {}