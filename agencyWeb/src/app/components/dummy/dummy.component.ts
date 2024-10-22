import { Component } from '@angular/core';
import {ButtonBlueComponent} from '../button-blue/button-blue.component';
import {ButtonBlueSmallComponent} from '../button-blue/button-blue-small/button-blue-small.component';
import {ButtonWhiteSmallComponent} from '../button-white/button-white-small/button-white-small.component';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [
    ButtonBlueComponent,
    ButtonBlueSmallComponent,
    ButtonWhiteSmallComponent
  ],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss'
})
export class DummyComponent {
    title: string = "Lorem Ipsum is simply dummy text.";
    description: string = "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ";
    bell: string = "/img/Bell.png";
}
