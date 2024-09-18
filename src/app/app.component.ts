import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { CustomBindingComponent } from "./custom-binding/custom-binding.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FormsModule,HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent, CustomBindingComponent],
})
export class AppComponent {
  rectSize = {
    width: '100',
    height: '100'
  }
}
