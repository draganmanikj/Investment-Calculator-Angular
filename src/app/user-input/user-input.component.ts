import { Component,  signal } from '@angular/core';
import { InvestmentService } from '../investment-resulsts/investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredIntitalInvestment = signal('0');
  enteredAnnugalInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) { 

  }


  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.enteredIntitalInvestment(), //convert String to number with '+'
      duration: + this.enteredDuration(),
      expectedReturn: + this.enteredExpectedReturn(),
      annualInvestment: + this.enteredDuration()
    });
    this.enteredIntitalInvestment.set('0');
    this.enteredAnnugalInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
