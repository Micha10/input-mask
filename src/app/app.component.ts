import { Component } from '@angular/core';
import 'zone.js/dist/zone'; // Avoid error in StackBlitz
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MaskTest';
}
