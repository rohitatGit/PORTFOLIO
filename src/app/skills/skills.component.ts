import { Component, OnInit,Input } from '@angular/core';
import { trigger, transition, useAnimation} from '@angular/animations';
import { bounce,fadeIn,zoomIn ,slideInLeft} from 'ng-animate';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('changeState', [transition('* => animated', useAnimation(zoomIn),{ params: { timing: 2, delay: 0 } })]),
    trigger('changetextState', [transition('* => animated', useAnimation(slideInLeft),{params: { timing: 1, delay: 0 } })]),
    trigger('changeProgressState', [transition('* => animated', useAnimation(fadeIn),{ params: { timing: 1, delay: 0 } })]),
  ],
})
export class SkillsComponent implements OnInit {

  currentState : any = 'normal';

  @Input() animateInput;
  
  constructor() { }

  ngOnInit() {



  }



}
