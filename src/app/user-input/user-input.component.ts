import { Component, EventEmitter, output, Output, signal } from '@angular/core';
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

  // @Output() calculate = new EventEmitter<InvestmentInput>();
 calculate = output<InvestmentInput>()
  // enteredInitialInvestment: string = '10';
  // enteredAnnualInvestment: string = '10';
  // enteredExpectedReturn: string = '10';
  // enteredDuration: string = '10';
  enteredInitialInvestment=signal('10');
  enteredAnnualInvestment=signal('10');
  enteredExpectedReturn=signal('10');
  enteredDuration=signal('10');
  submit() {
    this.calculate.emit({
      // initialInvestment: +this.enteredInitialInvestment, duration: +this.enteredDuration, expectedReturn: +this.enteredExpectedReturn, annualInvestment: +this.enteredAnnualInvestment
      initialInvestment: +this.enteredInitialInvestment(), duration: +this.enteredDuration(), expectedReturn: +this.enteredExpectedReturn(), annualInvestment: +this.enteredAnnualInvestment()

    });
    console.log("submit");
  }
}
