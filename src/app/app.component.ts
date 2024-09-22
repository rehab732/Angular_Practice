import { Component, computed } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth.directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent,AuthDirective],
  hostDirectives:[LogDirective]
})
export class AppComponent {

  constructor(private auth:AuthService){}
  isAdmin=computed(()=>this.auth.activePermission()==='admin');
}
