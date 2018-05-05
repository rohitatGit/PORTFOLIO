import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation} from '@angular/animations';
import { fadeOut,bounceOutUp} from 'ng-animate';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [
    trigger('changeState', [transition('* => animated', useAnimation(bounceOutUp),{ params: { timing: 1, delay: 0 } })]),
  ]

})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  animations : any;
  changestate : any = 'normal';
  
  animateSquare(state) {
    this.changestate = state;
    this.animations = state;
  }
}
