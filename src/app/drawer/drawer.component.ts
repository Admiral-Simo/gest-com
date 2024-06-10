import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
})
export class DrawerComponent {
  @ViewChild('drawerCheckbox') drawerCheckbox!: ElementRef<HTMLInputElement>;
  routes: string[] = ['buying', 'selling', 'stock', 'regulation', 'sdlkfj'];

  closeDrawer() {
    if (this.drawerCheckbox) {
      this.drawerCheckbox.nativeElement.click();
    }
  }
}
