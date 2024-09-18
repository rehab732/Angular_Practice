import { Component, effect, OnInit, signal } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unKnown'>('online');
  constructor(){
    effect(()=>{
      console.log(this.currentStatus())
    });
  }
  ngOnInit(): void {
    const interval = setInterval(() => {
      const ren = Math.random();
      if (ren < 0.5) {
        this.currentStatus.set('online');
      }else if(ren<0.9){
        this.currentStatus.set('offline');
      }else{
        this.currentStatus.set('unKnown');
      }
    },5000);
  }
}
