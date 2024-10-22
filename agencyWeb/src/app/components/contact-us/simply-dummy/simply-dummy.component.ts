import { Component } from '@angular/core';

@Component({
  selector: 'app-simply-dummy',
  standalone: true,
  imports: [],
  templateUrl: './simply-dummy.component.html',
  styleUrl: './simply-dummy.component.scss'
})
export class SimplyDummyComponent {
  blue: string = "/img/blue.svg";
  turquoise: string = "/img/turquoise.svg";
  handle: string = "/img/hande.png";
  presentation: string = "/img/presentation.png";
  group: string = "/imt/gropus.png";
  duo: string = "/img/duo.png";
}
