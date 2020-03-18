import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger ('openClose', [
      transition('void => *', [
        style({ opacity: 1, transform: 'translateX(-100%)' }),
        animate('2000ms ease-in')
     ]),
     transition('* => void', [
        animate('2000ms ease-in',
           style({ opacity: 0.2, transform: 'translateX(100%)' }),
        )
     ])
    ]),
    trigger('sequenceAnimation', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translateX(-100%)' }),
        animate('2000ms ease-in')
     ]),
    ])
  ]
})
export class AppComponent {
  title = 'my-app';
}
