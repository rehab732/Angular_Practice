import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent {
  @Input({required:true}) imagePath?: string;
  @Input({required:true}) imageAlt?: string;
  @Input({required:true}) title?: string;
  //! using signal
  // titletest=input.required<string>();
}
