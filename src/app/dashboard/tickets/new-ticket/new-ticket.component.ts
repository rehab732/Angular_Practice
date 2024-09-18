import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //!using signal
  // private form=viewChild.required<ElementRef<HTMLFormElement>>('form');
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
