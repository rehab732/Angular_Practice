import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentInput>();
//  calculate = output<InvestmentInput>()
  // enteredInitialInvestment: string = '10';
  // enteredAnnualInvestment: string = '10';
  // enteredExpectedReturn: string = '10';
  // enteredDuration: string = '10';
  enteredInitialInvestment=signal('10');
  enteredAnnualInvestment=signal('10');
  enteredExpectedReturn=signal('10');
  enteredDuration=signal('10');
  constructor(private investmentService:InvestmentService){}
  submit() {
    this.investmentService.calculateInvestmentResults({
      // initialInvestment: +this.enteredInitialInvestment, duration: +this.enteredDuration, expectedReturn: +this.enteredExpectedReturn, annualInvestment: +this.enteredAnnualInvestment
      initialInvestment: +this.enteredInitialInvestment(), duration: +this.enteredDuration(), expectedReturn: +this.enteredExpectedReturn(), annualInvestment: +this.enteredAnnualInvestment()

    });
    // this.calculate.emit({
    //   // initialInvestment: +this.enteredInitialInvestment, duration: +this.enteredDuration, expectedReturn: +this.enteredExpectedReturn, annualInvestment: +this.enteredAnnualInvestment
    //   initialInvestment: +this.enteredInitialInvestment(), duration: +this.enteredDuration(), expectedReturn: +this.enteredExpectedReturn(), annualInvestment: +this.enteredAnnualInvestment()

    // });
    this.enteredAnnualInvestment.set('0');
    this.enteredDuration.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredInitialInvestment.set('0');

    console.log("submit");
  }
}
