import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css',
})
export class DynamicTableComponent {
  @Input() data: SellingInterface[] = [];
}

type SellingInterface = {
  Job: string;
  Name: string;
  FavColor: string;
};
