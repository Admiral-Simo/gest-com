import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicTableComponent } from '../dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-selling',
  standalone: true,
  imports: [CommonModule, FormsModule, DynamicTableComponent],
  templateUrl: './selling.component.html',
})
export class SellingComponent {
  data: SellingInterface[];

  job: string = '';
  name: string = '';
  favColor: string = '';

  constructor() {
    this.data = [
      { Job: 'Job 1', Name: 'Name 1', FavColor: 'Color 1' },
      { Job: 'Job 2', Name: 'Name 2', FavColor: 'Color 2' },
      { Job: 'Job 3', Name: 'Name 3', FavColor: 'Color 3' },
    ];
  }

  addItem() {
    let newItem: SellingInterface = {
      Job: this.job,
      Name: this.name,
      FavColor: this.favColor,
    };

    if (this.data && this.name && this.favColor) {
      this.data.push(newItem);

      this.job = '';
      this.name = '';
      this.favColor = '';
    }
  }
}

type SellingInterface = {
  Job: string;
  Name: string;
  FavColor: string;
};
