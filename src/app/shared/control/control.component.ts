import { Component, ContentChild, ElementRef, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ControlComponent {
  @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  @Input() label?: string;
  @HostListener('click') onClick() {
    console.log("clicked");
    console.log(this.control);
  }
}
