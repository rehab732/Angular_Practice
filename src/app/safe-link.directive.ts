import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'toConfirmLeave($event)'
  }
})
export class SafeLinkDirective {
  // @Input({required:true}) paramName?:string;
  @Input({ alias: 'appSafeLink' }) paramName?: string;

  //! try to inject element 
  private element = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  constructor() {
    console.log("test directive")
  }

  toConfirmLeave(event: MouseEvent) {
    const wantToLeave = window.confirm("Are You Sure");
    if (wantToLeave) {
      // const address=(event.target as HTMLAnchorElement).href;
      // (event.target as HTMLAnchorElement).href=address+"?from=="+this.paramName
      const address = this.element.nativeElement.href;
      this.element.nativeElement.href = address + "?from==" + this.paramName

      return;
    }
    event.preventDefault();
  }

}
