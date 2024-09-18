import { AfterContentInit, Component, ContentChild, ElementRef, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ControlComponent implements OnInit,AfterContentInit{
  
  
  @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  ngOnInit(): void {
    console.log("init control ")
    console.log(this.control);
  }
  ngAfterContentInit(): void {
    console.log("After control ")
    console.log(this.control);
  }
  @Input() label?: string;
  @HostListener('click') onClick() {
    console.log("clicked");
    console.log(this.control);
  }
}
