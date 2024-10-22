import { Component } from '@angular/core';

@Component({
  selector: 'app-simply-dummy',
  standalone: true,
  imports: [],
  templateUrl: './simply-dummy.component.html',
  styleUrl: './simply-dummy.component.scss'
})
export class SimplyDummyComponent {
  road: string = "/img/road.svg";
  smile: string = "/img/smile.svg";
  activites: string = "/img/Activities.png";
  website: string = "/img/website.png";
  focus: string = "/img/focus.png";
}
