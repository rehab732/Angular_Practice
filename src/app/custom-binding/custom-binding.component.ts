import { Component, EventEmitter, Input, model, Output, signal } from '@angular/core';

@Component({
  selector: 'app-custom-binding',
  standalone: true,
  imports: [],
  templateUrl: './custom-binding.component.html',
  styleUrl: './custom-binding.component.scss'
})
export class CustomBindingComponent {
  // @Input({required:true}) size!:{width:string,height:string};
  size=model.required<{width:string,height:string}>();
  @Output() changSize=new EventEmitter<{width:string,height:string}>();
  onReset(){
    // this.changSize.emit({width:'100',height:'200'});
    this.size.set({width:'100',height:'200'});
  }
}
