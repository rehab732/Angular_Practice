import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth/auth.model';
import { AuthService } from './auth/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType=input.required<Permission>({alias:'appAuth'});
  private auth=inject(AuthService);
  private tempRef=inject(TemplateRef);
  private viewContainer=inject(ViewContainerRef);

  constructor() {
    //? run every time the signal change or user permission changed
    effect(()=>{
      if(this.auth.activePermission()===this.userType()){
        this.viewContainer.createEmbeddedView(this.tempRef);
      }else{
        this.viewContainer.clear();

      }
    })
   }

}
