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
  columns: ColumnDefinition;

  job: string = '';
  name: string = '';
  favColor: string = '';

  constructor() {
    this.data = [
      ['Data Scientist', 'Jawad', 'Red'],
      ['Developer', 'Toufik', 'Blue'],
      ['DevOps', 'Soukayna', 'Green'],
      ['Data Scientist', 'Jawad', 'Red'],
      ['Developer', 'Toufik', 'Blue'],
      ['DevOps', 'Soukayna', 'Green'],
      ['Data Scientist', 'Jawad', 'Red'],
      ['Developer', 'Toufik', 'Blue'],
      ['DevOps', 'Soukayna', 'Green'],
      ['Data Scientist', 'Jawad', 'Red'],
      ['Developer', 'Toufik', 'Blue'],
      ['DevOps', 'Soukayna', 'Green'],
    ];
    this.columns = ['Job', 'Name', 'Favorite Color'];
  }

  addItem() {
    let newItem: SellingInterface = [this.job, this.name, this.favColor];

    if (this.data && this.name && this.favColor) {
      this.data.push(newItem);

      this.job = '';
      this.name = '';
      this.favColor = '';
    }
  }
}

type SellingInterface = [string, string, string];

type ColumnDefinition = [string, string, string];
