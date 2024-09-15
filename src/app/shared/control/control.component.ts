import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ControlComponent {
@Input() label?:string;
}
