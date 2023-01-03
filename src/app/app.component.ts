import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { routerLink: 'elements', label: 'Elements' },
    { routerLink: 'collections', label: 'Collections' },
    { routerLink: 'views', label: 'Views' },
    { routerLink: 'mods', label: 'Modules' },
  ]
  
}
