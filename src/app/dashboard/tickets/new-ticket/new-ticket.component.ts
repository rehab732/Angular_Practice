import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule ,NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss'
})
export class NewTicketComponent implements OnInit,AfterViewInit{

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  constructor(){
    afterRender(()=>{
      console.log("afterRender");
    });
    afterNextRender(()=>{
      console.log("afterNextRender");
    })
  }

  //!using signal
  // private form=viewChild.required<ElementRef<HTMLFormElement>>('form');
  ngOnInit(): void {
    console.log("init")
    console.log(this.form);
  }
  ngAfterViewInit(): void {
    console.log("after view init")
    console.log(this.form);
  }
  onSubmit(title: string, ticket: string,form:NgForm) {
    // console.log(title);
    // console.log(title.value)
    console.log(title)
    console.log(ticket)
    console.dir(form);
    form.resetForm();
    // form.reset();
    // this.form().nativeElement.reset();

  }
}
