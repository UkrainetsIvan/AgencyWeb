import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-simply-dummy',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './simply-dummy.component.html',
  styleUrl: './simply-dummy.component.scss'
})
export class SimplyDummyComponent {
  blue: string = "/img/blue.svg";
  turquoise: string = "/img/turquoise.svg";
  handle: string = "/img/hande.png";
  presentation: string = "/img/presentation.png";
  group: string = "/img/gropus.png";
  duo: string = "/img/duo.png";
  dots: string = "/img/dots.png";
}
