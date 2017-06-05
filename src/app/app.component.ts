import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  myFilter = (d: Date) => d.getFullYear() > 2005
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 11, 31);
}
