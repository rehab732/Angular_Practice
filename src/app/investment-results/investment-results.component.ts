import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {

  // @Input() results?:{
  //   year:number;
  //   interest:number;
  //   valueEndOfYear:number;
  //   annualInvestment:number;
  //   totalInterest:number;
  //   totalAmountInvested:number;
  // }[];

  // results = input<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>();
  constructor(private investmentService:InvestmentService){}
  get results()
  {
    return this.investmentService.resultData;
  }
}
