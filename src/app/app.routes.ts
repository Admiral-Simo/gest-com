import { Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { BuyingComponent } from './buying/buying.component';
import { RegulationComponent } from './regulation/regulation.component';
import { SellingComponent } from './selling/selling.component';

export const routes: Routes = [
  { path: 'buying', component: BuyingComponent },
  { path: 'selling', component: SellingComponent },
  { path: 'stock', component: StockComponent },
  { path: 'regulation', component: RegulationComponent },
];
