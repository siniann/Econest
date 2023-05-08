import { Component } from '@angular/core';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  completed = false;
  today = new Date();
  isCollapsed = true;
  ngAfterViewInit() {
    AOS.init();
  }
}
