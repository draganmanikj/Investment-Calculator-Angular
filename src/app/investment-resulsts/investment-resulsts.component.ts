import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-resulsts',
  templateUrl: './investment-resulsts.component.html',
  styleUrl: './investment-resulsts.component.css'
})
export class InvestmentResulstsComponent {

  private investmentSerice = inject(InvestmentService);

  results = computed(() => this.investmentSerice.resultData() )
}
