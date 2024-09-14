import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment: string = '10';
  enteredAnnualInvestment: string = '10';
  enteredExpectedReturn: string = '10';
  enteredDuration: string = '10';

  submit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment, duration: +this.enteredDuration, expectedReturn: +this.enteredExpectedReturn, annualInvestment: +this.enteredAnnualInvestment
    });
    console.log("submit");
  }
}
