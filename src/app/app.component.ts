import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from './drawer/drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'stock_management';
}
