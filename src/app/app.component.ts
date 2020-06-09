import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  isLoggedIn: boolean = true;
  // isCollapsed = false;

  // toggleCollapsed(): void {
  //   this.isCollapsed = !this.isCollapsed;
  // }
}
