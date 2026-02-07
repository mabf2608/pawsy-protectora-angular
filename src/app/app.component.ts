import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'About', url: '/about', icon: 'paper-plane' },
    { title: 'Animal List', url: '/animals-list', icon: 'heart' },
  ];
  public labels = [];
  constructor() {}
}
