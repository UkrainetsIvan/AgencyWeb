import { Component } from '@angular/core';
import {ButtonWithBorderComponent} from '../../component/button-with-border/button-with-border.component';

@Component({
  selector: 'app-simply-dummy',
  standalone: true,
  imports: [
    ButtonWithBorderComponent
  ],
  templateUrl: './simply-dummy.component.html',
  styleUrl: './simply-dummy.component.scss'
})
export class SimplyDummyComponent {
  product: string = "/img/ProductDevelopment.png";
}
